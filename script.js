document.addEventListener('DOMContentLoaded', function() {
  // Botão de voltar ao topo
  const buttonTopo = document.getElementById('buttonTopo');
  
  window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      buttonTopo.style.display = 'block';
    } else {
      buttonTopo.style.display = 'none';
    }
  };
  
  buttonTopo.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Fechar menu ao clicar em um link (para mobile)
  const menuLinks = document.querySelectorAll('.nav-links a');
  const menuToggle = document.getElementById('menu-toggle');
  
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        menuToggle.checked = false;
      }
    });
  });
  
  // Scroll suave para todas as âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Adiciona classe ativa ao item do menu conforme scroll
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links ul li a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const headerHeight = document.querySelector('header').offsetHeight;
      
      if (pageYOffset >= (sectionTop - headerHeight - 50)) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });
  
  // Ativar/desativar tema dark (opcional)
  const themeToggle = document.createElement('button');
  themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  themeToggle.classList.add('theme-toggle');
  themeToggle.style.position = 'fixed';
  themeToggle.style.bottom = '20px';
  themeToggle.style.left = '20px';
  themeToggle.style.zIndex = '999';
  themeToggle.style.background = 'var(--gradient-primary)';
  themeToggle.style.color = 'white';
  themeToggle.style.width = '50px';
  themeToggle.style.height = '50px';
  themeToggle.style.borderRadius = '50%';
  themeToggle.style.display = 'flex';
  themeToggle.style.alignItems = 'center';
  themeToggle.style.justifyContent = 'center';
  themeToggle.style.cursor = 'pointer';
  themeToggle.style.border = 'none';
  document.body.appendChild(themeToggle);
  
  themeToggle.addEventListener('click', () => {
    document.body.setAttribute('data-theme', 
      document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    themeToggle.innerHTML = document.body.getAttribute('data-theme') === 'dark' 
      ? '<i class="fa-solid fa-sun"></i>' 
      : '<i class="fa-solid fa-moon"></i>';
  });
});