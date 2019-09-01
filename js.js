

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



