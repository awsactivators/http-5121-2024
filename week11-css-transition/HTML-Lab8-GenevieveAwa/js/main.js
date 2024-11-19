var shape = document.querySelector('.shape');
var button = document.querySelector('#action-button');

button.addEventListener('click', () => {
  shape.style.transform = 'rotate(1800deg) scale(1.5)';
  shape.style.backgroundColor = '#e74c3c';

  // Use transitionend to reset properties after animation
  shape.addEventListener('transitionend', () => {
      shape.style.transition = 'none'; 
      shape.style.transform = 'none'; 
      shape.style.backgroundColor = '#3498db'; 
      setTimeout(() => {
        shape.style.transition = 'transform 2s ease, background-color 2s ease'; 
      }); 
    },
    { once: true }
  );
});
