let eu = {
    nome:"Luiza",
    idade: 20,
    time: "Flamengo",
}

eu.cabelo = "preto"
delete eu.idade
console.log(eu)

let cadastro=[{
    nome:"Adriano",
    idade:40,
  telefone:2199999-9999,
   amigos:["Du","Dudu","Edu","Eduardo"],
},
{
    nome:"Girlene",
    idade:38,
  telefone:2199999-9998,
   amigos:["Luiza","Adriano","Jessica","Tarcisio"],
},
{
    nome:"Luiza",
    idade:21,
  telefone:2199999-9997,
   amigos:["Gica","Luca","Giovana","Tati"],
},
{ 
 nome:"Rosangela",
 idade:77,
 telefone:2199999-9992,
 amigos:["Duda","Eduarda","Ale","Tamara"],
},
{ 
nome:"Hitalo",
idade:18,
telefone:2199999-9994,
amigos:["Paola","Sabrina","Felipe","Gabriel"],
}]

console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[0])
console.log(cadastro[4].amigos[0])