const API = "https://dog.ceo/api/breeds/image/random";


// Setting up the variables

const dogImage1 = document.getElementById('dog-image1')
const dogImage2 = document.getElementById('dog-image2')
const dogImage3 = document.getElementById('dog-image3')

// When the page load
window.addEventListener("load", grabImage());

async function grabImage() {
    console.log("Called grabImage")
    var i = 1
    while(i < 4){
        callAPI(i)
        i++
    }
}

function callAPI(i){
    try{
        return fetch(API, {
            method: 'GET'
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(i == 1){
                dogImage1.src = data.message; // To play with
            }
            if(i == 2){
                dogImage2.src = data.message; // To play with
            }
            if(i == 3){
                dogImage3.src = data.message; // To play with
            }
            console.log(data);
        })
    } catch {
        fetchError(arguments.callee.name)
    }
}


// Message displayed when an error occurs
function fetchError(functionName){
    console.log(functionName + " error")
    alert("There was an error while retreiving the employee data");
}