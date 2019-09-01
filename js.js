

document.querySelector("#book-form").addEventListener("submit", (e) => {
    // Prevent actual submit

    e.preventDefault();

    //Get form values

    const input = document.querySelector("#recherche").value;
    var searchQuery = input.trim();
    // print `searchQuery` to the console
    fetchResults(searchQuery);
  }
)

function fetchResults(searchQuery) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
      const results = data.query.search;
      showResults(results);
  })
  .catch(error=> console.log(error))
}

