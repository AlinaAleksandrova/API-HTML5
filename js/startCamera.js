async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const videoElement = document.getElementById("video");
        videoElement.srcObject = stream;
    } catch (error) {
        console.error("Camera access error: ", error);
    }
}