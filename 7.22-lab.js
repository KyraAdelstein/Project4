function isStrongPassword(password) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) return false;

    // Check if the password contains the string "password"
    if (password.toLowerCase().includes("password")) return false;

    // Check for at least one uppercase character
    if (!/[A-Z]/.test(password)) return false;

    // Check for at least one number
    if (!/[0-9]/.test(password)) return false;

    // Check for at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;

    // Check for repeated sequences of characters of length four or less
    for (let i = 0; i < password.length - 3; i++) {
        const sequence = password.slice(i, i + 4);
        if (sequence.split('').every(char => char === sequence[0])) {
            return false;
        }
    }

    // If all checks are passed, the password is strong
    return true;
}

console.log("Testing isStrongPassword()...");

console.log("Qwerty - " + isStrongPassword("Qwerty"));                   // false - Too short, no number, no special character
console.log("passwordQwerty - " + isStrongPassword("passwordQwerty"));   // false - Contains "password"
console.log("qwerty123 - " + isStrongPassword("qwerty123"));             // false - No uppercase chars, no special character
console.log("Qwerty123 - " + isStrongPassword("Qwerty123"));             // false - No special character
console.log("Qaaaa123! - " + isStrongPassword("Qaaaa123!"));             // false - Repeated sequence of four
console.log("Qwerty123! - " + isStrongPassword("Qwerty123!"));           // true

// Do NOT remove the following line:
export default isStrongPassword;
