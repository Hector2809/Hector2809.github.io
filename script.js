// Ejercicio 1: Inversión en banco
function calcularInteres() {
    let capital = document.getElementById('capital').value;
    let ganancia = capital * 0.02;
    document.getElementById('resultadoInversion').innerText = 'Ganancia: $' + ganancia;
}

// Ejercicio 2: Sueldo de vendedor (tres ventas)
function calcularComision() {
    let sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
    let venta1 = parseFloat(document.getElementById('venta1').value);
    let venta2 = parseFloat(document.getElementById('venta2').value);
    let venta3 = parseFloat(document.getElementById('venta3').value);

    let totalVentas = venta1 + venta2 + venta3;

    let comision = totalVentas * 0.10;

    let sueldoTotal = sueldoBase + comision;

    document.getElementById('resultadoVendedor').innerText = 'Sueldo total: $' + sueldoTotal;
}

// Ejercicio 3: Descuento en tienda
function calcularDescuento() {
    let totalCompra = document.getElementById('totalCompra').value;
    let descuento = totalCompra * 0.15;
    let totalFinal = totalCompra - descuento;
    document.getElementById('resultadoDescuento').innerText = 'Total final: $' + totalFinal;
}

// Ejercicio 4: Calificación final
function calcularCalificacionFinal() {
    let parciales = document.getElementById('parciales').value * 0.55;
    let examenFinal = document.getElementById('examenFinal').value * 0.30;
    let trabajoFinal = document.getElementById('trabajoFinal').value * 0.15;
    let calificacionFinal = parseFloat(parciales) + parseFloat(examenFinal) + parseFloat(trabajoFinal);
    document.getElementById('resultadoCalificacion').innerText = 'Calificación final: ' + calificacionFinal;
}

// Ejercicio 5: Calcular edad
function calcularEdad() {
    let anoNacimiento = document.getElementById('anoNacimiento').value;
    let edad = new Date().getFullYear() - anoNacimiento;
    document.getElementById('resultadoEdad').innerText = 'Edad: ' + edad + ' años';
}

// Ejercicio 6: Palabras a números
function palabrasANumeros() {
    let palabras = document.getElementById('palabras').value.split(',').map(p => p.trim());
    let mapa = {
        "cero": 0, "uno": 1, "dos": 2, "tres": 3, "cuatro": 4, "cinco": 5, 
        "seis": 6, "siete": 7, "ocho": 8, "nueve": 9
    };
    let resultado = palabras.map(palabra => mapa[palabra.toLowerCase()] || -1);
    document.getElementById('resultadoPalabrasANumeros').innerText = 'Números: ' + resultado.join(', ');
}

// Ejercicio 7: Horas extras
function calcularHorasExtras() {
    let horasTrabajadas = document.getElementById('horasTrabajadas').value;
    let salarioPorHora = document.getElementById('salarioPorHora').value;
    let horasNormales = Math.min(horasTrabajadas, 40);
    let horasExtras = Math.max(horasTrabajadas - 40, 0);
    let horasExtrasDobles = Math.min(horasExtras, 8);
    let horasExtrasTriples = Math.max(horasExtras - 8, 0);

    let salarioTotal = (horasNormales * salarioPorHora) +
        (horasExtrasDobles * salarioPorHora * 2) +
        (horasExtrasTriples * salarioPorHora * 3);

    document.getElementById('resultadoHorasExtras').innerText = 'Salario total: $' + salarioTotal;
}

// Ejercicio 8: Utilidad por antigüedad
function calcularUtilidad() {
    let antiguedad = document.getElementById('antiguedad').value;
    let salarioMensual = document.getElementById('salarioMensual').value;
    let porcentaje;

    if (antiguedad < 1) {
        porcentaje = 0.05;
    } else if (antiguedad < 2) {
        porcentaje = 0.07;
    } else if (antiguedad < 5) {
        porcentaje = 0.10;
    } else if (antiguedad < 10) {
        porcentaje = 0.15;
    } else {
        porcentaje = 0.20;
    }

    let utilidad = salarioMensual * porcentaje;
    document.getElementById('resultadoUtilidad').innerText = 'Utilidad: $' + utilidad;
}

// Ejercicio 9: Validador de formulario
document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let comentarios = document.getElementById('comentarios').value;
    let password = document.getElementById('password').value;
    let acepto = document.getElementById('aceptoCondiciones').checked;

    let nombreRegex = /^[a-zA-Z\s]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (!nombre || !email || !comentarios || !password || !acepto) {
        alert('Todos los campos son obligatorios');
    } else if(!nombreRegex.test(nombre)){
        alert('El nombre no debe contener números o carácteres especiales');
    } else if (!emailRegex.test(email)) {
        alert('Email no válido');
    } else if (password.length < 6 || !passwordRegex.test(password)) {
        alert('Contraseña debe tener mínimo 6 caracteres, incluyendo mayúsculas, minúsculas y números');
    } else {
        alert('Formulario válido y enviado');
    }
});