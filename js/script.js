/* JavaScript for Plagiarism Test Software Website */

/**
 * Function to toggle the sidebar navigation.
 * This function toggles the 'active' class on the sidebar and adjusts the content margin accordingly.
 */
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");

    if (sidebar && content) {
        // Toggle the 'active' class on the sidebar
        sidebar.classList.toggle("active");

        // Adjust the content's margin depending on the sidebar's visibility
        if (sidebar.classList.contains("active")) {
            // Show the sidebar
            content.style.marginLeft = "250px"; // Adjust content to make space for the sidebar
        } else {
            // Hide the sidebar
            content.style.marginLeft = "0"; // Reset content margin
        }
    }
}

/**
 * Event listener for DOM content loaded.
 * This section handles fade-in and slide-in animations for designated elements.
 */
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class 'fade-in'.
    const fadeInElements = document.querySelectorAll(".fade-in");
    // Select all elements with the class 'slide-in'.
    const slideInElements = document.querySelectorAll(".slide-in");

    // Loop through each fade-in element and apply a staggered fade-in effect.
    fadeInElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";  // Make element fully visible.
        }, index * 300);  // Stagger delay by 300ms for each element.
    });
    
    // Loop through each slide-in element and apply a staggered slide-in effect.
    slideInElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.transform = "translateX(0)";  // Reset transform to original position.
            el.style.opacity = "1";  // Ensure element is fully visible.
        }, index * 300);  // Stagger delay by 300ms for each element.
    });

    const menuButton = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');

    // Toggle sidebar visibility when the menu button is clicked
    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('active'); // Toggle the active class
        toggleSidebar(); // Adjust content margin and sidebar position
    });

    const modeToggle = document.getElementById('modeToggle');
    const ReportBody = document.body;

    modeToggle.addEventListener('click', () => {
        ReportBody.classList.toggle('dark-mode');
        ReportBody.classList.toggle('light-mode');

        // Store the mode in local storage
        if (ReportBody.classList.contains('dark-mode')) {
            localStorage.setItem('mode', 'dark');
        } else {
            localStorage.setItem('mode', 'light');
        }
    });

    // Check local storage for the mode and apply it on page load
    if (localStorage.getItem('mode') === 'dark') {
        ReportBody.classList.add('dark-mode');
        ReportBody.classList.remove('light-mode');
    } else {
        ReportBody.classList.add('light-mode');
        ReportBody.classList.remove('dark-mode');
    }
});
