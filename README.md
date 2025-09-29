# Extension Web Ciencias

Una extensión para Chrome que mejora la apariencia del sitio web https://web.fciencias.unam.mx/

## Características

- 🎨 Mejora visual del diseño del sitio web
- ⚡ Animaciones suaves para mejor experiencia de usuario
- 🎯 Enfoque específico en web.fciencias.unam.mx
- 🔧 Controles desde popup para activar/desactivar
- 📱 Diseño responsivo mejorado

## Instalación

### Instalación en modo desarrollador

1. Descarga o clona este repositorio
2. Abre Chrome y ve a `chrome://extensions/`
3. Activa el "Modo de desarrollador" en la esquina superior derecha
4. Haz clic en "Cargar extensión sin empaquetar"
5. Selecciona la carpeta del proyecto
6. La extensión se instalará y aparecerá en tu barra de herramientas

### Uso

1. Visita https://web.fciencias.unam.mx/
2. Haz clic en el icono de la extensión (🎨) en la barra de herramientas
3. Usa los controles del popup para:
   - Activar/desactivar la extensión
   - Restablecer estilos
   - Ver el estado actual

## Funcionalidades

### Mejoras visuales incluidas:

- **Header mejorado**: Gradiente azul y sombras
- **Navegación moderna**: Efectos hover y transiciones
- **Formularios mejorados**: Bordes redondeados y efectos de foco
- **Botones modernos**: Gradientes y efectos de elevación
- **Tipografía mejorada**: Mejor legibilidad y jerarquía
- **Tablas estilizadas**: Diseño limpio y organizado
- **Animaciones suaves**: Transiciones en elementos interactivos
- **Diseño responsivo**: Optimizado para dispositivos móviles

### Estructura de archivos

```
├── manifest.json       # Configuración de la extensión
├── content.js          # Script que modifica la página
├── styles.css          # Estilos personalizados
├── popup.html          # Interfaz del popup
├── popup.js            # Lógica del popup
├── icons/              # Iconos de la extensión
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
└── README.md           # Este archivo
```

## Desarrollo

### Manifest V3

Esta extensión está construida usando Manifest V3, la última versión del sistema de extensiones de Chrome.

### Permisos requeridos

- `activeTab`: Para interactuar con la página activa
- `host_permissions`: Específico para web.fciencias.unam.mx

### Tecnologías utilizadas

- JavaScript (ES6+)
- CSS3 con animaciones
- HTML5
- Chrome Extensions API

## Personalización

Puedes modificar los estilos editando el archivo `styles.css`. Los cambios incluyen:

- Colores principales
- Efectos de animación
- Espaciado y tipografía
- Efectos hover
- Diseño responsivo

## Compatibilidad

- Chrome 88+
- Edge 88+
- Otros navegadores basados en Chromium

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## Versión

**Versión actual**: 1.0.0

---

Creado para mejorar la experiencia de navegación en el sitio web de la Facultad de Ciencias de la UNAM.