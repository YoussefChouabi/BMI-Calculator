document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    // Get input values
    const gender =document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // Validate inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for weight and height.");
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    let category
    if(bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {    
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    // Display result
    document.getElementById("result").textContent = `Your BMI is: ${bmi.toFixed(2)}     category: ${category}`;
});