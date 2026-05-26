class Empleado {

    constructor(
        gafete,
        nombre,
        salida,
        estado,
        entrada,
        fechaSalida
    ) {

        this.gafete = gafete;
        this.nombre = nombre;

        this.salida = salida;
        this.estado = estado;
        this.entrada = entrada;
        this.fechaSalida = fechaSalida;
        this.tiempoTotal = "---";
    }

}

let empleados = [

    {
        gafete: "9060954",
        nombre: "EDDY ADRIAN ESTRADA RAMÍREZ"
    },

    {
        gafete: "9076268",
        nombre: "EMMANUEL MONTALBAN GARCIA"
    },

    {
        gafete: "9069040",
        nombre: "JUNIOR CASTRO ARGUEDAS"
    },

    {
        gafete: "8977197",
        nombre: "JOEL ARIEL URBINA MONTALBAN"
    },

    {
        gafete: "9066313",
        nombre: "JEIKOL JUNAIKEL LEAL SANDOVAL"
    },

    {
        gafete: "9068260",
        nombre: "JOSE AUGUSTO RUBI ALVAREZ"
    },

    {
        gafete: "9068343",
        nombre: "JULIO CESAR VARGAS HERRERA"
    },

    {
        gafete: "9066275",
        nombre: "KERVIN ANDREY JIMENEZ FUENTES"
    },

    {
        gafete: "9066363",
        nombre: "KEVIN JESUS PICADO MENDOZA"
    },

    {
        gafete: "9067392",
        nombre: "MINOR ANTONIO CORTES LOPEZ"
    },

    {
        gafete: "9067445",
        nombre: "OSIEL ALEJANDRO LABORDE BATISTA"
    },

    {
        gafete: "9069038",
        nombre: "RAUDEL BARRIOS PÉREZ"
    },

    {
        gafete: "8951965",
        nombre: "JOSUE ANTONIO FLORES MARTINEZ"
    },

    {
        gafete: "9046610",
        nombre: "ANTHONY JOSUE RODRIGUEZ VALVERDE"
    },

    {
        gafete: "8948834",
        nombre: "ELDER RIVAS RAMIREZ"
    },

    {
        gafete: "7778643",
        nombre: "JEINER ANDRES SANCHEZ AGUERO"
    },

    {
        gafete: "8281702",
        nombre: "DEIVER JESÚS MORENO ARAUZ"
    },

    {
        gafete: "8334719",
        nombre: "EMIGDIO JAVIER ESPINOZA NOINDICAOTRO"
    },

    {
        gafete: "8951968",
        nombre: "JUAN BAUTISTA GOMEZ CASTRO"
    },

    {
        gafete: "8965020",
        nombre: "RICARDO ENRIQUE PENA PENA"
    },

    {
        gafete: "8964182",
        nombre: "EDGAR LEANDRO SILES VARGAS"
    },

    {
        gafete: "7877560",
        nombre: "YOJAN ARIEL LOPEZ ALVARADO"
    },

    {
        gafete: "9051638",
        nombre: "ANDRES CAMBRONERO ALFARO"
    },

    {
        gafete: "9050149",
        nombre: "ALEXANDER GUTIERREZ POVEDA"
    },

    {
        gafete: "8333826",
        nombre: "ALEXIS LOPEZ GUDIEL"
    },

    {
        gafete: "9042793",
        nombre: "BYRON ANTONIO CRUZ DAVILA"
    },

    {
        gafete: "9055307",
        nombre: "BYRON DAVID FLORES TALAVERA"
    },

    {
        gafete: "9043555",
        nombre: "BRYAN ALCIDES RODRIGUEZ NUÑEZ"
    },

    {
        gafete: "8958291",
        nombre: "BRANDON STEVEN SMITH DAVILA"
    },

    {
        gafete: "9052764",
        nombre: "CRISTIAN ALONSO ALVAREZ MORERA"
    },

    {
        gafete: "9064944",
        nombre: "CARLOS FRANCISCO AVILES TALAVERA"
    },

    {
        gafete: "9064948",
        nombre: "CARLOS DANIEL DIAZ REYES"
    },

    {
        gafete: "9021674",
        nombre: "DYLAN LEONARDO VARGAS TORRES"
    },

    {
        gafete: "9051297",
        nombre: "EDSSON SAMIR JIRON CABRERA"
    },

    {
        gafete: "8252490",
        nombre: "EVER ZEAS PIZARRO"
    },

    {
        gafete: "9016576",
        nombre: "FRANCISCO JAVIER ALEMAN PAVÓN"
    },

    {
        gafete: "9034892",
        nombre: "FREDDY JOSÉ BONILLA MORALES"
    },

    {
        gafete: "8996436",
        nombre: "FRANKLIN JAVIER RIVERA MIRANDA"
    },

    {
        gafete: "8973291",
        nombre: "FRANCISCO GERARDO VASQUEZ ROJAS"
    },

    {
        gafete: "7776900",
        nombre: "GUSTAVO TORRENTES SOLORZANO"
    }

];

