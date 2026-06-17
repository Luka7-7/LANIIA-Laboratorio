document.getElementById('whatsappForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Detiene el comportamiento de envío tradicional

    // 1. Configura la URL de tu Google Apps Script
    const URL_GOOGLE_SCRIPT = "https://script.google.com/macros/s/AKfycbxwb2udULIiCxi10TrysMHgpySBheRFVfXoTTFW9CkXo_xmWHusQ8fzwYYy5mDbmjZwPA/exec";  
 

    // 2. Extraer valores del HTML usando los IDs correspondientes
    const datos = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        empresa: document.getElementById('empresa').value || 'No especificada',
        message: document.getElementById('message').value || 'Sin mensaje'
    };

    const msgSubmit = document.getElementById('msgSubmit');

    try {
        // Mostrar estado de carga
        if(msgSubmit) {
            msgSubmit.innerText = "Enviando datos...";
            msgSubmit.classList.remove('hidden');
        }

        // 3. Enviar asíncronamente SOLO a Google Sheets
        await fetch(URL_GOOGLE_SCRIPT, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        
        // 4. Mostrar mensaje de éxito en la pantalla (el usuario se queda en la web)
        if(msgSubmit) {
            msgSubmit.innerText = "¡Registro guardado exitosamente!";
            msgSubmit.style.color = "green"; // Opcional: cambiar color a verde si tu CSS lo permite
        }

        // Opcional: Limpiar el formulario después de enviar
        document.getElementById('whatsappForm').reset();

    } catch (error) {
        if(msgSubmit) {
            msgSubmit.innerText = "Ocurrió un error al guardar los datos.";
            msgSubmit.style.color = "red";
        }
        console.error(error);
    }
});