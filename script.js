let syllables1 = ['A', 'E', 'I', 'O', 'U']
let syllables2 = ['BA', 'BE', 'BI', 'BO', 'BU']
let syllables3 = ['VA', 'VE', 'VI', 'VO', 'VU']
let syllables4 = ['DA', 'DE', 'DI', 'DO', 'DU']
let syllables5 = ['CHA', 'CHE', 'CHI', 'CHO', 'CHU']
let syllables6 = ['FA', 'FE', 'FI', 'FO', 'FU']
let syllables7 = ['GA', 'GUE', 'GUI', 'GO', 'GU']
let syllables8 = ['JA', 'JE', 'JI', 'JO', 'JU']
let syllables9 = ['CA', 'KE', 'KI', 'CO', 'CU', 'QUE', 'QUI']
let syllables10 = ['LA', 'LE', 'LI', 'LO', 'LU']
let syllables11 = ['MA', 'ME', 'MI', 'MO', 'MU']
let syllables12 = ['NA', 'NE', 'NI', 'NO', 'NU']
let syllables13 = ['ÑA', 'ÑE', 'ÑI', 'ÑO', 'ÑU']
let syllables14 = ['PA', 'PE', 'PI', 'PO', 'PU']
let syllables15 = ['RA', 'RE', 'RI', 'RO', 'RU']
let syllables16 = ['SA', 'SE', 'SI', 'SO', 'SU']
let syllables17 = ['TA', 'TE', 'TI', 'TO', 'TU']
let syllables18 = ['YA', 'YE', 'YI', 'YO', 'YU']
let syllables19 = ['LLA', 'LLE', 'LLI', 'LLO', 'LLU']
let syllables20 = ['ZA', 'CE', 'CI', 'ZO', 'ZU']

function createCard(syllable) {
    let card = document.createElement('div');
    card.textContent = syllable;
    card.className = 'card';
    card.draggable = true;
    card.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text', this.textContent);
    });
    card.addEventListener('touchstart', function(e) {
        e.dataTransfer.setData('text', this.textContent);
    });
    return card;
}

function createCards(syllables, containerId) {
    syllables.forEach(syllable => {
        let card = createCard(syllable);
        document.getElementById(containerId).appendChild(card);
    });
}

createCards(syllables1, 'cards1');
createCards(syllables2, 'cards2');
createCards(syllables3, 'cards3');
createCards(syllables4, 'cards4');
createCards(syllables5, 'cards5');
createCards(syllables6, 'cards6');
createCards(syllables7, 'cards7');
createCards(syllables8, 'cards8');
createCards(syllables9, 'cards9');
createCards(syllables10, 'cards10');
createCards(syllables11, 'cards11');
createCards(syllables12, 'cards12');
createCards(syllables13, 'cards13');
createCards(syllables14, 'cards14');
createCards(syllables15, 'cards15');
createCards(syllables16, 'cards16');
createCards(syllables17, 'cards17');
createCards(syllables18, 'cards18');
createCards(syllables19, 'cards19');
createCards(syllables20, 'cards20');

let dropzone = document.getElementById('dropzone');

dropzone.addEventListener('dragover', function(e) {
    e.preventDefault();
});

dropzone.addEventListener('drop', function(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData('text');
    this.textContent += data; // Append the dropped syllable to form words

    // Speak the dropped syllable
    let utterance = new SpeechSynthesisUtterance(data);
    window.speechSynthesis.speak(utterance);
});

dropzone.addEventListener('touchmove', function(e) {
    e.preventDefault();
});

dropzone.addEventListener('touchend', function(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData('text');
    this.textContent += data; // Append the dropped syllable to form words

    // Speak the dropped syllable
    let utterance = new SpeechSynthesisUtterance(data);
    utterance.rate = 0.6; // 80% of the normal speed
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