function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

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