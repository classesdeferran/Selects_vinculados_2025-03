
// Datos de las ciudades
const ciudades = {
    "España" : ["Barcelona", "Madrid", "València"],
    "França": ["París", "Marsella", "Lyon"],
    "Itàlia": ["Roma", "Florència", "Pisa"]
}

// Obtener el formulario
const form1 = document.forms['form1']

// Obtener los select a cambiar
const ciudad = document.getElementById("ciudad")
const pais = document.getElementById("pais")

pais.addEventListener("change", () => {
    const paisSeleccionado = form1.pais.value
    // console.log(paisSeleccionado);
    let ciudadesHTML = ""
    for (paisCiudades in ciudades) {
        // console.log(paisCiudades);
        if (paisSeleccionado == paisCiudades) {
            const ciudadesObtenidas = ciudades[paisCiudades];
            ciudadesObtenidas.forEach((ciudad) => {
                ciudadesHTML += `<option value="${ciudad}">${ciudad}</option>`
            })
            break
        }
    }
    ciudad.innerHTML = ciudadesHTML
})
