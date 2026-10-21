// Permite que a área receba o elemento arrastado
function allowDrop(event) {
    event.preventDefault();
}

// Guarda o ID do elemento que está sendo arrastado
function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

// Trata o momento em que o elemento é solto na nova coluna
function drop(event) {
    event.preventDefault();
    
    const cardId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(cardId);
    
    // Identifica o contêiner de destino (seja a lista ou um card dentro dela)
    let dropTarget = event.target;
    
    if (!dropTarget.classList.contains('card-list')) {
        dropTarget = dropTarget.closest('.card-list');
    }

    if (dropTarget) {
        dropTarget.appendChild(draggedElement);

        // Se o card for movido para a coluna "Concluído", aplica o estilo riscado
        const column = dropTarget.closest('.column');
        if (column.id === 'done') {
            draggedElement.classList.add('completed');
        } else {
            draggedElement.classList.remove('completed');
        }
    }
}