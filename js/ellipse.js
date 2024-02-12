function calculateEllipseArea(){
    const majorRadius = getInputValueById('ellipse-major-radius');

    const minorRadius = getInputValueById('ellipse-minor-radius');

    const area = 3.14 * majorRadius * minorRadius;
    console.log('area of the ellipse is:', area);

    setInnerTextById('ellipse-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueByText = inputField.value;
    const value = parseFloat(inputValueByText);
    return value;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}