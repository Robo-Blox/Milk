function navigate(page) {
    anime({
        targets: 'body',
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1000,
        complete: function() {
            window.location.href = page;
        }
    });
}
