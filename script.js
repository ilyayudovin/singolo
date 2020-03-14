const Menu = document.getElementById("section-list");
Menu.addEventListener('click', (event)=>{
    Menu.querySelectorAll('li').forEach(el => el.classList.remove('active-li'));
    Menu.querySelectorAll('a').forEach(el => el.classList.remove('active-li'));
    event.target.classList.add('active-li');
    Menu.classList.remove('active');

});

const Gallery = document.getElementById('gallery');
Gallery.addEventListener('click',(event)=>{
    Gallery.querySelectorAll('img').forEach(el => el.classList.remove('clicked-pic'));
    event.target.classList.add('clicked-pic');

});

const Tab =  document.getElementById('tabs');
Tab.addEventListener('click', (event)=>{
    if(event.target.id !== 'tabs'){
        Tab.querySelectorAll('div').forEach(el=>el.classList.remove('clicked-tab'));
        event.target.classList.add('clicked-tab');
        const pics = document.getElementById('gallery');
        pics.querySelectorAll('div').forEach(function (el) {
            if(el.style.order === '12'){
                el.style.order = (Number(el.style.order)-11).toString();
            }
            else{
                el.style.order = (Number(el.style.order)+1).toString();
            }
        });
    }
});

const Send = document.getElementById('submitbtn');
const OK = document.getElementById('okbtn');
const input1 = document.getElementById('name');
const input2 = document.getElementById('email');
const form = document.getElementById('form');

input1.addEventListener("click", ()=>{
    input1.style.boxShadow="";
});
input2.addEventListener("click", ()=>{
    input2.style.boxShadow="";
});

Send.addEventListener('click',(event)=>{
    event.preventDefault();
    if(!input1.checkValidity() || !input2.checkValidity()){
        input1.style.boxShadow="0 0 6px 1px red inset";
        input2.style.boxShadow="0 0 6px 1px red inset";
    }
    else {
        input1.style.boxShadow="";
        input2.style.boxShadow="";

        const theme = document.getElementById('subject').value;
        const theme_field = document.getElementById('theme-field');

        if (theme.toString() === '') {
            theme_field.innerText = "Без темы";
        }
        else {
            theme_field.innerText = "Тема: " + theme;
        }

        const description = document.getElementById('description').value;
        const description_field = document.getElementById('description-field');

        if (description.toString() === '') {
            description_field.innerText = "Без описания";
        }
        else {
            description_field.innerText = "Описание: " + description;
        }

        const pop_up = document.getElementById('pop-window');
        pop_up.style.display = "block";
    }
    form.reset();
});

OK.addEventListener('click',(event)=>{
    const pop_up = document.getElementById('pop-window');
    pop_up.style.display="none";
});

const arrows = document.getElementsByClassName('arrow');
let slides = document.getElementsByClassName('slide');
arrows[0].addEventListener('click',function (event) {
    let activeSlide = document.getElementsByClassName('active');
    if (arrows[0].id === 'previous') {
        slides[0].parentNode.insertBefore(slides[3],slides[0]);
        activeSlide[0].classList.remove('active');
        slides[1].classList.add('active');
    }
});
arrows[1].addEventListener('click',function(){
    let activeSlide = document.getElementsByClassName('active');
    if(arrows[1].id === 'next'){
        slides[3].parentNode.insertBefore(slides[0],null);
        activeSlide[0].classList.remove('active');
        slides[1].classList.add('active');
    }
});

const phone1 = document.getElementsByClassName('phone-click');
const phone2 = document.getElementsByClassName('phone-click2');
phone1[0].addEventListener('click',()=>{
    //let sreen = document.getElementById('black-sreen');
    if(document.getElementsByClassName('black-screen')[0].style.display == "none" || document.getElementsByClassName('black-screen')[0].style.display == ''){
        document.getElementsByClassName('black-screen')[0].style.display = "block";
        document.getElementsByClassName('black-screen')[1].style.display = "block";

    }
    else{
        document.getElementsByClassName('black-screen')[0].style.display = "none";
        document.getElementsByClassName('black-screen')[1].style.display = "none";

    }
});
phone1[1].addEventListener('click',()=>{
    //let sreen = document.getElementById('black-sreen');
    if(document.getElementsByClassName('black-screen')[1].style.display == "none" || document.getElementsByClassName('black-screen')[1].style.display == ''){
        document.getElementsByClassName('black-screen')[0].style.display = "block";
        document.getElementsByClassName('black-screen')[1].style.display = "block";
    }
    else{
        document.getElementsByClassName('black-screen')[0].style.display = "none";
        document.getElementsByClassName('black-screen')[1].style.display = "none";
    }
});

phone2[0].addEventListener('click',()=>{
    //let sreen = document.getElementById('black-sreen');
    if(document.getElementsByClassName('black-screen2')[0].style.display === "none" || document.getElementsByClassName('black-screen2')[0].style.display === ''){
        document.getElementsByClassName('black-screen2')[0].style.display = "block";
        document.getElementsByClassName('black-screen2')[1].style.display = "block";

    }
    else{
        document.getElementsByClassName('black-screen2')[0].style.display = "none";
        document.getElementsByClassName('black-screen2')[1].style.display = "none";

    }
});
phone2[1].addEventListener('click',()=>{
    //let sreen = document.getElementById('black-sreen');
    if(document.getElementsByClassName('black-screen2')[1].style.display === "none" || document.getElementsByClassName('black-screen2')[1].style.display === ''){
        document.getElementsByClassName('black-screen2')[0].style.display = "block";
        document.getElementsByClassName('black-screen2')[1].style.display = "block";
    }
    else{
        document.getElementsByClassName('black-screen2')[0].style.display = "none";
        document.getElementsByClassName('black-screen2')[1].style.display = "none";
    }
});
