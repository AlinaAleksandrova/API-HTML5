function vibrateDevice() {
    if ("vibrate" in navigator) {
        navigator.vibrate(200); // Вібрація тривалістю 200 мс
    } else {
        console.log("Your device does not support vibration.");
    }
}