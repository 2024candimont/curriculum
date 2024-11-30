document.getElementById('agregar-comentario').addEventListener('click', function() {
    let comentarioInput = document.getElementById('comentario-input');
    let comentarioTexto = comentarioInput.value.trim();

    if (comentarioTexto) {
        // Crear un nuevo comentario
        let comentarioDiv = document.createElement('div');
        comentarioDiv.classList.add('comentario');

        let comentarioP = document.createElement('p');
        comentarioP.textContent = comentarioTexto;

        // Agregar el comentario al listado
        comentarioDiv.appendChild(comentarioP);
        document.getElementById('comentarios-lista').appendChild(comentarioDiv);

        // Limpiar el campo de texto
        comentarioInput.value = '';
    } else {
        alert('Por favor, escribe un comentario.');
    }
});
