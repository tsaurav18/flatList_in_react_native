const API_KEY ="73b19491b83909c7e07016f4bb4644f9";
const LIST_NAME = "hardcover-fiction";
const API_STEM = "https://api.nytimes.com/svc/books/v3/lists";

function fetchBooks(list_name = LIST_NAME){
    let url = `${API_STEM}/${LIST_NAME}?response-format=json&apo-key=${API_KEY}`;
    return fetch(url)
    .then(response =>response.json())
    .then(responseJSON=>{
        return responseJSON.results.books
    })
    .catch(error=>{
        console.error(error);
    })
}
export default {fetchBooks:fetchBooks};
