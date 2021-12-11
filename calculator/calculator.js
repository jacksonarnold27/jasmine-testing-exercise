window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // retrieving the inputs from the DOM
  let loanAmountInput = document.getElementById("loan-amount");
  let loanYearsInput = document.getElementById('loan-years');
  let loanRateInput = document.getElementById('loan-rate');

  // setting initial default values for the inputs
  loanAmountInput.value = '50000';
  loanYearsInput.value = '5';
  loanRateInput.value = '6';
  
  // calculate the current monthly payment
  calculateMonthlyPayment(getCurrentUIValues());
}


// Get the current values from the UIs
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // the formula for this is:
  // (P * i) / (1 - (1 + i)^(-n) )
  let principle = parseInt(values.amount); // P- principle is the amount of the loan
  let interestRate = parseInt(values.rate) / 1200; // i- interestRate is the percentage periodic interest rate (in this case per month)
  let numPayments = parseInt(values.years) * 12; // n- numPayments is the total number of payments (12 payments per year)
  if (principle < 0 || interestRate < 0 || numPayments < 0) {
    return 'N/A (negative)';
  }
  console.log(principle, interestRate, numPayments);
  let payment = ((principle * interestRate) / (1 - Math.pow((1 + interestRate),(-numPayments))));
  
  return payment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPaymentHTML = document.getElementById('monthly-payment');
  monthlyPaymentHTML.innerHTML = monthly;
}
