# 🥫 Sistema de Compra de Latas de Aluminio

Este proyecto es un sistema inteligente para la compra automatizada de latas de aluminio. Fue diseñado para ser seguro, eficiente y fácil de usar, ideal para centros de reciclaje, cooperativas o máquinas compradoras de latas.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 🚀 Características Principales

- ✅ Registro automático de ventas.
- ✅ Generación de código QR para cada transacción.
- ✅ Conexión P2P cifrada para seguridad total.
- ✅ Uso de base de datos MySQL para gestión de datos.
- ✅ Interfaz programada en `index.php` y JavaScript.
- ✅ Sistema público, transparente y confiable.

---

## 🔐 Seguridad

- **Conexión P2P (peer-to-peer)**: asegura que los datos viajan directamente entre el cliente y el sistema sin intermediarios.
- **Base de datos protegida**: todo se almacena en una base de datos MySQL con control de acceso.
- **Códigos QR únicos**: cada venta genera un QR que puede usarse para seguimiento o verificación.

---

## 📦 Estructura del Proyecto

/compra-latas/
│
├── index.php # Página principal del sistema
├── js/
│ └── funciones.js # Lógica de frontend y conexión QR
├── qr/
│ └── generarQR.php # Script para generación de códigos QR
├── db/
│ └── conexion.php # Conexión segura a MySQL
└── README.md # Este archivo
---

## ⚙️ Requisitos

- Servidor con PHP >= 7.4
- MySQL >= 5.7
- Navegador moderno con soporte para JavaScript
- Extensión GD de PHP para generación de QR (opcional)