const empleadosGuardados =
    JSON.parse(localStorage.getItem("empleados"));

if (empleadosGuardados) {

    empleados = empleadosGuardados;

}

const btnExportar = document.getElementById("btnExportar");
const registrosGuardados = localStorage.getItem("registros");
const registros = [];
const btnSalida = document.getElementById("btnSalida");
const btnEntrada = document.getElementById("btnEntrada");

console.log("btnExportar")

if (registrosGuardados) {

    registros.push(
        ...JSON.parse(registrosGuardados)
    );

}

actualizarTabla();

btnSalida.addEventListener("click", () => {

    const gafeteIngresado = document
        .getElementById("gafeteEmpleado")
        .value;
    if (gafeteIngresado.trim() === "") {
        alert("Debe ingresar un gafete");
        return;
    } else {

        let empleadoEncontrado = empleados.find(
            empleado => empleado.gafete === gafeteIngresado
        );

        if (!empleadoEncontrado) {

            const nombreNuevo = prompt(
                "Asociado no registrado.\nIngrese el nombre:"
            );

            // Si canceló
            if (!nombreNuevo) {
                return;
            }

            // Crear empleado nuevo
            const nuevoEmpleado = {

                gafete: gafeteIngresado,

                nombre: nombreNuevo.toUpperCase()

            };

            // Guardar en arreglo
            empleados.push(nuevoEmpleado);

            // Guardar localStorage
            localStorage.setItem(
                "registros",
                JSON.stringify(empleados)
            );

            // Usar nuevo empleado
            empleadoEncontrado = nuevoEmpleado;

        }

        // VALIDAR SI YA ESTÁ EN COMIDA
        const yaEnComida = registros.find(
            registro =>
                registro.gafete === gafeteIngresado &&
                registro.estado === "En comida"
        );

        if (yaEnComida) {
            alert("Este asociado ya está en comida");
            return;
        }

        const fechaSalida = new Date();

        const horaSalida =
            fechaSalida.toLocaleTimeString();

        const registro = new Empleado(
            empleadoEncontrado.gafete,
            empleadoEncontrado.nombre,
            horaSalida,
            "En comida",
            "---",
            fechaSalida
        );

        // GUARDAR
        registros.push(registro);

        // ACTUALIZAR TABLA
        actualizarTabla();
        guardarLocalStorage();
        alert("Salida registrada correctamente");
        document.getElementById("gafeteEmpleado").value = "";
        document.getElementById("gafeteEmpleado").focus();
    }


});

btnEntrada.addEventListener("click", () => {

    const gafeteIngresado = document
        .getElementById("gafeteEmpleado")
        .value;

    // Validar vacío
    if (gafeteIngresado.trim() === "") {

        alert("Debe ingresar un gafete");
        return;

    }

    // Buscar registro activo
    const registroEncontrado = registros.find(
        registro =>
            registro.gafete === gafeteIngresado &&
            registro.estado === "En comida"
    );

    // Validar
    if (!registroEncontrado) {

        alert("El asociado no está en comida");
        return;

    }

    // Hora actual
    const fechaEntrada = new Date();

    const horaEntrada =

        fechaEntrada.getHours()
        + ":" +

        fechaEntrada.getMinutes()
        + ":" +

        fechaEntrada.getSeconds();

    // Guardar entrada
    registroEncontrado.entrada =
        horaEntrada;

    // Cambiar estado
    registroEncontrado.estado =
        "Disponible";

    // Convertir horas
    const salidaSegundos =
        convertirHoraASegundos(
            registroEncontrado.salida
        );

    const entradaSegundos =
        convertirHoraASegundos(
            horaEntrada
        );

    // Diferencia
    const diferenciaSegundos =
        entradaSegundos - salidaSegundos;

    // Minutos
    const minutos =
        Math.floor(
            diferenciaSegundos / 60
        );

    // Guardar tiempo
    registroEncontrado.tiempoTotal =
        minutos + " min";

    // Actualizar
    actualizarTabla();

    guardarLocalStorage();

    alert("Entrada registrada correctamente");

    // Limpiar
    document.getElementById(
        "gafeteEmpleado"
    ).value = "";

    document.getElementById(
        "gafeteEmpleado"
    ).focus();

});

