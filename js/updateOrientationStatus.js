function updateOrientationStatus() {
    var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation || "невідомий";
    document.getElementById("orientation-info").innerText = "Орієнтація екрана: " + orientation.type;
}

updateOrientationStatus();
window.addEventListener("orientationchange", updateOrientationStatus);