const funEmpjis = [
    '🐱',
    '🐯',
    '🐅',
    '😼'
]

const getRandomEmoji = () => {
    return funEmpjis[Math.floor(Math.random() * funEmpjis.length)];
}

export {
    getRandomEmoji
};