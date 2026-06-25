/* =====================================================
   LA ASADERÍA 2.0
   app.js
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       MENÚ RESPONSIVE
    ================================================= */

    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {

            nav.classList.toggle("nav-open");

            menuButton.classList.toggle("active");

        });

        document.querySelectorAll(".nav a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("nav-open");
                menuButton.classList.remove("active");

            });

        });

    }


    /* =================================================
       HEADER SCROLL
    ================================================= */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("header-scrolled");

        } else {

            header.classList.remove("header-scrolled");

        }

    });


    /* =================================================
       SCROLL SUAVE
    ================================================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });


    /* =================================================
       ANIMACIONES AL HACER SCROLL
    ================================================= */

    const revealElements = document.querySelectorAll(
        ".cut-card, .offer-item, .friends-box, .visit-info, .hero-content, .hero-image, .contact-info, .contact-form"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: .15

    });

    revealElements.forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });


    /* =================================================
   FRIENDS LIGHTBOX
================================================= */
console.log("ANTES DEL LIGHTBOX");
const cards = document.querySelectorAll(".friend-card");
const lightbox = document.getElementById("friendLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

if (
    cards.length &&
    lightbox &&
    lightboxImage &&
    lightboxClose
) {

    console.log("LIGHTBOX INICIALIZADO");


    cards.forEach(card => {

        card.addEventListener("click", () => {

            lightboxImage.src = card.dataset.image;

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

    function closeFriendLightbox() {

        lightbox.classList.remove("active");

        lightboxImage.src = "";

        document.body.style.overflow = "";

    }

    lightboxClose.addEventListener("click", closeFriendLightbox);

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {

            closeFriendLightbox();

        }

    });

    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {

            closeFriendLightbox();

        }

    });

}


    /* =================================================
       BOTÓN VOLVER ARRIBA
    ================================================= */

    const backTop = document.createElement("button");

    backTop.className = "back-to-top";

    backTop.innerHTML = "▲";

    document.body.appendChild(backTop);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });


    /* =================================================
       AÑO AUTOMÁTICO EN FOOTER
    ================================================= */

    const footer = document.querySelector(".footer p");

    if (footer) {

        footer.innerHTML = `
            © ${new Date().getFullYear()} La Asadería.<br>
            Carnicerías de Calidad.
        `;

    }

});
```
