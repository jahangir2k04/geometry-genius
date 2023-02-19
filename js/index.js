// get the triangle and rectangle input field
function getInputField(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}

// get the input filed and set the input field value to the text law with validation for triangle and rectangle
function setTextValueTR(inputFieldId, textFieldId){
    const inputField = getInputField(inputFieldId);
    const textField = document.getElementById(textFieldId);

    if(isNaN(inputField)){
        return textField.innerText = '';
    }
    else{
        textField.innerText = inputField;
    }
}


// create table row in area calculation section
function createRow(shapeName, totalValue){
    const table = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.style.height = '50px';
    tr.innerHTML = `
        <td>${serial}. </td>
        <td>${shapeName}</td>
        <td class="text-end">${totalValue} cm<sup>2</sup></td>
        <td class="text-end">
        <button class="bg-sky-600 font-semibold text-white p-2 rounded-lg">Conver to m<sup>2</sup>
        </td>

    `;
    table.appendChild(tr);
}

let serial = 0;

// 1. ----------triangle area calculated -------------
document.getElementById('triangle-btn-calculate').addEventListener('click', function(){
    const field1 = getInputField('triangle-input-field-1');
    const field2 = getInputField('triangle-input-field-2');
    let totalValue = 0.5 * field1 * field2;
    
    // check validation
    if(totalValue > 0 ){
        totalValue;
    }
    else{
        alert('Please input a valid number.');
        totalValue = '';
    }
    
    // set the input field value to the text law
    setTextValueTR('triangle-input-field-1', 'triangle-text-field-1')
    setTextValueTR('triangle-input-field-2', 'triangle-text-field-2')
    
    // show table row 
    serial +=1;
    const shapeName = 'Triangle';
    createRow(shapeName, totalValue);

})

// 2. rectangle area calculate
document.getElementById('rectangle-btn-calculate').addEventListener('click', function(){
    const field1 = getInputField('rectangle-input-field-1');
    const field2 = getInputField('rectangle-input-field-2');
    let totalValue = field1 * field2;

    // check validation
    if(totalValue > 0 ){
        totalValue;
    }
    else{
        alert('Please input a valid number.');
        totalValue = '';
    }

    // set the input field value to the text law
    setTextValueTR('rectangle-input-field-1', 'rectangle-text-field-1')
    setTextValueTR('rectangle-input-field-2', 'rectangle-text-field-2')

    // show table row 
    serial +=1;
    const shapeName = 'Rectangle';
    createRow(shapeName, totalValue);

})


// get the parallelogram, rhombus, pentagon, ellipse shape text field 
function getTextField(textId){
    const textValue = document.getElementById(textId);
    const textValueString = textValue.innerText;
    const value = parseFloat(textValueString);
    return value;
}

// set the text value to the text law for  the parallelogram, rhombus, pentagon, ellipse shape text field 
function setTextValue(textValueId, textFieldId){
    const getTextValue = getTextField(textValueId);
    const setTextField = document.getElementById(textFieldId);

    setTextField.innerText = getTextValue;
}


// 3. parallelogram area calculate 
document.getElementById('parallelogram-btn-calculate').addEventListener('click', function(){
    const textValue1 = getTextField('parallelogram-text-value-1');
    const textValue2 = getTextField('parallelogram-text-value-2');
    const totalValue = textValue1 * textValue2;

    // set the text value to the text law
    setTextValue('parallelogram-text-value-1', 'parallelogram-text-field-1');
    setTextValue('parallelogram-text-value-2', 'parallelogram-text-field-2');

    // show table row 
    serial +=1;
    const shapeName = 'Parallelogram';
    createRow(shapeName, totalValue);

})

// 4. rhombus area calculate 
document.getElementById('rhombus-btn-calculate').addEventListener('click', function(){
    const textValue1 = getTextField('rhombus-text-value-1');
    const textValue2 = getTextField('rhombus-text-value-2');
    const totalValue = 0.5 * textValue1 * textValue2;

    // set the text value to the text law
    setTextValue('rhombus-text-value-1', 'rhombus-text-field-1');
    setTextValue('rhombus-text-value-2', 'rhombus-text-field-2');

     // show table row 
     serial +=1;
     const shapeName = 'Rhombus';
     createRow(shapeName, totalValue);
 
})

// 5. pentagon area calculate
document.getElementById('pentagon-btn-calculate').addEventListener('click', function(){
    const textValue1 = getTextField('pentagon-text-value-1');
    const textValue2 = getTextField('pentagon-text-value-2');
    const totalValue = 0.5 * textValue1 * textValue2;

    // set the text value to the text law
    setTextValue('pentagon-text-value-1', 'pentagon-text-field-1');
    setTextValue('pentagon-text-value-2', 'pentagon-text-field-2');

    // show table row 
    serial +=1;
    const shapeName = 'Pentagon';
    createRow(shapeName, totalValue);
})

// 6. ellipse area calculate
document.getElementById('ellipse-btn-calculate').addEventListener('click', function(){
    const textValue1 = getTextField('ellipse-text-value-1');
    const textValue2 = getTextField('ellipse-text-value-2');
    const pi = 3.1416;
    const totalValue = pi * textValue1 * textValue2;
    
    // set the text value to the text law
    setTextValue('ellipse-text-value-1', 'ellipse-text-field-1');
    setTextValue('ellipse-text-value-2', 'ellipse-text-field-2');

    // show table row 
    serial +=1;
    const shapeName = 'ellipse';
    createRow(shapeName, totalValue.toFixed(2));
})


// question and answer
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = 'question.html'
})