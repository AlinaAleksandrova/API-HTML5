function showNotification() {
    if ("Notification" in window) {
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                new Notification("Привіт!", { body: "Це приклад сповіщення." });
            }
        });
    } else {
        console.log("Сповіщення не підтримується в вашому браузері.");
    }
}