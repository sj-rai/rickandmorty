console.log('[h1]')

// document.body.innerHTML += "Inner HTML"
const characterList = document.getElementById('characterList')
const nextButton = document.getElementById('next-button')
let currentPage = 1;
nextButton.onclick = function nextPage() {
    console.log('[nextPage]');
    currentPage++;
    loadCharacters(currentPage)

}
async function loadCharacters(currentPage) {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
    let characters = await res.text()
    characters = JSON.parse(characters).results
    displayCharacters(characters)
}

function displayCharacters(characters) {
    const htmlString = characters.map((character) => {
        return `
            <li>
            <h2>${character.name}</h2>
            <img src="${character.image}"></img>
            </li>
        `
    })
    .join('')
    characterList.innerHTML = htmlString
}

loadCharacters(currentPage);
