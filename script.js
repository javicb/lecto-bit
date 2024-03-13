let syllables = ['BA', 'BE', 'BI', 'BO', 'BU', 'DA', 'DE', 'DI', 'DO', 'DU', /*...*/]; // Fill in all 104 syllables

function createCard(syllable) {
    let card = document.createElement('div');
    card.textContent = syllable;
    card.className = 'card';
    card.draggable = true;
    card.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text', this.textContent);
    });
    return card;
}

function createCards() {
    syllables.forEach(syllable => {
        let card = createCard(syllable);
        document.getElementById('cards').appendChild(card);
    });
}

document.getElementById('dropzone').addEventListener('dragover', function(e) {
    e.preventDefault();
});

document.getElementById('dropzone').addEventListener('drop', function(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData('text');
    this.textContent += data; // Append the dropped syllable to form words
});

createCards();