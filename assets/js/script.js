class Propietario{
    constructor(nombre, direccion, telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono
    }

    datosPropietario(){
        return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el numero de 
        contacto es ${this.telefono}`
    }
};

class Animal extends Propietario{
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono);
        this.tipo = tipo
    }
    get Tipo(){
        return `El tipo de animal es un: ${this.tipo}`
    }
};

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascot, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascot = nombreMascot; 
        this._enfermedad = enfermedad; 
    }
    get nombreMascot() {
        return this._nombreMascot;
    }
    set nombreMascot(newNombre) {
        this._nombreMascot = newNombre;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(newEnfermedad) {
        this._enfermedad = newEnfermedad;
    }
}
const limpiar = () =>{
    document.getElementById("propietario").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("nombreMascota").value = "";
    document.getElementById("enfermedad").value = "";
}
let btn = document.getElementById("btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    let nombreP = document.getElementById("propietario").value;
    let telefonoP = document.getElementById("telefono").value;
    let direccionP = document.getElementById("direccion").value;
    let tipoA = document.getElementById("tipo").value;
    let nombreM = document.getElementById("nombreMascota").value;
    let enfermedadM = document.getElementById("enfermedad").value;
    if(tipoA == "perro"){
        let perro = new Mascota(nombreP, direccionP,  telefonoP, tipoA, nombreM, enfermedadM)
        document.getElementById("resultado1").innerHTML += `<li>${perro.datosPropietario()}</li><li>${perro.Tipo}, mientras que el nombre de la mascota es: ${perro.nombreMascot} y la enfermedad es: ${perro.enfermedad}</li>`
        limpiar();
    } else if(tipoA == "gato"){
        let gato = new Mascota(nombreP, direccionP,  telefonoP, tipoA, nombreM, enfermedadM)
        document.getElementById("resultado1").innerHTML += `<li>${gato.datosPropietario()}</li><li>${gato.Tipo}, mientras que el nombre de la mascota es: ${gato.nombreMascot} y la enfermedad es: ${gato.enfermedad}</li>`
        limpiar();
    } else if(tipoA == "conejo"){
        let conejo = new Mascota(nombreP, direccionP,  telefonoP, tipoA, nombreM, enfermedadM)
        document.getElementById("resultado1").innerHTML += `<li>${conejo.datosPropietario()}</li><li>${conejo.Tipo}, mientras que el nombre de la mascota es: ${conejo.nombreMascot} y la enfermedad es: ${conejo.enfermedad}</li>`
        limpiar();
    }

})