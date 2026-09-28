class Empleado {

    constructor(
        gafete,
        nombre,
        salida,
        estado,
        entrada,
        fechaSalida, 
        departamento
    ) {

        this.gafete = gafete;
        this.nombre = nombre;

        this.salida = salida;
        this.estado = estado;
        this.entrada = entrada;
        this.fechaSalida = fechaSalida;
        this.tiempoTotal = "---";
        this.departamento = departamento;
    }

}

let empleados = [

 {
    gafete: "9133111",
    nombre: "DEMBLER QUIROS CHAVARRIA",
    departamento: "Alisto"
},
{
    gafete: "9133018",
    nombre: "ENRIQUE JOSE CAMPOS OBREGON",
    departamento: "Alisto"
},
{
    gafete: "9133076",
    nombre: "JEFFRY ESCOTO VARGAS",
    departamento: "Alisto"
},
{
    gafete: "9132017",
    nombre: "BRANDON ALFONSO VIQUEZ GONZÁLEZ",
    departamento: "Alisto"
},
{
    gafete: "9132116",
    nombre: "DAVID JESUS ZUMBADO LEPIZ",
    departamento: "Alisto"
},
{
    gafete: "9132504",
    nombre: "EDDRY LEYET RODRIGUEZ",
    departamento: "Alisto"
},
{
    gafete: "8246013",
    nombre: "JOSÉ DANIEL RUIZ VILLALOBOS",
    departamento: "Alisto"
},
{
    gafete: "9132468",
    nombre: "KENDALL JOSÉ RAMÍREZ PEÑARANDA",
    departamento: "Alisto"
},
{
    gafete: "9132289",
    nombre: "KENNETH ALBERTO CÉSPEDES MUÑOZ",
    departamento: "Alisto"
},
{
    gafete: "9067452",
    nombre: "ANDERSON FAJARDO ZUNIGA",
    departamento: "Alisto"
},
{
    gafete: "8931591",
    nombre: "ARNOLD JAFETT ESPINOZA MEDRANO",
    departamento: "Alisto"
},
{
    gafete: "9131319",
    nombre: "EDWIN JESÚS RUIZ BONILLA",
    departamento: "Alisto"
},
{
    gafete: "9131490",
    nombre: "ELMER JOAN VÁSQUEZ RODRÍGUEZ",
    departamento: "Alisto"
},
{
    gafete: "9131279",
    nombre: "JOHEL DAVID PALMA RODRIGUEZ",
    departamento: "Alisto"
},
{
    gafete: "9131453",
    nombre: "MAIKOL VILLALOBOS RÍOS",
    departamento: "Alisto"
},
{
    gafete: "9131421",
    nombre: "OSCAR DANILO BONILLA",
    departamento: "Alisto"
},
{
    gafete: "9027716",
    nombre: "RAUDEL PERERA ALVAREZ",
    departamento: "Alisto"
},
{
    gafete: "9129011",
    nombre: "ALEJANDRO ROMERO COTO",
    departamento: "Alisto"
},
{
    gafete: "9129015",
    nombre: "LEE KENT ALVAREZ MENDEZ",
    departamento: "Alisto"
},
{
    gafete: "9129048",
    nombre: "LUIS ANDRÉS ARCE GUERRERO",
    departamento: "Alisto"
},
{
    gafete: "9129034",
    nombre: "STEFANY ARAYA CORDERO",
    departamento: "Alisto"
},
{
    gafete: "8980850",
    nombre: "FELIX GUILLERMO FULOPP FIGUEROA",
    departamento: "Alisto"
},
{
    gafete: "9127981",
    nombre: "LUIS FERNANDO RAMIREZ ALVARADO",
    departamento: "Alisto"
},
{
    gafete: "9081079",
    nombre: "JONATHAN NATANAEL GÓMEZ MEJIA",
    departamento: "Alisto"
},
{
    gafete: "9079422",
    nombre: "JADER JOSE FLORES TORRES",
    departamento: "Alisto"
},
{
    gafete: "8275781",
    nombre: "JOSE EDUARDO BARRIENTOS ALFARO",
    departamento: "Alisto"
},
{
    gafete: "9080256",
    nombre: "WISTON RONALDO GUILLEN REYES",
    departamento: "Alisto"
},
{
    gafete: "9078069",
    nombre: "CRISTOPHER ANTONIO ZAMORA HERNANDEZ",
    departamento: "Alisto"
},
{
    gafete: "9077817",
    nombre: "MANFRED STEVE MORENO MENDOZA",
    departamento: "Alisto"
},
{
    gafete: "9077840",
    nombre: "DEYRIN ARIEL MONZÓN REYES",
    departamento: "Alisto"
},
{
    gafete: "9076715",
    nombre: "GUSTAVO ADOLFO SANDOVAL PEÑARANDA",
    departamento: "Alisto"
},
{
    gafete: "9076837",
    nombre: "HAYKEL ROBERQUIES HERNANDEZ MORA",
    departamento: "Alisto"
},
{
    gafete: "9076268",
    nombre: "EMMANUEL MONTALBAN GARCIA",
    departamento: "Alisto"
},
{
    gafete: "8977197",
    nombre: "JOEL ARIEL URBINA MONTALBAN",
    departamento: "Alisto"
},
{
    gafete: "9060954",
    nombre: "EDDY ADRIAN ESTRADA RAMÍREZ",
    departamento: "Alisto"
},
{
    gafete: "9074396",
    nombre: "ELIDER MAURICIO ARIAS PICADO",
    departamento: "Alisto"
},
{
    gafete: "9037371",
    nombre: "RODOLFO JOSUE BOLANOS RIOS",
    departamento: "Alisto"
},
{
    gafete: "9069040",
    nombre: "JUNIOR CASTRO ARGUEDAS",
    departamento: "Alisto"
},
{
    gafete: "9069038",
    nombre: "RAUDEL BARRIOS PÉREZ",
    departamento: "Alisto"
},
{
    gafete: "9068260",
    nombre: "JOSE AUGUSTO RUBI ALVAREZ",
    departamento: "Alisto"
},
{
    gafete: "9068343",
    nombre: "JULIO CESAR VARGAS HERRERA",
    departamento: "Alisto"
},
{
    gafete: "9066379",
    nombre: "BRYAN JOSE ALEMÁN MORA",
    departamento: "Alisto"
},
{
    gafete: "9066313",
    nombre: "JEIKOL JUNAIKEL LEAL SANDOVAL",
    departamento: "Alisto"
},
{
    gafete: "9066363",
    nombre: "KEVIN JESUS PICADO MENDOZA",
    departamento: "Alisto"
},
{
    gafete: "9064948",
    nombre: "CARLOS DANIEL DIAZ REYES",
    departamento: "Alisto"
},
{
    gafete: "9064944",
    nombre: "CARLOS FRANCISCO AVILES TALAVERA",
    departamento: "Alisto"
},
{
    gafete: "8908402",
    nombre: "ALEJANDRO GONZALEZ QUIROS",
    departamento: "Alisto"
},
{
    gafete: "9055307",
    nombre: "BYRON DAVID FLORES TALAVERA",
    departamento: "Alisto"
},
{
    gafete: "9054791",
    nombre: "JOHAN ALEJANDRO QUIROS TRIGUUERO",
    departamento: "Alisto"
},
{
    gafete: "8951965",
    nombre: "JOSUE ANTONIO FLORES MARTINEZ",
    departamento: "Alisto"
},
{
    gafete: "9051148",
    nombre: "EDGAR EDUARDO SOLÍS BALITÁN",
    departamento: "Alisto"
},
{
    gafete: "9051297",
    nombre: "EDSSON SAMIR JIRON CABRERA",
    departamento: "Alisto"
},
{
    gafete: "9051275",
    nombre: "NELTZER ARCELIO SANCHEZ OBANDO",
    departamento: "Alisto"
},
{
    gafete: "9046619",
    nombre: "WARDY LOPEZ BARAHONA",
    departamento: "Alisto"
},
{
    gafete: "9046588",
    nombre: "PABLO JOSE PEREZ JARQUIN",
    departamento: "Alisto"
},
{
    gafete: "9045564",
    nombre: "FRANCISCO ANTONIO SUAZO LÓPEZ",
    departamento: "Alisto"
},
{
    gafete: "9043555",
    nombre: "BRYAN ALCIDES RODRIGUEZ NUÑEZ",
    departamento: "Alisto"
},
{
    gafete: "9042793",
    nombre: "BYRON ANTONIO CRUZ DAVILA",
    departamento: "Alisto"
},
{
    gafete: "9041484",
    nombre: "ROGELIO ALBERTO BRENES RUIZ",
    departamento: "Alisto"
},
{
    gafete: "8281702",
    nombre: "DEIVER JESÚS MORENO ARAUZ",
    departamento: "Alisto"
},
{
    gafete: "9034760",
    nombre: "IAN AHMED BLANCO GONZALEZ",
    departamento: "Alisto"
},
{
    gafete: "9034892",
    nombre: "FREDDY JOSÉ BONILLA MORALES",
    departamento: "Alisto"
},
{
    gafete: "9034884",
    nombre: "MICHAEL JOSUÉ SOLÍS OVIEDO",
    departamento: "Alisto"
},
{
    gafete: "9032358",
    nombre: "YOSVANY DEL RISCO SEDEÑO",
    departamento: "Alisto"
},
{
    gafete: "8994027",
    nombre: "JUAN ORLANDO ALVARADO VARGAS",
    departamento: "Alisto"
},
{
    gafete: "9021638",
    nombre: "ROGER RAFAEL RIVERA PEREIRA",
    departamento: "Alisto"
},

{
    gafete: "9021641",
    nombre: "KEYLOR NOE CASTILLO CERDAS",
    departamento: "Alisto"
},
{
    gafete: "9016576",
    nombre: "FRANCISCO JAVIER ALEMAN PAVÓN",
    departamento: "Alisto"
},
{
    gafete: "9016684",
    nombre: "WILLIAM ALBERTO JIMENEZ ARROYO",
    departamento: "Alisto"
},
{
    gafete: "9015526",
    nombre: "JOSEPH ANDRES BRICEÑO ROJAS",
    departamento: "Alisto"
},
{
    gafete: "9011919",
    nombre: "KATHERINE VALEZCKA QUINTERO HERNANDEZ",
    departamento: "Alisto"
},
{
    gafete: "9010912",
    nombre: "MARIO ENRRIQUE HURTADO NOINDICAOTRO",
    departamento: "Alisto"
},
{
    gafete: "9003895",
    nombre: "JOARDIN VIDAL HERNANDEZ DAVILA",
    departamento: "Alisto"
},
{
    gafete: "7971124",
    nombre: "LUIS EDUARDO SEGURA VILLALOBOS",
    departamento: "Alisto"
},
{
    gafete: "7779113",
    nombre: "RODOLFO ANTONIO CHINCHILLA MURILLO",
    departamento: "Alisto"
},
{
    gafete: "8973291",
    nombre: "FRANCISCO GERARDO VASQUEZ ROJAS",
    departamento: "Alisto"
},
{
    gafete: "8965020",
    nombre: "RICARDO ENRIQUE PENA PENA",
    departamento: "Alisto"
},
{
    gafete: "8961731",
    nombre: "JUAN CARLOS DIAZ CAMPOS",
    departamento: "Alisto"
},
{
    gafete: "8961128",
    nombre: "RANDALL MAURICIO JIMENEZ ORTIZ",
    departamento: "Alisto"
},
{
    gafete: "8960068",
    nombre: "MIKEL STIVEN JARQUIN GONZALEZ",
    departamento: "Alisto"
},
{
    gafete: "8951968",
    nombre: "JUAN BAUTISTA GOMEZ CASTRO",
    departamento: "Alisto"
},
{
    gafete: "8951010",
    nombre: "HECTOR LORIA AGUILAR",
    departamento: "Alisto"
},
{
    gafete: "8948834",
    nombre: "ELDER RIVAS RAMIREZ",
    departamento: "Alisto"
},
{
    gafete: "8948764",
    nombre: "ALEJANDRO MENA RAMIREZ",
    departamento: "Alisto"
},
{
    gafete: "8947848",
    nombre: "OSCAR ARIAS BADILLA",
    departamento: "Alisto"
},
{
    gafete: "8947333",
    nombre: "HENRY CERDAS CASCANTE",
    departamento: "Alisto"
},
{
    gafete: "7776900",
    nombre: "GUSTAVO TORRENTES SOLORZANO",
    departamento: "Alisto"
},
{
    gafete: "8938854",
    nombre: "RICARDO PACHECO BARRANTES",
    departamento: "Alisto"
},
{
    gafete: "8936060",
    nombre: "JESUS ESQUIVEL ENRIQUEZ",
    departamento: "Alisto"
},
{
    gafete: "8334719",
    nombre: "EMIGDIO JAVIER ESPINOZA NOINDICAOTRO",
    departamento: "Alisto"
},
{
    gafete: "8333826",
    nombre: "ALEXIS LOPEZ GUDIEL",
    departamento: "Alisto"
},
{
    gafete: "8252490",
    nombre: "EVER ZEAS PIZARRO",
    departamento: "Alisto"
},
{
    gafete: "8175452",
    nombre: "GERALD ZAMORA CARMONA",
    departamento: "Alisto"
},
{
    gafete: "7778643",
    nombre: "JEINER ANDRES SANCHEZ AGUERO",
    departamento: "Alisto"
},
{
    gafete: "7770106",
    nombre: "ROLANDO ARAYA MONTERO",
    departamento: "Alisto"
},
{
    gafete: "8969147",
    nombre: "JOSE IGNACIO SOLIS BARQUERO",
    departamento: "Alisto"
},
{
    gafete: "9081973",
    nombre: "JOSHUA EZEQUIEL CARMONA MORALES",
    departamento: "Alisto"
},
{
    gafete: "9082218",
    nombre: "STEVEN RENE MORALES GAITAN",
    departamento: "Alisto"
},
{
    gafete: "9082213",
    nombre: "GERSON SEBASTIÁN PARRALES ARAYA",
    departamento: "Alisto"
},
{
    gafete: "9082210",
    nombre: "ERICK YEBRAN VALVERDE OBREGON",
    departamento: "Alisto"
},
{
    gafete: "9082316",
    nombre: "FULTON CRISPIN GORRI MORALES",
    departamento: "Alisto"
},
{
    gafete: "9082295",
    nombre: "ALLAN MARTINEZ CESPEDES",
    departamento: "Alisto"
},
{
    gafete: "9082223",
    nombre: "OSCAR MARIO DELGADO BADILLA",
    departamento: "Alisto"
},
{
    gafete: "9076159",
    nombre: "ANTHONNY DAVID MORA CHINCHILLA",
    departamento: "Despacho"
},
{
    gafete: "8972769",
    nombre: "CARLOS ALBERTO GARCIA VARGAS",
    departamento: "Despacho"
},
{
    gafete: "7770109",
    nombre: "CARLOS FRANCISCO LOPEZ ARRIETA",
    departamento: "Despacho"
},
{
    gafete: "9131500",
    nombre: "CARLOS STEVEN DURAN BERMUDEZ",
    departamento: "Despacho"
},
{
    gafete: "9066297",
    nombre: "CRISTOPHER ANDRÉS GUELL GONZÁLEZ",
    departamento: "Despacho"
},
{
    gafete: "8986687",
    nombre: "DAVID MANUEL JAEN SANCHEZ",
    departamento: "Despacho"
},
{
    gafete: "9081864",
    nombre: "ELGEY JOAO OLIVARES OLIVARES",
    departamento: "Despacho"
},
{
    gafete: "9069397",
    nombre: "ELIAM JOSUE RAMIREZ LUNA",
    departamento: "Despacho"
},
{
    gafete: "8924268",
    nombre: "FELIX FLETES MONTANO",
    departamento: "Despacho"
},
{
    gafete: "9067533",
    nombre: "FRANK DANIEL LOSADA GONZÁLEZ",
    departamento: "Despacho"
},
{
    gafete: "9043320",
    nombre: "FRANKLING JAVIER CAMPOS NOINDICAOTRO",
    departamento: "Despacho"
},
{
    gafete: "9069051",
    nombre: "HAZZLER EMMANUEL PINEDA CABRERA",
    departamento: "Despacho"
},
{
    gafete: "9131366",
    nombre: "IAN MENA MENA",
    departamento: "Despacho"
},
{
    gafete: "8948086",
    nombre: "IRIS LISSETH CHACON NOINDICAOTRO",
    departamento: "Despacho"
},
{
    gafete: "7771878",
    nombre: "JEFFERSON CEDEÑO VARGAS",
    departamento: "Despacho"
},
{
    gafete: "9081974",
    nombre: "JEFFERSON JAVIER CASTRO CASTILLO",
    departamento: "Despacho"
},
{
    gafete: "9008904",
    nombre: "JESSICA BARQUERO QUIROS",
    departamento: "Despacho"
},
{
    gafete: "7782507",
    nombre: "JESSICA MARIA ALPIZAR SOLIS",
    departamento: "Despacho"
},
{
    gafete: "9054238",
    nombre: "JOSÉ ANDRÉS GONZÁLEZ GONZÁLEZ",
    departamento: "Despacho"
},
{
    gafete: "9131383",
    nombre: "JOSE DANIEL ALVARADO QUESADA",
    departamento: "Despacho"
},
{
    gafete: "9076778",
    nombre: "JOSE EDUARDO COLE WESLEY",
    departamento: "Despacho"
},
{
    gafete: "8305203",
    nombre: "JOSE MORA BRENES",
    departamento: "Despacho"
},
{
    gafete: "7776940",
    nombre: "JUAN CARLOS ROJAS QUESADA",
    departamento: "Despacho"
},
{
    gafete: "9045350",
    nombre: "JULIO JOSE LOPEZ MURILLO",
    departamento: "Despacho"
},
{
    gafete: "9068409",
    nombre: "LIRIBET MONTOYA FERNÁNDEZ",
    departamento: "Despacho"
},
{
    gafete: "9132477",
    nombre: "LUIS ANDRES VILLALOBOS LORIA",
    departamento: "Despacho"
},
{
    gafete: "9050506",
    nombre: "MALENA AMAYA RODRIGUEZ",
    departamento: "Despacho"
},
{
    gafete: "9052884",
    nombre: "MARIBEL DAYANA LUQUEZ PALACIO",
    departamento: "Despacho"
},
{
    gafete: "8977772",
    nombre: "NAYARITH YACKDANIA GUILLEN CAMACHO",
    departamento: "Despacho"
},
{
    gafete: "9081970",
    nombre: "RANDALL MAURICIO MATARRITA CHAVARRÍA",
    departamento: "Despacho"
},
{
    gafete: "9132968",
    nombre: "YEIDY VEGA GARCÍA",
    departamento: "Despacho"
},
{
    gafete: "9080454",
    nombre: "YEISON MEDINA JIMENEZ",
    departamento: "Despacho"
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

    let gafeteIngresado = document
        .getElementById("gafeteEmpleado")
        .value;

    if (gafeteIngresado.startsWith("0")) {

        gafeteIngresado =
            gafeteIngresado.substring(1);
    }

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

            const departamentoNuevoIngreso = prompt(
                "Ingrese el departamento al que pertenece:"
            );

            // Si canceló
            if (!nombreNuevo) {
                return;
            }

            // Crear empleado nuevo
            const nuevoEmpleado = {

                gafete: gafeteIngresado,

                nombre: nombreNuevo.toUpperCase(),

                departamento: departamentoNuevoIngreso

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
            fechaSalida, 
            empleadoEncontrado.departamento
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

    let gafeteIngresado = document
        .getElementById("gafeteEmpleado")
        .value;

    if (gafeteIngresado.startsWith("0")) {

        gafeteIngresado =
            gafeteIngresado.substring(1);
    }

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
        <td>${empleado.departamento}</td>
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

            <td>${registro.departamento}</td>
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

btnExportar.addEventListener("click", async () => {

    if (registros.length === 0) {
        alert("No hay registros para exportar");
        return;
    }

    // Crear libro
    const workbook = new ExcelJS.Workbook();

    // Crear hoja
    const worksheet = workbook.addWorksheet("Tiempos Comida");

    // Obtener fecha actual
    const fechaActual = new Date();

    const dia = String(fechaActual.getDate()).padStart(2, "0");
    const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
    const anio = fechaActual.getFullYear();

    // Formato de fecha para el Excel
    const fechaHoy = `${dia}/${mes}/${anio}`;

    // Encabezados
    worksheet.columns = [
        { header: "Fecha", key: "fecha", width: 15 },
        { header: "Gafete", key: "gafete", width: 18 },
        { header: "Nombre", key: "nombre", width: 45 },
        { header: "Hora de salida", key: "salida", width: 20 },
        { header: "Hora de entrada", key: "entrada", width: 20 },
        { header: "Tiempo total", key: "tiempoTotal", width: 18 },
        { header: "Departamento", key: "departamento", width: 18 }
    ];

    // Agregar registros
    registros.forEach(registro => {

        worksheet.addRow({
            fecha: fechaHoy,
            gafete: registro.gafete,
            nombre: registro.nombre,
            salida: registro.salida,
            entrada: registro.entrada,
            tiempoTotal: registro.tiempoTotal,
            departamento: registro.departamento
        });

    });

    // Estilo encabezados
    worksheet.getRow(1).eachCell((cell) => {

        cell.font = {
            bold: true,
            color: { argb: "FFFFFFFF" },
            size: 12
        };

        cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "1F4E78" }
        };

        cell.alignment = {
            vertical: "middle",
            horizontal: "center"
        };

        cell.border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" }
        };

    });

    // Bordes y alineación para todas las filas
    worksheet.eachRow((row) => {

        row.eachCell((cell) => {

            cell.alignment = {
                vertical: "middle",
                horizontal: "center"
            };

            cell.border = {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" }
            };

        });

    });

    // Congelar encabezados
    worksheet.views = [
        {
            state: "frozen",
            ySplit: 1
        }
    ];

    // Descargar archivo
    const buffer = await workbook.xlsx.writeBuffer();

    // Nombre del archivo
    const nombreArchivo =
        `registro_comidas_${dia}-${mes}-${anio}.xlsx`;

    // Descargar
    saveAs(
        new Blob([buffer]),
        nombreArchivo
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

});


const tbody = document.querySelector("#tablaRegistros tbody");
