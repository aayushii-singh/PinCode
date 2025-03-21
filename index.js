function validatePin(pin) {
    let pinRegex = /^[1-9][0-9]{5}$/; // 6-digit, no leading 0
    if (pinRegex.test(pin)) {
        console.log(`Entered PIN Code ${pin} is Correct`);
    } else {
        console.log(`Entered PIN Code ${pin} is Incorrect`);
    }
}

// Test cases
validatePin("400088"); // Correct
validatePin("110001"); // Correct
validatePin("012345"); // Incorrect
validatePin("4000A8"); // Incorrect
