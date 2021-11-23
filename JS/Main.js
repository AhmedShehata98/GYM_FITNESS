//random img changer
const imgElement = document.querySelector('.Landing');
let arrIMG       = [ '00.jpg', '01.jpg' , '02.jpg' , '03.jpg' , '04.jpg' ,'05.jpg' ,'06.jpg'];

//Create Function 
function BACKGROUBD_CHANGER(ele,imgs){
    setInterval(() => {
        var randNumber = Math.floor( Math.random() * imgs.length );
        ele.style.backgroundImage=`url("img/Slide_Show/0${randNumber}.jpg")`
    }, 3000);
}
//Trigger function to random change
BACKGROUBD_CHANGER(imgElement , arrIMG);
//
//toggle navbar
const toggle = document.querySelector('#toggle');
const spans = document.querySelectorAll('#toggle span');
const links   = document.querySelector('header nav')



    toggle.addEventListener('click' , ()=>{
        links.classList.toggle("toggleMenu")
        spans[0].classList.toggle('trans0')
        spans[1].classList.toggle('trans1')
        spans[2].classList.toggle('trans2')
    })


const Welcome_encourage =document.querySelector('.Welcome_encourage .container');
const encour_txt_box =document.querySelector('.Welcome_encourage .container .encour_txt_box');

window.addEventListener('scroll' , ()=>{
    if (window.scrollY >= 132 ) {
        Welcome_encourage.style.opacity= '1'; 
        encour_txt_box.style.transform='translateY(-10px)';
        
    }else if( window.scrollY <= 457){
        Welcome_encourage.style.opacity= '0'; 
        encour_txt_box.style.transform='translateY(30px)';
    }
})

//Train Classes
//
const Training_Classes = document.querySelector('.Training_Classes .container .Classes_text_box');


    window.addEventListener('scroll',()=>{
        if (window.scrollY >= 1085) {
            Training_Classes.style.transform='translateY(0)'
            Training_Classes.style.opacity='1'
            
        }else if (window.scrollY <= 598 ){
            Training_Classes.style.transform='translateY(-180%)'
            Training_Classes.style.opacity='0'
        }
    })


//
//Traing One
const text_traing_one = document.querySelector('.traingOne .container .Boxing_box');

window.onscroll= function(){
    if (window.scrollY >= 1633) {
        text_traing_one.style.transform='translateX(0)'
        text_traing_one.style.opacity='1'
        
    }else if (window.scrollY <= 1340 ){
        text_traing_one.style.transform='translateX(-150%)'
        text_traing_one.style.opacity='0'
    }
}

//
//Holding Ropes
//
const HoldingRopes = document.querySelector('.TraingTwo .container .Ropes_box');

window.addEventListener('scroll' , ()=>{
    if (window.scrollY >= 2023) {
        HoldingRopes.style.transform= 'translateX(0%)';
        HoldingRopes.style.opacity= '1'
    }else if(window.scrollY >= 2383){
        HoldingRopes.style.transform= 'translateX(150%)';
        HoldingRopes.style.opacity= '0'
    }else if(window.scrollY <= 1737){
        HoldingRopes.style.transform= 'translateX(150%)';
        HoldingRopes.style.opacity= '0'
    }
})

//
// Back Muscle 
//
const backMuscle = document.querySelector('.traingThree .container .Back_muscle_box');

window.addEventListener('scroll' , ()=>{
    if (window.scrollY >= 2617) {
        backMuscle.style.opacity= '1'
        backMuscle.style.transform= 'translateX(0%)';
    }else if(window.scrollY >= 2348){
        backMuscle.style.opacity= '0'
        backMuscle.style.transform= 'translateX(-150%)';
    }
})
//
//Coaches Secton
//
const coathesCaption = document.querySelectorAll('.Our_Coaches .Coaches_list .coache_box .caption_box');
for(let caption of coathesCaption ){

    window.addEventListener('scroll', ()=>{
        if (window.scrollY >= 3150) {
            
            caption.style.transform= 'translateY(0)'
        }else if(window.scrollY >= 3043){
            
            caption.style.transform= 'translateY(200%)'
        }
    })
    
}