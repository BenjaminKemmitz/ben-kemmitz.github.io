// Touch + mouse friendly Before/After slider
document.querySelectorAll('.img-compare').forEach(function (container) {
  const before = container.querySelector('.before-img');
  const handle = container.querySelector('.slider-handle');

  let active = false;

  function updatePosition(clientX) {
    const rect = container.getBoundingClientRect();
    let xPos = clientX - rect.left;

    // Clamp between 0 and width
    xPos = Math.max(0, Math.min(xPos, rect.width));

    // Update clipping + handle location
    before.style.clipPath = `inset(0 ${rect.width - xPos}px 0 0)`;
    handle.style.left = xPos + 'px';
  }

  // Mouse events
  container.addEventListener('mousedown', e => {
    active = true;
    updatePosition(e.clientX);
  });

  window.addEventListener('mouseup', () => (active = false));

  container.addEventListener('mousemove', e => {
    if (active) updatePosition(e.clientX);
  });

  // Touch events
  container.addEventListener('touchstart', e => {
    active = true;
    updatePosition(e.touches[0].clientX);
  });

  container.addEventListener('touchend', () => (active = false));

  container.addEventListener('touchmove', e => {
    if (active) updatePosition(e.touches[0].clientX);
  });
});
