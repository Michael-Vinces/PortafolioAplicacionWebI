function toggleMenu(){
    const menuToggle =document.querySelector('.toggle');
    const sidebar =document.querySelector('.sidebar');               
    sidebar.classList.toggle('active')
    menuToggle.classList.toggle('active')

}
(function(){
    
    const sliders = [...document.querySelectorAll('.wbody')];
    const buttonNext = document.querySelector('#right');
    const buttonBefore = document.querySelector('#left');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.wbody-show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('wbody-show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('wbody-show');

    }

})();