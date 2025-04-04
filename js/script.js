// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


//  recupero il div nell'HTML con id lista e lo salvo nella variabile list
const list =  document.getElementById("lista")
// creato array contenente le email
const emailArray = [];
// creato ciclo for per chiedere all'API un'email generata randomicamente
for (let i = 0; i < 10; i++) {

    // creata richiesta API
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) =>{

        // salvo in una variabile i dati che ricevo dalla richiesta API
        let li= resp.data.response

        // pusho i valori della variabile sopra all'interno dell'array creato duori dal for
        emailArray.push(li);

        // creo gli elementi li da inserire nella lista e stampo all'interno il primo valore dell'array
        list.innerHTML += `<li d-block>${emailArray.shift(0)} <i class="fa-solid fa-clipboard"></i></li>`; // l'inserimento del metodo .shift() serve per non mostrare più undefined al posto di alcuni elementi della lista
    })
}
