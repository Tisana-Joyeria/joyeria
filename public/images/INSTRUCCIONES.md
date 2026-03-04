# 📸 Instrucciones para Imágenes

## ✅ Nueva Estructura Organizada por Categoría

```
public/images/
├── collares/        # ✅ Todos los collares
├── anillos/         # ✅ Todos los anillos
├── pulseras/        # ✅ Todas las pulseras
├── aretes/          # ✅ Todos los aretes
├── categorias/      # Imágenes para las tarjetas de categoría
└── hero/            # Banner principal
```

## 🎯 Ventajas

✅ **Mejor organizado** - Cada tipo de joya en su carpeta  
✅ **Más fácil de mantener** - Encuentra rápidamente lo que buscas  
✅ **Escalable** - Añade 100 collares sin problema  
✅ **Profesional** - Estructura estándar de la industria  

---

## Cómo Agregar tus Imágenes

### 1. Categorías (`/categorias/`)
Coloca 4 imágenes para las tarjetas de categoría:
- `anillos.jpg`
- `aretes.jpg` 
- `collares.jpg`
- `pulseras.jpg`

### 2. Collares (`/collares/`)
Coloca todas las imágenes de collares:
- `collar-martina.jpg`
- `collar-victoria.jpg`
- `collar-isabella.jpg`
- `collar-rapsodia.jpg`
- `collar-tasha.jpg`

### 3. Anillos (`/anillos/`)
Coloca todas las imágenes de anillos:
- `anillo-sofia.jpg`
- `anillo-diana.jpg`
- `anillo-camila.jpg`
- `anillo-mini-aro.jpg`

### 4. Aretes (`/aretes/`)
Coloca todas las imágenes de aretes:
- `aretes-luna.jpg`
- `aretes-carolina.jpg`
- `aretes-valeria.jpg`
- `aretes-bela.jpg`

### 5. Pulseras (`/pulseras/`)
Coloca todas las imágenes de pulseras:
- `pulsera-elena.jpg`
- `pulsera-valentina.jpg`
- `pulsera-natalia.jpg`

---

## Formato Recomendado
- **Formato**: JPG o PNG
- **Tamaño productos**: 600x600px mínimo (cuadradas)
- **Tamaño categorías**: 800x800px mínimo
- **Tamaño hero**: 1920x800px aproximadamente
- **Peso**: Optimiza las imágenes (máximo 500KB por imagen)

---

## Cómo Usar en el Código

Las imágenes se acceden directamente desde la raíz:

```typescript
// ✅ Nueva estructura organizada:
image: '/images/collares/collar-martina.jpg'
image: '/images/anillos/anillo-sofia.jpg'
image: '/images/aretes/aretes-luna.jpg'
image: '/images/pulseras/pulsera-elena.jpg'
```

---

## Ejemplo Práctico

Si tienes una imagen de un collar llamado "Collar Estrella":

1. **Guárdala** como `collar-estrella.jpg`
2. **Colócala** en `public/images/collares/`
3. **Usa** la ruta: `/images/collares/collar-estrella.jpg`

```typescript
{
  id: 13,
  name: 'Collar Estrella',
  price: '$ 320.00',
  image: '/images/collares/collar-estrella.jpg',  // ← Así
  colors: ['#d4af37'],
  category: 'Collares'
}
```

---

## 📋 Total de Imágenes Necesarias

- **Categorías**: 4 imágenes
- **Collares**: 5 imágenes
- **Anillos**: 4 imágenes
- **Aretes**: 4 imágenes
- **Pulseras**: 3 imágenes

**Total**: 20 imágenes

---

## ⚠️ Importante

- Los nombres deben ser **exactos** (incluyendo mayúsculas/minúsculas)
- Usa guiones (`-`) en lugar de espacios
- Todas las rutas empiezan con `/` 
- Las extensiones deben coincidir (`.jpg` vs `.png`)
