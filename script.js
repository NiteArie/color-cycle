let app = (function () {
    const _colorCircle = document.querySelector('.container__color-circle');
    const _colorInput = document.querySelector('.container__color-form__form__color');
    const _colorForm = document.querySelector('.container__color-form__form');
    const _colorError = document.querySelector('.container__color-form__form__error');

    const _allowChars = ['#', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    const _colorErrorMessage = "Color must be in hexadecimal format, contains 7 characters and starts with a #";
    const _regex = /#/g;


    _colorForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let color = _colorInput.value;
        if ( checkValidColorInput(color) ) {
            clearColorErrorMessage();
            renderColorCircleColor(color);
        } else {
            displayColorErrorMessage();
        }
    })

    function renderColorCircleColor(color) {
        _colorCircle.style.backgroundColor = color;
    }

    function checkValidColorInput(color) {
        if (
            checkColorInputLength(color) &&
            checkColorInputChars(color) &&
            checkColorInputCharPosition(color)
        )
            return true;
        return false;
    }
    
    function checkColorInputLength(color) {
        return color.length === 7;
    }

    function checkColorInputChars(color) {
        for ( let i = 0; i < color.length; i++ ) {
            if ( _allowChars.indexOf(color[i].toUpperCase()) === -1) {
                return false;
            }
        }
        return true;
    }

    function checkColorInputCharPosition(color) {
        return color.match(_regex).length === 1;
    }

    function displayColorErrorMessage() {
        _colorError.textContent = _colorErrorMessage;
    }

    function clearColorErrorMessage() {
        _colorError.textContent = '';
    }

})();