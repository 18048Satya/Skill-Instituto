let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}
ScrollReveal().reveal('.introduction', { delay: 300,  reset: true , origin: 'top', interval:200 });
ScrollReveal().reveal('.section-heading', { delay: 200,  reset: true , interval:200});
ScrollReveal().reveal('.project-card', { delay: 500,  origin: 'left' , reset: true, interval:200 });
ScrollReveal().reveal('.service-details', { delay: 200,  origin: 'left' , reset: true, interval:200 });
ScrollReveal().reveal('.para', { delay: 200,  origin: 'left' , reset: true, });
ScrollReveal().reveal('.skill-level', { delay: 500,  origin: 'left' , reset: true, interval:200 });
ScrollReveal().reveal('.skill-section', { delay: 200,  origin: 'right' , reset: true,  });
ScrollReveal().reveal('.container-form', { delay: 200,  origin: 'right' , reset: true,  });
ScrollReveal().reveal('.container-services', { delay: 200,  origin: 'right' , reset: true,  });
const parentContainer = document.querySelector('.section');
parentContainer.addEventListener('click', Event=>{
    const current = Event.target;
    const showMore = current.className.includes('show-more');
    if(!showMore) return;
    const currentText = Event.target.parentNode.querySelector('.content');
    currentText.classList.toggle('content-show');
    current.textContent = current.textContent.includes('Show More') ? "Show Less" : "Show More";
});
