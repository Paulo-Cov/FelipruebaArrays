let carreritas= ["Lucía", "Roberto", "María", "Jesús", "Andrea", "José"];
console.log(carreritas);
carreritas.splice(4,1);
carreritas.splice(2,0,"Andrea");
console.log(carreritas);
console.log("Tenemos a Andrea a toda velocidad hasta pasar a María");
carreritas.pop();
console.log(carreritas);
console.log("Y tenemos tarjeta roja para José");
carreritas.splice(1,0,"Cristóbal", "Fernanda", "Armando");
console.log(carreritas);
console.log("Vaya carrera, entran tres nuevos competidores en el 2°, 3° y 4° lugar");
carreritas.unshift("Federico");
console.log(carreritas);
console.log("Continuan apareciendo nuevos competidores Federico entra cpn el primer lugar");

