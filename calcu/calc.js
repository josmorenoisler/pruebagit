var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');

var form = document.getElementById('xIsWhatPercentOfy');
form.addEventListener('submit',function(event){
    if(!numField1.value || !numField2.value)
        alert("Pone numeros, puto");
        else{
            var i = parseFloat(numField1.value);
            var j = parseFloat(numField2.value);;
            var result = i/j;
            var percent = result*100;

            resultField.innerText="Result: "+percent.toFixed(2)+"%";
            //previene que se resetee la pag
            event.preventDefault();
        }

});