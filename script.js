$(document).ready(function() {
    // Smooth scrolling for nav links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

function submitForm() {
    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();

    if (name && email && message) {
        // Construct mailto link
        const mailto = 'mailto:brightclasses0122@gmail.com'
            + '?subject=' + encodeURIComponent('Contact Form Submission from ' + name)
            + '&body=' + encodeURIComponent('Name: ' + name + '\\nEmail: ' + email + '\\nMessage: ' + message);

        // Open mailto link in new window/tab
        window.open(mailto, '_blank');

        $('#contactForm').hide();
        $('#thankYouMessage').show();
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
    } else {
        alert('Please fill all fields.');
    }
}
