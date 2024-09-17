// Array of sounds with their corresponding online links
const sounds = [
    { name: 'applause', url: 'https://www.soundjay.com/human/sounds/applause-01.mp3' },
    { name: 'boo', url: 'https://www.soundjay.com/human/sounds/boo-01.mp3' },
    { name: 'gasp', url: 'https://www.soundjay.com/human/sounds/gasp-01.mp3' },
    { name: 'tada', url: 'https://www.fesliyanstudios.com/play-mp3/387' },
    { name: 'victory', url: 'https://www.fesliyanstudios.com/play-mp3/667' },
    { name: 'wrong', url: 'https://www.soundjay.com/button/sounds/button-10.mp3' }
];

// Function to create buttons
function createButtons() {
    const buttonsContainer = document.getElementById('buttons');

    sounds.forEach(sound => {
        // Create button element
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = sound.name;

        // Add event listener to play the corresponding sound when clicked
        btn.addEventListener('click', () => {
            stopAllSounds(); // Stop any other sounds that might be playing
            const audio = new Audio(`https://www.soundjay.com/human/sounds/applause-01.mp3`);
            audio.play();
            btn.audio = audio; // Store the audio element in the button so we can stop it later
        });

        // Append button to container
        buttonsContainer.appendChild(btn);
    });
}

// Function to stop all currently playing sounds
function stopAllSounds() {
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.audio) {
            btn.audio.pause();
            btn.audio.currentTime = 0;
        }
    });
}

// Event listener for the stop button
document.querySelector('.stop').addEventListener('click', stopAllSounds);

// Initialize the buttons on page load
createButtons();
