navigator.getBattery().then(function(battery) {
    function updateBatteryStatus() {
        var level = battery.level * 100; // переводимо у відсотки
        document.getElementById("battery-level").innerText = "Рівень заряду батареї: " + level + "%";
    }

    updateBatteryStatus();

    battery.addEventListener("levelchange", updateBatteryStatus);
});