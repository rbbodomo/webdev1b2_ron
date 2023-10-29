function showRecents(s) {
    const myNodeList = document.querySelectorAll("p");
    if(myNodeList.length > 2){ // remove extras
        myNodeList[0].remove();
    }
   
    const para = document.createElement("p");
    const node = document.createTextNode(`${s} = ${document.getElementById('numInput').value}`);
    para.appendChild(node);

    const element = document.getElementById("recentDiv");
    element.appendChild(para);
    
}

function getIndices(arr, searchValue) {
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === searchValue) {
        indices.push(i);
      }
    }
    return indices;
}

function equalVal(){
    let s = document.getElementById('numInput').value;
    // separate numbers and operators using regex
    let numbers = [...s.match(/\d*\.?\d*/g)].map((num) => parseFloat(num)).filter( value => !Number.isNaN(value) ); // add optional neg num at the start
    const operators = [...s.match(/.*?(?=\d+(\.\d+)?)/g)].filter( value => value != '' &&  value != '.').map(value => value.charAt(0));
    if (/^-/.test(s)){ // if first digit is negative value 
        console.log(numbers);
        numbers[0] = numbers[0]*-1; // turn first num to negative
        operators.shift(); // remove the captured "-" operand
    }
    console.log(numbers);
    console.log(operators);

    // take indices of operators into separate array (for MDAS attempt);
    let mArr = getIndices(operators, 'X');
    let aArr = getIndices(operators, '+');
    let dArr = getIndices(operators, '/');
    let sArr = getIndices(operators, '-');

    // calculate result
    let result=0;
    
    /* BASIC (CALCULATES FROM LEFT TO RIGHT REGARDLESS OF OPERATION ORDER)
    for (let i=0; i<operators.length; i++){
        if (i==0){ //start
            if (operators[i]=='+'){
                result = numbers[i] + numbers[i+1];
            } else if (operators[i]=='-'){
                result = numbers[i] - numbers[i+1];
            } else if (operators[i]=='X'){
                result = numbers[i] * numbers[i+1];
            } else if (operators[i]=='/'){
                result = numbers[i] / numbers[i+1];
            }
            console.log(result);
        } else {
            if (operators[i]=='+'){
                result += numbers[i+1];
            } else if (operators[i]=='-'){
                result -= numbers[i+1];
            } else if (operators[i]=='X'){
                result *= numbers[i+1];
            } else if (operators[i]=='/'){
                result /= numbers[i+1];
            }
    }
    */
    
    /* ATTEMPT FOR MDAS (Flaw: Literal M first before D and A first before S but in reality, 
        M-D and A-S pairs should be done first depending on which comes first from left to right
        Psuedocode to resolve issue:
        combine mArr-dArr and aArr-sArr then mark wheter index is M or D then use conditionals to
        do the right operation depending on marker 
    */
    
    // M
    for(let i=0; i<mArr.length; i++){
        result = numbers[parseInt(mArr[i])] * numbers[parseInt(mArr[i])+1];
        numbers[parseInt(mArr[i])+0] = result; // replace the number for next loop
        numbers[parseInt(mArr[i])+1] = result;    
    }
    // D
    for(let i=0; i<dArr.length; i++){
        result = numbers[parseInt(dArr[i])] / numbers[parseInt(dArr[i])+1];
        numbers[parseInt(dArr[i])+0] = result; // replace the number for next loop
        numbers[parseInt(dArr[i])+1] = result;    
    }
    // A
    for(let i=0; i<aArr.length; i++){
        if (numbers[parseInt(aArr[i])+1] == numbers[parseInt(aArr[i])+2] && (mArr.length > 0 || dArr.length > 0)){
            result = numbers[parseInt(aArr[i])] + numbers[parseInt(aArr[i])+1];
            console.log(numbers);
            numbers[parseInt(aArr[i])+0] = result; // replace the number for next loop
            numbers[parseInt(aArr[i])+1] = result;
            numbers[parseInt(aArr[i])+2] = result;
            console.log(numbers);
        } else {
            result = numbers[parseInt(aArr[i])] + numbers[parseInt(aArr[i])+1];
            numbers[parseInt(aArr[i])+0] = result; // replace the number for next loop
            numbers[parseInt(aArr[i])+1] = result;
            console.log(numbers);
        }     
    }
    // S
    for(let i=0; i<sArr.length; i++){
        if (numbers[parseInt(sArr[i])+1] == numbers[parseInt(sArr[i])+2] && (mArr.length > 0 || dArr.length > 0)){
            result = numbers[parseInt(sArr[i])] - numbers[parseInt(sArr[i])+1];
            numbers[parseInt(sArr[i])+0] = result; // replace the number for next loop
            numbers[parseInt(sArr[i])+1] = result;
            numbers[parseInt(sArr[i])+2] = result;
            console.log(numbers);
        } else {
            result = numbers[parseInt(sArr[i])] - numbers[parseInt(sArr[i])+1];
            numbers[parseInt(sArr[i])+0] = result; // replace the number for next loop
            numbers[parseInt(sArr[i])+1] = result;
            console.log(numbers);
        }
            
    }
            
    document.getElementById('numInput').value = result;
    showRecents(s);
    console.log('done');

}



function inputVal(val, numInput){
    if (document.getElementById('numInput').value == '0'){
        document.getElementById('numInput').value = '';
    }

    // with error handling
    let s = document.getElementById('numInput').value;
    if (/[^0-9.]$/.test(s) && /[^0-9.]$/.test(val)){ // if you enter an operator after another
        alert('Do not enter an operator after another to avoid errors!');
    } else {
        let newVal = document.getElementById('numInput').value + val;
        document.getElementById('numInput').value = newVal;
        console.log(document.getElementById('numInput').value);
    }
    

    // put cursor at the end of input line
    if (numInput.setSelectionRange) {
        numInput.focus();
        numInput.setSelectionRange(len, len);
    } else if (numInput.createTextRange) {
        var t = numInput.createTextRange();
        t.collapse(true);
        t.moveEnd('character', len);
        t.moveStart('character', len);
        t.select();
    }
}

function clearVal(){
    document.getElementById('numInput').value = '0';
}

function percent(){
    let s = document.getElementById('numInput').value;
    let s2 = document.getElementById('numInput').value; // for with operation
    // get the last two numbers if with operation
    const per = [...s.match(/\d*\.?\d*/g)].map((num) => parseFloat(num)).filter( value => !Number.isNaN(value) );

    if (per.length == 1) { // if single value
        let perVal = per[0]/100;
        document.getElementById('numInput').value = perVal;
    } else { // if with operation beforehand
        let perVal = (per[per.length-1]/100)*per[per.length-2];
        document.getElementById('numInput').value = s2.replace(/\d+(\.\d+)?$/g, perVal.toString());
    }
}

function posNeg(){
    let s = document.getElementById('numInput').value;
    if (/^\d+(\.\d+)?$/.test(s)){ //if no operator, single valid number only
        let newVal = document.getElementById('numInput').value * -1;
        document.getElementById('numInput').value = newVal;
        console.log(document.getElementById('numInput').value);
    } else {
        console.log("hey");
        alert("You may only use this for a single valid number!");
    }
    
}
