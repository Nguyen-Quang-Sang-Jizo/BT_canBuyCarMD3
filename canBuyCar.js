function canBuyCar(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("Bạn có đủ tiền để mua một chiếc xe!");
            } else {
                reject("Bạn không đủ tiền để mua một chiếc xe.");
            }
        }, 2000);
    });
}
let input = require("readline-sync");
let money = +input.question("Nhap so tien ban co : ")
canBuyCar(money)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
