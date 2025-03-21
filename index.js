function validatePIN(pin) {
    let regex = /^[0-9]{6}$/;
    console.log(`${pin} is ${regex.test(pin) ? 'Valid' : 'Invalid'}`);
}

validatePIN("400088"); // Valid
validatePIN("A400088"); // Invalid
