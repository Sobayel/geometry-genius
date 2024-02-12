

function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter');

    const apothem = getInputValueById('pentagon-apothem');

    const area = 0.5 * perimeter * apothem;
    console.log('area of the pentagon is:', area);

    setInnerTextById('pentagon-area', area);
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