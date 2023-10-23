
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.02)';
    });

    section.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
