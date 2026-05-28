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
    },

    {
        gafete: "9074396",
        nombre: "ELIDER MAURICIO ARIAS PICADO"
    },

    {
        gafete: "9076837",
        nombre: "HAYKEL ROBERQUIES HERNANDEZ MORA"
    },

    {
        gafete: "9077758",
        nombre: "BRYAN ESTEBAN RODRIGUEZ PEREIRA"
    },

    {
        gafete: "9077817",
        nombre: "MANFRED STEVE MORENO MENDOZA"
    },

    {
        gafete: "7779134",
        nombre: "DAVID MONTERO"
    },

    {
        gafete: "8936060",
        nombre: "JESUS ESQUIVEL ENRIQUEZ"
    },

    {
        gafete: "9021641",
        nombre: "KEYLOR NOE CASTILLO CERDAS"
    },

    {
        gafete: "9011919",
        nombre: "KATHERINE VALEZCKA QUINTERO HERNANDEZ"
    },

    {
        gafete: "9066016",
        nombre: "ÓSCAR ADRIÁN MONGE ALFARO"
    },

    {
        gafete: "8331720",
        nombre: "DENILSON PALACIOS RIZO"
    },

    {
        gafete: "7770106",
        nombre: "ROLANDO ARAYA MONTERO"
    },

    {
        gafete: "8908402",
        nombre: "ALEJANDRO GONZALEZ QUIROS"
    },

    {
        gafete: "8948764",
        nombre: "ALEJANDRO MENA RAMIREZ"
    },

    {
        gafete: "9051148",
        nombre: "EDGAR EDUARDO SOLÍS BALITÁN"
    },

    {
        gafete: "8947333",
        nombre: "HENRY CERDAS CASCANTE"
    },

    {
        gafete: "8175452",
        nombre: "GERALD ZAMORA CARMONA"
    },

    {
        gafete: "8951010",
        nombre: "HECTOR LORIA AGUILAR"
    },

    {
        gafete: "9034760",
        nombre: "IAN AHMED BLANCO GONZALEZ"
    },

    {
        gafete: "9015526",
        nombre: "JOSEPH ANDRES BRICEÑO ROJAS"
    },

    {
        gafete: "8961731",
        nombre: "JUAN CARLOS DIAZ CAMPOS"
    },

    {
        gafete: "8973523",
        nombre: "JORDAN JOSUE HERNANDEZ ARIAS"
    },

    {
        gafete: "9003895",
        nombre: "JOARDIN VIDAL HERNANDEZ DAVILA"
    },

    {
        gafete: "9016544",
        nombre: "JOSE PABLO HERNANDEZ MOYA"
    },

    {
        gafete: "9055562",
        nombre: "JOSE ANDRES MARTINEZ MENDOZA"
    },

    {
        gafete: "9054791",
        nombre: "JOHAN ALEJANDRO QUIROS TRIGUUERO"
    },

    {
        gafete: "7971124",
        nombre: "LUIS EDUARDO SEGURA VILLALOBOS"
    },

    {
        gafete: "9010912",
        nombre: "MARIO ENRRIQUE HURTADO NOINDICAOTRO"
    },

    {
        gafete: "8960068",
        nombre: "MIKEL STIVEN JARQUIN GONZALEZ"
    },

    {
        gafete: "9034884",
        nombre: "MICHAEL JOSUÉ SOLÍS OVIEDO"
    },

    {
        gafete: "9051275",
        nombre: "NELTZER ARCELIO SANCHEZ OBANDO"
    },

    {
        gafete: "8947848",
        nombre: "OSCAR ARIAS BADILLA"
    },

    {
        gafete: "9046588",
        nombre: "PABLO JOSE PEREZ JARQUIN"
    },

    {
        gafete: "9037371",
        nombre: "RODOLFO JOSUE BOLANOS RIOS"
    },

    {
        gafete: "9041484",
        nombre: "ROGELIO ALBERTO BRENES RUIZ"
    },

    {
        gafete: "7779113",
        nombre: "RODOLFO ANTONIO CHINCHILLA MURILLO"
    },

    {
        gafete: "8961128",
        nombre: "RANDALL MAURICIO JIMENEZ ORTIZ"
    },

    {
        gafete: "8938854",
        nombre: "RICARDO PACHECO BARRANTES"
    },

    {
        gafete: "9021638",
        nombre: "ROGER RAFAEL RIVERA PEREIRA"
    },

    {
        gafete: "9052726",
        nombre: "REYNER MAURICIO ROCHA COREA"
    },

    {
        gafete: "9016684",
        nombre: "WILLIAM ALBERTO JIMENEZ ARROYO"
    },

    {
        gafete: "9046619",
        nombre: "WARDY LOPEZ BARAHONA"
    },

    {
        gafete: "9035086",
        nombre: "YANIER AVILES LABACENO"
    },

    {
        gafete: "8994027",
        nombre: "JUAN ORLANDO ALVARADO VARGAS"
    },

    {
        gafete: "8146851",
        nombre: "ROLANDO DE JESUS SEGURA ALVAREZ"
    },

    {
        gafete: "9045564",
        nombre: "FRANCISCO ANTONIO SUAZO LÓPEZ"
    },

    {
        gafete: "9066379",
        nombre: "BRYAN JOSE ALEMÁN MORA"
    },

    {
        gafete: "9043249",
        nombre: "KEVIN JOSE MEDAL ZAPATA"
    },

    {
        gafete: "9036299",
        nombre: "MIGUEL ANTONIO GOMEZ GARCIA"
    },

    {
        gafete: "9032358",
        nombre: "YOSVANY DEL RISCO SEDEÑO"
    },

    {
        gafete: "9059757",
        nombre: "RUBÉN MARIA GARCIA AGUILAR"
    },
    {
        gafete: "9073763",
        nombre: "FRANKLIN MONTIEL ARGUEDAS"
    },

    {
        gafete: "7771878",
        nombre: "JEFFERSON CEDEÑO VARGAS"
    },

    {
        gafete: "7776940",
        nombre: "JUAN CARLOS ROJAS QUESADA"
    },

    {
        gafete: "7782507",
        nombre: "JESSICA MARIA ALPIZAR SOLIS"
    },

    {
        gafete: "8305203",
        nombre: "JOSE MORA BRENES"
    },

    {
        gafete: "7770109",
        nombre: "CARLOS FRANCISCO LOPEZ ARRIETA"
    },

    {
        gafete: "8924268",
        nombre: "FELIX FLOTES MONTANO"
    },

    {
        gafete: "8948086",
        nombre: "IRIS LISSETH CHACON NOINDICAOTRO"
    },

    {
        gafete: "7777455",
        nombre: "JORBIN PEREZ POMARES"
    },

    {
        gafete: "7784925",
        nombre: "JUAN GABRIEL HERNANDEZ RIVERA"
    },

    {
        gafete: "9076159",
        nombre: "ANTHONY DAVID MORA CHINCHILLA"
    },

    {
        gafete: "8972769",
        nombre: "CARLOS ALBERTO GARCIA VARGAS"
    },

    {
        gafete: "8986687",
        nombre: "DAVID MANUEL JAEN SANCHEZ"
    },

    {
        gafete: "9008904",
        nombre: "JESSICA BARQUERO QUIROS"
    },

    {
        gafete: "9045350",
        nombre: "JULIO JOSE LOPEZ MURILLO"
    },

    {
        gafete: "9075422",
        nombre: "ALEXANDER CRUZ SALGUERA"
    },

    {
        gafete: "9043320",
        nombre: "FRANKLING JAVIER CAMPOS NOINDICAOTRO"
    },

    {
        gafete: "9050506",
        nombre: "MALENA AMAYA RODRIGUEZ"
    },

    {
        gafete: "9052884",
        nombre: "MARIBEL DAYANA LUQUEZ PALACIO"
    },

    {
        gafete: "9076141",
        nombre: "NAZARETH ZIDANE MAYORQUÍN JIMÉNEZ"
    },

    {
        gafete: "9054238",
        nombre: "JOSÉ ANDRÉS GONZÁLEZ GONZÁLEZ"
    },

    {
        gafete: "9054258",
        nombre: "TANIA YULIETH HUERTA HERNÁNDEZ"
    },

    {
        gafete: "9055539",
        nombre: "MARIA VANESSA AVALOS MORALES"
    },

    {
        gafete: "9055543",
        nombre: "ALISON DANIELA RUIZ JIMENEZ"
    },

    {
        gafete: "9076778",
        nombre: "JOSE EDUARDO COLE WESLEY"
    },

    {
        gafete: "9066246",
        nombre: "LUIS MANUEL IZAGUIRRE HERNANDEZ"
    },

    {
        gafete: "9066297",
        nombre: "CRISTOPHER ANDRÉS GUELL GONZÁLEZ"
    },

    {
        gafete: "9067533",
        nombre: "FRANK DANIEL LOSADA GONZÁLEZ"
    },

    {
        gafete: "9068409",
        nombre: "LIRIBET MONTOYA FERNÁNDEZ"
    },

    {
        gafete: "9069397",
        nombre: "ELIAM JOSUE RAMIREZ LUNA"
    },

    {
        gafete: "9069051",
        nombre: "HAZZLER EMMANUEL PINEDA CABRERA"
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

    // Encabezados
    worksheet.columns = [

        { header: "Gafete", key: "gafete", width: 18 },

        { header: "Nombre", key: "nombre", width: 45 },

        { header: "Hora de salida", key: "salida", width: 20 },

        { header: "Hora de entrada", key: "entrada", width: 20 },

        { header: "Tiempo total", key: "tiempoTotal", width: 18 }

    ];

    // Agregar registros
    registros.forEach(registro => {

        worksheet.addRow({

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
            fgColor: { argb: "1F4E78" } // Azul oscuro
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
    worksheet.eachRow((row, rowNumber) => {

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

    // Obtener fecha actual
    const fechaActual = new Date();

    // Día
    const dia = String(
        fechaActual.getDate()
    ).padStart(2, "0");

    // Mes
    const mes = String(
        fechaActual.getMonth() + 1
    ).padStart(2, "0");

    // Año
    const anio = fechaActual.getFullYear();

    // Nombre final
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
})

const tbody = document.querySelector("#tablaRegistros tbody");