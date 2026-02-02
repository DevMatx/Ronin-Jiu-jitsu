// Aguarda o scroll da página
window.addEventListener('scroll', () => {
    const lutador = document.getElementById('lutador-queda');
    const container = document.querySelector('.espaco-queda');
    
    // Pega a posição da seção de queda em relação à tela
    const rect = container.getBoundingClientRect();
    const viewHeight = window.innerHeight;

    // Se o topo da seção estiver visível na tela
    if (rect.top <= viewHeight && rect.bottom >= 0) {
        
        // Calcula o progresso (0 a 1) baseado em quanto da seção já passou
        // 0 = começou a ver a seção / 1 = seção terminou
        const range = rect.height + viewHeight;
        const offset = viewHeight - rect.top;
        const progresso = Math.min(Math.max(offset / range, 0), 1);

        // --- VALORES DA QUEDA ---
        const moveX = progresso * 120;   // Move para o lado
        const moveY = progresso * 450;   // Desce em direção à Section 2
        const rotate = progresso * 220;  // Gira o lutador (projeção)
        
        // Aplica as transformações
        lutador.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg)`;
        
        // Efeito de fade out: começa a sumir quando está quase no chão (90% do progresso)
        if (progresso > 0.85) {
            lutador.style.opacity = (1 - progresso) * 6.6;
        } else {
            lutador.style.opacity = 1;
        }
    }
});
