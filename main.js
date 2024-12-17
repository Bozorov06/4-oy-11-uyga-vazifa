
// FIND VA FINDINDEX UCHUN MASALALAR

// 1.Massiv ichida 5 ga karrali bo‘lgan birinchi elementni toping.
// let arr = [1,2,3,4,10,15]
// let res = arr.find(value=>{
//     return value%5==0
// })
// console.log(res);

// ====================================================================
// 2.Massiv ichida 20 dan kichik bo‘lgan birinchi toq sonning indeksini toping.

// let arr = [12,24,19,17,16,14]
// let res = arr.findIndex(value =>{
//    return value < 20 && value % 2 !== 0;
// })
// console.log(res);

// =====================================================================
// 3.Massiv ichida 0 bilan tugaydigan birinchi elementni toping.
// let arr=[21,14,80,20,40,25,43,57]
// let res = arr.find(value=>{
//     return value % 10 == 0
// })
// console.log(res);



// SOME UCHUN MASALALAR 


// =====================================================================
// 1.Massivda 50 ga teng yoki undan katta elementlar bor-yo‘qligini aniqlang.
// let arr = [2,3,52,50,54,34,23,12,10]
// let res = arr.some(value=>{
//     return value >= 50
// })
// console.log(res);



// =====================================================================
// 2.Massivda manfiy sonlar bor-yo‘qligini aniqlang.
// let arr = [1,2,3,4,5,-6,-7,8]
// let res = arr.some(value => {
//     return value < 0
// })
// console.log(res);




// =====================================================================
// 3.Massivda 3 ga karrali bo‘lgan sonlar bor-yo‘qligini tekshiring.
// let arr = [1,2,3,4,5,6,7,8,9]
// let res = arr.some(value =>{
//     return value%3==0
// })
// console.log(res);




// EVERY UCHUN MASALALAR 


// =====================================================================
// 1.Massivdagi barcha sonlar musbat ekanligini tekshiring.
// let arr = [1,2,3,4,5,6,7,8]
// let res = arr.every(value =>{
//     return value > 0
// })

// console.log(res);


// =====================================================================
// 2.Massivdagi barcha sonlar 10 dan katta ekanligini tekshiring.
// let arr = [18,27,36,45,54,63,72,81]
// let res = arr.every(value =>{
//     return value > 10
// })
// console.log(res);


// =====================================================================
// 3.Massivdagi barcha sonlar toq ekanligini aniqlang.
// let arr = [1,3,5,7,6]
// let res = arr.every(value =>{
//     return value % 2 == 1
// })

// console.log(res);



//    STRING METODLARI


// 1.charAT 


// ==================================================
// 1.Berilgan matnning uchinchi belgisi nima ekanligini aniqlang.
// let str = 'world'
// let res = str.charAt(2)
// console.log(res);


// ==================================================
// 2.Matnning oxiridan ikkinchi belgisini toping.

// let str = 'uzbekistan'
// let res = str.charAt(str.length-2)
// console.log(res);


// 2.charCodeAt


// ==================================================
// 1.Berilgan matnning birinchi belgisi uchun Unicode qiymatini aniqlang.
// let str = 'hello world'
// let res = str.charCodeAt(1)
// console.log(res);

// ==================================================
// 2.Matnning beshinchi belgisining Unicode qiymatini toping.
// let str = 'uzbekiston'
// let res = str.charCodeAt(5)
// console.log(res);


// 3.slice


// ==================================================
// 1.Berilgan matndan birinchi 5 ta belgini ajratib oling.
// let str = 'uzbekistan'
// let res = str.slice(0,5)
// console.log(res);


// ==================================================
// 2.Matnning oxirgi 3 ta belgisini ajratib oling.
// let str = 'fargona'
// let res = str.slice(str.length-3)
// console.log(res);


// 4. substring


// ==================================================
// 1.Matnning 2-pozitsiyadan boshlab 6-pozitsiyagacha bo‘lgan qismini ajrating.
// let str = 'hello uzbekistan'
// let res = str.substring(2,6)
// console.log(res);


// ==================================================
// 2.Matnning oxirgi uchta belgisini substring yordamida oling.
// let str = "uzbekistan";
// let res = str.substring(str.length-3);
// console.log(res);


// 5. substr

// ==================================================
// 1.Matnning 4-pozitsiyadan boshlab 5 ta belgisini oling.
// let str = 'olma,salom,world'
// let res = str.substr(4,5)
// console.log(res);




// ==================================================
// 2.Berilgan matnning boshidan 7 ta belgisini substr yordamida ajrating.
// let str = "shaftoli,nok,hello "
// let res = str.substr(0,7)
// console.log(res);

