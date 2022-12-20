
/**
*
*   @return {Promise<Object>} quote information 
*/
const fetchQuote = async () => {
    const personaje = 3;
    const res = await fetch(`https://rickandmortyapi.com/api/character/${personaje}`)
    const data = await res.json();
    console.log(data)
    return data;

}

/**
*
*   @param {HTMLDivElement} element
*/
export const Breakingbadapp = async (element) => {
    document.querySelector('#app-title').innerHTML = 'Breaking App'
    element.innerHTML = 'Loading...'
    // await fetchQuote();

    const quoteLabel = document.createElement('blockquote')
    const autoLabel = document.createElement('h3')
    const nextQuoteButton = document.createElement('button')
    nextQuoteButton.innerText = ' Next Quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.name;
        autoLabel.innerHTML = data.status;
        element.replaceChildren(quoteLabel, autoLabel, nextQuoteButton);

    }
    nextQuoteButton.addEventListener('click', async () => {
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        
        renderQuote(quote)
    })

    // fetchQuote().then(data => renderQuote(data))
    fetchQuote().then(renderQuote)
}
