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
  // Initialize water theme effects
  initWaterThemeEffects();
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

// Mobile Viewport Height Fix for iOS Safari
function setViewportHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set on initial load
setViewportHeight();

// Update on resize and orientation change
window.addEventListener('resize', setViewportHeight);
window.addEventListener('orientationchange', () => {
  setTimeout(setViewportHeight, 100);
});

// Touch-friendly hover effects for mobile
function addTouchSupport() {
  const touchElements = document.querySelectorAll('.project .card, .skill-category, .pub-item, .blog-post, .tool-item');
  
  touchElements.forEach(element => {
    element.addEventListener('touchstart', function() {
      this.classList.add('touch-active');
    });
    
    element.addEventListener('touchend', function() {
      setTimeout(() => {
        this.classList.remove('touch-active');
      }, 150);
    });
  });
}

// Water theme specific animations
function initWaterThemeEffects() {
  // Animate wave dividers with slight delay for better effect
  const waveDividers = document.querySelectorAll('.wave-divider');
  waveDividers.forEach((wave, index) => {
    wave.style.opacity = '0';
    wave.style.transform = 'translateY(20px)';
    wave.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    setTimeout(() => {
      wave.style.opacity = '1';
      wave.style.transform = 'translateY(0)';
    }, 300 + (index * 200));
  });
  
  // Enhanced water ripple effect for buttons
  const waterButtons = document.querySelectorAll('.hero button, .project .card .action button');
  waterButtons.forEach(button => {
    button.classList.add('water-ripple-btn');
  });
}

// Initialize touch support
addTouchSupport();

// Improved smooth scrolling for navigation links
function improvedSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
          const header = document.querySelector('header');
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = target.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (nav && nav.classList.contains('show')) {
            nav.classList.remove('show');
            document.body.style.overflow = 'auto';
          }
        }
      }
    });
  });
}

// Initialize improved smooth scrolling
improvedSmoothScroll();

// Optimize images for mobile
function optimizeImagesForMobile() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
    
    // Add lazy loading if not already present
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Set initial opacity for fade-in effect
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
  });
}

// Initialize image optimization
optimizeImagesForMobile();

// Add mobile-specific CSS
const mobileStyle = document.createElement('style');
mobileStyle.textContent = `
  /* Touch-friendly styles */
  .touch-active {
    transform: scale(0.98) !important;
    transition: transform 0.1s ease !important;
  }
  
  /* Fix for iOS Safari viewport height */
  .hero {
    min-height: calc(var(--vh, 1vh) * 100);
  }
  
  /* Improve touch targets */
  @media (max-width: 768px) {
    button, .nav-link, .social-media, .pub-btn {
      min-height: 44px;
      min-width: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    /* Better spacing for touch */
    .mobile-nav ul li {
      padding: 0.5rem 0;
    }
    
    /* Improve form inputs for mobile */
    input, textarea {
      font-size: 16px; /* Prevents zoom on iOS */
      border-radius: 8px;
    }
    
    /* Better button spacing */
    .project .card .action {
      gap: 1rem;
    }
    
    .project .card .action button {
      padding: 0.75rem 1rem;
      font-size: 0.9rem;
    }
  }
  
  /* Animation performance optimizations */
  .skill-progress, .card, .skill-category {
    will-change: transform;
  }
  
  /* Reduce animations on low-performance devices */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
document.head.appendChild(mobileStyle);
