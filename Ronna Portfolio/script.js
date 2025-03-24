function showSection(sectionId) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
    });

    const section = document.getElementById(sectionId);
    section.classList.remove("hidden");
    setTimeout(() => {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
    }, 50);
}

// Show home section by default
window.onload = () => showSection('home');

