
# 🧾 Order Tracking Panel

Portal web para la consulta y seguimiento del estatus de pedidos de GDI, permitiendo a clientes visualizar el progreso de sus órdenes en tiempo real mediante una experiencia similar a sistemas de paquetería como DHL o FedEx.

---

## 🚀 Objetivo del proyecto

Este proyecto tiene como objetivo proporcionar una interfaz moderna, clara y funcional donde los usuarios puedan:

- Consultar el estado de su pedido mediante un número de orden
- Visualizar el historial de eventos del pedido (tracking)
- Obtener información relevante como:
  - Estado actual
  - Fechas clave
  - Información de envío
  - Guía de paquetería (si aplica)

---

## 🧠 Arquitectura del sistema

La solución está basada en una arquitectura desacoplada:

```
Frontend (React)
        ↓
Backend (Firebase Functions)
        ↓
SAP Business One (Service Layer)
```

### 🔹 Frontend
- React + Vite
- UI basada en Bootstrap
- Experiencia tipo tracking (timeline / historial)

### 🔹 Backend
- Firebase Functions (Node.js)
- Encargado de:
  - Autenticarse con SAP Service Layer
  - Consultar órdenes
  - Transformar datos crudos en estructura amigable
  - Exponer endpoints al frontend

### 🔹 SAP Business One
- Fuente principal de datos
- Acceso mediante Service Layer (API REST)
- Proporciona:
  - Órdenes de venta
  - Entregas
  - Facturas
  - Campos personalizados (UDFs)

---

## 🔐 Flujo de funcionamiento

1. El usuario ingresa su número de pedido
2. El frontend envía la solicitud al backend
3. El backend consulta SAP vía Service Layer
4. Se procesa y transforma la información
5. Se devuelve un JSON estructurado
6. El frontend renderiza el tracking

---

## 📦 Ejemplo de respuesta esperada

```json
{
  "orderNumber": "GDI-12345",
  "status": "En tránsito",
  "customer": "Empresa XYZ",
  "events": [
    {
      "status": "Pedido creado",
      "date": "2026-03-12T10:32:00"
    },
    {
      "status": "En producción",
      "date": "2026-03-13T14:15:00"
    },
    {
      "status": "Enviado",
      "date": "2026-03-15T09:00:00"
    }
  ]
}
```

---

## ⚙️ Instalación local

### 1. Clonar repositorio

```bash
git clone https://github.com/tu-repo/order-tracking-panel.git
cd order-tracking-panel
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar proyecto

```bash
npm run dev
```

---

## 🔥 Firebase Setup

### Inicializar Firebase

```bash
firebase init
```

Seleccionar:
- Hosting
- Functions

---

### Deploy

```bash
firebase deploy
```

---

## 🌐 Estructura del proyecto

```
/src
  /shared
    /client
      /order
        /components
        /pages
  /routes

/functions
  index.js (Firebase Functions - backend API)

firebase.json
```

---

## 🧩 Endpoints esperados

### Obtener tracking de pedido

```
GET /api/tracking/:orderNumber
```

Ejemplo:

```
GET /api/tracking/GDI-12345
```

---

## ⚠️ Consideraciones importantes

- SAP no proporciona un tracking listo → se construye en backend
- No consumir Service Layer directamente desde frontend
- Manejar autenticación segura en backend
- Estandarizar la estructura de respuesta

---

## 🚀 Roadmap

### Fase 1
- Consulta de pedido por número
- Mostrar estado actual

### Fase 2
- Integración con entregas (DeliveryNotes)
- Mostrar guía y paquetería

### Fase 3
- Timeline visual tipo DHL
- Estados dinámicos con iconos

### Fase 4
- Integración con tracking real de paqueterías
- Notificaciones

---

## 👨‍💻 Autor

Hugo Durán  
MarkTech Head / Full Stack Developer  
GDI / Bravo Business Wear

---

## 🧠 Notas finales

Este proyecto no solo es un visor de pedidos, es una capa de experiencia sobre SAP, diseñada para transformar datos técnicos en información útil para el usuario final.
