// get the input field
function getInputField(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    // check vaidation
    if(isNaN(inputFieldValue)){
        alert('Please input a valid number');
    }
    else{
        if(inputFieldValue < 0){
            alert('Please input a valid number');
        }
        else{
            return inputFieldValue;
        }
    }
}
// 1. triangle area calculate
document.getElementById('triangle-btn-calculate').addEventListener('click', function(){
    const field1 = getInputField('triangle-input-field-1');
    const field2 = getInputField('triangle-input-field-2');
    const totalValue = 0.5 * field1 * field2;
})

// 2. rectangle area calculate
document.getElementById('rectangle-btn-calculate').addEventListener('click', function(){
    const field1 = getInputField('rectangle-input-field-1');
    const field2 = getInputField('rectangle-input-field-2');
    const totalValue = field1 * field2;
})

