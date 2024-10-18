/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let a = 10;
let b = 20;
const sum = a + b;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let numMax = 21;
const random = Math.floor(Math.random() * numMax);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Federico",
  surname: "Franzi",
  age: 30,
};

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["Javascript", "Python"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

const newLanguage = "Java";
me.skills.push(newLanguage);

console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const diceFaces = 6;

const dice = (numFaces) => {
  const randomNumber = Math.ceil(Math.random() * numFaces);
  return randomNumber;
};

console.log(dice(diceFaces));

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

let num1 = 22;
let num2 = 7;

const whoIsBigger = function (n1, n2) {
  return n1 > n2 ? n1 : n2;
};

console.log(whoIsBigger(num1, num2));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const string1 = "I love coding";

const splitMe = function (str) {
  const newArr = str.split(" ").map((element) => element[0].toUpperCase() + element.slice(1));
  return newArr;
};

console.log(splitMe(string1));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const string2 = "Delete one element";
const boolean1 = false;

const deleteOne = (str, bool) => {
  return bool === true ? str.slice(1) : str.slice(0, -1);
};

console.log(deleteOne(string2, boolean1));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const string3 = "I have 4 dogs and 3 cats";

const onlyLetters = function (str) {
  const newArr = str.split(" ").filter((element) => isNaN(element));
  const newStr = newArr.join(" ");
  return newStr;
};

console.log(onlyLetters(string3));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const string4 = "prova@gmail.com";
const string5 = "provagmail.com";
const at = "@";

const isThisAnEmail = (str1, str2) => {
  return str1.includes(str2);
};

console.log(isThisAnEmail(string4, at));
console.log(isThisAnEmail(string5, at));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const now = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const whatDayIsIt = (date) => {
  return date.getDay();
};

console.log(days[whatDayIsIt(now)]);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const num3 = 3;

const rollTheDices = (n) => {
  let sum = 0;
  const values = [];
  for (let i = 0; i < n; i++) {
    const face = dice(diceFaces);
    sum += face;
    values.push(face);
  }
  newObj = {
    sum: sum,
    values: values,
  };
  return newObj;
};

console.log(rollTheDices(num3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

// Riutilizzo la variabile now dichiarata nell'esercizio 7

console.log(now);
const newDate = new Date("October 3, 2024 11:24:20");

const howManyDays = function (date1, date2) {
  const conversionMillisecondsToDay = 1000 * 60 * 60 * 24;
  const dayDate1 = now.getTime() / conversionMillisecondsToDay;
  const dayDate2 = newDate.getTime() / conversionMillisecondsToDay;
  const dayPassed = Math.floor(dayDate1 - dayDate2);
  return dayPassed;
};

console.log(howManyDays(now, newDate));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

// Riutilizzo la variabile now dichiarata nell'esercizio 7

const myBirthdayFake = new Date("October 18, 2024");
const myBirthday = new Date("May 31, 1994");

const isTodayMyBirthday = (date1, date2) => {
  const todayMonth = date1.getMonth();
  const todayDay = date1.getDate();

  const myBirthdayMonth = date2.getMonth();
  const myBirthdayDay = date2.getDate();

  return todayMonth === myBirthdayMonth && todayDay === myBirthdayDay;
};

console.log(isTodayMyBirthday(now, myBirthday));
console.log(isTodayMyBirthday(now, myBirthdayFake));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const obj = {
  course: "Epicode",
  name: "Federico",
  surname: "Franzi",
  age: "30",
};

const string6 = "age";

const deleteProp = function (obj, str) {
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (Object.keys(obj)[i] === str) {
      delete obj[Object.keys(obj)[i]];
    }
  }
  return obj;
};

console.log(deleteProp(obj, string6));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

const newestMovie = (obj) => {
  let newestYear = obj[0].Year;
  let newestMovie = obj[0];
  for (let i = 1; i < obj.length; i++) {
    if (obj[i].Year > obj[i - 1].Year) {
      newestYear = obj[i].Year;
      newestMovie = obj[i];
    }
  }
  return newestMovie;
};

console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = (obj) => {
  return obj.length;
};

console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = (obj) => {
  const newArr = obj.map((element) => element.Year);
  return newArr;
};

console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = (obj) => {
  const newArr = obj.filter((element) => element.Year < 2000);
  return newArr;
};

console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (obj) => {
  let sumYears = 0;
  for (let i = 0; i < obj.length; i++) {
    sumYears += parseInt(obj[i].Year);
  }
  return sumYears;
};

console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const string7 = "avengers";

const searchByTitle = (obj, str) => {
  const newObj = obj.filter((element) => element.Title.toLowerCase().includes(str));
  return newObj;
};

console.log(searchByTitle(movies, string7));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

// Riutilizzo la variabile string7 dichiarata nell'esercizio 17

const searchAndDivide = (obj, str) => {
  const newObj = {
    match: [],
    unmatch: [],
  };

  for (let i = 0; i < obj.length; i++) {
    if (obj[i].Title.toLowerCase().includes(str)) {
      newObj.match.push(obj[i]);
    } else {
      newObj.unmatch.push(obj[i]);
    }
  }
  return newObj;
};

console.log(searchAndDivide(movies, string7));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const num4 = 4;

const removeIndex = (obj, n) => {
  const newObj = structuredClone(obj);
  newObj.splice(n, 1);
  return newObj;
};

console.log(removeIndex(movies, num4));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const selectContainer = () => {
  const container = document.getElementById("container");
  return container;
};

console.log(selectContainer());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selectTag = () => {
  const td = document.querySelectorAll("td");
  return td;
};

console.log(selectTag());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTd = () => {
  const td = document.querySelectorAll("td");
  for (let i = 0; i < td.length; i++) {
    console.log(td[i].innerText);
  }
};

printTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const addBackgroundColor = () => {
  const ahref = document.querySelectorAll("a[href]");
  ahref.forEach((element) => (element.style.backgroundColor = "red"));
};

addBackgroundColor();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addElement = function () {
  const ul = document.querySelector("#myList");
  const li = document.createElement("li");
  li.innerText = "added element";
  ul.appendChild(li);
};

addElement();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const emptyList = () => {
  const ul = document.querySelectorAll("#myList li");
  for (let i = 0; i < ul.length; i++) {
    ul[i].remove();
  }
};

emptyList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addTr = () => {
  const tr = document.querySelectorAll("tr");
  tr.forEach((element) => element.classList.add("test"));
};

addTr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const num5 = 5;

const halfTree = (n) => {
  let i = 1;
  const symbol = "*";
  while (i <= n) {
    console.log(symbol.repeat(i));
    i++;
  }
};

halfTree(num5);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

// Riutilizzo la variabile num5 dichiarata nell'esercizio 28

const tree = (n) => {
  let i = 1;
  let j = n - 1;
  const empty = " ";
  const symbol = "*";
  while (i <= n) {
    console.log(empty.repeat(j) + symbol.repeat(i * 2 - 1));
    i++;
    j--;
    if (j < 0) {
      break;
    }
  }
};

tree(num5);

// 1 --> 2
// 2 --> 3
// 3 --> 5
// 4 --> 7
// 5 --> 9

// (i * 2) - 1

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const num6 = 17;
const num7 = 8;

const isItPrime = (n) => {
  let isPrime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
};

console.log(isItPrime(num6));
console.log(isItPrime(num7));

/* Questo array viene usato per gli esercizi. Non modificarlo. */
