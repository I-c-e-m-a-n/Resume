'use strict'

const switcher = document.querySelector('.btn');
const switcher2 = document.querySelector('.btn2')

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    this.textContent = "Switch Theme"
    console.log('current class name: ' + className);
});

switcher2.addEventListener('click', function(){
    
})