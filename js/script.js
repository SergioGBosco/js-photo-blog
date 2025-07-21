//recupero gli elementi dell'html che mi servono

const cardContainer = document.getElementById(`cardContainer`);

//creo la funzione che mi permette di creare le foto 

const generatephoto = `https://lanciweb.github.io/demo/api/pictures/`;

axios.get(generatephoto).then(resp => {
  const object = resp.data;
  //creo un array vuoto per poter inseire all'interno l'indirizzo delle immagini create
  const photo = [];
  //destructuring dell'oggetto
  const { obj1, obj2, obj3, obj4, obj5, obj6 } = object;

  //ciclo gli oggetti e pusho gli indirizzi dell'immagine all'interno dell'array vuoto prima creato 

  for (i = 0; i < object.length; i++) {
    if (!photo.includes(object[i].url))
      photo.push(object[i].url);
    cardContainer.innerHTML += `<div class="col-12 col-md-6 col-lg-4 ">
          <div class="card">
            <div class="pin">
              <img src="img/pin.svg" alt="">
            </div>
            <div class="photo">
              <img src="${object[i].url}" class="card-img-top" alt="...">
            </div>
            <div class="card-body pt-0">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s
                content.</p>
            </div>
          </div>
        </div>`
  }

  console.log(photo)
});
// 
