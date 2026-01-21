# Arquitectura Hexagonal - Gestión de Usuarios

Un proyecto de ejemplo implementando **Arquitectura Hexagonal** (también conocida como *Ports and Adapters*) en TypeScript. Este proyecto demuestra las mejores prácticas de diseño de software con separación clara de responsabilidades.

## 📋 Descripción

Este proyecto implementa un sistema de gestión de usuarios siguiendo los principios de arquitectura hexagonal, que permite crear aplicaciones mantenibles, testables e independientes de frameworks específicos.

## 🏗️ Estructura del Proyecto

```
arquitectura-hexagonal/
├── src/
│   └── user/
│       ├── application/           # Casos de uso de la aplicación
│       │   └── usecases/
│       │       ├── createUser.ts   # Crear usuario
│       │       ├── deleteUser.ts   # Eliminar usuario
│       │       ├── getUser.ts      # Obtener usuario
│       │       └── updateUser.ts   # Actualizar usuario
│       │
│       ├── domain/                 # Lógica de negocio pura
│       │   ├── entities/
│       │   │   └── User.ts         # Entidad Usuario
│       │   └── ports/
│       │       └── UserRepository.ts # Interfaz del repositorio
│       │
│       └── infrastructure/         # Implementaciones técnicas
│           ├── api/
│           │   ├── controllers/
│           │   │   └── UserController.ts
│           │   └── routes/
│           │       └── UserRoutes.ts
│           ├── app/
│           │   └── app.ts          # Configuración de la aplicación
│           ├── db/
│           │   └── connectMySql.ts # Conexión a base de datos
│           ├── repositories/
│           │   └── UserRepository.ts # Implementación del repositorio
│           └── server/
│               └── server.ts       # Servidor HTTP
```

## 🎯 Conceptos Clave

### Capas de la Arquitectura Hexagonal

- **Domain (Dominio)**: Contiene la lógica de negocio pura, independiente de cualquier framework
  - `entities/`: Modelos de dominio
  - `ports/`: Interfaces que definen contratos

- **Application (Aplicación)**: Casos de uso que orquestan la lógica de negocio
  - `usecases/`: Acciones específicas del negocio

- **Infrastructure (Infraestructura)**: Detalles técnicos de implementación
  - `api/`: Controladores y rutas HTTP
  - `db/`: Conexión a base de datos
  - `repositories/`: Implementaciones concretas de los puertos

## 👤 Entidad Usuario

La entidad `User` contiene los siguientes atributos:

```typescript
interface UserProps {
  id: number;
  name: string;
  password: string;
  email: string;
}
```

## 🔧 Operaciones Disponibles

- **Create User**: Crear un nuevo usuario
- **Read User**: Obtener información de un usuario
- **Update User**: Actualizar datos de un usuario
- **Delete User**: Eliminar un usuario

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn
- MySQL (para la base de datos)

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/SantiagoM0814/arquitectura-hexagonal.git

# Navegar al directorio
cd arquitectura-hexagonal

# Instalar dependencias
npm install
```

### Configuración

1. Configura tu conexión a MySQL en `src/user/infrastructure/db/connectMySql.ts`
2. Asegúrate de que las variables de entorno estén configuradas correctamente

### Ejecución

```bash
# Iniciar la aplicación
npm start

# La aplicación estará disponible en http://localhost:3000
```

## 📚 Beneficios de esta Arquitectura

✅ **Independencia de Frameworks**: La lógica de negocio no depende de tecnologías específicas

✅ **Testabilidad**: Fácil de testear cada capa de forma independiente  

✅ **Mantenibilidad**: Cambios claros y organizados en carpetas lógicas  

✅ **Escalabilidad**: Extensible sin afectar el código existente  

✅ **Flexibilidad**: Cambiar implementaciones sin afectar el dominio  

## 🧪 Testing

```bash
# Ejecutar tests
npm test
```

## 📝 Notas de Desarrollo

- Respeta la separación de responsabilidades entre capas
- El código de dominio no debe importar desde la infraestructura
- Los puertos definen contratos, las implementaciones los cumplen
- Mantén los casos de uso enfocados en una sola responsabilidad

## 📄 Licencia

ISC

## 👨‍💻 Autor

Santiago M.  
Daniel C.  

---

Para más información sobre Arquitectura Hexagonal, consulta:
- [Alistair Cockburn - Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/)
- [Clean Architecture - Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
