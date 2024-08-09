console.log("Script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.slidebar').classList.toggle('slidebarGo');
    if(document.querySelector('.slidebar').classList.contains('slidebarGo')){
        document.querySelector('.Ham').style.display = 'inline'
        document.querySelector('.Cross').style.display = 'none'
    }
    else{
        document.querySelector('.Ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.Cross').style.display = 'inline'
 
        }, 300);
        }
})