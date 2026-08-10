"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

const clearInputFields = function () {
    inputDistance.value = "";
    inputDuration.value = "";
    inputCadence.value = "";
    inputElevation.value = "";
};

class Workout {
    /**
     * Constructor for creating a new workout
     * @param {Array} coords - [latitude, longitude]
     * @param {Number} distance - kilometers
     * @param {Number} duration - minutes
     */
    constructor(coords, distance, duration) {
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;
        this.date = new Date();
        this.id = String(Date.now()).slice(-10);
    }
}

class Running extends Workout {
    type = "running";

    /**
     * Constructor for creating a new running workout
     * @param {Array} coords - [latitude, longitude]
     * @param {Number} distance - in kilometers
     * @param {Number} duration - in minutes
     * @param {Number} cadence - in step/min
     */
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.pace = this.getPace();
    }

    /**
     * Calculates the pace
     * @returns {Number} The pace in min/km
     */
    getPace() {
        return this.duration / this.distance;
    }
}

class Cycling extends Workout {
    type = "cycling";

    /**
     * Constructor for creating a new cycling workout
     * @param {Array} coords - [latitude, longitude]
     * @param {Number} distance - in kilometers
     * @param {Number} duration - in minutes
     * @param {Number} elevationGain - in meters
     */
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.speed = this.getSpeed();
    }

    /**
     * Calculates the speed
     * @returns {Number} The speed in km/h
     */
    getSpeed() {
        return this.distance / (this.duration / 60);
    }
}

class App {
    #map;
    #mapEvent;
    #workouts = [];

    constructor() {
        this._getPosition();

        form.addEventListener("submit", this._newWorkout.bind(this));

        inputType.addEventListener("change", this._toggleElevationField);
    }

    /**
     * Get the user current geolocation position
     */
    _getPosition() {
        navigator.geolocation?.getCurrentPosition(this._loadMap.bind(this), function (positionError) {
            alert(`Could not get your position: (${positionError.code}) ${positionError.message}`);
        });
    }

    /**
     * Loads the map in the UI using the Leaflet api
     * @param {Object} position - user current geolocation position
     */
    _loadMap(position) {
        const { latitude, longitude } = position.coords;
        // const coords = [latitude, longitude];

        this.#map = L.map("map").setView([latitude, longitude], 13);

        L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);

        this.#map.on("click", this._showForm.bind(this));
    }

    /**
     * Shows the workout form in the UI
     * @param {Event} event - Leaflet event with the user current geolocation position
     */
    _showForm(event) {
        this.#mapEvent = event;
        form.classList.remove("hidden");
        inputDistance.focus();
    }

    /**
     * Toggles the elevation gain field and the cadence field
     */
    _toggleElevationField() {
        inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
        inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    }

    /**
     * Creates a new workout
     * @param {SubmitEvent} event - Workout form event
     */
    _newWorkout(event) {
        // Prevent page to reload
        event.preventDefault();

        let workout;

        // Get data from form
        const type = inputType.value;
        const distance = Number(inputDistance.value);
        const duration = Number(inputDuration.value);
        const { lat: latitude, lng: longitude } = this.#mapEvent.latlng;

        // Check if data is valid
        const isInputsValid = (...inputs) => inputs.every((input) => Number.isFinite(input) && input > 0);

        // Create running object
        if (type == "running") {
            const cadence = Number(inputCadence.value);

            if (!isInputsValid(distance, duration, cadence)) {
                return alert("Inputs have to be positive numbers!");
            }

            workout = new Running([latitude, longitude], distance, duration, cadence);
        }

        // Create cycling object
        if (type == "cycling") {
            const elevation = Number(inputElevation.value);

            if (!isInputsValid(distance, duration, elevation)) {
                return alert("Inputs have to be positive numbers!");
            }

            workout = new Cycling([latitude, longitude], distance, duration, elevation);
        }

        // Add new object to workout array
        this.#workouts.push(workout);

        // Clear input fields and hide form
        clearInputFields();

        form.classList.add("hidden");

        // Render workout on map as marker
        this._renderWorkoutMarker(workout);
    }

    /**
     * Render the workout maker on the map
     * @param {Workout} workout - Workout object
     */
    _renderWorkoutMarker(workout) {
        L.marker(workout.coords)
            .addTo(this.#map)
            .bindPopup(
                L.popup({
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: `${workout.type}-popup`,
                }),
            )
            .setPopupContent("Workout")
            .openPopup();
    }
}

const app = new App();

window.addEventListener("load", function () {
    clearInputFields();
    inputType.value = "running";
});
