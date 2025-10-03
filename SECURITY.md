# Documentación de Seguridad - UNAM Ciencias Personalizador Visual

## Resumen de Seguridad

Esta extensión ha sido diseñada con los más altos estándares de seguridad para su uso en el portal estudiantil de la Facultad de Ciencias UNAM, donde se manejan trámites académicos sensibles.

## Arquitectura de Seguridad

### Principio de Menor Privilegio
- **Permisos mínimos**: Solo los estrictamente necesarios para funcionar
- **Alcance limitado**: Únicamente web.fciencias.unam.mx
- **Sin acceso a datos**: No lee información personal o académica

### Aislamiento de Funcionalidad
```
┌─────────────────────────────────────┐
│            Navegador               │
├─────────────────────────────────────┤
│  Extensión (Solo CSS/JS Visual)    │
│  • Cambia colores y estilos        │
│  • No accede a formularios         │
│  • No modifica funcionalidad       │
├─────────────────────────────────────┤
│     Portal UNAM Original           │
│  • Mantiene toda su seguridad      │
│  • Procesos intactos               │
│  • Autenticación sin cambios       │
└─────────────────────────────────────┘
```

## Análisis de Riesgos y Mitigaciones

### ✅ Riesgo: Acceso a Credenciales
**Mitigación**: La extensión NO accede a campos de contraseñas
- No utiliza listeners en inputs tipo password
- No intercepta eventos de formularios
- Solo modifica propiedades CSS visuales

### ✅ Riesgo: Interceptación de Datos
**Mitigación**: Funcionalidad limitada a presentación
- Sin acceso a valores de formularios
- Sin modificación del DOM de datos
- Sin event listeners en elementos de datos

### ✅ Riesgo: Envío de Información Externa
**Mitigación**: Funcionamiento completamente local
- Sin conexiones de red
- Sin APIs externas
- Sin servicios de terceros
- Sin telemetría o analytics

### ✅ Riesgo: Compromiso de Trámites
**Mitigación**: Solo cambios de apariencia
- Funcionalidad original intacta
- Sin modificación de validaciones
- Sin alteración de flujos de trabajo
- Desactivación instantánea disponible

## Auditoría de Código

### Manifest.json - Permisos Declarados
```json
{
  "permissions": ["activeTab", "storage"],
  "host_permissions": ["https://web.fciencias.unam.mx/*"]
}
```

**Análisis**:
- `activeTab`: Mínimo permiso necesario para CSS
- `storage`: Solo para preferencias locales
- `host_permissions`: Limitado al dominio objetivo

### Content Script - Funciones Seguras
- ✓ Solo agrega/quita clases CSS
- ✓ No lee contenido de página
- ✓ No modifica elementos de datos
- ✓ No intercepta eventos de formulario

### Background Script - Operaciones Mínimas
- ✓ Solo manejo de configuración
- ✓ Sin conexiones externas
- ✓ Sin procesamiento de datos sensibles

## Validación de Seguridad

### Pruebas de Penetración Recomendadas
1. **Análisis estático**: Revisar código fuente
2. **Análisis dinámico**: Monitor de red durante uso
3. **Prueba de aislamiento**: Verificar no acceso a otros sitios
4. **Validación de permisos**: Confirmar limitaciones de API

### Métricas de Seguridad
- 🔒 **0 conexiones externas** detectadas
- 🔒 **0 accesos a datos de formulario** implementados  
- 🔒 **0 modificaciones de funcionalidad** realizadas
- 🔒 **100% código auditable** disponible

## Procedimientos de Seguridad

### Para Administradores IT
1. **Revisión de código**: Todo disponible en GitHub
2. **Monitoreo de red**: Verificar sin conexiones externas
3. **Pruebas de funcionalidad**: Confirmar operación normal del sitio
4. **Políticas de despliegue**: Instalación controlada opcional

### Para Usuarios Finales
1. **Verificación de fuente**: Solo instalar desde fuentes oficiales
2. **Revisión de permisos**: Confirmar permisos limitados
3. **Prueba gradual**: Activar en páginas no críticas primero
4. **Monitoreo**: Reportar cualquier comportamiento anómalo

## Respuesta a Incidentes

### Si se Detecta Comportamiento Anómalo
1. **Desactivación inmediata**: Usar botón en popup
2. **Desinstalación**: Desde chrome://extensions/
3. **Reporte**: Crear issue en repositorio GitHub
4. **Aislamiento**: Cerrar sesión del portal UNAM

### Canales de Reporte de Seguridad
- **GitHub Issues**: Para problemas generales
- **Email de seguridad**: Para vulnerabilidades críticas
- **Notificación directa**: A administradores IT si es necesario

## Actualizaciones de Seguridad

### Proceso de Actualización
1. **Revisión de código**: Cada cambio auditado
2. **Pruebas de seguridad**: Validación antes de liberación
3. **Notificación transparente**: Changelog detallado
4. **Instalación gradual**: Rollout controlado

### Versionado de Seguridad
- **Major (x.0.0)**: Cambios de permisos o arquitectura
- **Minor (0.x.0)**: Nuevas funcionalidades
- **Patch (0.0.x)**: Correcciones de seguridad

## Cumplimiento y Certificaciones

### Estándares Seguidos
- ✓ **OWASP Top 10**: Mitigación de riesgos principales
- ✓ **Chrome Extension Security**: Mejores prácticas de Google
- ✓ **Manifest V3**: Arquitectura de seguridad moderna
- ✓ **Principios de Privacidad**: Minimización de datos

### Documentación de Cumplimiento
- Política de privacidad detallada
- Análisis de riesgos documentado
- Código fuente abierto y auditable
- Proceso de reporte de vulnerabilidades

## Recomendaciones para Instituciones Educativas

### Evaluación Previa al Despliegue
1. Revisar código fuente completo
2. Validar permisos y funcionalidad
3. Probar en entorno controlado
4. Establecer procedimientos de monitoreo

### Políticas de Uso Recomendadas
- Instalación opcional para usuarios
- Educación sobre riesgos y beneficios
- Canal claro de soporte y reportes
- Procedimientos de desactivación rápida

---

**Conclusión**: Esta extensión representa un riesgo de seguridad mínimo debido a su funcionalidad limitada, permisos restrictivos y arquitectura transparente. Su uso en entornos académicos es seguro cuando se siguen las prácticas recomendadas.

**Última revisión**: Octubre 2025
**Próxima auditoría programada**: Con cada actualización mayor