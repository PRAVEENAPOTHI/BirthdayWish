function showConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti');
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiPiece.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confettiPiece);
    }
}

function getRandomColor() {
    const colors = ['#ff0', '#ff6347', '#ffa500', '#ff4500', '#ff69b4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: red;
            top: -10px;
            animation: fall linear infinite;
        }

        @keyframes fall {
            to {
                transform: translateY(100vh);
            }
        }
    `;
    document.head.appendChild(style);
});
