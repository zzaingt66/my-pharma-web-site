// script.js

// Evento para manejar la apertura y cierre del acordeón
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-button');
    
    accordions.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`${button.innerText} ha sido ${button.classList.contains('collapsed') ? 'abierto' : 'cerrado'}`);
        });
    });
});


