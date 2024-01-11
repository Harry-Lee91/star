document.addEventListener("DOMContentLoaded", function () {
    // Get all sections with the class 'fade-in'
    const fadeSections = document.querySelectorAll('.fade-in');
  
    // Define a function to check if an element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Define a function to handle the scroll event
    function handleScroll() {
      fadeSections.forEach((section) => {
        if (isInViewport(section)) {
          section.classList.add('visible');
        }
      });
    }
  
    // Add a scroll event listener to trigger the handleScroll function
    window.addEventListener('scroll', handleScroll);
  
    // Trigger the handleScroll function on page load to check initial visibility
    handleScroll();
  });