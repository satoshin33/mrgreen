document.addEventListener('DOMContentLoaded', function() {
    const qrForm = document.getElementById("qrForm");
    const qrCodeContainer = document.getElementById("qrCodeContainer");
    const cedulaInput = document.getElementById("cedula");
    const currentYearSpan = document.getElementById("currentYear");

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    if (cedulaInput) {
        cedulaInput.addEventListener('input', function(e) {
            this.value = this.value.replace(/[^\d]/g, '');
        });
    }

    if (!qrForm) {
        console.error("Error: El formulario con id 'qrForm' no fue encontrado.");
        return;
    }
    if (!qrCodeContainer) {
        console.error("Error: El contenedor del QR con id 'qrCodeContainer' no fue encontrado.");
        return;
    }

    qrForm.onsubmit = function(event) {
        event.preventDefault();
        // console.log("Formulario enviado, generando QR..."); // Descomentar para depurar

        const cedula = document.getElementById("cedula").value.trim();
        const numeroCuenta = document.getElementById("numero_cuenta").value.trim();
        const banco = document.getElementById("banco").value;

        const qrPlaceholder = qrCodeContainer.querySelector('.qr-placeholder');
        if (qrPlaceholder) {
            qrPlaceholder.remove();
        }
        const oldImg = qrCodeContainer.querySelector('img');
        if (oldImg) {
            oldImg.remove();
        }

        if (!cedula || !numeroCuenta || !banco) {
            // console.warn("Alguno de los campos está vacío."); // Descomentar para depurar
            qrCodeContainer.innerHTML = "<p class='qr-placeholder' style='color:red;'>Por favor, complete todos los campos requeridos.</p>";
            return;
        }

        const datosQR = `Cédula: ${cedula}; Cuenta: ${numeroCuenta}; Banco: ${banco}`;
        // console.log("Datos para el QR:", datosQR); // Descomentar para depurar

        if (typeof QRCode === 'undefined') {
            console.error("Error: La librería QRCode no está cargada.");
            qrCodeContainer.innerHTML = "<p class='qr-placeholder' style='color:red;'>Error: La librería QRCode no está disponible.</p>";
            return;
        }

        // Ajustar el tamaño del QR generado para un diseño más compacto
        QRCode.toDataURL(datosQR, { width: 180, errorCorrectionLevel: 'H' }, function (error, url) {
            if (error) {
                console.error("Error al generar QR con QRCode.toDataURL:", error);
                qrCodeContainer.innerHTML = "<p class='qr-placeholder' style='color:red;'>Error al generar el código QR.</p>";
                return;
            }

            // console.log("URL del QR generado."); // Descomentar para depurar
            const img = document.createElement("img");
            img.src = url;
            img.alt = "Código QR generado con los datos proporcionados";

            qrCodeContainer.innerHTML = ""; // Limpiar cualquier mensaje de error o placeholder
            qrCodeContainer.appendChild(img);
            // console.log("Imagen QR añadida al DOM."); // Descomentar para depurar
        });
    };
});