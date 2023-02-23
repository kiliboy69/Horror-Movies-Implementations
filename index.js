
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
 import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
   .
   .
   .
 };

async function FetchHorrorData(horrorNumer){

const response = await fetch(`data.json`);
const data = await response.json();
console.log(data);

return data;
}
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 async function updateHorrorCard(horrorNumer)
{

   
   const horrorData = await(FetchHorrorData(horrorNumer));
   const name = horrorData[horrorNumer].name;
   const year = horrorData[horrorNumer].yearReleased;
   const director = horrorData[horrorNumer].director;
   const languge = horrorData[horrorNumer].language;

   document.getElementById("horror-name").textContent = name;
   document.getElementById("YearR").textContent = year;
   document.getElementById("directorR").textContent = director;
   document.getElementById("languageR").textContent= languge;



   
   function writeUserData(name, year, director, languge) {
   const db = getDatabase(app);
   set(ref(db, 'Peliculas/' + name), {
   ano: year ,
   direct: director,
   lang : languge,
 });
}
let pelicula = {
    name: name,
    year: year,
    director: director,
    languge: languge
}

writeUserData(name, year,director,languge);

printRow(pelicula);


}

document.getElementById('InsertRandom').addEventListener('click',function(){
const horrorNumer = Math.floor(Math.random() * 100) + 1;
updateHorrorCard(horrorNumer);
});

function printRow(pelicula){
   
   
   var table = document.getElementById("Table1"); 

   //creamos un nuevo elemento en la tabla en la ultima posicion
   var row = table.insertRow(-1);

   //Insertamos cada una de las celdas/columnas del registro
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);
   var cell5 = row.insertCell(4);
   var cell6 = row.insertCell(5);
   
   //Agregamos la informacion a cada una de las columnas del registro
   cell1.innerHTML = pelicula.name;
   cell2.innerHTML = pelicula.year; 
   cell3.innerHTML = pelicula.director;
   cell4.innerHTML = pelicula.languge; 
}