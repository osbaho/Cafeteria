# Cafetería Virtual 🍽️

Sistema de cafetería para contras virtual y solicitudes online

## Descripción

Plataforma web para realizar pedidos online en la cafetería con funcionalidades de:
- Catálogo de productos (bebidas, alimentos, postres)
- Carrito de compras interactivo
- Múltiples métodos de pago
- Interfaz responsive y fácil de usar
- **🔒 Seguridad XSS de nivel empresarial**

## Características

### Catálogo de Productos
- **☕ Bebidas**: Café, jugos, té, chocolate caliente
- **🍔 Alimentos**: Sándwiches, hamburguesas, ensaladas, pasta, pizza
- **🍰 Postres**: Brownies, cheesecake, helados, tiramisú

### Funcionalidades
- ✅ Agregar/quitar productos del carrito
- ✅ Ajustar cantidades de productos
- ✅ Cálculo automático del total
- ✅ Selección de método de pago:
  - 💵 Efectivo
  - 💳 Tarjeta de Crédito/Débito
  - 🏦 Transferencia Bancaria
  - 🔄 Contra Virtual
- ✅ Confirmación de pedido
- ✅ Diseño responsive (móvil y escritorio)
- ✅ Accesibilidad WCAG 2.1 AA compliant

### 🔒 Seguridad

Esta aplicación cuenta con **múltiples capas de protección XSS**:
- Content Security Policy (CSP)
- Headers de seguridad HTTP
- Manipulación segura del DOM (DOM API pura)
- Suite de pruebas de seguridad automatizadas

📖 **Ver [SECURITY.md](SECURITY.md)** para documentación completa de seguridad

## Uso

1. Abre el archivo `index.html` en tu navegador web
2. Explora el catálogo de productos organizados por categorías
3. Haz clic en "Agregar al Carrito" para los productos que desees
4. Ajusta las cantidades usando los botones + y - en el carrito
5. Selecciona tu método de pago preferido
6. Haz clic en "Finalizar Pedido" para confirmar

## Instalación

No se requiere instalación. Simplemente abre el archivo `index.html` en cualquier navegador web moderno:

```bash
# Opción 1: Abrir directamente
open index.html

# Opción 2: Usar un servidor local
python -m http.server 8000
# Luego visita http://localhost:8000

# Opción 3: Con Node.js
npx http-server
```

## Pruebas de Seguridad

Para ejecutar la suite de pruebas de seguridad XSS:

```bash
# Iniciar servidor
python -m http.server 8000

# Abrir en navegador
open http://localhost:8000/test-xss-security.html
```

La suite ejecutará 25+ pruebas verificando todas las capas de seguridad.

## Tecnologías

- HTML5 semántico
- CSS3 (con gradientes, animaciones y organización por secciones)
- JavaScript vanilla ES6+ (sin dependencias)
- DOM API pura para máxima seguridad

## Estructura del Proyecto

```
Cafeteria/
├── index.html              # Página principal con toda la funcionalidad
├── test-xss-security.html  # Suite de pruebas de seguridad XSS
├── SECURITY.md             # Documentación completa de seguridad
├── README.md               # Este archivo
├── LICENSE                 # Licencia del proyecto
└── .gitignore             # Archivos ignorados por git
```

## Capturas de Pantalla

La interfaz incluye:
- Header con gradiente atractivo
- Sección de productos con tarjetas interactivas
- Carrito lateral sticky con control de cantidades
- Sección de métodos de pago
- Notificaciones visuales al agregar productos

## Seguridad

### Capas de Protección Implementadas:

1. **Content Security Policy (CSP)** - Políticas restrictivas
2. **Security Headers** - X-Content-Type-Options, X-Frame-Options, etc.
3. **DOM Manipulation** - 100% createElement + textContent
4. **Automated Testing** - Suite con 25+ pruebas

Ver [SECURITY.md](SECURITY.md) para detalles completos.

## Licencia

Ver archivo LICENSE para más detalles.
