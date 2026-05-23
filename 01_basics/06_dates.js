// Dates
// let mydate = Date()//string run krta hai 
let mydate = new Date()//object create that why use we functions 
// console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.getDate());
// console.log(typeof mydate);

// let createdDate = new Date(2023,5,14);
// console.log(createdDate.toDateString());
// let newdate = new Date(2023,6,7,8,5)
// console.log(newdate.toISOString());
// console.log(newdate.toLocaleString());
// let mycreatedDate = new Date("2023-6-7");
// console.log(mycreatedDate.toLocaleDateString());

//timestamp
let mytimestamp=new Date()
console.log(mytimestamp.getTime());
console.log(+mytimestamp);
let time=Date.now()
console.log(Math.floor(Date.now()/1000));





