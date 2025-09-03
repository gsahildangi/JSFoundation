document.addEventListener('DOMContentLoaded' , () => {
   
 const expenseForm = document.getElementById('expense-form');
 const expenseNameInput = document.getElementById('expense-name');
 const expenseAmountInput = document.getElementById('expense-amount');
 const expenseList = document.getElementById('expense-list');
 const formButton = document.getElementsByTagName('button');
 const totalAmountDisplay = document.getElementById('total-amount');

 const expenses = []
// whenever a form is submitted anywhere then all the values of form are 
//given back as string or when you will check the value of form or get those value
// with help of expenseAmountInput.value it will come in string.

expenseForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    const name = expenseNameInput.value.trim();
    // console.log(typeof expenseAmountInput.value)// it will be string check the theory above
    const amount = parseFloat(expenseAmountInput.value.trim())
    
    
})

});