// 6. toUpperCase, toLowerCase


// ==================================================
// 1.Berilgan matnni faqat katta harflar bilan yozing.
// let str = 'uzbekistan'
// let res = str.toUpperCase()
// console.log(res);


// ==================================================
// 2.Matnning birinchi yarmidan kichik harflar, ikkinchi y
// let str = 'HELLO WORLD'
// let res = str.toLocaleLowerCase()
// console.log(res);



// 7. concat

// ==================================================
// 1.Berilgan ikkita matnni birlashtiring.
// let str1 = ' Hello '
// let str2 = ' World '
// let res = str1.concat(str2)
// console.log(res);

// ==================================================
// 2.Matnga qo‘shimcha qilib "!" belgisi qo‘shing va yangi matn yarating.
//  let str1 = 'Hello'
//  let str2 = ' '
//  let str3 = 'World'
//  let str4 = '!'
//  let res = str1.concat(str2,str3,str4)
//  console.log(res);
 

// 8. trim, trimStart, trimEnd


// ==================================================
// 1.Matnning boshidagi va oxiridagi bo‘sh joylarni olib tashlang.
// let str = ' uzbekistan '
// let res = str.trim()
// console.log(res);



// ==================================================
// 2.Matnning faqat boshidagi bo‘sh joylarni olib tashlang.
// let str = ' olma , nok , anor '
// let res = str.trimStart()
// console.log(res);





// 9.padStart,padEnd


// ==================================================
// 1.Berilgan matnni boshidan 10 belgiga to‘ldiring, “*” belgisi bilan.
// let str = 'hi'
// let res = str.padStart(10,'*')
// console.log(res);



// ==================================================
// 2.Matnni oxiridan 15 belgiga “#” bilan to‘ldiring.
// let str = 'hello'
// let res = str.padEnd(15,'#')
// console.log(res);



// 10.repeat


// ==================================================
// 1.Matnni 3 marta takrorlab yangi matn yarating.
// let str = ' bye '
// let res = str.repeat(3)
// console.log(res);



// ==================================================
// 2.Belgini 5 marta takrorlab, string yaratib oling.
// let str = '"salom"'
// let res = str.repeat(5)
// console.log(res);




// 11. replace, replaceAll



// ==================================================
// 1.Matnning ichidagi birinchi "a" harfini "o" harfiga almashtiring.
// let str = 'salom'
// let res = str.replaceAll("a","o")
// console.log(res);



// ==================================================
// 2.Matnning barcha “ ” (bo‘sh joy) belgilarini “_” belgilariga almashtiring.
// let str = 'Hello World'
// let res = str.replace(" ", "_")
// console.log(res);


// 12. split


// ==================================================
// 1.Matnni har bir so‘zdan ajratib massivga aylantiring.
// let str = 'banan,olma,nok,anor'
// let res = str.split("")
// console.log(res);



// ==================================================
// 2.Matnni har bir belgidan ajratib massiv yarating.
// let str = 'banan,olma,nok,anor'
// let res = str.split(",")
// console.log(res);



// 13. indexOf, lastIndexOf


// ==================================================
// 1.Matndagi "a" harfi birinchi marta qayerda uchrayotganini aniqlang.
// let str = 'uzbekistan'
// let res = str.indexOf('a')
// console.log(res);


// ==================================================
// 2.Matndagi "e" harfi oxirgi marta qayerda uchrayotganini toping.
// let str = 'levelup'
// let res = str.lastIndexOf('e')
// console.log(res);


// 14. includes


// ==================================================
// 1.Matn ichida "hello" so‘zi bor-yo‘qligini tekshiring.
// let str = 'hello world'
// let res = str.includes('hello')
// console.log(res);




// ==================================================
// 2.Matn ichida "!" belgisi mavjudligini aniqlang.
// let str = 'Hello World!'
// let res = str.includes('!')
// console.log(res);



// 15. search



// ==================================================
// 1.Matn ichida birinchi "good" so‘zi qayerda joylashganini aniqlang.
// let str = 'hi goodmorning'
// let res = str.search('good')
// console.log(res);


// ==================================================
// 2.Matnda raqam uchraydigan joyni aniqlang.
// let str = 'nok 5 ming som'
// let res = str.search(5)
// console.log(res);


// 16. startsWith, endsWith


// ==================================================
// 1.Matn "Hello" so‘zi bilan boshlanadimi yoki yo‘qmi, tekshiring.
// let str = "Hello world, welcome to the Fergana";
// let res = str.startsWith('Hello')
// console.log(res);



