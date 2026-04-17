/*
    Name: Anointing Iyawe
    Course: Web Development
    Assignment: Interactive Skills Dashboard (Part 2)
    Date: 2026-04-03
*/

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".skill-card");

    // Scroll-triggered progress bar animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const level = card.getAttribute("data-level");
                const bar = card.querySelector(".progress-bar");
                bar.style.width = level + "%";
                observer.unobserve(card);
            }
        });
    }, { threshold: 0.4 });

    cards.forEach(card => {
        observer.observe(card);

        // Flip card on click
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });

        // Boost Skill button
        const btn = card.querySelector(".boost-btn");
        btn.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent flipping when clicking button

            let level = parseInt(card.getAttribute("data-level"), 10);
            level = Math.min(level + 5, 100);

            card.setAttribute("data-level", level);
            const bar = card.querySelector(".progress-bar");
            bar.style.width = level + "%";
        });
    });
});