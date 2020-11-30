let button = document.querySelector('.picker--outer');
let nameOne = document.querySelector('.js-nameOne')
let nameTwo = document.querySelector('.js-nameTwo')
let genderOne = document.querySelector('.js-genderOne')
let genderTwo = document.querySelector('.js-genderTwo')
let deptOne = document.querySelector('.js-deptOne')
let deptTwo = document.querySelector('.js-deptTwo')
button.addEventListener('click',()=>{
    let rndOne = getNumber()
    let rndTwo = getNumber()
    if(rndOne === rndTwo){
        rndOne++
    }
    nameOne.innerHTML = names[rndOne].name
    genderOne.innerHTML = names[rndOne].gender
    deptOne.innerHTML = names[rndOne].dept
    
    nameTwo.innerHTML = names[rndTwo].name
    genderTwo.innerHTML = names[rndTwo].gender
    deptTwo.innerHTML = names[rndTwo].dept
//     let picked = new Array();
//     picked.push(names[rndOne]);
//     picked.push(names[rndTwo]);
//     console.log(picked)
//     picked.forEach(name =>{
//     // localStorage.setItem('details',name)
//     console.log(name)
// })
})
let names = [
    {
        name:'Oladele Dolapo',
        dept:'PAP',
        gender:'Female'
    },
    {
        name:'Oladosu Maryam Banke',
        dept:'CSE',
        gender:'Female'
    },
    {
        name:'Wakil Aminat Funmilayo',
        dept:'CSE',
        gender:'Female'
    },
    {
        name:'Gbadegesin Abdullahi',
        dept:'EEE',
        gender:'Female'
    },
    {
        name:'Kareem Musbau',
        dept:'CSE',
        gender:'Male'
    },
    {
        name:'Ndulue Paschal',
        dept:'CSE',
        gender:'Male'
    },
    {
        name:'Azeez Ganiyat Oluwatoyin',
        dept:'EEE',
        gender:'Female'
    },
    {
        name:'Adejumo Joshua',
        dept:'EEE',
        gender:'Male'
    }
]
function getNumber() {
    return Math.floor(Math.random()*names.length)
}
// names.forEach(name =>{
//     console.log(name)
// })