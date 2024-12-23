// CounterUp.js equivalent functionality
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      let countTo = +counter.getAttribute('data-count');
      let count = 0;
      let increment = countTo / (2000 / 20); // 2000ms total, 20ms interval
  
      const updateCounter = () => {
        count += increment;
        if (count < countTo) {
          counter.innerText = Math.floor(count);
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = countTo;
        }
      };
  
      updateCounter();
    });
  
    // Waypoints.js equivalent functionality
    const graphs = document.querySelectorAll('.graph');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('grow');
        }
      });
    }, { threshold: 1.0 });
  
    graphs.forEach(graph => observer.observe(graph));
  });
  
   function menuClick() {
    var menu = document.getElementById("mobileMenu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}


