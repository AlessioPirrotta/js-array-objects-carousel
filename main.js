// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla 
// creazione del markup statico: costruiamo il container e inseriamo
//  l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali 
// per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine 
// attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura 
// attiva è la prima e l'utente clicca la freccia verso destra, la miniatura 
// che deve attivarsi sarà l'ultima e viceversa per l'ultima 
// miniatura se l'utente clicca la freccia verso sinistra.


const simpsonFamily = [
    {
        Name: "Homer Jay",
        Surname: "Simpson",
        Immagine: "./img/homer.jpg"
    
    },
    {
        Name: "Marjorie Jacqueline",
        Surname: "Bouvier - Simpson",
        Immagine: "./img/marge.jpg"
    
    },
    {
        Name: "Bartholomew JoJo",
        Surname: "Simpson",
        Immagine: "./img/bart.jpg"
    
    },
    {
        Name: "Lisa Marie",
        Surname: "Simpson",
        Immagine: "./img/lisa.jpg"
    
    },
    {
        Name: "Margaret Evelyn Lenny",
        Surname: "Simpson",
        Immagine: "./img/maggie.jpg"
    
    }
    ]

    simsonImagesArray= []
    
    
    let simpsonNameArray = simpsonFamily.map(simpEl => `${simpEl.Name} ${simpEl.Surname}`);
    console.log(simpsonNameArray);


    


    simpsonFamily.forEach(function(simpEl) {
        let container= document.getElementById("cntnr")
        simsonImagesArray.push(simpEl.Immagine)
        container.innerHTML+= `<div style="height: 100px;" class="">
        <img style="height: 100px; width: 185px" src="${simpEl.Immagine}" alt="">
    </div>`
    });


    let arrowUp = document.getElementById("up")
    let arrowDown = document.getElementById("down")
    let image = document.getElementById("firstImg");
    let image1 = 0;
    let name1= 0;
    
    
    
    image.innerHTML = `
    <div class="image-container">
        <img style="width: 100%; height: 500px;" class="_imgContent position-relative" src="${simsonImagesArray[image1]}" alt="">
        <div style="height: 60px; width:30%" class="image-caption text-start"><p>Name: ${simpsonNameArray[name1]}</p></div>
    </div>
`;
    
    arrowDown.addEventListener("click", function() {
        image1 = image1 + 1;
        name1 = name1 + 1
        if (image1 && name1 >= simsonImagesArray.length) {
            image1 = 0;
            name1= 0;
        }
        image.innerHTML = `<div class="image-container">
        <img style="width: 100%; height: 500px;" class="_imgContent position-relative" src="${simsonImagesArray[image1]}" alt="">
        <div style="height: 60px; width:30%" class="image-caption text-start"><p>Name: ${simpsonNameArray[name1]}</p></div>
    </div>`;
    // for(let i=0; i < simsonImagesArray.length; i++){
    //     simsonImagesArray[0]
    // }
     
    });

    arrowUp.addEventListener("click", function() {

        image1 = image1 - 1;
        name1 = name1 - 1
        if (image1 && name1 < 0) {
            image1 = simsonImagesArray.length - 1;
            name1= simpsonNameArray.length - 1;
        }
        image.innerHTML = `<div class="image-container">
        <img style="width: 100%; height: 500px;" class="_imgContent position-relative" src="${simsonImagesArray[image1]}" alt="">
        <div style="height: 60px; width:30%" class="image-caption text-start"><p>Name: ${simpsonNameArray[name1]}</p></div>
    </div>`;
     
    });
    



   

    




