let data_obj = {
    "USD": 1, "INR": 80, "ARS": 825.75, "AUD": 1.52, "BGN": 1.8, "BRL": 4.95, "BSD": 1, "CAD": 1.34,
    "CHF": 0.862, "CLP": 923.33, "CNY": 7.18, "COP": 4013.1, "CZK": 22.88, "DKK": 6.88, "AED": 3.67,
}


let search_input = document.getElementById('search');
let from_input = document.getElementById('from');
let to_input = document.getElementById('to');
let convert_btn = document.getElementById('convert-btn');
let final_amount = document.getElementById('final');

let swap_btn = document.getElementById('swap-btn');


convert_btn.addEventListener('click', () => {

    if (search_input.value.trim() == '' || from_input.value.trim() == '' || to_input.value.trim() == '') {
        alert('Please fill all the inputs')
    }

    else {

        let search_val = search_input.value;
        let from_val = from_input.value;
        let to_val = to_input.value;

        let convertAmount = data_obj[to_val] / data_obj[from_val];
        let result = (search_val * convertAmount).toFixed(2);

        final_amount.innerText = result;
    }
})

function resetValue() {
    document.getElementById('search').value = '';
    document.getElementById('from').value = '';
    document.getElementById('to').value = '';
    document.getElementById('final').innerText = '';
}

function swap() {
   let left = from_input.value;
   let right = to_input.value;
//    console.log(left);

    let l = from_input.value = right;
    let r = to_input.value = left;

    let convertAmount2 = data_obj[r] / data_obj[l];
    let result2 = (search_input.value * convertAmount2).toFixed(2);

    // console.log(result2);

    final_amount.innerText = result2;
    
}