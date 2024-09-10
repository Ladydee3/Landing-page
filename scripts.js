// Example of form submission confirmation
document.addEventListener('DOMContentLoaded', function () {
    const volunteerForm = document.querySelector('#volunteer-section form');
    const donationForm = document.querySelector('#donation-section form');

    // Handle volunteer form submission
    volunteerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for signing up as a volunteer!');
        volunteerForm.reset();
    });

    // Handle donation form submission
    donationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your donation!');
        donationForm.reset();
    });
});

