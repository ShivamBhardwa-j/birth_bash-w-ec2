document.getElementById("submitBtn").addEventListener("click", function() {
    const nameInput = document.getElementById("nameInput").value;
    const personalGreeting = document.getElementById("personalGreeting");
    
    if (nameInput.trim() !== "") {
        personalGreeting.textContent = `Happy Birthday, ${nameInput}! Wishing you a wonderful day filled with joy!`;
    } else {
        personalGreeting.textContent = "Please enter your name!";
    }
});

