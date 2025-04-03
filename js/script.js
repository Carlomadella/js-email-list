// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


//  recupero il div nell'HTML con id lista e lo salvo nella variabile list
const list =  document.getElementById("lista")
// creato array contenente le email
const emailArray = [];
// creato ciclo for per chiedere all'API un'email generata randomicamente 
for (let i = 0; i < 10; i++) {
    // creata richiesta API
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) =>{
        li= resp.data.response
        
        emailArray.push(li);
        
        console.log(emailArray);
        list.innerHTML += `<li>${emailArray[i]}</li>`;
    })
}