document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const registrationButton = document.getElementById('registrationButton');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = registrationForm.elements.name.value;
        const email = registrationForm.elements.email.value;

        // Build URL with form values
        const redirectURL = `welcome.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;

        // Open a new page with the welcoming message
        window.open(redirectURL, '_blank');
    });