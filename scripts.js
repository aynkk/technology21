document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('triangles-container');
    for (let i = 0; i < 100; i++) {
        const triangle = document.createElement('div');
        triangle.classList.add('triangle');
        triangle.style.top = `${Math.random() * 100}%`;
        triangle.style.left = `${Math.random() * 100}%`;
        const colors = ['#6200ea', '#e91e63', '#757575'];
        triangle.style.borderBottomColor = colors[Math.floor(Math.random() * colors.length)];
        triangle.style.animationDuration = `${Math.random() * 40 + 10}s`;
        triangle.style.transform = `scale(${Math.random() * 1.5 + 0.5})`;
        container.appendChild(triangle);
    }
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // สำหรับ Safari
    document.documentElement.scrollTop = 0; // สำหรับ Chrome, Firefox, IE และ Opera
}

document.getElementById('playButton').addEventListener('click', function() {
    const video = document.getElementById('myVideo');
    video.play();
    this.style.display = 'none';
});

document.getElementById('myVideo').addEventListener('play', function() {
    const playButton = document.getElementById('playButton');
    playButton.style.display = 'none';
});

document.getElementById('myVideo').addEventListener('pause', function() {
    const playButton = document.getElementById('playButton');
    playButton.style.display = 'block';
});

document.getElementById('myVideo').addEventListener('ended', function() {
    const playButton = document.getElementById('playButton');
    playButton.style.display = 'block';
});
