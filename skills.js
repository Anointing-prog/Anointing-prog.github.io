/*
    Name: Anointing Iyawe
    Course: Web Development
    Assignment: Interactive Skills Dashboard (Part 2)
    Date: 2026-04-03
*/

// When DOM is ready, set up progress animations and interactions
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".skill-card");

    // IntersectionObserver to animate bars when scrolled into view
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

        // Mousemove for glow position
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", x + "px");
            card.style.setProperty("--mouse-y", y + "px");
        });
                // Click-to-flip style effect: toggle a class to slightly rotate
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });

        // Boost button increases level
        const btn = card.querySelector(".boost-btn");
        btn.addEventListener("click", (event) => {
            event.stopPropagation(); // avoid triggering card click
            let level = parseInt(card.getAttribute("data-level"), 10);
            level = Math.min(level + 5, 100);
            card.setAttribute("data-level", level.toString());
            const bar = card.querySelector(".progress-bar");
            bar.style.width = level + "%";
        });
    });
});
