// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//       observer.unobserve(entry.target); // optional for one-time animation
//     }
//   });
// }, {
//   threshold: 0.15
// });

// // Observe all sections with the fade-in class
// document.querySelectorAll('.fade-in-section').forEach(section => {
//   observer.observe(section);
// });

//updated functino. sections fade in and out. 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

// Observe all sections with the fade-in class
document.querySelectorAll('.fade-in-section').forEach(section => {
  observer.observe(section);
});