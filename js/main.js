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
    gafete: "9133111",
    nombre: "DEMBLER QUIROS CHAVARRIA"
},
{
    gafete: "9133018",
    nombre: "ENRIQUE JOSE CAMPOS OBREGON"
},
{
    gafete: "9133076",
    nombre: "JEFFRY ESCOTO VARGAS"
},
{
    gafete: "9132017",
    nombre: "BRANDON ALFONSO VIQUEZ GONZÁLEZ"
},
{
    gafete: "9132116",
    nombre: "DAVID JESUS ZUMBADO LEPIZ"
},
{
    gafete: "9132504",
    nombre: "EDDRY LEYET RODRIGUEZ"
},
{
    gafete: "8246013",
    nombre: "JOSÉ DANIEL RUIZ VILLALOBOS"
},
{
    gafete: "9132468",
    nombre: "KENDALL JOSÉ RAMÍREZ PEÑARANDA"
},
{
    gafete: "9132289",
    nombre: "KENNETH ALBERTO CÉSPEDES MUÑOZ"
},
{
    gafete: "9067452",
    nombre: "ANDERSON FAJARDO ZUNIGA"
},
{
    gafete: "8931591",
    nombre: "ARNOLD JAFETT ESPINOZA MEDRANO"
},
{
    gafete: "9131319",
    nombre: "EDWIN JESÚS RUIZ BONILLA"
},
{
    gafete: "9131490",
    nombre: "ELMER JOAN VÁSQUEZ RODRÍGUEZ"
},
{
    gafete: "9131279",
    nombre: "JOHEL DAVID PALMA RODRIGUEZ"
},
{
    gafete: "9131453",
    nombre: "MAIKOL VILLALOBOS RÍOS"
},
{
    gafete: "9131421",
    nombre: "OSCAR DANILO BONILLA"
},
{
    gafete: "9027716",
    nombre: "RAUDEL PERERA ALVAREZ"
},
{
    gafete: "9129011",
    nombre: "ALEJANDRO ROMERO COTO"
},
{
    gafete: "9129015",
    nombre: "LEE KENT ALVAREZ MENDEZ"
},
{
    gafete: "9129048",
    nombre: "LUIS ANDRÉS ARCE GUERRERO"
},
{
    gafete: "9129034",
    nombre: "STEFANY ARAYA CORDERO"
},
{
    gafete: "8980850",
    nombre: "FELIX GUILLERMO FULOPP FIGUEROA"
},
{
    gafete: "9127981",
    nombre: "LUIS FERNANDO RAMIREZ ALVARADO"
},
{
    gafete: "9081079",
    nombre: "JONATHAN NATANAEL GÓMEZ MEJIA"
},
{
    gafete: "9079422",
    nombre: "JADER JOSE FLORES TORRES"
},
{
    gafete: "8275781",
    nombre: "JOSE EDUARDO BARRIENTOS ALFARO"
},
{
    gafete: "9080256",
    nombre: "WISTON RONALDO GUILLEN REYES"
},
{
    gafete: "9078069",
    nombre: "CRISTOPHER ANTONIO ZAMORA HERNANDEZ"
},
{
    gafete: "9077817",
    nombre: "MANFRED STEVE MORENO MENDOZA"
},
{
    gafete: "9077840",
    nombre: "DEYRIN ARIEL MONZÓN REYES"
},
{
    gafete: "9076715",
    nombre: "GUSTAVO ADOLFO SANDOVAL PEÑARANDA"
},
{
    gafete: "9076837",
    nombre: "HAYKEL ROBERQUIES HERNANDEZ MORA"
},
{
    gafete: "9076268",
    nombre: "EMMANUEL MONTALBAN GARCIA"
},
{
    gafete: "8977197",
    nombre: "JOEL ARIEL URBINA MONTALBAN"
},
{
    gafete: "9060954",
    nombre: "EDDY ADRIAN ESTRADA RAMÍREZ"
},
{
    gafete: "9074396",
    nombre: "ELIDER MAURICIO ARIAS PICADO"
},
{
    gafete: "9037371",
    nombre: "RODOLFO JOSUE BOLANOS RIOS"
},
{
    gafete: "9069040",
    nombre: "JUNIOR CASTRO ARGUEDAS"
},
{
    gafete: "9069038",
    nombre: "RAUDEL BARRIOS PÉREZ"
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
    gafete: "9066379",
    nombre: "BRYAN JOSE ALEMÁN MORA"
},
{
    gafete: "9066313",
    nombre: "JEIKOL JUNAIKEL LEAL SANDOVAL"
},
{
    gafete: "9066363",
    nombre: "KEVIN JESUS PICADO MENDOZA"
},
{
    gafete: "9064948",
    nombre: "CARLOS DANIEL DIAZ REYES"
},
{
    gafete: "9064944",
    nombre: "CARLOS FRANCISCO AVILES TALAVERA"
},
{
    gafete: "8908402",
    nombre: "ALEJANDRO GONZALEZ QUIROS"
},
{
    gafete: "9055307",
    nombre: "BYRON DAVID FLORES TALAVERA"
},
{
    gafete: "9054791",
    nombre: "JOHAN ALEJANDRO QUIROS TRIGUUERO"
},
{
    gafete: "8951965",
    nombre: "JOSUE ANTONIO FLORES MARTINEZ"
},
{
    gafete: "9051148",
    nombre: "EDGAR EDUARDO SOLÍS BALITÁN"
},
{
    gafete: "9051297",
    nombre: "EDSSON SAMIR JIRON CABRERA"
},
{
    gafete: "9051275",
    nombre: "NELTZER ARCELIO SANCHEZ OBANDO"
},
{
    gafete: "9046619",
    nombre: "WARDY LOPEZ BARAHONA"
},
{
    gafete: "9046588",
    nombre: "PABLO JOSE PEREZ JARQUIN"
},
{
    gafete: "9045564",
    nombre: "FRANCISCO ANTONIO SUAZO LÓPEZ"
},
{
    gafete: "9043555",
    nombre: "BRYAN ALCIDES RODRIGUEZ NUÑEZ"
},
{
    gafete: "9042793",
    nombre: "BYRON ANTONIO CRUZ DAVILA"
},
{
    gafete: "9041484",
    nombre: "ROGELIO ALBERTO BRENES RUIZ"
},
{
    gafete: "8281702",
    nombre: "DEIVER JESÚS MORENO ARAUZ"
},
{
    gafete: "9034760",
    nombre: "IAN AHMED BLANCO GONZALEZ"
},
{
    gafete: "9034892",
    nombre: "FREDDY JOSÉ BONILLA MORALES"
},
{
    gafete: "9034884",
    nombre: "MICHAEL JOSUÉ SOLÍS OVIEDO"
},
{
    gafete: "9032358",
    nombre: "YOSVANY DEL RISCO SEDEÑO"
},
{
    gafete: "8994027",
    nombre: "JUAN ORLANDO ALVARADO VARGAS"
},
{
    gafete: "9021638",
    nombre: "ROGER RAFAEL RIVERA PEREIRA"
},

