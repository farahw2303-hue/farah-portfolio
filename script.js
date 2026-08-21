// ===============================
// MOBILE NAVIGATION
// ===============================

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

if (mobileMenuBtn && navLinks) {

    mobileMenuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });


    document.querySelectorAll(".nav-links a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.08
        }

    );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

} else {

    // Fallback:
    // If the browser does not support IntersectionObserver,
    // show all sections normally.

    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}


// ===============================
// CLOSE MOBILE MENU WHEN
// CLICKING OUTSIDE
// ===============================

document.addEventListener("click", (event) => {

    if (!navLinks || !mobileMenuBtn) {
        return;
    }


    const clickedInsideNav =
        navLinks.contains(event.target);


    const clickedMenuButton =
        mobileMenuBtn.contains(event.target);


    if (!clickedInsideNav && !clickedMenuButton) {

        navLinks.classList.remove("active");

    }

});


// ===============================
// SAFETY FALLBACK
// ===============================

// Makes sure content never remains invisible
// if an animation fails.

window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelectorAll(".reveal").forEach((element) => {

            if (!element.classList.contains("visible")) {

                element.classList.add("visible");

            }

        });

    }, 1200);

});