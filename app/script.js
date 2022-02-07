// https://source.unsplash.com/random/300x300?<<tag>>
const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/300x300?';
let prevTag = '';
const rows = 10;

const tags = [
    'water',
    'nature',
    'tech',
    'color',
    'kite',
    'balloon',
    'kids',
    'landscape',
    'rain',
    'beach',
    'earth',
    'moon',
    'coffee',
    'mountain',
    'snow',
    'tree',
    'tiger',
    'safari',
    'birds',
    'people',
    'ride',
    'puppy',
    'cat',
    'sky',
    'forest',
    'house',
    'ocean',
    'river',
    'chess',
    'flower',
    'building',
    'car',
    'retro',
    'fire',
    'firework',
    'woods',
];

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `${unsplashURL}${randomTag()}`;
    container.appendChild(img);
}

function randomTag() {
    currentTag = tags[Math.floor(Math.random() * tags.length)];
    if (prevTag && prevTag === currentTag) {
        currentTag = tags[Math.floor(Math.random() * tags.length)];
    }
    prevTag = currentTag;
    return currentTag;
}
