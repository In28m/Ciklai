/*1. Padaryk, kad kompiuteris 10 kartų paconsole'intų tavo vardą.*/
for (var number = 0; number < 10; number++) {
    console.log("Ina");
  }
  
/*2. Pakoreguok pirmą pratimą, kad tiek vardas, tiek kiek kartų kartos - būtų kintamieji.*/

var vardas = "Ina";
var kartai = 100;
for (var number = 0; number < kartai; number++) {
  console.log("Ina");
}


/*3. Prie savo vardo atspaudink ir 'i' raidę, t.y. kelintas ciklas yra (pvz.: "0. Petras", "1. Petras", "2. Petras")...

Parašyk for loopą, kuris atspaudins nuo 10 iki 1 countdown konsolėje.*/

for (var i = 10; i > 0; i--) {
    console.log(i + ". Ina");
  }
  

  /*Papildoma*/

 /* Nurodytų ar spėtas skaičius didesnis ar mažesnis už slaptą skaičių
Slaptas skaičius turėtų būti tarp 1 ir 1000, bet nereikia nurodyti spėjėjui intervalo*/

var spejimas = prompt("Įveskite skaičių nuo 1 iki 1000")
if (spejimas > slaptasSkaicius) {
    console.log("Mažesnis");
  } else if (spejimas < slaptasSkaicius) {
    console.log("Didesnis");
  } else {
    console.log("Atspėjai!");
  }

