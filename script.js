

// function myFunction(name) {
//     console.log(`hi my name is ${name}`);

//     function showSkils() {
//         let array = ['html', 'css', 'js']
//         for (let i = 0; i < array.length; i++) {
//             console.log(`you have skills ${array[i]}`);
//         }
//     }
//     showSkils()
// }
// myFunction('bobur')




// function calcPow(num) {
//     return num * num
// }
//  console.log(calcPow(5));

//         ИФ ЕЛСЕ


// let age = 17

// let div = document.querySelector('.div');
// let diverr = document.querySelector('.div-error');
// const btn = document.querySelector('.button');

// function checkAge() {
//     btn.addEventListener('click', () => {
//         if (age < 18) {
//             diverr.style.display = 'block'
//         }else{
//             div.style.display = 'block'
//         }
        
//     } )
    
// }
// checkAge()



//                  ЛОКАЛ СТОРАГЕ


// const persone =  {
//     name: 'bobur', 
//     age: 17,
// }

// localStorage.setItem('persone', JSON.stringify(persone));

// const localDate = localStorage.getItem('persone');

// console.log(JSON.parse(localDate));

// const personInfo = JSON.parse(localDate)

// personInfo.name = 'usmon'
// personInfo.age = 20
// console.log(personInfo);
// localStorage.setItem('updatePersone', JSON.stringify(personInfo))

//                ЖСОН

// const car = {
//     model: 'nexiaR3',
//     color: 'black'
// }
// const json = JSON.stringify(car)
// console.log(json);

// const obj = JSON.parse(json);
// console.log(obj);



//                        ПРОМИСЕ


// let internet = true;

// const Wifi = new Promise(
//     function (resolve, reject) {
//         if (internet) {
//             const msg = 'kirishingiz mumkin'
//             resolve(msg)
//         }else{
//             const errmsg = 'internetingizni ustoga  kursating'
//             reject(errmsg)
//         }
//     }
// )
// Wifi
// .then(result => console.log(result))
// .catch(error => console.log(error))


//                     ФУНКСИЯ КОНСТРУКТОР

// function User (name, id) {
//     this.name = name;
//     this.id = id,
//     this.hello = function () {
//         console.log(`hello ${this.name}`);
//     }
// }

// User.prototype.exit = function () {
//     console.log(`user ${this.name} exit`);
// }

// const bobur = new User('bobur', 1)

// console.log(bobur);

// bobur.hello()

// bobur.exit()