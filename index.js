let button = document.querySelector('.picker--outer');
let nameOne = document.querySelector('.js-nameOne')
let nameTwo = document.querySelector('.js-nameTwo')
let genderOne = document.querySelector('.js-genderOne')
let genderTwo = document.querySelector('.js-genderTwo')
let deptOne = document.querySelector('.js-deptOne')
let deptTwo = document.querySelector('.js-deptTwo')
let form = document.querySelector('form')
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
        gender:'Male'
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
localStorage.setItem('names',names)
function getNumber() {
    return Math.floor(Math.random()*names.length)
}

form.addEventListener('submit',(e)=>{
e.preventDefault()
let add = document.querySelector('.added-notif')
let gender = document.querySelector('#gender')
let dept = document.querySelector('input[name="dept"]')
let name = document.querySelector('input[name="name"]')
if(name.value.length != 0 && dept.value.length !=0){
    names.push({
        name:name.value,
        dept:dept.value,
        gender:gender.value
    })
 add.classList.add('add')
}

})