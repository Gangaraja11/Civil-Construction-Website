// Hamburger menu toggle function
function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const hamburgerIcon = document.querySelector('.hamburger i');
  navbar.classList.toggle('active');
  
  // Toggle the icon between hamburger and close
  if (navbar.classList.contains('active')) {
    hamburgerIcon.classList.remove('fa-bars');
    hamburgerIcon.classList.add('fa-times');
  } else {
    hamburgerIcon.classList.remove('fa-times');
    hamburgerIcon.classList.add('fa-bars');
  }
}
// Close the menu when a link is clicked (on mobile)
document.querySelectorAll('.navbar .menu a').forEach(link => {
  link.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    const hamburgerIcon = document.querySelector('.hamburger i');
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      hamburgerIcon.classList.remove('fa-times');
      hamburgerIcon.classList.add('fa-bars');
    }
  });
});


// Event listener for the "Read More" button
document.getElementById('read-more-btn').addEventListener('click', function() {
  const aboutLong = document.getElementById('about-long');
  const aboutShort = document.getElementById('about-short');
  
  // Toggle visibility of the about section text
  if (aboutLong.classList.contains('hidden')) {
    aboutLong.classList.remove('hidden');
    aboutShort.style.display = 'none'; // Hide short description
    this.textContent = 'Read Less'; // Change button text to "Read Less"
  } else {
    aboutLong.classList.add('hidden');
    aboutShort.style.display = 'block'; // Show short description again
    this.textContent = 'Read More'; // Change button text to "Read More"
  }
});

// Image slider animation for Home section (moving images linearly)
const sliderImages = document.querySelectorAll('.slider-image');
let currentImageIndex = 0;
const totalImages = sliderImages.length;

// Function to move images in a linear fashion
function moveImages() {
  sliderImages.forEach((img, index) => {
    img.style.transition = 'transform 10s ease-in-out'; // Slow transition
    // Move the current image out and next image in
    if (index === currentImageIndex) {
      img.style.transform = 'translateX(-100%)'; // Move out to the left
    } else if (index === (currentImageIndex + 1) % totalImages) {
      img.style.transform = 'translateX(0)'; // Bring the next image into view
    }
  });

  // Update the current image index to the next one
  currentImageIndex = (currentImageIndex + 1) % totalImages;
}

// Set an interval to move images every 10 seconds (slow motion effect)
setInterval(moveImages, 10000);

// Call it once to start the animation
moveImages();



// what we do section

// Scroll Animation for "What We Do" section
const scrollElements = document.querySelectorAll(".animate-on-scroll");

function handleScrollAnimation() {
  const triggerBottom = window.innerHeight * 0.85;
  scrollElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);



// package section

// Scroll reveal for package section
document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".scroll-reveal");

  function elementInView(el, percentScroll = 100) {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) *
        (percentScroll / 100)
    );
  }

  function displayScrollElement(el) {
    el.classList.add("revealed");
  }

  function handleScrollAnimation() {
    scrollElements.forEach((el) => {
      if (elementInView(el, 90)) {
        displayScrollElement(el);
      }
    });
  }

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  // Initial check
  handleScrollAnimation();
});

//achievement section
// Counter Animation for Achievements Section
const counters = document.querySelectorAll('.counter');

const animateCounter = (el) => {
  const target = +el.getAttribute('data-target');
  const speed = 200; // lower is faster
  const increment = target / speed;

  const update = () => {
    const current = +el.innerText;
    if (current < target) {
      el.innerText = Math.ceil(current + increment);
      setTimeout(update, 10);
    } else {
      el.innerText = target;
    }
  };

  update();
};

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target); // Animate only once
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => {
  observer.observe(counter);
});

// -------value section--------
// Scroll-triggered animation for highlights
document.addEventListener('DOMContentLoaded', () => {
  const highlightElements = document.querySelectorAll('.highlight-box');

  const observer = new IntersectionObserver(
      entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
              }
          });
      },
      {
          threshold: 0.2 // Trigger when 20% of section is visible
      }
  );

  highlightElements.forEach(el => observer.observe(el));
});

//----------trigger animation when scroll for "service section

document.addEventListener('DOMContentLoaded', () => {
  const serviceItems = document.querySelectorAll('.service-item');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add the visible class to animate the element
        }
      });
    },
    {
      threshold: 0.2 // Trigger when 20% of the element is visible
    }
  );

  serviceItems.forEach(el => observer.observe(el)); // Observe each service item
});

//-----------Our Projects Section -------
document.addEventListener('DOMContentLoaded', function () {
  // Scroll-triggered animation for project items
  const projectItems = document.querySelectorAll('.project-item');

  const observer = new IntersectionObserver(
      entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible'); // Add the visible class for animation
              }
          });
      },
      {
          threshold: 0.2 // Trigger when 20% of the element is visible
      }
  );

  projectItems.forEach(el => observer.observe(el)); // Observe each project item

  // Filter functionality for "All", "Elevation", "Interior", "Working"
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const filter = button.getAttribute('data-filter'); // Get the filter category

          projectItems.forEach(project => {
              if (filter === 'all' || project.classList.contains(filter)) {
                  project.style.display = 'block'; // Show the project
              } else {
                  project.style.display = 'none'; // Hide the project
              }
          });
      });
  });
});


// package drop down js

// Scroll Reveal for Package Boxes (Smooth Coming from Bottom)
window.addEventListener('scroll', function () {
  const elements = document.querySelectorAll('.scroll-reveal');
  elements.forEach(element => {
    if (isElementInView(element)) {
      element.classList.add('show');
    }
  });
});

// Check if an element is in view
function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Dropdown Toggle (Smooth Animation)
const accordions = document.querySelectorAll('.accordion-header');
accordions.forEach(accordion => {
  accordion.addEventListener('click', () => {
    const content = accordion.nextElementSibling;
    const dropdownSymbol = accordion.querySelector('.dropdown-symbol');
    content.classList.toggle('show');
    accordion.classList.toggle('active');
  });
});

//abou section scroll animation
// Scroll animation logic
function revealOnScroll() {
  const scrollElements = document.querySelectorAll('.scroll-left, .scroll-right');

  scrollElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

// Trigger on scroll and on page load
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);