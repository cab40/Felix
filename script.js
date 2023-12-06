
document.addEventListener('DOMContentLoaded', () => {
    const samoyed = document.getElementById('samoyed');
    let x = 0;
    let y = 0;
    const speed = 5;
    let rolling = false;
    let shaking = false;
    let jumping = false;
    let right = false;
    let left = false;

    document.addEventListener('keydown', (event) => {
        if (rolling) return; // Prevent movement while rolling
        if (shaking) return;
        if (jumping) return;
        if (right) return;
        if (left) return;

        switch (event.key) {
            case 'ArrowLeft':
                x -= speed;
                samoyed.style.backgroundImage = "url('samoyed-left.gif')";
                setTimeout(() => {
                    left = false;
                    samoyed.style.backgroundImage = "url('samoyed-front.gif')"; // Reset to default sprite after rolling
                }, 2000);
                break;
            case 'ArrowRight':
                x += speed;
                samoyed.style.backgroundImage = "url('samoyed-right.gif')";
                setTimeout(() => {
                    right = false;
                    samoyed.style.backgroundImage = "url('samoyed-front.gif')"; // Reset to default sprite after rolling
                }, 3000);
                break;
            case 'ArrowUp': // Jump interaction
                action = true;
                samoyed.style.backgroundImage = "url('samoyed-up1.gif')"; // Replace with the sprite for jumping
                setTimeout(() => {
                    jumping = false;
                    samoyed.style.backgroundImage = "url('samoyed-front.gif')"; // Reset to default sprite after rolling
                }, 3000);
                break;
            case 'ArrowDown': // Roll interaction
                rolling = true;
                samoyed.style.backgroundImage = "url('samoyed-rolling2.gif')"; // Replace with the sprite for rolling
                setTimeout(() => {
                    rolling = false;
                    samoyed.style.backgroundImage = "url('samoyed-front.gif')"; // Reset to default sprite after rolling
                }, 2000); // Duration of the roll animation
                break;
            case 's': // Shake interaction
                shaking = true;
                samoyed.style.backgroundImage = "url('samoyed-shake.png')";
                setTimeout(() => {
                    shaking = false;
                    samoyed.style.backgroundImage = "url('samoyed-front.gif')";
                }, 2000);
            break;
            case 'f': // Shake interaction
                shaking = true;
                samoyed.style.backgroundImage = "url('friend.gif')";
                setTimeout(() => {
                    shaking = false;
                    samoyed.style.backgroundImage = "url('samoyed-front.gif')";
                }, 3500);
            break;
        }
        samoyed.style.transform = `translate(${x}px)`;
    });
    // Legend Toggle
    legend.addEventListener('click', () => {
        legend.classList.toggle('collapsed');
    });

    // Mouse as Ball Interaction
    document.getElementById('gameArea').addEventListener('mousemove', (event) => {
        if (event.buttons === 1) { // Left mouse button held down
            // Logic to make the Samoyed follow the cursor
        }
    });
});
