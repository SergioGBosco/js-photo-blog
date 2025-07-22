//recupero gli elementi dell'html che mi servono

const cardContainer = document.getElementById(`cardContainer`);

//creo la funzione che mi permette di creare le foto 

const generatephoto = `https://lanciweb.github.io/demo/api/pictures/`;

axios.get(generatephoto).then(resp => {
  const object = resp.data;
  //ciclo gli oggetti e pusho gli indirizzi dell'immagine all'interno dell'array vuoto prima creato 
  for (i = 0; i < object.length; i++) {
    cardContainer.innerHTML += `<div class="col-12 col-md-6 col-lg-4 ">
          <div class="card">
            <div class="pin">
              <img src="img/pin.svg" alt="">
            </div>
            <div class="photo">
              <img src="${object[i].url}" class="card-img-top" alt="...">
            </div>
            <div class="card-body pt-0">
            <h3>${object[i].title}</h3>
              <p class="card-text fs-5 text-end">${object[i].date}</p>
            </div>
          </div>
        </div>`
  }
});
//Recupero l'elemento html che mi permette di uscire dall'overlay

const overlay = document.getElementById(`overlay`)
const preview = document.getElementById(`preview`)
const quit = document.getElementById(`quit`);
//recupero gli elementi dell'html card per aggiungere le varie istruzioni
setTimeout(() => {
  const card = document.querySelectorAll(`.card`);
  console.log(card)
  //ciclo le card per aggiungere l'evento da effettuare
  card.forEach((elem) => {
    console.log(elem)
    elem.addEventListener(`click`, () => {
      preview.classList.addremove(`d-block`);
      overlay.classList.remove(`bg-transparent`);
    })
  })
}, 1000)

//aggiunta la funzione che al click la card seleziona scompare insieme all'overlay

quit.addEventListener(`click`, (e) => {
  e.preventDefault();
  preview.classList.add(`d-none`)
  overlay.classList.add(`bg-transparent`)
}) 
