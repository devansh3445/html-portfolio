const themeToggle = document.querySelector(".theme-toggle");
const promtForm = document.querySelector(".prompt-form");
const promptInput = document.querySelector(".prompt-input");
const promptBtn = document.querySelector(".prompt-btn");
const modelSelect = document.getElementById("model-select");
const countSelect = document.getElementById("count-select");
const ratioSelect = document.getElementById("ratio-select");

const examplePrompts = [
    "A magic forest dffkl dfk",
    "an old seam fdjkf kf",
    "A future mars on the floor",
    "An underwater kingdom with merpeople and glowing",

];
//set theme based on saved preference or system default
(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    document.body.classlist.toggle("dark-theme", isDarkTheme);
    themeToggle.querySelector("i").className = isDarkTheme = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
})();

//Switch between light and dark themes
const toggleTheme =() => {
    const isDarkTheme = document.body.classlist.toggle("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";

};

const handleFormSubmit = (e) => {
    e.preventDefault();

    const selectModel = modelSelect.value;
    const imageCount = parseInt(countSelect.value) || 1;
    const aspectRatio = ratioSelect.value || "1/1";
    const promptText = promptInput.value.trim();

    createImagecards(selectModel, imageCount, aspectRatio, prompttext);
}

//Fill prompt input with random example
promptBtn.addEventListener("click", () => {
    const prompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
    promptInput.value = prompt;
    promptInput.focus();
})

promptForm.addEventListener("submit", handleFormSubmit);
themeToggle.addEventListener("click", toggleTheme);