document.addEventListener("DOMContentLoaded", function () {
    const initialInput = document.getElementById('initial-degree');
    const resultOutput = document.getElementById('result');
    const initialDropdown = document.getElementById('initial-dropdown');
    const finalDropdown = document.getElementById('final-dropdown');
    const convertBtn = document.getElementById('convert-btn');
    const reverseBtn = document.getElementById('reverse-btn');
    const resetBtn = document.getElementById('reset-btn');
    const resultExplanationElement = document.getElementById('result-explanation');

    function convert() {
        const initialValue = parseFloat(initialInput.value);
        const initialUnit = initialDropdown.value;
        const finalUnit = finalDropdown.value;
        let result;
        let explanation = '';
        if (initialUnit === 'Celcius') {
            if (initialValue >  100 || initialValue <  0) {
                alert("Input in Celsius should be within the range  0-100");
            } else {
                if (finalUnit === 'Fahrenheit') {
                    result = (initialValue *  9 /  5) +  32;
                    explanation = `${initialValue}°C * (9/5) +  32 = ${result.toFixed(2)}°F`;
                } else if (finalUnit === 'Reamur') {
                    result = initialValue *  4 /  5;
                    explanation = `${initialValue}°C * (4/5) = ${result.toFixed(2)}°R`;
                } else if (finalUnit === 'Kelvin') {
                    result = initialValue +  273.15;
                    explanation = `${initialValue}°C +  273.15 = ${result.toFixed(2)}K`;
                } else {
                    result = initialValue;
                    explanation = `${initialValue}°C`;
                }
            }
        } else if (initialUnit === 'Fahrenheit') {
            if (initialValue >  212 || initialValue <  32) {
                alert("Input in Fahrenheit should be within the range  32-212");
            } else {
                if (finalUnit === 'Celcius') {
                    result = (initialValue -  32) *  5 /  9;
                    explanation = `${initialValue}°F -  32 * (5/9) = ${result.toFixed(2)}°C`;
                } else if (finalUnit === 'Reamur') {
                    result = (initialValue -  32) *  4 /  9;
                    explanation = `${initialValue}°F -  32 * (4/9) = ${result.toFixed(2)}°R`;
                } else if (finalUnit === 'Kelvin') {
                    result = (initialValue -  32) *  5 /  9 +  273.15;
                    explanation = `${initialValue}°F -  32 * (5/9) +  273.15 = ${result.toFixed(2)}K`;
                } else {
                    result = initialValue;
                    explanation = `${initialValue}°F`;
                }
            }
        } else if (initialUnit === 'Reamur') {
            if (initialValue >  80 || initialValue <  0) {
                alert("Input in Reamur should be within the range  0-80");
            } else {
                if (finalUnit === 'Celcius') {
                    result = initialValue *  5 /  4;
                    explanation = `${initialValue}°R * (5/4) = ${result.toFixed(2)}°C`;
                } else if (finalUnit === 'Fahrenheit') {
                    result = initialValue *  9 /  4 +  32;
                    explanation = `${initialValue}°R * (9/4) +  32 = ${result.toFixed(2)}°F`;
                } else if (finalUnit === 'Kelvin') {
                    result = initialValue *  5 /  4 +  273.15;
                    explanation = `${initialValue}°R * (5/4) +  273.15 = ${result.toFixed(2)}K`;
                } else {
                    result = initialValue;
                    explanation = `${initialValue}°R`;
                }
            }
        } else if (initialUnit === 'Kelvin') {
            if (initialValue >  373 || initialValue <  273) {
                alert("Input in Kelvin should be within the range  273-373");
            } else {
                if (finalUnit === 'Celcius') {
                    result = initialValue -  273.15;
                    explanation = `${initialValue}K -  273.15 = ${result.toFixed(2)}°C`;
                } else if (finalUnit === 'Fahrenheit') {
                    result = (initialValue -  273.15) *  9 /  5 +  32;
                    explanation = `${initialValue}K -  273.15 * (9/5) +  32 = ${result.toFixed(2)}°F`;
                } else if (finalUnit === 'Reamur') {
                    result = (initialValue -  273.15) *  4 /  5;
                    explanation = `${initialValue}K -  273.15 * (4/5) = ${result.toFixed(2)}°R`;
                } else {
                    result = initialValue;
                    explanation = `${initialValue}K`;
                }
            }
        }
        const resultExplanationElement = document.getElementById('result-explanation');
        resultExplanationElement.querySelector('h3').textContent = explanation;
        resultOutput.textContent = result.toFixed(2);
    }
    
    function reset() {
        initialInput.value = '';
        resultOutput.textContent = '';
        initialDropdown.value = "Celcius";
        finalDropdown.value = "Celcius";
        resultExplanationElement.querySelector('h3').textContent = 'The conversion results will appear here';
    }

    function reverse() {
        var tempUnit = initialDropdown.value;
        initialDropdown.value = finalDropdown.value;
        finalDropdown.value = tempUnit;
        var temp = initialInput.value;
        initialInput.value = resultOutput.textContent;
        resultOutput.textContent = temp;
    }

    convertBtn.addEventListener('click', convert);
    reverseBtn.addEventListener('click', reverse);
    resetBtn.addEventListener('click', reset);
});
