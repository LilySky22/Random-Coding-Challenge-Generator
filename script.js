// Components of the challenge
const actions = [
    "Write a program to",
    "Build an app that",
    "Design a website to",
    "Create a function to",
    "Write some code that",
    "Write a script that",
    "Create a program that",
    "Make a project that"
];

const tasks = [
    "reverse(s) a string",
    "convert(s) temperatures between Celsius and Fahrenheit",
    "show(s) the time in different zones",
    "generate(s) random passwords",
    "sort(s) an array",
    "calculate(s) the nth Fibonacci number",
    "find(s) the factorial of a number",
    "showcase(s) all of your work",
    "help(s) students gamify learning",
    "validate(s) a user password"
];

const constraints = [
    "with a user-friendly interface",
    "with a nice UI",
    "with responsive design",
    "that works offline",
    "that works online",
    "as efficiently as possible",
    "with minimal memory usage",
    "with error handling"
];

// Function to generate and display challenge in the modal
function generateChallenge() {
    const difficulty = document.getElementById("difficulty").value;
    const language = document.getElementById("language").value;

    // Randomly pick components
    const action = actions[Math.floor(Math.random() * actions.length)];
    const task = tasks[Math.floor(Math.random() * tasks.length)];
    let constraintsApplied = "";

    // Adjust challenge based on difficulty
    if (difficulty === "easy") {
        constraintsApplied = "";
    } else if (difficulty === "medium") {
        constraintsApplied = constraints[Math.floor(Math.random() * constraints.length)];
    } else if (difficulty === "hard") {
        const firstConstraint = constraints[Math.floor(Math.random() * constraints.length)];
        const secondConstraint = constraints[Math.floor(Math.random() * constraints.length)];
        constraintsApplied = `${firstConstraint} and ${secondConstraint}`;
    }

    // Create the final challenge
    const challenge = `${action} ${task} ${constraintsApplied} in ${language}.`;

    // Display the challenge in the modal
    const challengeTextModal = document.getElementById("challenge-text-modal");
    challengeTextModal.textContent = challenge;

    // Show the modal
    const modal = document.getElementById("challenge-modal");
    modal.style.display = "block";
}

// Attach the event listener to the button
document.getElementById("generate").addEventListener("click", generateChallenge);

// Close the modal when the close button is clicked
const closeBtn = document.getElementsByClassName("close-btn")[0];
closeBtn.onclick = function() {
    const modal = document.getElementById("challenge-modal");
    modal.style.display = "none";
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("challenge-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const canvas = document.getElementById('interactive-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function createParticle(x, y) {
    particles.push({
        x: x,
        y: y,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
    });
}

function updateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size *= 0.95; // Shrinks over time
        if (particle.size < 0.5) {
            particles.splice(index, 1); // Remove small particles
        }
    });
}

function drawParticles() {
    particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = '#4F8BC8';
        ctx.fill();
    });
}

function animateParticles() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animateParticles);
}

window.addEventListener('mousemove', (e) => {
    createParticle(e.x, e.y);
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animateParticles();
