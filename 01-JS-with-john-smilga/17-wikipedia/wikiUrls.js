// URL TO SEARCH
// - const url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=searchValue";
// - list=search - perform a full text search
// - srsearch="inputValue" - search for page titles or content matching  this value.
// - srlimit=20 How many total pages to return.
// - format=json json response
// - "origin=*" fix cors errors

// - we need to give the searchValue dynamically
// - ex : https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=apple

// URL FOR THE CLICKED PAGE
// - "https://en.wikipedia.org/?curid=${id}"
// - we need to give the id dynamically
