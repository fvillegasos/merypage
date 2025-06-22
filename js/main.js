const noBtn = document.getElementById('no-btn');
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