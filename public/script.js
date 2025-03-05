document.getElementById("userForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if (!name || !email) {
        event.preventDefault();
        errorMessage.textContent = "⚠️ Please fill out all fields!";
    } else {
        errorMessage.textContent = "";
    }
});
