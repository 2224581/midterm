const video = document.getElementById('Video');
const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

function drawFrame() {
    // Draw the current frame of the video on the canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Call the drawFrame function again to draw the next frame
    requestAnimationFrame(drawFrame);
}

// Call the drawFrame function to start drawing frames
requestAnimationFrame(drawFrame);