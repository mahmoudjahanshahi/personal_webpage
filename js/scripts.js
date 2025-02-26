/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // New functionality for "Show More" / "Show Less" button
    const toggleButton = document.getElementById('toggleButton');
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                // Save the current scroll position when expanding
                previousScrollPosition = window.scrollY;
                toggleButton.textContent = 'Show Less'; // Indicate the expanded state
            } else {
                // Scroll back to the previous position when collapsing
                window.scrollTo({ top: previousScrollPosition, behavior: 'smooth' });
                toggleButton.textContent = 'Show More'; // Indicate the collapsed state
            }

            // Update the button's aria-expanded attribute for accessibility
            toggleButton.setAttribute('aria-expanded', !isExpanded);
        });
    };

});
