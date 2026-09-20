function showRegister() {
    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("message").innerText =
        "✅ Profile registered successfully for " + name + "!";

    document.getElementById("registrationForm").reset();
});


function searchProfiles() {

    let search = document.getElementById("searchBox").value.toLowerCase();

    let profiles = document.querySelectorAll(".profile");

    profiles.forEach(function(profile) {

        let text = profile.innerText.toLowerCase();

        if (text.includes(search)) {
            profile.style.display = "block";
        } else {
            profile.style.display = "none";
        }

    });
}


function findMatch() {

    document.getElementById("matchResult").innerText =
        "💖 3 suitable matches found based on your preferences!";
}
