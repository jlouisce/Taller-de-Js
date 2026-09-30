const nombre = prompt('Ingresa tu nombre completo');
let edad = prompt('Ingresa tu edad');
const ocupacion = prompt('Ingresa tu ocupación');

edad = prompt('Ingresa de nuevo tu edad');

edad = parseInt(edad, 10);

if (Number.isNaN(edad)) {
    alert('La edad no es un número válido');
    throw new Error('Edad inválida: el valor ingresado no es un número.');
} else if (edad < 18) {
    alert('Debes ser mayor o igual a 18 años para crear un perfil.');
    throw new Error('Menor de edad: acceso denegado.');
} else {
    console.log('Edad validada:', edad);
}

function crearPerfil(nombre, edad, ocupacion) {
    if (nombre === '') {
        return null;
    }
    return `Hola, ${nombre}. Tienes ${edad} años y eres un/a ${ocupacion}.`;
}

const mensajeBienvenida = crearPerfil(nombre, edad, ocupacion);
console.log(mensajeBienvenida);

const hobbies = [];
for (let i = 0; i < 3; i++) {
    hobbies.push(prompt(`Ingresa tu hobby número ${i + 1} de 3`));
}

hobbies.forEach((hobby, i) => console.log(`${i + 1}. ${hobby}`));

const perfilUsuario = {
    nombre,
    edad,
    ocupacion,
    hobbies
};

const contenedor = document.getElementById('perfil-container');

contenedor.innerHTML = `
    <h2>${perfilUsuario.nombre}</h2>
    <p><strong>Edad:</strong> ${perfilUsuario.edad} años</p>
    <p><strong>Ocupación:</strong> ${perfilUsuario.ocupacion}</p>
    <h3>Hobbies</h3>
    <ul>
        ${perfilUsuario.hobbies.map((hobby) => `<li>${hobby}</li>`).join('')}
    </ul>
`;
