// Fonction pour ajouter la classe active à l'élément de navigation correspondant à la section active
function setActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (window.pageYOffset >= top && window.pageYOffset < bottom) {
        const id = section.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  // Écouteur d'événement pour mettre à jour la classe active lors du scroll
  window.addEventListener('scroll', setActiveNav);
  
  // Écouteurs d'événements pour ajouter une animation de défilement au clic sur un lien de navigation
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });