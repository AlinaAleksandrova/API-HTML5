window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    var tiltLR = event.gamma; // Кут нахилу відносно лівої-правої осі
    var tiltFB = event.beta; // Кут нахилу відносно передньо-задньої осі
    var tiltDir = event.alpha; // Кут повороту пристрою

    document.getElementById("tilt-info").innerHTML = "Angle of inclination: " + tiltLR + ", " + tiltFB;
}