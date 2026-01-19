const allElems = document.querySelectorAll('.elem');
const allfullElems = document.querySelectorAll('.fullElem');
const allfullElemsPageBackbtn = document.querySelectorAll('.fullElem .back-btn');

allElems.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        allfullElems[elem.id].style.display = 'block';
    })
})

allfullElemsPageBackbtn.forEach((back)=>{
    back.addEventListener('click',()=>{  
        allfullElems[back.id].style.display = 'none';
    })
})