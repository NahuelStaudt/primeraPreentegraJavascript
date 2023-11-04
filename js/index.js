function mostrarPrecio(codigo){
    switch(codigo) {
        case 1:
            alert("la remera cuesta 10.000")
            break
        case 2:
            alert("la camisa cuesta 20.000")
            break
        case 3:
            alert("el buso cuesta 25.000")
            break
        case 4:
            alert("el jean cuesta 30.000")
            break
        case 5:
            alert("la bermuda cuesta 20.000")
            break
        case 6:
            alert("el short cuesta 10.000")
            break
        default:
            console.error("no entedimos tu selección")
    }
}

function consultarPrenda() {

let preguntar = true

while(preguntar){
    let codigoPrenda = prompt("ingrese el codigo de la prenda:")
    if (codigoPrenda !== "" && codigoPrenda !== null) {
        mostrarPrecio(parseInt(codigoPrenda))
    } else{
        console.warn ("ingresa un codigo de prenda valido")    
    }

    preguntar = confirm("¿deseas conocer el precio de otra prenda?")
    }
}


