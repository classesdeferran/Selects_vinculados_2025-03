
// Datos de las ciudades
const ciudades = {
    "España" : ["Barcelona", "Madrid", "València"],
    "França": ["París", "Marsella", "Lyon"],
    "Itàlia": ["Roma", "Florència", "Pisa"],
    "Argèntina": ["Buenos Aires", "Mendoza", "Córdoba"],
    "Brasil": ["Brasilia", "Rio de Janeiro", "Sao Paulo"],
    "Perú": ["Lima", "Arequipa", "Trujillo"],
    "Marroc": ["Casablanca", "Marrakech", "Fez"],
    "Egipte": ["El Caire", "Alexandria", "Luxor"],
    "Sudàfrica": ["Johannesburg", "Durban", "Ciutat del Cap"]
}

// Datos de los paises
const paises = {
    "Europa" : ["España", "França", "Itàlia"],
    "Amèrica": ["Argèntina", "Brasil", "Perú"],
    "Àfrica": ["Marroc", "Egipte", "Sudàfrica"]
}

// Obtener el formulario
const form1 = document.forms['form1']

// Obtener los select a cambiar
const ciudad = document.getElementById("ciudad")
const pais = document.getElementById("pais")

// Cuando cambia el pais hay que actualizar la lista de ciudades
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
