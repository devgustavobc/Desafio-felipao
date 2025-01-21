result(102, 1);

function result(winQuantity, lossQuantity) {
  let level;
  let rankResult = winQuantity - lossQuantity;

  if (rankResult <= 10) level = "Ferro";
  else if (rankResult <= 20) level = "Bronze";
  else if (rankResult <= 50) level = "Prata";
  else if (rankResult <= 80) level = "Ouro";
  else if (rankResult <= 90) level = "Diamante";
  else if (rankResult <= 100) level = "Lendario";
  else level = "Imortal";

  console.log(
    `O Herói tem de saldo de ${rankResult} está no nível de ${level}`
  );
}
