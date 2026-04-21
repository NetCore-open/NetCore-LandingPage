document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll para los enlaces de la barra de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Restamos la altura del navbar (80px) para que no oculte el título
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Pequeño script para simular actualización en tiempo real en el Dashboard IoT
    const trendValues = document.querySelectorAll('.trend.up');
    setInterval(() => {
        trendValues.forEach(el => {
            el.style.opacity = el.style.opacity === '0.5' ? '1' : '0.5';
        });
    }, 2000);
});