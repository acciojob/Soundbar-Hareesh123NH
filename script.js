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
		
		const audio = document.createElement('audio');
        audio.setAttribute('id', sound.name);  // Assign ID to each audio element
        audio.src = `https://www.soundjay.com/human/sounds/applause-01.mp3`;
        document.body.appendChild(audio);

        // Add event listener to play the corresponding sound when clicked
        btn.addEventListener('click', () => {
            stopAllSounds(); // Stop any other sounds that might be playing
            // const audio = new Audio(`https://www.soundjay.com/human/sounds/applause-01.mp3`);
            audio.play();
        });

        // Append button to container
        buttonsContainer.appendChild(btn);
    });
}

// Function to stop all currently playing sounds
function stopAllSounds() {
     const audios = document.querySelectorAll('audio'); // Select all audio elements
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reset audio to start
    });
}

// Event listener for the stop button
document.querySelector('.stop').addEventListener('click', stopAllSounds);

// Initialize the buttons on page load
createButtons();
