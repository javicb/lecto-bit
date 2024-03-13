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

    // Speak the dropped syllable
    let utterance = new SpeechSynthesisUtterance(data);
    window.speechSynthesis.speak(utterance);
});

document.getElementById('readWord').addEventListener('click', function() {
    let word = document.getElementById('dropzone').textContent;
    let utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = 0.6; // 80% of the normal speed
    window.speechSynthesis.speak(utterance);
});

document.getElementById('clearWord').addEventListener('click', function() {
    document.getElementById('dropzone').textContent = '';
});


createCards();