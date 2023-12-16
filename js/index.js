document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById('gridContainer');

    for (let i = 0; i < 40; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');

        // Use a placeholder image for testing
        gridItem.style.backgroundImage = `url('img/arts/arts${i}.jpg')`;

        gridContainer.appendChild(gridItem);
    }
});