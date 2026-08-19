"use strict";

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
     * @param {Date} date - date
     * @param {randomUUID} id - UUID
     */
    constructor(coords, distance, duration, date = new Date(), id = crypto.randomUUID()) {
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;
        this.date = date;
        this.id = id;
    }

    _setDescription(type) {
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${type[0].toUpperCase()}${type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
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
     * @param {Date} date - date
     * @param @param {randomUUID} id - UUID
     */
    constructor(coords, distance, duration, cadence, date, id) {
        super(coords, distance, duration, date, id);
        this.cadence = cadence;
        this.pace = this.getPace();
        this._setDescription(this.type);
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
     * @param {Date} date - date
     * @param {randomUUID} id - UUID
     */
    constructor(coords, distance, duration, elevationGain, date, id) {
        super(coords, distance, duration, date, id);
        this.elevationGain = elevationGain;
        this.speed = this.getSpeed();
        this._setDescription(this.type);
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
    #mapZoomLevel = 13;
    #mapEvent;
    #workouts = [];
    #buttonsDeleteWorkout;

    constructor() {
        // Get user position
        this._getPosition();

        // Get data from local storage
        this._getLocalStorage();

        // Attach event handlers
        form.addEventListener("submit", this._newWorkout.bind(this));

        containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));

        containerWorkouts.addEventListener("click", this._deleteWorkout.bind(this));

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

        this.#map = L.map("map").setView([latitude, longitude], this.#mapZoomLevel);

        L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);

        // Handling clicks on map
        this.#map.on("click", this._showForm.bind(this));

        // Render workouts
        this.#workouts.forEach((workout) => {
            this._renderWorkout(workout);
            this._renderWorkoutMarker(workout);
        });
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

            console.log(workout.id);
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

        // Render workout on list
        this._renderWorkout(workout);

        // Render workout on map as marker
        this._renderWorkoutMarker(workout);

        // Clear input fields and hide form
        this._hideForm();

        // Set local storage to all workouts
        this._setLocalStorage();
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
            .setPopupContent(`${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"} ${workout.description}`)
            .openPopup();
    }

    /**
     * Render the workout list on the side bar
     * @param {Workout} workout - Workout object
     */
    _renderWorkout(workout) {
        let html = `
                <li class="workout workout--${workout.type}" data-id=${workout.id}>
                    <h2 class="workout__title">${workout.description}</h2>
                    <button class="workout__btn--delete">Delete</button>
                    <div class="workout__details">
                        <span class="workout__icon">${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"}</span>
                        <span class="workout__value">${workout.distance}</span>
                        <span class="workout__unit">km</span>
                    </div>
                    <div class="workout__details">
                        <span class="workout__icon">⏱</span>
                        <span class="workout__value">${workout.duration}</span>
                        <span class="workout__unit">min</span>
                    </div>`;

        if (workout.type === "running") {
            html += `
                    <div class="workout__details">
                        <span class="workout__icon">⚡️</span>
                        <span class="workout__value">${workout.pace.toFixed(1)}</span>
                        <span class="workout__unit">min/km</span>
                    </div>
                    <div class="workout__details">
                        <span class="workout__icon">🦶🏼</span>
                        <span class="workout__value">${workout.cadence}</span>
                        <span class="workout__unit">spm</span>
                    </div>
                </li>`;
        }

        if (workout.type === "cycling") {
            html += `
                    <div class="workout__details">
                        <span class="workout__icon">⚡️</span>
                        <span class="workout__value">${workout.speed.toFixed(1)}</span>
                        <span class="workout__unit">km/h</span>
                    </div>
                    <div class="workout__details">
                        <span class="workout__icon">⛰</span>
                        <span class="workout__value">${workout.elevationGain}</span>
                        <span class="workout__unit">m</span>
                    </div>
                </li>`;
        }

        form.insertAdjacentHTML("afterend", html);
    }

    /**
     * Hide form and clear inputs
     */
    _hideForm() {
        clearInputFields();

        form.style.display = "none";
        form.classList.add("hidden");

        setTimeout(() => (form.style.display = "grid"), 1000);
    }

    /**
     * Move map to the workout after selecting the workout on the list
     * @param {Event} event - Click event from the selected workout
     */
    _moveToPopup(event) {
        const workoutEl = event.target.closest(".workout");

        if (workoutEl == undefined) return;

        const workoutToMove = this.#workouts.find((workout) => workout.id === workoutEl.dataset.id);

        this.#map.setView(workoutToMove.coords, this.#mapZoomLevel, {
            animate: true,
            pan: {
                duration: 1,
            },
        });
    }

    /**
     * Set workouts in the local storage
     */
    _setLocalStorage() {
        if (this.#workouts.length === 0) {
            localStorage.removeItem("workouts");
            return;
        }

        localStorage.setItem("workouts", JSON.stringify(this.#workouts));
    }

    /**
     * Get workouts from local storage
     */
    _getLocalStorage() {
        const data = localStorage.getItem("workouts");

        if (data == undefined) return;

        const workouts = JSON.parse(data);

        if (workouts == undefined) return;

        this.#workouts = workouts.map((workout) => {
            if (workout.type == "running") {
                return new Running(
                    workout.coords,
                    workout.distance,
                    workout.duration,
                    workout.cadence,
                    new Date(workout.date),
                    workout.id,
                );
            }

            if (workout.type == "cycling") {
                return new Cycling(
                    workout.coords,
                    workout.distance,
                    workout.duration,
                    workout.elevationGain,
                    new Date(workout.date),
                    workout.id,
                );
            }
        });
    }

    _deleteWorkout(event) {
        const workoutEl = event.target.closest(".workout");
        const btnDeleteEl = event.target.closest(".workout__btn--delete");

        if (workoutEl == undefined) return;

        if (btnDeleteEl == undefined) return;

        this.#workouts = this.#workouts.filter((workout) => workout.id !== workoutEl.dataset.id);

        this._setLocalStorage();

        location.reload();
    }

    /**
     * Reset local storage and reload the page
     */
    reset() {
        localStorage.removeItem("workouts");
        location.reload();
    }
}

const app = new App();

window.addEventListener("load", function () {
    clearInputFields();
    inputType.value = "running";
});
