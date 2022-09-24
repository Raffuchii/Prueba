
// Creo que esta parte el visor de GitHud no logra visualizarlo pero el de VSC si (???)
window.addEventListener("scroll", function(){
        var header = document.querySelector("header")
        if (window.scrollY>0) {
            header.style.backgroundColor="#198754";
        }else{
            header.style.backgroundColor="transparent";
    
        }
    
    }) 


  
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    
    
