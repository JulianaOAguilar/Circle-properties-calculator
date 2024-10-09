class Circulo {
    constructor(diametro) {
        this.diametro = diametro;
        this.raio = this.diametro / 2
    }
    circunferencia() {
        let circunferencia = parseFloat((Math.PI * 2 * this.raio).toFixed(2));
        return circunferencia;
    }
    area() {
        let area = parseFloat((Math.PI * this.raio * this.raio).toFixed(2));
        return area;
    }

   
};

function criarCirculo() {


    let criarCirculo = document.getElementById("diametro").value;
    let converterParaNumero = parseFloat(criarCirculo);
    let circulo = new Circulo(converterParaNumero);

    if (isNaN(circulo.area()) && isNaN(circulo.circunferencia()) && isNaN(circulo.raio)) {
        document.getElementById("circulo").innerHTML = "Insira um valor válido!";
    }

    else {

    document.getElementById("circulo").innerHTML =
        `raio: ${circulo.raio},
     area: ${circulo.area()},
      circunferencia: ${circulo.circunferencia()}`

      document.getElementById("line-d").innerHTML = `Diãmetro (d) = ${circulo.diametro}`
      document.getElementById("line-r").innerHTML = `Raio (r) = ${circulo.raio}`

  
      document.getElementById("oi").innerHTML = `raio (r) = d / 2 <br>
       r = ${circulo.diametro} / 2 <br>
        r = ${circulo.raio} <br> <br>
         area (a) = πr² <br>
          a = π (prox. 3,14) * ${circulo.raio}² <br>
           a = ${circulo.area()} <br> <br> 
           
           circunferencia (C) = 2πr <br>
           C = 2 * π * ${circulo.raio} <br>
           C = ${circulo.circunferencia()}`;


}};
















