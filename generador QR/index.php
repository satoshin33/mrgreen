<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Generador de QR para Proyecto Canaán de Mr. Society.">
    <meta name="keywords" content="Proyecto Canaán, Mr. Society, QR, Pagos">
    <title>CREA TU QR - Proyecto Canaán</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header class="page-header">
            <h1>PROYECTO CANAÁN</h1>
            <p>CREA TU CÓDIGO</p>
        </header>

        <main class="content">
            <form id="qrForm" aria-labelledby="form-title">
                <div class="form-group">
                    <label for="cedula">Cédula de Identidad:</label>
                    <input type="text" id="cedula" name="cedula" placeholder="Ej: 1234567" required pattern="\d*">
                    <small class="form-text text-muted">Solo números, sin puntos ni guiones.</small>
                </div>

                <div class="form-group">
                    <label for="numero_cuenta">Número de Cuenta:</label>
                    <input type="text" id="numero_cuenta" name="numero_cuenta" placeholder="Ej: 987654321" required pattern="[\d-]*">
                     <small class="form-text text-muted">Números y opcionalmente guiones.</small>
                </div>

                <div class="form-group">
                    <label for="banco">Banco:</label>
                    <select id="banco" name="banco" required>
                        <option value="" disabled selected>Seleccione su banco</option>
                        <option value="UENO BANK S.A - COMAPYPA">UENO BANK S.A</option>
                        <option value="Banco Nacional de Fomento (BNF) - BNFAPYPA">BANCO NACIONAL DE FOMENTO (BNF)</option>
                        <option value="Banco Atlas S.A. - BNITPYPA">BANCO ATLAS S.A.</option>
                        <option value="Sudameris Bank S.A.E.C.A. - BSUDPYP">SUDAMERIS BANK S.A.E.C.A.</option>
                        <option value="Banco Itaú Paraguay S.A. - UBBRPYP">BANCO ITAU PARAGUAY S.A.</option>
                        <option value="Banco Continental S.A.E.C.A. - BCNAPYPA">BANCO CONTINENTAL S.A.E.C.A.</option>
                    </select>
                </div>

                <button type="submit" class="submit-btn">Generar QR</button>
            </form>

            <div id="qrCodeContainer" aria-live="polite">
                <p class="qr-placeholder">Su código QR aparecerá aquí.</p>
            </div>
        </main>

        <footer class="page-footer">
           <p><span id="currentYear"></span> <a href="https://ajoguapy.com/conozcanos/" target="_blank" rel="noopener noreferrer">Mr. SOCIETY</a>, All rights reserved.&copy;</p>
        </footer>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/qrcode@1.4.4/build/qrcode.min.js"></script>
    <script src="script.js"></script>
</body>
</html>