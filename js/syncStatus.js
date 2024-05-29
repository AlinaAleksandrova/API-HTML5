if ("serviceWorker" in navigator && "SyncManager" in window) {
    navigator.serviceWorker.ready.then(function(registration) {
        if ("periodicSync" in registration) {
            document.getElementById("sync-status").innerText = "Підтримується періодична синхронізація.";
        } else {
            document.getElementById("sync-status").innerText = "Періодична синхронізація не підтримується.";
        }
    });
} else {
    document.getElementById("sync-status").innerText = "Сервісні робітники або Background Sync не підтримуються.";
}