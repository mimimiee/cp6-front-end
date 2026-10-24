(() => {
 const toggle=document.querySelector('.menu-toggle'); const menu=document.querySelector('.main-nav');
 if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu')}))}
 const items=document.querySelectorAll('.reveal');
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver'in window)){items.forEach(x=>x.classList.add('visible'));return}
 document.documentElement.classList.add('js-motion');
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});items.forEach(x=>observer.observe(x));
})();
