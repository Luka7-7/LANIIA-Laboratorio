document.getElementById('whatsappForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Detiene el comportamiento de envío tradicional

    // 1. Configura la URL de tu Google Apps Script
    const URL_GOOGLE_SCRIPT = "https://script.google.com/macros/s/AKfycbw5KfBZUWiT6YsK93db-gzE7Jog1SJTwYZE5yyuFw6zL1cqNGURlyNmvBVuhdh36uuQ9Q/exec";

    // 2. Extraer valores del HTML usando los IDs correspondientes
    const datos = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        empresa: document.getElementById('empresa').value || 'No especificada',
        message: document.getElementById('message').value || 'Sin mensaje'
    };

    // =========================
    // Modal Bootstrap (reutilizable)
    // =========================
    const MODAL_ID = 'formStatusModal';
    const MODAL_BODY_ID = 'formStatusModalBody';

    function ensureStatusModal() {
        let modalEl = document.getElementById(MODAL_ID);

        if (!modalEl) {
            const modalWrapper = document.createElement('div');
            modalWrapper.innerHTML = `
                <div class="modal fade" id="${MODAL_ID}" tabindex="-1" aria-labelledby="${MODAL_ID}Label" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content modal-dark" style="background-color: #11141a; color: #ffffff; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px;">
                            <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <h5 class="modal-title" id="${MODAL_ID}Label" style="color: #ffffff;">Enviando Información</h5>
                            </div>
                            <div class="modal-body">
                                <div id="${MODAL_BODY_ID}" class="text-white-50" style="font-size: 16px; line-height: 1.4;">
                                    Procesando...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.body.appendChild(modalWrapper.firstElementChild);
            modalEl = document.getElementById(MODAL_ID);
        }

        return modalEl;
    }

    let currentModalInstance = null;

    function showModalWithText(text, { color = 'white' } = {}) {
        const modalEl = ensureStatusModal();
        const bodyEl = document.getElementById(MODAL_BODY_ID);

        if (bodyEl) {
            bodyEl.innerText = text;
            bodyEl.style.color = color;
        }

        // Bootstrap 5 modal (que no permita cerrar manualmente)
        currentModalInstance = new bootstrap.Modal(modalEl, { backdrop: true, keyboard: false });
        currentModalInstance.show();
        return currentModalInstance;
    }

    function hideAndRemoveModal() {
        if (!currentModalInstance) return;

        const modalEl = document.getElementById(MODAL_ID);
        currentModalInstance.hide();

        const cleanup = () => {
            // Solo quitar el modal que creamos, no toda la pagina
            if (modalEl && modalEl.parentElement) {
                modalEl.remove();
            }

            // Remover backdrops/overlays de Bootstrap de forma segura
            document.querySelectorAll('.modal-backdrop').forEach((b) => b.remove());

            currentModalInstance = null;
        };

        // Espera a que Bootstrap termine la animación y quite el backdrop
        setTimeout(cleanup, 250);
    }

    try {
        // Mostrar estado de carga en modal
        showModalWithText("Enviando datos...", { color: '#a8ffb2' });

        // 3. Enviar asíncronamente SOLO a Google Sheets
        await fetch(URL_GOOGLE_SCRIPT, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });

        // 4. Mostrar mensaje de éxito en modal
        showModalWithText("¡Datos enviados exitosamente!", { color: 'green' });

        // Opcional: Limpiar el formulario después de enviar
        document.getElementById('whatsappForm').reset();

        // Ocultar automáticamente y remover modal/backdrop al acabar
        setTimeout(hideAndRemoveModal, 1500);
    } catch (error) {
        console.error(error);
        showModalWithText("Ocurrió un error al guardar los datos.", { color: 'red' });

        // Ocultar automáticamente y remover modal/backdrop
        setTimeout(hideAndRemoveModal, 2000);
    }
});
