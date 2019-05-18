// Add your code here
const url = "http://localhost:3000/users"

function submitData(nameString, emailString){
    
    let formData = {
        name: `${nameString}`,
        email: `${emailString}`
    }

    let configData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }


    fetch(url, configData)
        .then(function(response){
            return response.json()
        })
        .then(function(object){
           document.body.innerHTML = object['id']


        })
        .catch(function(error){
            document.body.innerHTML = error['message']
        })
}