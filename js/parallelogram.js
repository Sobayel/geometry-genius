
// function calculateParallelogramArea(){
    // get parallelogram base value
//     const parallelogramBaseInput = document.getElementById('parallelogram-base');
//     const parallelogramBaseText = parallelogramBaseInput.value;
//     const base = parseFloat(parallelogramBaseText);
//     console.log(base);

    // get parallelogram height value
//     const parallelogramHeightInput = document.getElementById('parallelogram-height');
//     const parallelogramHeightText = parallelogramHeightInput.value;
//     const height = parseFloat(parallelogramHeightText);
//     console.log(height);

    // calculate parallelogram area
//     const area = base * height;
//     console.log('area of the parallelogram is:', area);

    // display parallelogram area
//     const parallelogramAreaSpan = document.getElementById('parallelogram-area');
//     parallelogramAreaSpan.innerText = area;
// }

function calculateParallelogramArea(){
    const base = getElementById('parallelogram-base');

    const height = getElementById('parallelogram-height');

    const area = base * height;
    console.log('area of the parallelogram is:', area);

    setInnerTextId('parallelogram-area', area);
}

function getElementById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextId(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
