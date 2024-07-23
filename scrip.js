// const name = bekhruz;
// const age = 17;
// const isMarried = false; // data- tupe boolean
// //console.log(car);//data-tupe null
// let car;
// console.log(car); //data- tupe underfined

// // --------------
// const person = {
// name:"bekhruz",
// age : 17,
// };
// console.log(person.name);
// person.name = "bekhruz";
// person.job = "fronted developer";
// console.log(person);


// //-------------
// const colors  = ["red","yellow","green"];
// console.log(colors[0]);
// colors[0] = "black";
// colors[3] ="orange";
// console.log(colors);




  const NumberofSeries = prompt("cколько сериал видели,?")
const seriesDB ={
    count : NumberofSeries,
    serias:{},  // пустой обьект для сериалов
    актеры : [], //  пустой массив для актеров
    genres: [] , // пустой массив для жанров
    private: false,// логический тип данных значение false
};





let lastSeries = prompt ("последний сериал, который ты смотрел?")
let rating = prompt ("оцените сериал от 1-10?")
seriesDB.serias[lastSeries] = rating
console.log(seriesDB)
    
if (NumberofSeries <= 5) {
  console.log("вы не долгий зритель");
}
else if (NumberofSeries >=5){
  console.log("средний зритель");
}else if(NumberofSeries >=9){
  console.log("вы звезда сериалов")
}







