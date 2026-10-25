const currentUrl = window.location.search; 


const urlParams = new URLSearchParams(currentUrl);

const value = urlParams.get('value');
let response = document.getElementById("response")

let data = JSON.parse(window.localStorage.getItem("refrence"))

for(let i = 0; i < data.length; i++) {
    if(i == Number(value)) {
response.innerHTML = JSON.stringify(data)
break;
    }
}

