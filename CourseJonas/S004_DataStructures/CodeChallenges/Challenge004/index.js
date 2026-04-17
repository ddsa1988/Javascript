"use strict";

const textArea = document.querySelector("#text-area");
const button = document.querySelector("#button");

const underscoreCaseToCamelCase = function (content) {
    const charRef = "_";

    if (typeof content !== "string") return content;
    if (content.length === 0) return content;
    if (!content.includes(charRef)) return content;

    let text = content.toLowerCase().trim();

    while (text.includes(charRef)) {
        const index = text.indexOf(charRef);

        if (index === 0) {
            text = text.replace(charRef, "");
            continue;
        }

        const startText = text.slice(0, index);
        const endText = text.slice(index + 2);
        const charUpperCase = text.charAt(index + 1).toUpperCase();

        text = startText + charUpperCase + endText;
    }

    return text;
};

addEventListener("load", () => {
    textArea.value = "";
});

button.addEventListener("click", () => {
    const emoji = "✅";

    if (typeof textArea.value !== "string") return;
    if (textArea.value.length === 0) return;
    if (textArea.value.includes(emoji)) return;

    const words = textArea.value.split("\n");

    let wordMaxLength = 0;
    let text = "";

    for (const word of words) {
        if (word.length <= wordMaxLength) continue;

        wordMaxLength = word.length;
    }

    for (let i = 0; i < words.length; i++) {
        const word = underscoreCaseToCamelCase(words[i]);

        text = text.concat(
            word.padEnd(wordMaxLength, " "),
            emoji.repeat(i + 1),
            "\n",
        );
    }

    textArea.value = text;
});
