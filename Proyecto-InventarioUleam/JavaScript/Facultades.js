function toggleMenu(){
    const menuToggle =document.querySelector('.toggle');
    const sidebar =document.querySelector('.sidebar');               
    sidebar.classList.toggle('active')
    menuToggle.classList.toggle('active')

}