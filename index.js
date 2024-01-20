// 1 calculo IMC.

function calcularImc (altura,peso) {
    let imc = peso / (altura * altura);
    console.log(imc.toFixed(2));
}

calcularImc(1.70,70); 

// 2 calculo de número fatorial. 

function calcularFatorial (numero) {
    if (numero === 0 || numero ===1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}
let resultado = calcularFatorial(3);

console.log(resultado);

// 3 converter dolar em real. 

function conversao (dolar) {
    return dolar * 4.92;
}
console.log(conversao(350));

// 4 calculo da área de um retangulo. 

function parametrosRetangulo (comprimento, largura) {
    let area = comprimento * largura;
    console.log(`A área deste retângulo é ${area}.`);
    let perimetro = 2 * (comprimento + largura);
    console.log(`O perímetro deste retângulo é ${perimetro}.`);
}
parametrosRetangulo(15,10);

// 5 calcular área e perímetro de um circulo.

 function areaCircunferencia (raio) {
    let area = Math.PI * Math.pow(raio, 2);
    console.log(`A área do circulo é ${area.toFixed(2)}.`);
    let circunferencia = 2 * Math.PI * raio;
    console.log(`A circunferência do circulo é ${circunferencia.toFixed(2)}.`);
 }

 areaCircunferencia(40);

 //6 tabuada de um número 

 function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  tabuada(3);