function convertirHoraASegundos(hora) {

    const partes = hora.split(":");

    const horas =
        Number(partes[0]);

    const minutos =
        Number(partes[1]);

    // Si no existen segundos
    const segundos =
        partes[2]
            ? Number(partes[2])
            : 0;

    return (

        horas * 3600 +

        minutos * 60 +

        segundos

    );

}

function agregarTabla(empleado) {

    const tbody = document.querySelector("#tablaRegistros tbody");

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${empleado.gafete}</td>
        <td>${empleado.nombre}</td>
        <td>${empleado.salida}</td>
        <td>${empleado.estado}</td>
        <td>${empleado.entrada}</td>
    `;

    tbody.appendChild(fila);
}

const inputBuscar =
    document.getElementById("inputBuscar");

inputBuscar.addEventListener("input", () => {

    actualizarTabla();

});

function actualizarTabla() {

    const tbody = document.querySelector(
        "#tablaRegistros tbody"
    );

    // Input búsqueda
    const inputBuscar = document
        .getElementById("inputBuscar")
        .value
        .toLowerCase();

    // Limpiar tabla
    tbody.innerHTML = "";

    // Filtrar registros
    const registrosFiltrados = registros.filter(
        registro =>

            registro.nombre
                .toLowerCase()
                .includes(inputBuscar)

            ||

            registro.gafete
                .includes(inputBuscar)
    );

    // Recorrer filtrados
    registrosFiltrados.forEach(registro => {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${registro.gafete}</td>

            <td>${registro.nombre}</td>

            <td>${registro.salida}</td>

            <td class="${registro.estado === "Disponible"
                ? "estado-disponible"
                : "estado-comida"
            }">

                ${registro.estado}

            </td>

            <td>${registro.entrada}</td>
        `;

        tbody.appendChild(fila);

    });

}

function guardarLocalStorage() {

    localStorage.setItem(
        "registros",
        JSON.stringify(registros)
    );

}

btnExportar.addEventListener("click", () => {
    // Validar si hay registros
    if (registros.length === 0) {
        alert("No hay registros para exportar");
        return;
    }

    // Crear arreglo limpio
    const datosExcel = registros.map(registro => ({

        Gafete: registro.gafete,
        Nombre: registro.nombre,
        "Hora de salida": registro.salida,
        "Hora de entrada": registro.entrada,
        "Tiempo total": registro.tiempoTotal

    }));

    // Crear hoja
    const hoja = XLSX.utils.json_to_sheet(datosExcel);

    // Crear libro
    const libro = XLSX.utils.book_new();

    // Agregar hoja
    XLSX.utils.book_append_sheet(
        libro,
        hoja,
        "Tiempos Comida"
    );

    // Descargar
    XLSX.writeFile(
        libro,
        "registro_comidas.xlsx"
    );

});

btnLimpiarTabla.addEventListener("click", () => {
    // Confirmación
    const confirmar = confirm(
        "¿Está seguro de limpiar todos los registros?"
    );

    // Si cancela
    if (!confirmar) {

        return;

    }

    // Limpiar arreglo
    registros.length = 0;

    // Limpiar tabla
    actualizarTabla();

    // Limpiar localStorage
    localStorage.removeItem("registros");

    // Aviso
    alert("Sistema limpio");
})

const tbody = document.querySelector("#tablaRegistros tbody");