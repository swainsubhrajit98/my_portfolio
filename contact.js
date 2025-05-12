// Initialize EmailJS with your public key
emailjs.init("qqYJ4CYrYoEMz3vjx");

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const statusMsg = document.getElementById("status-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs.send("service_s1d8kzb", "template_jzd8jhu", templateParams)
            .then(function () {
                statusMsg.innerText = "Message sent successfully!";
                statusMsg.className = "text-success mt-3";
                form.reset();

                // Reset message after 5 seconds
                setTimeout(() => {
                    statusMsg.innerText = "";
                    statusMsg.className = "mt-3 text-muted";
                }, 5000);
            })
            .catch(function () {
                statusMsg.innerText = "Failed to send message. Please try again.";
                statusMsg.className = "text-danger mt-3";

                // Reset message after 5 seconds
                setTimeout(() => {
                    statusMsg.innerText = "";
                    statusMsg.className = "mt-3 text-muted";
                }, 5000);
            });
    });
});
