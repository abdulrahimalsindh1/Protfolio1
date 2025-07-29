document.addEventListener('DOMContentLoaded', function() {
    // Activate the first section by default
    document.querySelector('#profile').classList.add('active');
    
    // Handle sidebar navigation clicks
    const sidebarLinks = document.querySelectorAll('#sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                // Remove active class from all sections
                document.querySelectorAll('.section').forEach(section => {
                    section.classList.remove('active');
                });
                
                // Add active class to the target section
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).classList.add('active');
                
                // Update active state in sidebar
                sidebarLinks.forEach(link => {
                    link.parentElement.classList.remove('active');
                });
                this.parentElement.classList.add('active');
                
                // Close any open dropdowns
                const dropdowns = document.querySelectorAll('.dropdown-toggle');
                dropdowns.forEach(dropdown => {
                    if (dropdown !== this) {
                        dropdown.setAttribute('aria-expanded', 'false');
                        const target = dropdown.getAttribute('data-bs-target');
                        if (target) {
                            document.querySelector(target).classList.remove('show');
                        }
                    }
                });
            }
        });
    });
    
    // Mobile sidebar toggle
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '<i class="bi bi-list"></i>';
    mobileMenuBtn.className = 'btn btn-primary d-md-none fixed-top m-3';
    mobileMenuBtn.style.zIndex = '1001';
    document.body.appendChild(mobileMenuBtn);
    
    mobileMenuBtn.addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('content').classList.toggle('active');
    });
});