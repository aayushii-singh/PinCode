function validatePinCode(pin) {
    let regex = /^[0-9]{3}\s?[0-9]{3}$/;
    console.log(`${pin} is ${regex.test(pin) ? "Valid" : "Invalid"}`);
}

validatePinCode("400088");   // Valid
validatePinCode("400 088");  // Valid
validatePinCode("A400088");  // Invalid
validatePinCode("400088B");  // Invalid
