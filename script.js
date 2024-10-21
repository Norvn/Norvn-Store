document.addEventListener("DOMContentLoaded", () => {
    // Scroll animations
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Telegram button alert
    const telegramBtn = document.getElementById("telegram-btn");
    if (telegramBtn) {
        telegramBtn.addEventListener("click", () => {
            alert("You will be redirected to Telegram to chat with us.");
            window.open("https://t.me/+SeDZUcMsKz80NGQy", "_blank");
        });
    }

    // Discord button alert
    const discordBtn = document.getElementById("discord-btn");
    if (discordBtn) {
        discordBtn.addEventListener("click", () => {
            alert("You will be redirected to Discord to join us.");
            window.open("https://discord.gg/BHKzmBtm", "_blank");
        });
    }

    // Smooth scroll for internal links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = e.target.getAttribute("href");
            if (targetId && targetId.startsWith("#")) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Navigation bar highlight on scroll
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbar.offsetHeight;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    // Navigation bar background change on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Trust Section Carousel Functionality
    const images = document.querySelectorAll(".trust-image");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    let currentIndex = 0;

    if (images.length > 0 && prevBtn && nextBtn) {
        // Show only the first image initially
        images.forEach((img, index) => {
            img.style.display = index === 0 ? "block" : "none";
        });

        // Function to update visible image
        const updateImage = () => {
            images.forEach((img, index) => {
                img.style.display = index === currentIndex ? "block" : "none";
            });
        };

        // Event listener for next button
        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        });

        // Event listener for previous button
        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        });
    }

    // Solar System Rotation Animation
    const earthOrbit = document.querySelector(".earth-orbit");
    const moonOrbit = document.querySelector(".moon-orbit");
    const marsOrbit = document.querySelector(".mars-orbit");
    const jupiterOrbit = document.querySelector(".jupiter-orbit");
    const saturnOrbit = document.querySelector(".saturn-orbit");

    const animateSolarSystem = () => {
        let angleEarth = 0;
        let angleMoon = 0;
        let angleMars = 0;
        let angleJupiter = 0;
        let angleSaturn = 0;

        const animate = () => {
            angleEarth += 0.05;
            angleMoon += 0.1;
            angleMars += 0.03;
            angleJupiter += 0.02;
            angleSaturn += 0.015;

            if (earthOrbit) earthOrbit.style.transform = `rotate(${angleEarth}deg)`;
            if (moonOrbit) moonOrbit.style.transform = `rotate(${angleMoon}deg)`;
            if (marsOrbit) marsOrbit.style.transform = `rotate(${angleMars}deg)`;
            if (jupiterOrbit) jupiterOrbit.style.transform = `rotate(${angleJupiter}deg)`;
            if (saturnOrbit) saturnOrbit.style.transform = `rotate(${angleSaturn}deg)`;

            requestAnimationFrame(animate);
        };

        animate();
    };

    animateSolarSystem();

    // Ensure body scroll works
    document.body.style.overflow = "auto";

    // Star Twinkling Effect Animation - Improved
    const stars = document.querySelector(".stars");
    if (stars) {
        for (let i = 0; i < 200; i++) {
            const star = document.createElement("div");
            star.className = "star";
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.width = `${Math.random() * 3 + 1}px`;
            star.style.height = `${Math.random() * 3 + 1}px`;
            star.style.position = "absolute";
            star.style.backgroundColor = "#fff";
            star.style.borderRadius = "50%";
            star.style.animation = `twinkling ${Math.random() * 5 + 5}s infinite alternate`;
            stars.appendChild(star);
        }
    }
});
