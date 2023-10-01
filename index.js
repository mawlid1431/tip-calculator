document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const billAmountInput = document.getElementById("billAmount");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const bill = parseFloat(billAmountInput.value);

        if (isNaN(bill)) {
            resultDiv.textContent = "Please enter a valid bill amount.";
            return;
        }

        let tipPercentage = 20;
        if (bill >= 50 && bill <= 300) {
            tipPercentage = 15;
        }

        const tip = (bill * tipPercentage) / 100;
        const total = bill + tip;

        // Display the result below the button
        resultDiv.textContent = `Your bill is $${bill.toFixed(2)}, the tip is $${tip.toFixed(2)}, and the total value is $${total.toFixed(2)}.`;

        // Clear the input field
        billAmountInput.value = '';

        // Print the result to the console
        console.log(`The bill was $${bill.toFixed(2)}, the tip was $${tip.toFixed(2)}, and the total value is $${total.toFixed(2)}.`);
    });
});
