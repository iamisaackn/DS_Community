// Scroll to Tutorials Section when clicking "Start Learning"
function scrollToTutorials() {
    window.scrollTo({
        top: document.getElementById("about").offsetTop,
        behavior: 'smooth'
    });
}

// Run the code from the textarea and display the result
function runCode() {
    const code = document.getElementById("code").value;
    try {
        // Clear the output
        document.getElementById("output").innerHTML = '';

        // Execute the code
        const result = eval(code);

        // Display the result
        document.getElementById("output").textContent = result ? result : 'Code executed successfully!';
    } catch (error) {
        document.getElementById("output").textContent = "Error: " + error.message;
    }
}

// Function to display the sign-up form when "Join the Community" button is clicked
function showForm() {
    const form = document.getElementById("signup-form");
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}
// Form submission event
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    // Basic validation (you can expand this with more checks if needed)
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name && email && subject && message) {
        alert("Your message has been sent successfully! We'll get back to you soon.");
        document.getElementById("contact-form").reset(); // Clear form fields
    } else {
        alert("Please fill out all fields.");
    }
});

// Toggle navigation for mobile devices
document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Contact Form
<script>
document.getElementById('contact-form').onsubmit = function() {
    document.getElementById('name').value = document.getElementById('name-input').value;
    document.getElementById('email').value = document.getElementById('email-input').value;
    document.getElementById('subject').value = document.getElementById('subject-input').value;
    document.getElementById('message').value = document.getElementById('message-input').value;
};
</script>
