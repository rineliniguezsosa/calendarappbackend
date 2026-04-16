# 📅 Calendar App Backend

API REST para la gestión de eventos de calendario.
Construida con **Node.js**, **TypeScript**, **Express** y **MongoDB Atlas**.

**NOTA: (AUN EN DESARROLLO)**

---

## 🚀 Tecnologías utilizadas

* Node.js
* TypeScript
* Express
* MongoDB + Mongoose
* JSON Web Tokens (JWT)
* express-validator
* dotenv

---

## 📦 Instalación

Clona el repositorio:

```bash
git clone https://github.com/rineliniguezsosa/calendarappbackend.git
cd calendarappbackend
```

Instala las dependencias:

```bash
npm install
```

---

## ⚙️ Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
PORT=3000

DB_URL=mongodb+srv://USER:PASSWORD@cluster.mongodb.net/mern_calendar?retryWrites=true&w=majority

SECRET_JWT=tu_clave_secreta
```

---

## ▶️ Ejecución del proyecto

### Desarrollo

```bash
npm run dev
```


## 🔐 Autenticación

La API utiliza JWT para autenticación.

Para acceder a rutas protegidas debes enviar el token en el header:

```bash
x-token: <tu_token>
```

---

## 📌 Endpoints principales

### Auth

* `POST /api/auth/new` → Registrar usuario
* `POST /api/auth/` → Iniciar sesión
* `GET /api/auth/renew` → Renovar token

---

## 👨‍💻 Autor

Rinel Iñiguez Sosa
