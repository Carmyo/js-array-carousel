console.log('ok js')

const previousButton = document.getElementById('previous')
const nextButton = document.getElementById('next')

nextButton.addEventListener('click',
    function () {
        const activeItem = document.querySelector('.pic.active');
        const nextElement = activeItem.nextElementSibling;
        if (nextElement) {
            activeItem.classList.remove('active');
            nextElement.classList.add('active')
        }
    }
)

previousButton.addEventListener('click',
    function () {
        const activeItem = document.querySelector('.pic.active');
        const nextElement = activeItem.previousElementSibling;
        if (nextElement) {
            activeItem.classList.remove('active');
            nextElement.classList.add('active')
        }
    }
)