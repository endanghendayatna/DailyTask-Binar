const { jumlah, kurang, bagi, kali, totalHarga } = require("./function");


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 1 hasil tambah inputan user (done)
rl.question("Masukan angka pertama! ", (firstNum) => {
  rl.question("Masukan angka kedua! ", (secondNum) => {
    const result = jumlah(parseInt(firstNum), parseInt(secondNum));
    console.log(`hasil dari  ${firstNum} + ${secondNum} adalah ${result}`);
    rl.close();
  });
});

// 2 hasil kurang inputan user
rl.question("Masukan angka pertama! ", (firstNum) => {
  rl.question("Masukan angka kedua! ", (secondNum) => {
    const result = kurang(parseInt(firstNum), parseInt(secondNum));
    console.log(`hasil dari ${firstNum} - ${secondNum} adalah ${result}`);
    rl.close();
  });
});

// 3 hasil bagi inputan user
rl.question("Masukan angka pertama! ", (firstNum) => {
  rl.question("Masukan angka kedua! ", (secondNum) => {
    const result = bagi(parseInt(firstNum), parseInt(secondNum));
    console.log(`hasil dari ${firstNum} / ${secondNum} adalah ${result}`);
    rl.close();
  });
});

// // 4 hasil kali inputan user
rl.question("Masukan angka pertama! ", (firstNum) => {
  rl.question("Masukan angka kedua! ", (secondNum) => {
    const result = kali(parseInt(firstNum), parseInt(secondNum));
    console.log(`hasil dari ${firstNum} x ${secondNum} adalah ${result}`);
    rl.close();
  });
});

// 5 hasil total harga kali quantitas barang
rl.question("Masukan angka pertama! ", (price) => {
  rl.question("Masukan angka kedua! ", (quantity) => {
    const result = totalHarga(parseInt(price), parseInt(quantity));
    console.log(`jadi total harga yang harus dibayar adalah ${result}`);
    rl.close();
  });
});