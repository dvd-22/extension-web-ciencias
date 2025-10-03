# UNAM Ciencias - Personalizador Visual 🎓

> Extensión de navegador segura y privada para mejorar la experiencia visual del portal estudiantil de la Facultad de Ciencias UNAM

[![Versión](https://img.shields.io/badge/versión-1.0.0-blue.svg)](https://github.com/dvd-22/extension-web-ciencias)
[![Privacidad](https://img.shields.io/badge/privacidad-garantizada-green.svg)](./PRIVACY_POLICY.md)
[![Seguridad](https://img.shields.io/badge/seguridad-auditada-green.svg)](./SECURITY.md)
[![Licencia](https://img.shields.io/badge/licencia-MIT-green.svg)](./LICENSE)

## 🔒 Privacidad y Seguridad Garantizadas

Esta extensión ha sido diseñada específicamente para su uso seguro en el portal de servicios estudiantiles donde se manejan trámites académicos sensibles como:
- Constancias de estudios
- Solicitudes de credenciales 
- Inscripciones y pagos
- Información académica personal

### ✅ **Compromiso de Seguridad**
- **❌ No recopila datos personales** de ningún tipo
- **❌ No accede a credenciales** o contraseñas  
- **❌ No interfiere con trámites** o funcionalidad del sitio
- **❌ No envía información** a servidores externos
- **✅ Solo modifica la apariencia visual** con CSS

## ✨ Características

- 🎨 **Tema moderno y profesional** para mejor legibilidad
- 🌙 **Modo oscuro** que reduce fatiga visual
- 🔄 **Activación/desactivación instantánea** desde el popup
- 💾 **Configuración local** sin registro de actividad
- 🔧 **Restablecimiento rápido** a tema original
- 📱 **Interfaz responsiva** y accesible

## 🚀 Instalación Rápida

### Para Usuarios
1. Descarga o clona este repositorio
2. Abre Chrome y ve a `chrome://extensions/`
3. Activa el "Modo de desarrollador"
4. Haz clic en "Cargar extensión sin empaquetar"
5. Selecciona la carpeta del proyecto

### Para Desarrolladores
```bash
git clone https://github.com/dvd-22/extension-web-ciencias.git
cd extension-web-ciencias
# La extensión está lista para cargar en Chrome
```

## 📖 Uso

1. **Visita** el portal: `https://web.fciencias.unam.mx/`
2. **Haz clic** en el ícono de la extensión 🎓
3. **Activa/desactiva** la personalización según prefieras
4. **Disfruta** de la experiencia visual mejorada

## 🛡️ Documentación de Seguridad

- **[Política de Privacidad](./PRIVACY_POLICY.md)** - Garantías de privacidad detalladas
- **[Documentación de Seguridad](./SECURITY.md)** - Análisis técnico de seguridad
- **[Guía de Desarrollo](./DEVELOPMENT_GUIDE.md)** - Para personalizar la extensión

## 🎯 Solo para UNAM Ciencias

Esta extensión está diseñada exclusivamente para:
- `https://web.fciencias.unam.mx/*`
- Portal de servicios estudiantiles de la Facultad de Ciencias UNAM
- **No funciona** en otros sitios web por motivos de seguridad

## 🔧 Para Desarrolladores

### Estructura del Proyecto
```
├── manifest.json          # Configuración de la extensión
├── popup.html/popup.js    # Interfaz de usuario
├── content.js            # Script inyectado en el sitio
├── background.js         # Service worker
├── styles.css           # Estilos personalizados
└── icons/              # Iconos de la extensión
```

### Personalizar Estilos
Edita `styles.css` para agregar tus propios estilos:

```css
/* Solo se aplica cuando la extensión está activa */
body.fciencias-customizer-active .tu-elemento {
  color: #tu-color !important;
  background: #tu-background !important;
}
```

### Permisos Utilizados
- `activeTab`: Para aplicar estilos solo en la pestaña activa
- `storage`: Para guardar preferencias localmente
- `host_permissions`: Solo para web.fciencias.unam.mx

## 🤝 Contribuir

Las contribuciones son bienvenidas, especialmente:
- 🎨 Mejoras de diseño y usabilidad
- 🔒 Auditorías de seguridad
- 📚 Mejoras en documentación
- 🐛 Reportes de bugs

### Proceso de Contribución
1. Fork del repositorio
2. Crea una rama para tu característica
3. Asegúrate de que no comprometes la seguridad
4. Envía un Pull Request

## 📝 Reportar Problemas

- **Bugs generales**: [Crear issue en GitHub](https://github.com/dvd-22/extension-web-ciencias/issues)
- **Problemas de seguridad**: Crear issue con etiqueta `security`
- **Sugerencias**: Issues con etiqueta `enhancement`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](./LICENSE) para detalles.

## 🏛️ Compromiso Institucional

Esta extensión respeta y apoya:
- La misión educativa de la UNAM
- La privacidad de la comunidad estudiantil
- Los estándares de seguridad institucionales
- La transparencia y el código abierto

---

**⚠️ Disclaimer**: Esta es una extensión independiente no oficial. No está afiliada oficialmente con la UNAM o la Facultad de Ciencias. Su propósito es mejorar la experiencia de usuario de manera segura y privada.

**👥 Para la comunidad estudiantil**: Desarrollado pensando en hacer más agradable el uso diario del portal académico, sin comprometer jamás la seguridad de tus trámites universitarios.

---

<div align="center">
  <strong>🎓 Hecho con ❤️ para la comunidad de Ciencias UNAM</strong>
</div>