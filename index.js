// Add your code here
function submitData( name, email ) {  // create submit data functoin that takes a name and email 
    return fetch( 'http://localhost:3000/users', { //use the fetch method to grab from the api 
        method: "POST", // add a method key to POST
        
        //One very common header is "Content-Type". "Content-Type" is used to indicate what format the data being sent is in. With JavaScript's fetch(), JSON is the most common format we will be using
        
        headers: { //Each individual header is stored as a key/value pair inside an object. This object is assigned to the headers key as seen above.
          "Content-Type": "application/json",
          "Accept": "application/json"
        }, //Just like "Content-Type" tells the destination server what type of data we're sending, it is also good practice to tell the server what data format we accept in return.

        body: JSON.stringify( { // this converts a JavaScript object or value to a JSON string,
          name,
          email
        } )
      } )
      // fetch returns a promise - so that means its kind of like a placeholder for the response that we're gonna get asynchronously
        // when we work with promises we need to use .then
      .then( function ( response ) { // using .then to pass a function
        return response.json()// this will give us the response of the promise with json - and we use return to display it to us
      } )
      .then( function ( object ) { // using .then to pass a function
        document.body.innerHTML = object[ "id" ] 
        //  .innerHTMl property sets or returns the HTML content of an element - so in this case will return it from the body of the document and then set this = to the object id 

      } )
      .catch( function ( error ) { // The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
        document.body.innerHTML = error.message // set the html from the body of the document = to an error message 
      } )
  }