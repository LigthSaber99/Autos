document.addEventListener("DOMContentLoaded", function () {
    console.log("Página cargada correctamente");

    // Función para cambiar el color del auto
    window.changeColor = function (color) {
        let carImage = document.getElementById("car-display");

        switch (color) {
            case "red":
                carImage.src = "car-red.jpg";
                break;
            case "black":
                carImage.src = "car-black.jpg";
                break;
            case "blue":
                carImage.src = "car-blue.jpg";
                break;
            default:
                carImage.src = "car1.jpg";
        }
    };
});
