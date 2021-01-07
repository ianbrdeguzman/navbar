const navbar = () => {
        // toggle navbar links
        document.querySelector('.navbar-links')
        .classList.toggle('nav-active');
        // toggle button
        document.querySelector('#button')
        .classList.toggle('btn-active');
        
};

// fire navbar function when menu is clicked
document.querySelector('#button')
    .addEventListener('click', navbar)