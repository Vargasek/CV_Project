
alert("Witaj na stronie Piotra")//




function setElements(){

var name = document.getElementById("name").value;
var surname = document.getElementById("surname").value;
var birthday = document.getElementById("birthday").value;
var animal = document.getElementById("animal").value;

let person = {
    "name":name,
    "surname":surname,
    "birthday":birthday,
    "animal":animal}

window.localStorage.setItem("person", JSON.stringify(person))
alert("Zapisano dane w LocalStorage, dziekuje " +name)
if (animal = "Słonik"){
    alert("Widze że lubisz trąby " +name + ";)")
}
}