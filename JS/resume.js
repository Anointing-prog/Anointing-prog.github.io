/*
    Name: Anointing Iyawe
    Course:Web Development
    Assignment: Creative Resume (Part 1)
    Date: 2026-04-03
*/

// Wait for full load to hide the loader and trigger animations
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    // Simple fade-out of loader
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
        animateSkillBars();
    }, 600);
});
/**
 * Animate skill bars based on data-level attribute
 */
function animateSkillBars() {
    const bars = document.querySelectorAll(".skill-bar");

    bars.forEach(bar => {
        const level = bar.getAttribute("data-level");
        const fill = bar.querySelector("::after"); // not directly accessible

        // Instead, we set a CSS variable and use it in ::after via CSS
        bar.style.setProperty("--target-width", level + "%");
        bar.classList.add("animate");
    });
}
document.addEventListener("DOMContentLoaded", () => {
    // Portfolio button click interaction
    const btn = document.getElementById("portfolioBtn");
    const msg = document.getElementById("portfolioMessage");

    btn.addEventListener("click", () => {
        msg.classList.toggle("hidden");
        // Simple zoom animation via class toggle
        msg.classList.add("pop");
        setTimeout(() => msg.classList.remove("pop"), 300);
    });

    // Custom cursor highlight effect on cards
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", x + "px");
            card.style.setProperty("--mouse-y", y + "px");
        });
    });
});

