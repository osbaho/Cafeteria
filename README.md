# Cafetería Virtual 🍽️

Sistema de cafetería para contras virtual y solicitudes online

## Descripción

Plataforma web para realizar pedidos online en la cafetería con funcionalidades de:
- Catálogo de productos (bebidas, alimentos, postres)
- Carrito de compras interactivo
- Múltiples métodos de pago
- Interfaz responsive y fácil de usar

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

## Tecnologías

- HTML5
- CSS3 (con gradientes y animaciones)
- JavaScript vanilla (sin dependencias)

## Estructura del Proyecto

```
Cafeteria/
├── index.html          # Página principal con toda la funcionalidad
├── README.md           # Este archivo
├── LICENSE            # Licencia del proyecto
└── .gitignore         # Archivos ignorados por git
```

## Capturas de Pantalla

La interfaz incluye:
- Header con gradiente atractivo
- Sección de productos con tarjetas interactivas
- Carrito lateral sticky con control de cantidades
- Sección de métodos de pago
- Notificaciones visuales al agregar productos

## Licencia

Ver archivo LICENSE para más detalles.
