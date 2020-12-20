let app = (function() {
    let _colorCircle = document.querySelector('.container__color-circle');
    let _colorInput = document.querySelector('.container__color-form__form__color');
    let _colorForm = document.querySelector('.container__color-form__form');
    

    _colorForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let color = _colorInput.value;
        renderColorCircleColor(color);
    })
    
    function renderColorCircleColor(color) {
        _colorCircle.style.backgroundColor = color;
    }

    
})();