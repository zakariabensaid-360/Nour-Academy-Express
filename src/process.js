const phoneInput = document.getElementById('phone');
let subbtn = document.getElementById("sub")
 subbtn.disabled = true;
phoneInput.addEventListener('blur', function() {
    
    const phonePattern = /^\+?[0-9]{8,15}$/; 
    if (phonePattern.test(this.value)) {
        this.style.borderColor = "green";
      subbtn.disabled = false;
    } else {
        this.style.borderColor = "red";
        subbtn.disabled = true;
    }
});
let cart_num = document.getElementById("cart-num")


if(window.localStorage.getItem("cart_items") == undefined) {
     window.location.href = "/"
}
let items  = JSON.parse(window.localStorage.getItem("cart_items"))
cart_num.textContent = items.length

let price = document.getElementById("price")
let cart_section  = document.getElementById("section-cart")

let totalprice = 0
let item;
for(let i = 0; i < items.length; i++) {
    item = items[i]
    totalprice += item.price

    cart_section.innerHTML +=  `<div class="flex items-center justify-between gap-3 bg-white p-2 rounded-lg border border-cyan-100 shadow-sm">
  <div class="flex items-center gap-2.5 min-w-0">
    <img
      class="w-6 h-6 rounded bg-cyan-50 p-0.5 object-contain shrink-0"
      src="./public/${item.subject}.svg"
      alt="${item.subject}"
    />
    <div class="truncate">
      <h2 class="text-xs font-semibold text-gray-800 truncate">${item.title}</h2>
      <p class="text-[10px] text-gray-500 truncate">${item.slot} • ${item.location}</p>
    </div>
  </div>

  <span class="text-xs font-bold text-cyan-800 shrink-0">${item.price} DH</span>
</div>`
}

price.textContent = `${totalprice} MAD / MONTH`




const allSubmissions = [];

const submitButton = document.getElementById('sub');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const prenomVal        = document.getElementById('prenom').value;
  const nomVal           = document.getElementById('nom').value;
  const dobVal           = document.getElementById('dob').value;
  const etablissementVal = document.getElementById('etablissement').value;
  const niveauVal        = document.getElementById('niveau').value;
  const centreVal        = document.getElementById('centre').value;
  const filiereVal       = document.getElementById('filiere').value;
  
  const parentNomVal     = document.getElementById('parent_nom').value;
  const parentLienVal    = document.getElementById('parent_lien').value;
  const phoneVal         = document.getElementById('phone').value;
  const parentEmailVal   = document.getElementById('parent_email').value;

  const data = [
    { id: "prenom", label: "Prénom", value: prenomVal },
    { id: "nom", label: "Nom", value: nomVal },
    { id: "dob", label: "Date de naissance", value: dobVal },
    { id: "etablissement", label: "Établissement", value: etablissementVal },
    { id: "niveau", label: "Niveau", value: niveauVal },
    { id: "centre", label: "Centre", value: centreVal },
    { id: "filiere", label: "Filière", value: filiereVal },
    { id: "parent_nom", label: "Nom du parent", value: parentNomVal },
    { id: "parent_lien", label: "Lien avec l'élève", value: parentLienVal },
    { id: "phone", label: "Téléphone", value: phoneVal },
    { id: "parent_email", label: "E-mail du parent", value: parentEmailVal }
  ];

  allSubmissions.push(data);

console.log("test")

window.localStorage.setItem("refrence", JSON.stringify(allSubmissions))
window.location.href = "/valid"
  
});