{
    gafete: "9021641",
    nombre: "KEYLOR NOE CASTILLO CERDAS"
},
{
    gafete: "9016576",
    nombre: "FRANCISCO JAVIER ALEMAN PAVÓN"
},
{
    gafete: "9016684",
    nombre: "WILLIAM ALBERTO JIMENEZ ARROYO"
},
{
    gafete: "9015526",
    nombre: "JOSEPH ANDRES BRICEÑO ROJAS"
},
{
    gafete: "9011919",
    nombre: "KATHERINE VALEZCKA QUINTERO HERNANDEZ"
},
{
    gafete: "9010912",
    nombre: "MARIO ENRRIQUE HURTADO NOINDICAOTRO"
},
{
    gafete: "9003895",
    nombre: "JOARDIN VIDAL HERNANDEZ DAVILA"
},
{
    gafete: "7971124",
    nombre: "LUIS EDUARDO SEGURA VILLALOBOS"
},
{
    gafete: "7779113",
    nombre: "RODOLFO ANTONIO CHINCHILLA MURILLO"
},
{
    gafete: "8973291",
    nombre: "FRANCISCO GERARDO VASQUEZ ROJAS"
},
{
    gafete: "8965020",
    nombre: "RICARDO ENRIQUE PENA PENA"
},
{
    gafete: "8961731",
    nombre: "JUAN CARLOS DIAZ CAMPOS"
},
{
    gafete: "8961128",
    nombre: "RANDALL MAURICIO JIMENEZ ORTIZ"
},
{
    gafete: "8960068",
    nombre: "MIKEL STIVEN JARQUIN GONZALEZ"
},
{
    gafete: "8951968",
    nombre: "JUAN BAUTISTA GOMEZ CASTRO"
},
{
    gafete: "8951010",
    nombre: "HECTOR LORIA AGUILAR"
},
{
    gafete: "8948834",
    nombre: "ELDER RIVAS RAMIREZ"
},
{
    gafete: "8948764",
    nombre: "ALEJANDRO MENA RAMIREZ"
},
{
    gafete: "8947848",
    nombre: "OSCAR ARIAS BADILLA"
},
{
    gafete: "8947333",
    nombre: "HENRY CERDAS CASCANTE"
},
{
    gafete: "7776900",
    nombre: "GUSTAVO TORRENTES SOLORZANO"
},
{
    gafete: "8938854",
    nombre: "RICARDO PACHECO BARRANTES"
},
{
    gafete: "8936060",
    nombre: "JESUS ESQUIVEL ENRIQUEZ"
},
{
    gafete: "8334719",
    nombre: "EMIGDIO JAVIER ESPINOZA NOINDICAOTRO"
},
{
    gafete: "8333826",
    nombre: "ALEXIS LOPEZ GUDIEL"
},
{
    gafete: "8252490",
    nombre: "EVER ZEAS PIZARRO"
},
{
    gafete: "8175452",
    nombre: "GERALD ZAMORA CARMONA"
},
{
    gafete: "7778643",
    nombre: "JEINER ANDRES SANCHEZ AGUERO"
},
{
    gafete: "7770106",
    nombre: "ROLANDO ARAYA MONTERO"
},
{
    gafete: "8969147",
    nombre: "JOSE IGNACIO SOLIS BARQUERO"
},
{
    gafete: "9081973",
    nombre: "JOSHUA EZEQUIEL CARMONA MORALES"
},
{
    gafete: "9082218",
    nombre: "STEVEN RENE MORALES GAITAN"
},
{
    gafete: "9082213",
    nombre: "GERSON SEBASTIÁN PARRALES ARAYA"
},
{
    gafete: "9082210",
    nombre: "ERICK YEBRAN VALVERDE OBREGON"
},
{
    gafete: "9082316",
    nombre: "FULTON CRISPIN GORRI MORALES"
},
{
    gafete: "9082295",
    nombre: "ALLAN MARTINEZ CESPEDES"
},
{
    gafete: "9082223",
    nombre: "OSCAR MARIO DELGADO BADILLA"
},

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
        { header: "Tiempo total", key: "tiempoTotal", width: 18 }
    ];

    // Agregar registros
    registros.forEach(registro => {

        worksheet.addRow({
            fecha: fechaHoy,
            gafete: registro.gafete,
            nombre: registro.nombre,
            salida: registro.salida,
            entrada: registro.entrada,
            tiempoTotal: registro.tiempoTotal
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
