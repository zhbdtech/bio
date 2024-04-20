particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": false
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 1,
            "random": false
        },
        "size": {
            "value": 1,
            "random": false
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 0.1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": false,
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('settings.json')
        .then(response => response.json())
        .then(settings => {
            const nameElement = document.getElementById('name');
            const aboutElement = document.getElementById('about');
            const socialLinksContainer = document.getElementById('socialLinks');
    
            if (nameElement && aboutElement && socialLinksContainer) {
                nameElement.textContent = settings.name;
                aboutElement.textContent = settings.about;
    
                socialLinksContainer.innerHTML = '';
                settings.socialLinks.forEach(link => {
                    const anchor = document.createElement('a');
                    anchor.href = link.link;
                    anchor.textContent = link.text;
                    anchor.className = 'social-link';
                    socialLinksContainer.appendChild(anchor);
                });
    
                const avatar = document.querySelector('.avatar');
                avatar.style.backgroundImage = `url('${settings.pfp}')`;
    
                document.title = settings.name;
            } else {
                console.error('One or more required HTML elements not found.');
            }
        })
        .catch(error => {
            console.error('Error loading settings:', error);
        });
});
