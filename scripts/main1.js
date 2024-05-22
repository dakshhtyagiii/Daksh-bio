document.addEventListener('DOMContentLoaded', () => {
    const profilePic = document.getElementById('profile-pic');

    profilePic.addEventListener('click', () => {
        profilePic.classList.toggle('enlarged');
    });
});