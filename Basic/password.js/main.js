function tryTime(c) {
    //This func give time or times based on number of try
    let txt = ["time", "times"];
    if (count == 1) {
        return txt[0];
    }
    else {
        return txt[1];
    }
}

function remainTime(c, t) {
    /*
    This func give time or times based on number of remain
    Lock account when count meet tryLimit
    */
    let txt = ["time", "times"]
    if (c < t) {
        if (c == t - 1) {
            return `${t - c} ${txt[0]} remain.`
        }
        else {
            return `${t - c} ${txt[1]} remain.`
        }
    }
    else if (c == t) {
        return "account lock."
    }
}

function passwordInput() {
    //This func return password input
    return prompt("Enter password");
}

const password = "Matkhau"
var enterPassword = passwordInput();
const tryLimit = 10; //Limit try time
var count = 0;

while (true) {
    if (enterPassword == password) {
        if (count < tryLimit) {
            alert("Welcome!");
            break;
        }
        else {
            alert("Deactive");
            enterPassword = passwordInput();
        }
    }
    else {
        if (count < tryLimit) {
            count += 1;
            alert(`You have tried ${count} ${tryTime(count)}, ${remainTime(count, tryLimit)}`);
            enterPassword = passwordInput();
        }
        else {
            alert("Deactive");
            enterPassword = passwordInput();
        }
    }
}
