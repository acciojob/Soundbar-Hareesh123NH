//your JS code here. If required.
// Array of sound names (these should match the audio file names in the sounds folder)
const sounds = ['applause', 'boo', 'gasp', 'tada','victory','wrong']; // Change these names according to your audio files

// Function to create buttons
function createButtons() {
    const buttonsContainer = document.getElementById('buttons');

    sounds.forEach(sound => {
        // Create button element
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = sound;

        // Add event listener to play the corresponding sound when clicked
        btn.addEventListener('click', () => {
            stopAllSounds(); // Stop any other sounds that might be playing
            const audio = new Audio(`sounds/${sound}.mp3`);
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

