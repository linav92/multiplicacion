let multiply = (num) => {
    if (num < 1 || num > 20) {
      document.write("El número está fuera del rango");
      console.log("El número está fuera del rango");
      return false;
    }
  
    for (let i = 1; i <= num; i++) {
      let value = i * num;
      document.write(`${i} x ${num} = ${value} <br>`);
      console.log(`${i} x ${num} = ${value}`);
    }

    for (let i = 1; i <= num; i++) {
      let result = 1;
      for (let j = 1; j <= i; j++) {
        result *= j;
      }
      document.write(`Factorial de ${i} es: ${result}<br>`);
      console.log(`Factorial de ${i} es: ${result}`);
    }
  };
  
  multiply(parseInt(prompt("Ingrese un número")));
  