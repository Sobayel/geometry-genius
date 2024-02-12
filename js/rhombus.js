function calculateRhombusArea(){
    const diagonalD1 = getInputValueById('rhombus-diagonal-d1');

    const diagonalD2 = getInputValueById('rhombus-diagonal-d2');

    const area = 0.5 * diagonalD1 * diagonalD2;
    console.log('area of the rhombus is:', area);

    setInnerTextById('rhombus-area', area);
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