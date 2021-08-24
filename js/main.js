function openSlideMenu(){
    document.getElementById('side-menu').style.width ='200px';
}

function closeSlideMenu(){
    document.getElementById('side-menu').style.width ='0px';
}

const links=document.querySelectorAll('.side_links')
for(const link of links){
    link.addEventListener('click',()=>{
        closeSlideMenu();
    })
}