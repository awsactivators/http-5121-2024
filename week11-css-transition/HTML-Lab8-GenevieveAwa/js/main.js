// Variablees
var shape = document.querySelector('.shape');
var button = document.querySelector('#action-button');

button.addEventListener('click', function() {
  shape.style.transform = 'rotate(1800deg) scale(1.5)';
  shape.style.backgroundColor = '#e74c3c';

  // Using transitionend to reset properties after the animation
  shape.addEventListener('transitionend', function() {
      shape.style.transition = 'none'; 
      shape.style.transform = 'none'; 
      shape.style.backgroundColor = '#3498db'; 
      setTimeout(function() {
        shape.style.transition = 'transform 2s ease, background-color 2s ease'; 
      }); 
    },
    { once: true }
  );
});
