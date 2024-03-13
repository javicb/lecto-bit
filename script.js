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

const syllablesArray = [syllables1, syllables2, syllables3, syllables4, syllables5, syllables6, syllables7, syllables8, syllables9, syllables10, syllables11, syllables12, syllables13, syllables14, syllables15, syllables16, syllables17, syllables18, syllables19, syllables20];
const containerIds = ['cards1', 'cards2', 'cards3', 'cards4', 'cards5', 'cards6', 'cards7', 'cards8', 'cards9', 'cards10', 'cards11', 'cards12', 'cards13', 'cards14', 'cards15', 'cards16', 'cards17', 'cards18', 'cards19', 'cards20'];

syllablesArray.forEach((syllables, index) => {
    createCards(syllables, containerIds[index]);
});

const dropzone = document.getElementById('dropzone');

dropzone.addEventListener('dragover', function(e) {
    e.preventDefault();
});

dropzone.addEventListener('drop', function(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData('text');
    this.textContent += data; // Append the dropped syllable to form words
});

dropzone.addEventListener('touchend', function(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData('text');
    this.textContent += data; // Append the dropped syllable to form words
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