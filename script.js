const sideMenu = document.querySelector('#sideMenu');
const navbar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}
window.addEventListener('scroll', ()=> {
    if(scrollY > 50){
        navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border','dark:shadow-white/50', "dark:bg-transparent");
    }else{
        navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border','dark:shadow-white/50', "dark:bg-transparent");
    }
})

// --------- light mode  and dark mode ------------------

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
  };
  if(typeof grecaptcha === 'undefined') {
    grecaptcha = {};
  }
  grecaptcha.ready = function(cb){
    if(typeof grecaptcha === 'undefined') {
      const c = '___grecaptcha_cfg';
      window[c] = window[c] || {};
      (window[c]['fns'] = window[c]['fns']||[]).push(cb);
    } else {
      cb();
    }
  }
  grecaptcha.ready(function(){
    grecaptcha.render("container", {
      sitekey: "ABC-123"
    });
  });
  const onloadCallback = function() {
    console.log("reCAPTCHA has loaded!");
    grecaptcha.reset();
  };