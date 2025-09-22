const musicSlideButton = document.getElementById("musicSlideButton");
const musicSlidePanel = document.getElementById("musicSlidePanel");

const inputs = document.querySelectorAll("#slidePanel, #slideButton, #checklistMenu, #slideButtonForChecklist"); // Select input fields and buttons

musicSlideButton.addEventListener("click", () => {
    if (checklistMenu.classList.value === "open") {
        checklistMenu.classList.value = "closed"
        musicSlideButton.style.backgroundColor = `rgb(147, 112, 219, 0.7)`;
    } else {
        musicSlidePanel.classList.toggle("open");
    }
    if (musicSlideButton.innerHTML === `<i class="fas fa-arrow-left"></i>` && checklistMenu.classList.value !== "open") {
        musicSlideButton.innerHTML = `<i class="fas fa-arrow-right"></i>`;
        musicSlideButton.style.backgroundColor = `rgb(255, 109, 109, 0.7)`;
        if (checklistMenu.classList.value === "closed") {
            musicSlideButton.innerHTML = `<i class="fas fa-arrow-left"></i>`;
            musicSlideButton.style.backgroundColor = `rgb(147, 112, 219, 0.7)`;
            checklistMenu.classList.value = ""
        }
        console.log("Closed");
        inputs.forEach((input) => {
            input.classList.remove("hidden"); // Show each input/button
            input.setAttribute("autocomplete", "on"); // Re-enable autocomplete
        });
    } else if (checklistMenu.classList.value !== "open") {
        musicSlideButton.innerHTML = `<i class="fas fa-arrow-left"></i>`;
        musicSlideButton.style.backgroundColor = `rgb(147, 112, 219, 0.7)`;
        console.log("Open");
        inputs.forEach((input) => input.classList.add("hidden")); // Hide each input/button
    }
});

