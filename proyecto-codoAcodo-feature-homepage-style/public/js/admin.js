// Agrega esto en tu script después de cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navbarMenu = document.querySelector('.navbar__menu');

    menuBtn.addEventListener('click', function () {
        navbarMenu.classList.toggle('show-menu');
    });
});

function toggleMenu() {
    const navbarMenu = document.querySelector('.navbar__menu');
    navbarMenu.classList.toggle('show');
}


// Datos de ejemplo
const productos = [
    { id: 1, codigo: 'STW001001', nombre: 'Baby Yoda Blueball', categoria: 'STAR WARS' },
    { id: 2, codigo: 'STW001002', nombre: 'Boba Fett Fighter', categoria: 'STAR WARS' },
    { id: 3, codigo: 'STW001003', nombre: 'Luke Skylwalker & Grogu', categoria: 'STAR WARS' },
    { id: 4, codigo: 'STW001004', nombre: 'Stormtrooper Lightsaber', categoria: 'STAR WARS' },
    { id: 5, codigo: 'STW002002', nombre: 'Stormtrooper Lightsaber', categoria: 'STAR WARS' },
    { id: 6, codigo: 'PKM001001', nombre: 'Charmander Smiley', categoria: 'POKEMON' },
    { id: 7, codigo: 'STW002002', nombre: 'Charmander Smiley', categoria: 'POKEMON' },
    { id: 8, codigo: 'STW002002', nombre: 'Charmander Smiley', categoria: 'POKEMON' },
    { id: 9, codigo: 'STW002002', nombre: 'Charmander Smiley', categoria: 'POKEMON' },
    { id: 10, codigo: 'STW002002', nombre: 'Charmander Smiley', categoria: 'POKEMON' },
    { id: 11, codigo: 'STW002002', nombre: 'Charmander Smiley', categoria: 'POKEMON' },
    { id: 12, codigo: 'STW002002', nombre: 'Charmander Smiley', categoria: 'POKEMON' },
    { id: 13, codigo: 'STW002002', nombre: 'Charmander Smiley', categoria: 'POKEMON' },
  ];

  // Función para mostrar la lista de productos
  function mostrarProductos() {
    const productosTbody = document.getElementById('productos');
    productosTbody.innerHTML = '';

    productos.forEach(producto => {
      const fila = document.createElement('tr');

      const accionesTd = document.createElement('td');
      accionesTd.className = 'acciones';

      const editarBtn = document.createElement('button');
      editarBtn.textContent = 'Editar';
      editarBtn.onclick = () => editarProducto(producto.id);

      const borrarBtn = document.createElement('button');
      borrarBtn.textContent = 'Borrar';
      borrarBtn.onclick = () => borrarProducto(producto.id);

      accionesTd.appendChild(editarBtn);
      accionesTd.appendChild(borrarBtn);

      fila.innerHTML = `
        <td>${producto.id}</td>
        <td>${producto.codigo}</td>
        <td>${producto.nombre}</td>
        <td>${producto.categoria}</td>
      `;

      fila.appendChild(accionesTd);
      productosTbody.appendChild(fila);
    });
  }

  // Función para editar un producto
  function editarProducto(id) {
    // Lógica para editar un producto
    alert('Editar producto con ID: ' + id);
  }

  // Función para borrar un producto
  function borrarProducto(id) {
    // Lógica para borrar un producto
    alert('Borrar producto con ID: ' + id);
  }

  // Mostrar productos al cargar la página
  mostrarProductos();