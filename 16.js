
function wynik() {
    const hexValue = document.getElementById("input").value.trim().toUpperCase();
    let decimalValue = 0;
    let power = 1;

    if (hexValue === "") {
        document.getElementById("wynik").textContent = "Napisz liczbę szestnastkową.";
        return;
    }

    for (let i = hexValue.length - 1; i >= 0; i--) {
        let digit = hexValue[i];
        let digitValue;

        if (digit >= '0' && digit <= '9') {
            digitValue = digit.charCodeAt(0) - '0'.charCodeAt(0);
        }
        else if (digit >= 'A' && digit <= 'F') {
            digitValue = digit.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
        } else {
            document.getElementById("wynik").textContent = "To nie jest liczba szesnastkowa.";
            return;
        }

        decimalValue += digitValue * power;
        power *= 16;
    }
    
    document.getElementById("wynik").textContent = `Liczba dziesiętna: ${decimalValue}`;
}