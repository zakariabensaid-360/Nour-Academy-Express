let data = [
  {
    id: "c1",
    title: "Soutien Mathématiques",
    subject: "Mathématiques",
    level: "Primaire",
    slot: "Samedi 09:00 - 11:00",
    location: "Nador Centre",
    price: 350,
    remainingSeats: 6,
  },
  {
    id: "c2",
    title: "Français & Communication",
    subject: "Français",
    level: "Primaire",
    slot: "Samedi 11:15 - 13:15",
    location: "Hay Al Matar",
    price: 300,
    remainingSeats: 4,
  },
  {
    id: "c3",
    title: "Renforcement Mathématiques",
    subject: "Mathématiques",
    level: "Collège",
    slot: "Mercredi 15:00 - 17:00",
    location: "Nador Centre",
    price: 400,
    remainingSeats: 8,
  },
  {
    id: "c4",
    title: "Physique-Chimie Collège",
    subject: "Physique-Chimie",
    level: "Collège",
    slot: "Samedi 15:00 - 17:00",
    location: "Selouane",
    price: 400,
    remainingSeats: 0,
  },
  {
    id: "c5",
    title: "SVT & Démarche Scientifique",
    subject: "SVT",
    level: "Collège",
    slot: "Dimanche 10:00 - 12:00",
    location: "Hay Al Matar",
    price: 380,
    remainingSeats: 3,
  },
  {
    id: "c6",
    title: "Préparation Régional Français",
    subject: "Français",
    level: "1ère Bac",
    slot: "Dimanche 09:00 - 11:00",
    location: "Nador Centre",
    price: 450,
    remainingSeats: 5,
  },
  {
    id: "c7",
    title: "Mathématiques 1ère Bac",
    subject: "Mathématiques",
    level: "1ère Bac",
    slot: "Samedi 17:00 - 19:00",
    location: "Selouane",
    price: 450,
    remainingSeats: 2,
  },
  {
    id: "c8",
    title: "Mathématiques Intensif 2ème Bac",
    subject: "Mathématiques",
    level: "2ème Bac",
    slot: "Samedi 14:00 - 16:30",
    location: "Nador Centre",
    price: 550,
    remainingSeats: 7,
  },
  {
    id: "c9",
    title: "Physique-Chimie Bac National",
    subject: "Physique-Chimie",
    level: "2ème Bac",
    slot: "Dimanche 11:15 - 13:45",
    location: "Hay Al Matar",
    price: 550,
    remainingSeats: 0,
  },
  {
    id: "c10",
    title: "SVT Sciences Expérimentales",
    subject: "SVT",
    level: "2ème Bac",
    slot: "Mercredi 17:00 - 19:00",
    location: "Nador Centre",
    price: 500,
    remainingSeats: 9,
  },
  {
    id: "c11",
    title: "Anglais & Communication Bac",
    subject: "Anglais",
    level: "2ème Bac",
    slot: "Dimanche 15:00 - 17:00",
    location: "Selouane",
    price: 400,
    remainingSeats: 12,
  },
  {
    id: "c12",
    title: "Philosophie & Analyse de Textes",
    subject: "Philosophie",
    level: "2ème Bac",
    slot: "Samedi 11:00 - 13:00",
    location: "Hay Al Matar",
    price: 350,
    remainingSeats: 1,
  },
];

if (window.localStorage.getItem("db") == undefined) {
  window.localStorage.setItem("db", JSON.stringify(data));
}

let db = JSON.parse(window.localStorage.getItem("db"));
let main = document.getElementById("cards");
 // let modal = document.getElementById("modal")
let cart = document.getElementById("cart")
let cart_num = document.getElementById("cart-num")


cart.addEventListener("click", () => {
  if(cart_num.textContent == 0) {
    return
  }
  window.location.href = "/process.html"
})
  

let cartitems = []
cart_num.textContent = cartitems.length
  if(cart_num.textContent == 0) {
    cart_num.classList += " hidden"
  }
/*
  const hide = () => {
    modal.className += " hidden"
  }*/

const findItemByid = (id) => {
  for (let i = 0; i < cartitems.length; i++) {
    if(id == cartitems[i].id) {
      return true
    }
  }
  return false
}
function addtocart(id) {
  

if(findItemByid(id)) return alert("you cannot add same course twice");
  cart_num.classList.remove("hidden")  
  cart_num.textContent = Number(cart_num.textContent) + 1
  for(let i = 0; i < db.length; i++) {
    if(db[i].id == id)
    cartitems.push(db[i])
  }
window.addtocart = addtocart;

    window.localStorage.setItem("cart_items", JSON.stringify(cartitems))

console.log("test")
}
const rerender = (itemsToRender) => {
    main.innerHTML = "";
    itemsToRender.forEach((item) => {
        main.insertAdjacentHTML(
            "beforeend",
            `<div class="flex flex-col justify-between gap-2 bg-cyan-100 p-4 shadow-lg rounded-xl">
              <header class="flex justify-between items-center">
                <img
                  class="object-fit"
                  height="50px"
                  width="50px"
                  src="../public/${item.subject.toLocaleLowerCase()}.svg" 
                  alt="subject"
                />
                <span class="bg-white p-1 rounded-lg text-cyan-700">${item.level}</span>
              </header>
              <main class="flex flex-col gap-2">
                <h1 class="text-2xl text-cyan-700">${item.title}</h1>
                <h2 class="text-xl font-bold">${item.subject}</h2>
                <div class="flex flex-col">
                  <h3>${item.location}</h3>
                  <h4>${item.slot}</h4>
                </div>
                <span class="text-2xl font-semibold">${item.price}DH</span>
              </main>
              <footer class="flex justify-between items-center">
                <button 
                ${item.remainingSeats  == 0 ? "disabled" : "enabled"}
                id="btn-${item.id}"
                onclick="addtocart('${item.id}')"
                  class="h-fit px-4 py-2 font-medium  rounded-xl  ${item.remainingSeats  == 0 ? "bg-white opacity-80 text-black border-2  cursor-not-allowed" : "bg-cyan-700 hover:bg-cyan-900 text-white cursor-pointer"}   "
                >
                  ${item.remainingSeats  == 0 ? "out of stock" : "add to cart"}
                </button>
                <span class="bg-white p-1 rounded-lg text-cyan-700">sits left: ${item.remainingSeats}</span>
              </footer>
            </div>`
        );
    });
};

rerender(db);

let search = document.getElementById("search")
let locationSelect = document.getElementById("location");
let levelSelect = document.getElementById("level");
let subjectSelect = document.getElementById("subject");

const applyFilters = () => {
  
  
    let selectedSubject = subjectSelect.value;
    let selectedLevel = levelSelect.value;
    let selectedLocation = locationSelect.value;
    let inp = search.value
    let filtered = db.filter((item) => {
        let matchesSubject = selectedSubject === "" || item.subject === selectedSubject;
        let matchesLevel = selectedLevel === "" || item.level === selectedLevel;
        let matchesLocation = selectedLocation === "" || item.location === selectedLocation;
        let Matchinp = inp === "" || item.title.toLocaleLowerCase().includes(inp.toLocaleLowerCase())
        return matchesSubject && matchesLevel && matchesLocation && Matchinp;
    });
  
   
    console.log(inp)

    rerender(filtered);
};
search.addEventListener("input", applyFilters)
subjectSelect.addEventListener("change", applyFilters);
levelSelect.addEventListener("change", applyFilters);
locationSelect.addEventListener("change", applyFilters);

