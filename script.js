document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = this.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                
                // Reset hamburger animation
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
    });
    
    // Highlight current page in navigation
    const currentPage = location.pathname.split('/').pop().replace('.html', '');
    if (currentPage) {
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            const linkPage = link.getAttribute('href').replace('.html', '');
            if (linkPage === currentPage || (currentPage === 'index' && linkPage === '')) {
                link.classList.add('active');
            }
        });
    }
    
    // Make dropdown buttons work on mobile
    const dropBtns = document.querySelectorAll('.dropbtn');
    dropBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const content = this.nextElementSibling;
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Reset mobile menu if window is resized larger
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            
            // Reset hamburger animation
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
            
            // Reset dropdown menus
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.style.display = '';
            });
        }
    });
});
