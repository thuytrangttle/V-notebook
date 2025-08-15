// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const bars = navToggle.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.component-card, .app-interface').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Interactive UI Component Previews
document.addEventListener('DOMContentLoaded', () => {
    // Dialog preview interaction
    const dialogPreview = document.querySelector('.dialog-preview');
    if (dialogPreview) {
        dialogPreview.addEventListener('click', () => {
            dialogPreview.style.transform = 'scale(1.05)';
            setTimeout(() => {
                dialogPreview.style.transform = 'scale(1)';
            }, 200);
        });
    }

    // Dropdown preview interaction
    const dropdownPreview = document.querySelector('.dropdown-preview');
    if (dropdownPreview) {
        let isOpen = false;
        dropdownPreview.addEventListener('click', () => {
            const dropdownMenu = dropdownPreview.querySelector('.dropdown-menu');
            if (isOpen) {
                dropdownMenu.style.transform = 'scaleY(0)';
                dropdownMenu.style.opacity = '0';
            } else {
                dropdownMenu.style.transform = 'scaleY(1)';
                dropdownMenu.style.opacity = '1';
            }
            isOpen = !isOpen;
        });
    }

    // Popover preview interaction
    const popoverPreview = document.querySelector('.popover-preview');
    if (popoverPreview) {
        popoverPreview.addEventListener('click', () => {
            popoverPreview.style.transform = 'scale(1.05)';
            setTimeout(() => {
                popoverPreview.style.transform = 'scale(1)';
            }, 200);
        });
    }

    // Slider preview interaction
    const sliderPreview = document.querySelector('.slider-preview');
    if (sliderPreview) {
        const sliderThumb = sliderPreview.querySelector('.slider-thumb');
        let isDragging = false;
        let startX, startLeft;

        sliderThumb.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startLeft = sliderThumb.offsetLeft;
            sliderThumb.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const newLeft = Math.max(0, Math.min(180, startLeft + deltaX));
            sliderThumb.style.left = newLeft + 'px';
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            sliderThumb.style.cursor = 'grab';
        });
    }
});

// App interface interaction
const appInterface = document.querySelector('.app-interface');
if (appInterface) {
    // Add hover effects to interface panes
    const interfacePanes = appInterface.querySelectorAll('.interface-pane');
    interfacePanes.forEach(pane => {
        pane.addEventListener('mouseenter', () => {
            pane.style.transform = 'translateY(-5px)';
            pane.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        pane.addEventListener('mouseleave', () => {
            pane.style.transform = 'translateY(0)';
            pane.style.boxShadow = 'none';
        });
    });

    // Add click interactions to task and email items
    const interactiveItems = appInterface.querySelectorAll('.task-item, .email-item');
    interactiveItems.forEach(item => {
        item.addEventListener('click', () => {
            item.style.background = '#f3f4f6';
            item.style.borderColor = '#667eea';
            setTimeout(() => {
                item.style.background = 'white';
                item.style.borderColor = '#e5e7eb';
            }, 300);
        });
    });
}

// Workspace placeholder interaction
const workspacePlaceholder = document.querySelector('.workspace-placeholder');
if (workspacePlaceholder) {
    workspacePlaceholder.addEventListener('click', () => {
        // Simulate workspace loading
        const placeholderContent = workspacePlaceholder.querySelector('.placeholder-content');
        placeholderContent.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Loading workspace...</span>';
        
        setTimeout(() => {
            placeholderContent.innerHTML = '<i class="fas fa-check-circle"></i><span>Workspace ready!</span>';
            placeholderContent.style.color = '#10b981';
        }, 2000);
    });
}

// Gradient text animation
const gradientText = document.querySelector('.gradient-text');
if (gradientText) {
    // Add subtle animation to gradient text
    setInterval(() => {
        gradientText.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        setTimeout(() => {
            gradientText.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)';
        }, 100);
    }, 3000);
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Navbar background change
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading animation for page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        }
    }
});

// Accessibility improvements
document.addEventListener('DOMContentLoaded', () => {
    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid #667eea';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = 'none';
        });
    });
    
    // Add skip to main content link for screen readers
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #667eea;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10001;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
});

// Add CSS for enhanced interactions
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
    .component-card {
        cursor: pointer;
    }
    
    .component-card:hover .component-preview {
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }
    
    .interface-pane {
        transition: all 0.3s ease;
    }
    
    .task-item, .email-item {
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .workspace-placeholder {
        cursor: pointer;
    }
    
    .workspace-placeholder:hover {
        border-color: #667eea;
        background: #f8fafc;
    }
    
    .gradient-text {
        transition: background 0.3s ease;
    }
`;

document.head.appendChild(enhancedStyles);
