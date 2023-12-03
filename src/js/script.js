

const buttons = document.querySelectorAll('.industry__button');

buttons.forEach((item, i) => {
    item.addEventListener('click', () =>{
        buttons.forEach(item => {
            item.style.background = 'white'
        })
        item.style.background = 'red'
    })
})
