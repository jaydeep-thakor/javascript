
//   ***************************** example 1 *****************************

// Function to fetch data from a URL
const fetchData = (url) => {
    return fetch(url)
      .then(response => response.json()) // Convert response to JSON
      .catch(() => `Error fetching ${url}`); // Handle errors
  };
  
  // List of API calls
  const apiCalls = [
    fetchData("https://jsonplaceholder.typicode.com/users"),   // Users data
    fetchData("https://jsonplaceholder.typicode.com/posts"),   // Posts data
    fetchData("https://jsonplaceholder.typicode.com/comments"), // Comments data
    fetchData("https://invalid-url.com/data") // Invalid URL to test error
  ];
  
  // Using Promise.allSettled() (Handles both success and failure)
  Promise.allSettled(apiCalls).then((results) => {
    console.log("Results from Promise.allSettled:", results);
  });
  
  // Using Promise.all() (Fails if any request fails)
  Promise.all(apiCalls)
    .then((results) => {
      console.log("Results from Promise.all:", results);
    })
    .catch((error) => {
      console.error("Promise.all failed:", error);
    });
  

//   ***************************** example 2 *****************************
    const apiCall = (url) => {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error(`Error fetching ${url}:`, error);
            });
    };
    
    const apiCalls1 = [
        apiCall("https://jsonplaceholder.typicode.com/users"),
        apiCall("https://jsonplaceholder.typicode.com/posts"),
        apiCall("https://jsonplaceholder.typicode.com/comments"),
        apiCall("https://invalid-url.com/data")
    ];
    
    
    Promise.all(apiCalls)
        .then(results => {
            console.log("All API results:", results);
        })
        .catch(error => {
            console.error("Error in one of the API calls:", error);
        });

        
