

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

function showResults(results) {
   console.log(results);

   const searchResults = document.querySelector('.searchResults');

   searchResults.innerHTML = '';

   results.forEach(result => {
     const encodedUrl = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);
      console.log(encodedUrl);
      

      searchResults.insertAdjacentHTML('beforeend',
     `
     
     <div class="resultItem d-inline p-2">
       <h3 class="resultItem-title">
         <a class="text-primary" href="${encodedUrl}" target="_blank" rel="noopener">${result.title}</a>
       </h3>
       <a class="text-success" href="${encodedUrl}"  target="_blank" rel="noopener">${encodedUrl}</a>
       <span class="resultItem-snippet d-block text-light">${result.snippet}</span><br>
      
     </div>`
   );

   })
}

