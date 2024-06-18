function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';

    // Add event listeners to list items
    const listItems = sidebar.querySelectorAll('li');
    listItems.forEach(item => {
        item.addEventListener('click', closeSidebar);
    });
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';

    // Remove event listeners from list items
    const listItems = sidebar.querySelectorAll('li');
    listItems.forEach(item => {
        item.removeEventListener('click', closeSidebar);
    });
}

// scroll effect
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    if (!navbar) {
        console.error('No element with the class "navbar" found.');
        return;
    }

    document.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// Slide show
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myslide");
    let dots = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}

//Drop Down text

// document.addEventListener('DOMContentLoaded', () => {
//     const arrows = document.querySelectorAll('.arrow');

//     arrows.forEach(arrow => {
//         arrow.addEventListener('click', () => {
//             const container = arrow.closest('.container');
//             const dropdownText = container.querySelector('.dropdown-text');

//             if (dropdownText) {
//                 dropdownText.classList.toggle('visible');
//                 arrow.classList.toggle('rotated');
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const arrows = document.querySelectorAll('.arrow');
    let openDropdown = null;

    arrows.forEach(arrow => {
        arrow.addEventListener('click', (event) => {
            const container = arrow.closest('.container');
            const dropdownText = container.querySelector('.dropdown-text');

            if (dropdownText) {
                // Toggle the clicked dropdown
                const isVisible = dropdownText.classList.toggle('visible');
                arrow.classList.toggle('rotated');

                // If a different dropdown is open, close it
                if (openDropdown && openDropdown !== dropdownText) {
                    openDropdown.classList.remove('visible');
                    openDropdown.closest('.container').querySelector('.arrow').classList.remove('rotated');
                }

                // Update the openDropdown reference
                openDropdown = isVisible ? dropdownText : null;

                // Prevent the click event from bubbling up to the document
                event.stopPropagation();
            }
        });
    });

    // Close the dropdown if the user clicks outside
    document.addEventListener('click', () => {
        if (openDropdown) {
            openDropdown.classList.remove('visible');
            openDropdown.closest('.container').querySelector('.arrow').classList.remove('rotated');
            openDropdown = null;
        }
    });
});