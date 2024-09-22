const flowers = document.querySelectorAll('.flower');

flowers.forEach(flower => {
    flower.addEventListener('mouseover', () => {
        flower.style.transform = "scale(1.2)"; // Aumenta el tamaño al pasar el ratón
    });
    
    flower.addEventListener('mouseout', () => {
        flower.style.transform = "scale(1)"; // Vuelve al tamaño original
    });
});
