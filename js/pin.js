document.getElementById('matched').style.display = 'none';
document.getElementById('notMatched').style.display = 'none'
let trial  = document.getElementById('trial');

document.getElementById('generatePin').addEventListener('click', function () {
    var val = Math.floor(1000 + Math.random() * 9000);
    
    document.getElementById('generatedPin').value = val

})
document.getElementById('keyPad').addEventListener('click', function (event) {

    let number = event.target.innerHTML;
    let typedNumber = document.getElementById('typedNumber');
    if (isNaN(number) == true) {
        if (number == 'C') {
            typedNumber.value = '';
        }
        else if(number == '&lt;'){
            let string = typedNumber.value;
            string = string.slice(0,-1);
            typedNumber.value = string;
        }
    }
    else {


        let oldNumber = typedNumber.value;

        let newNumber = oldNumber + number;
        typedNumber.value = newNumber;
        // console.log(typedNumber.value);
    }
})

document.getElementById('submit').addEventListener('click', function(){

    let pin = document.getElementById('generatedPin').value;
    let typedNumber = document.getElementById('typedNumber').value;

    if(typedNumber == ''){
        alert('No input Found');
    }
    else{
        if(trial.innerHTML>0){
            if(pin == typedNumber){
                document.getElementById('notMatched').style.display = 'none'
                document.getElementById('matched').style.display = 'block';
            }
            else{
                document.getElementById('matched').style.display = 'none';
                document.getElementById('notMatched').style.display = 'block';
                trial.innerHTML = parseInt(trial.innerHTML)-1;
                
            }
        }
    }
    
   
})

