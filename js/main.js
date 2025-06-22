const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

noBtn.style.position = 'absolute';

noBtn.addEventListener('mouseenter', () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const btnRect = noBtn.getBoundingClientRect();
    const btnWidth = btnRect.width;
    const btnHeight = btnRect.height;
    const randomLeft = Math.random() * (vw - btnWidth);
    const randomTop = Math.random() * (vh - btnHeight);
    noBtn.style.left = `${randomLeft}px`;
    noBtn.style.top = `${randomTop}px`;
});

yesBtn.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = 'images/kittens_kissing.jpg';
});

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Optional: Close the modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}