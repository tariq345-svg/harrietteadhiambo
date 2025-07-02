// Mobile Navigation Functionality
const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");

// Toggle mobile menu
menu?.addEventListener("click", () => {
  nav.classList.add("show");
  document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Close mobile menu
closeButton?.addEventListener("click", () => {
  nav.classList.remove("show");
  document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close menu on link click
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
    document.body.style.overflow = 'auto';
  });
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('show')) {
    nav.classList.remove("show");
    document.body.style.overflow = 'auto';
  }
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = 'none';
  }
});

document.getElementById('project1-highlights').addEventListener('click', function() {
  window.location.href = 'project1-highlights.html';
});

document.getElementById('project1-details').addEventListener('click', function() {
  window.location.href = 'project1-details.html';
});

document.getElementById('project2-highlights').addEventListener('click', function() {
  window.location.href = 'project2-highlights.html';
});

document.getElementById('project2-details').addEventListener('click', function() {
  window.location.href = 'project2-details.html';
});

document.getElementById('project3-highlights').addEventListener('click', function() {
  window.location.href = 'project3-highlights.html';
});

document.getElementById('project3-details').addEventListener('click', function() {
  window.location.href = 'project3-details.html';
});

document.getElementById('project4-highlights').addEventListener('click', function() {
  window.location.href = 'project4-highlights.html';
});

document.getElementById('project4-details').addEventListener('click', function() {
  window.location.href = 'project4-details.html';
});

document.getElementById('project5-highlights').addEventListener('click', function() {
  window.location.href = 'project5-highlights.html';
});

document.getElementById('project5-details').addEventListener('click', function() {
  window.location.href = 'project5-details.html';
});

document.getElementById('project6-highlights').addEventListener('click', function() {
  window.location.href = 'project6-highlights.html';
});

document.getElementById('project6-details').addEventListener('click', function() {
  window.location.href = 'project6-details.html';
});

// Skill Progress Bar Animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(bar => {
    const targetWidth = bar.getAttribute('data-width');
    if (targetWidth) {
      setTimeout(() => {
        bar.style.width = targetWidth + '%';
      }, 500);
    }
  });
}

// Intersection Observer for skill bars animation
const skillSection = document.querySelector('.skills-grid');
if (skillSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.3
  });
  
  observer.observe(skillSection);
}

// Add smooth hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
  // Add click effects to buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  // Enhanced scroll animations for skill cards
  const skillCards = document.querySelectorAll('.skill-category');
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 200);
      }
    });
  }, {
    threshold: 0.1
  });
  
  skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    cardObserver.observe(card);
  });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  button {
    position: relative;
    overflow: hidden;
  }
`;
document.head.appendChild(style);
