// Add your code here
function submitData(name,email) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name: 'Steve',
        email: 'steve@steve.com'
      })
    })
    .then(response => response.json())
    .then(obj => document.body.innerHTML = obj[ "id" ])
    .catch(err => document.body.innerHTML = err.message)
}
