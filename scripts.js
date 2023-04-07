let Navigatin = document.querySelector('.header_nav')
let Gambuger = document.querySelector('.gambuger')
let other = document.getElementById('other')
let modal = document.querySelector('.modal')
let modal_window = document.querySelector('.modal_window')
let modal_header =  document.querySelector('.modal_header')
let modal_body =  document.querySelector('.modal_body')


other.addEventListener('click', function(){
    modal.style.display = 'flex'
})

modal.addEventListener('click', (e) => {
    const cLose = e.composedPath().includes(modal_window);
    if( ! cLose){
        modal.style.display = 'none'
    }
})


this.addEventListener('click', function(e){
    if(e.target !== this.document.querySelector('svg') && e.target !== this.document.querySelector('path') ){
        this.document.querySelector('.header_nav').classList.remove('show')

    }
    else {
        this.document.querySelector('.header_nav').classList.toggle('show')
    }

})

