let app = (function () {
    const _colorCircle = document.querySelector('.container__color-circle');
    const _colorInput = document.querySelector('.container__color-form__form__color');
    const _colorForm = document.querySelector('.container__color-form__form');
    const _colorError = document.querySelector('.container__color-form__form__error');

    const _allowChars = ['#', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    const _colorErrorMessage = "Color must be in hexadecimal format, contains 7 characters and starts with a #";
    const _regex = /#/g;

    let _color = '';
    let _colorHex = '';
    let _colorCycleInterval = null;
    let _increment = 100;

    _colorForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let color = _colorInput.value;
        _color = color;

        if ( checkValidColorInput(color) ) {
            clearColorErrorMessage();
            renderColorCircleColor(color);
            getColorHex();
            startColorCycle();
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
        return color.match(_regex).length === 1 && color[0] === "#";
    }

    function displayColorErrorMessage() {
        _colorError.textContent = _colorErrorMessage;
    }

    function clearColorErrorMessage() {
        _colorError.textContent = '';
    }

    function getColorHex() {
        _colorHex = _color.slice(1, _color.length);
    }

    function randomHexColor() {
        return Math.floor(Math.random() * parseInt("ffffff", 16));
    }

    function incrementColor() {
        let colorHexValue = parseInt(_colorHex, 16);
        let temp = colorHexValue + _increment;
        if ( temp < 16777215 ) {
            _colorHex = temp.toString(16);
            _color = `#${_colorHex}`;
        } else {
            _colorHex = '000000';
            _color = '#000000';
        }
        console.log(_color);
    }


    function startColorCycle() {
        _colorCycleInterval = setInterval(() => {
            incrementColor();
            _colorCircle.style.backgroundColor = `#${_colorHex}`;
        }, 250);
    }

})();