// ==================================================
// 2.Matn oxirida "bye" so‘zi borligini aniqlang.

// let str = "Hello world,";
// let res = str.endsWith('bye')
// console.log(res);


// massivga oid masalalar

// 1. users massivida age qiymati 25 dan katta bo‘lgan foydalanuvchilarni toping.
 

// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true }
// ];
// let res = users.filter(user =>{
//     return user.age>25
// })
// console.log(res);

// 2. products massivida price qiymati 500 dan kichik bo‘lgan mahsulotlarni aniqlang.


// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 4.2 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];
// let res = products.filter(value => value.price <500)
// console.log(res);




// 3. tasks massivida status qiymati "pending" bo‘lgan vazifalarni boshqa massivga ajrating.


// let tasks = [
//   { id: 1, title: "Do homework", status: "completed" },
//   { id: 2, title: "Clean room", status: "pending" },
//   { id: 3, title: "Go shopping", status: "pending" }
// ];

// let res = tasks.filter(value => value.status == "pending")
// console.log(res);




// 4. users massivida isActive qiymati true bo‘lgan foydalanuvchilar sonini hisoblang.



// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true },
// ];

// let counter = 0;

// let res = users.forEach(user =>{
//     if(user.isActive){
//         counter++
//     }
// })
//  console.log(counter);




// 5. products massivida rating qiymati eng yuqori bo‘lgan mahsulotni toping.
// Massiv:
// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 4.3 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];

// let max = products[0].rating
// let res = products[0];

// products.forEach((product)=>{
//     if (product.rating < max) {
//         max = product.rating;
//         res = product
//     }
// })
// console.log(res);






// 6. users massividagi har bir foydalanuvchining faqat name va age qiymatlarini ajratib oling.
// Massiv:
// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true }
// ];

// let res = users.map(user=>{
//     delete user.isActive
//     delete user.id
//     return user
// })
// console.log(res);




// 7. products massivida price qiymati eng kichik bo‘lgan mahsulotni aniqlang.


// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 4.2 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];

// let min = products[0].price
// let res = products[0]
// products.forEach(product =>{
//     if(products.price)
// })




// 8. tasks massivida title qiymati "Clean room" bo‘lgan vazifaning indeksini aniqlang.


// let tasks = [
//   { id: 1, title: "Do homework", status: "completed" },
//   { id: 2, title: "Clean room", status: "pending" },
//   { id: 3, title: "Go shopping", status: "pending" }
// ];

// let res = tasks.findIndex(task=>{
//     return task.title = 'Clean room'
// })
// console.log(res);




// 9. users massivida barcha foydalanuvchilarning age qiymatlari yig‘indisini hisoblang.


// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true }
// ];




// 10. products massividagi har bir mahsulotning price qiymatini 10% ga kamaytirib yangi massiv yarating.



// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 4.2 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];

// let res = products.map(product=>{
//     product.price = product.price - product.price / 10;
//     return product
    
// })
// console.log(res);





// 11. users massivida name qiymati "Ali" bo‘lgan foydalanuvchini toping.



// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true }
// ];
// let res = users.find(user=>{
//     return user.name == 'Ali'
// })
// console.log(res);




// 12. tasks massivida barcha status qiymatlari "completed" ekanligini tekshiring.



// let tasks = [
//   { id: 1, title: "Do homework", status: "completed" },
//   { id: 2, title: "Clean room", status: "completed" },
//   { id: 3, title: "Go shopping", status: "completed" }
// ];

// let res = tasks.every(task=>{
//     return task.status == 'completed'
// })

// console.log(res);




// 13. products massivida rating qiymati 4 dan katta bo‘lgan mahsulotlar sonini hisoblang.


// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 3.9 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];

// let counter
//  products.forEach(product =>{

// })



// 14. users massivida age qiymati eng katta bo‘lgan foydalanuvchini aniqlang.


// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true }
// ];





// 15. tasks massivida har bir title qiymatini bosh harfini katta qilib yangi massiv yarating.


// let tasks = [
//   { id: 1, title: "do homework", status: "completed" },
//   { id: 2, title: "clean room", status: "pending" },
//   { id: 3, title: "go shopping", status: "pending" }
// ];

// let res = tasks.map(task =>{
//     task.title = task.title[0].toLocaleUpperCase
// })
// console.log(res);





// let str = 'salom bolalar yaxwimiszlar'
// function k(str) {
//     let res = str.split();
//     str.map(value => 
//       value[0].toUpperCase() + value(1){

//     }
// )
//     return res.join('')
// }


// console.log(k(str));



