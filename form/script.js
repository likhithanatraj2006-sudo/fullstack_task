document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registerForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirm = document.getElementById("confirm").value;

        if (password.length < 6) {
            message.textContent = "❌ Password must be at least 6 characters.";
            message.style.color = "red";
            return;
        }

        if (password !== confirm) {
            message.textContent = "❌ Passwords do not match.";
            message.style.color = "red";
            return;
        }

        message.textContent =
            `✅ Welcome ${name}! Registration completed successfully.`;

        message.style.color = "green";

        form.reset();
    });

});