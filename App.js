//swap the number
let a = 10;
let b = 20;
let c = 30;

a = a^b;
b = a^b;
c = a^b;

console.log(a,b,c);
//so this how you can swap the number without using airthmatic oerations in JavaScripts 




//Generate OTP
function genrateOTP(number) {

    let OTP = "";
    for(let i = 0; i < number; i++) {
        let randomnumber = Math.floor(Math.random()*10);
        OTP = OTP + randomnumber.toString();
    }

    return OTP;
}

console.log(genrateOTP(6));

