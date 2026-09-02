
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id.length>1){
      const el=document.querySelector(id);
      if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}
    }
  });
});
const form=document.querySelector('[data-demo-form]');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    alert('Demo: solicitarea a fost înregistrată. În versiunea finală, formularul va trimite cererea către salon.');
  });
}


// Navigation safety: keep normal page scrolling enabled.
document.documentElement.style.overflowY = 'auto';
document.body.style.overflowY = 'auto';

// Mobile navigation
const toggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.menu');

if (toggle && navMenu) {
  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-open');
  });
}
