document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.querySelector('.timeline-content').style.display = 'block';
    });

    item.addEventListener('mouseleave', function() {
        this.querySelector('.timeline-content').style.display = 'none';
    });
});
