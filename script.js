class Circle { // create a class named "Circle"
    constructor(diameter) {
        this.diameter = diameter;
        this.radius = this.diameter / 2
    }
    circumference() {
        let circumference = parseFloat((Math.PI * 2 * this.radius).toFixed(2));
        return circumference;
    }
    area() {
        let area = parseFloat((Math.PI * this.radius * this.radius).toFixed(2));
        return area;
    }
};

function createCircle() {
    let createCircle = document.getElementById("diameter").value;
    let convertToFloat = parseFloat(createCircle);
    let circle = new Circle(convertToFloat);


    document.getElementById("circle").innerHTML =
        `raio: ${circle.radius},
     area: ${circle.area()},
      circunferencia: ${circle.circumference()}`

    verifyAndAddValues();

    function verifyAndAddValues() {

        if (isNaN(circle.area()) && isNaN(circle.circumference()) && isNaN(circle.radius)) {
            document.getElementById("circle").innerHTML = "Insira um valor válido!";
            clearCalculations();
        } else {
            addCalculations();
        }

        function clearCalculations() {
            document.getElementById("diameterLine").innerHTML = "";
            document.getElementById("radiusLine").innerHTML = "";
            document.getElementById("operations").innerHTML = "";
        }

        function addCalculations() {
            document.getElementById("diameterLine").innerHTML = `Diametro (d) = ${circle.diameter}`;
            document.getElementById("radiusLine").innerHTML = `Raio (r) = ${circle.radius}`;
            document.getElementById("operations").innerHTML = `raio (r) = d / 2 <br>
            r = ${circle.diameter} / 2 <br>
             r = ${circle.radius} <br> <br>
              area (a) = πr² <br>
               a = π (prox. 3,14) * ${circle.radius}² <br>
                a = ${circle.area()} <br> <br>  
                circunferencia (C) = 2πr <br>
                C = 2 * π * ${circle.radius} <br>
                C = ${circle.circumference()}`;
        }
    }
};
















