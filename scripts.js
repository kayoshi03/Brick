let Navigatin = document.querySelector('.header_nav')
    let Gambuger = document.querySelector('.gambuger')


// Gambuger.addEventListener('click', function(e){
    
//     if('click'){
//         document.querySelector('.header_nav').classList.toggle('show')
//         console.log('1');
//     }
//     else if(){
//         document.querySelector('.header_nav').classList.remove('show')
//         console.log('2');
//     }
    
// })

this.addEventListener('click', function(e){
    if(e.target !== this.document.querySelector('svg') && e.target !== this.document.querySelector('path') ){
        this.document.querySelector('.header_nav').classList.remove('show')

    }
    else {
        this.document.querySelector('.header_nav').classList.toggle('show')
    }

})