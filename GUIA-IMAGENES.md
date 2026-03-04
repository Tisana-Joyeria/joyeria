# 🔄 Guía de Actualización de Imágenes

## 📁 Nueva Estructura Organizada por Categoría

```
public/images/
├── collares/        # ✅ Todos los collares aquí
├── anillos/         # ✅ Todos los anillos aquí
├── pulseras/        # ✅ Todas las pulseras aquí
├── aretes/          # ✅ Todos los aretes aquí
├── categorias/      # Imágenes de las tarjetas de categoría (4 imágenes)
└── hero/            # Banner principal
```

## 🎯 Ventajas de Esta Estructura

✅ **Organizado** - Cada categoría en su carpeta  
✅ **Escalable** - Fácil añadir más productos  
✅ **Fácil de encontrar** - Busca por tipo de joya  
✅ **Profesional** - Estructura clara y mantenible

---

## 📝 Archivos Ya Actualizados (✅ HECHO)

Los siguientes archivos **YA están configurados** con las nuevas rutas:

### ✅ Products Service
**Archivo**: `src/app/services/products.service.ts`

```typescript
private products: Product[] = [
  {
    id: 1,
    name: 'Collar Martina',
    image: '/images/collares/collar-martina.jpg',  // ✅ Ya actualizado
    category: 'Collares'
  },
  {
    id: 2,
    name: 'Anillo Sofia',
    image: '/images/anillos/anillo-sofia.jpg',  // ✅ Ya actualizado
    category: 'Anillos'
  },
  // ... etc
];
```

### ✅ Best Sellers Component
**Archivo**: `src/app/components/best-sellers/best-sellers.component.ts`

```typescript
products = [
  {
    id: 1,
    name: 'Collar Rapsodia',
    image: '/images/collares/collar-rapsodia.jpg',  // ✅ Ya actualizado
  },
  {
    id: 2,
    name: 'Anillo Mini Aro',
    image: '/images/anillos/anillo-mini-aro.jpg',  // ✅ Ya actualizado
  },
  // ... etc
];
```

### ✅ Categories Component
**Archivo**: `src/app/components/categories/categories.component.ts`

```typescript
categories = [
  {
    name: 'ANILLOS',
    image: '/images/categorias/anillos.jpg',  // ✅ Ya actualizado
  },
  // ... etc
];
```

---

## 📸 Imágenes Que Necesitas Agregar

### 1️⃣ Carpeta: `/images/categorias/` (4 imágenes)
Estas son las tarjetas grandes que aparecen en la home:

- ✅ `anillos.jpg` - Imagen representativa de anillos
- ✅ `aretes.jpg` - Imagen representativa de aretes
- ✅ `collares.jpg` - Imagen representativa de collares
- ✅ `pulseras.jpg` - Imagen representativa de pulseras

---

### 2️⃣ Carpeta: `/images/collares/` (5 productos)

- ✅ `collar-martina.jpg` (Producto ID: 1)
- ✅ `collar-victoria.jpg` (Producto ID: 5)
- ✅ `collar-isabella.jpg` (Producto ID: 9)
- ✅ `collar-rapsodia.jpg` (Best Seller)
- ✅ `collar-tasha.jpg` (Best Seller)

---

### 3️⃣ Carpeta: `/images/anillos/` (4 productos)

- ✅ `anillo-sofia.jpg` (Producto ID: 2)
- ✅ `anillo-diana.jpg` (Producto ID: 6)
- ✅ `anillo-camila.jpg` (Producto ID: 10)
- ✅ `anillo-mini-aro.jpg` (Best Seller)

---

### 4️⃣ Carpeta: `/images/aretes/` (4 productos)

- ✅ `aretes-luna.jpg` (Producto ID: 3)
- ✅ `aretes-carolina.jpg` (Producto ID: 7)
- ✅ `aretes-valeria.jpg` (Producto ID: 11)
- ✅ `aretes-bela.jpg` (Best Seller)

---

### 5️⃣ Carpeta: `/images/pulseras/` (3 productos)

- ✅ `pulsera-elena.jpg` (Producto ID: 4)
- ✅ `pulsera-valentina.jpg` (Producto ID: 8)
- ✅ `pulsera-natalia.jpg` (Producto ID: 12)

---

## 🚀 Pasos para Implementar

### ✅ Paso 1: Organiza tus Imágenes
Coloca cada imagen en su carpeta correspondiente según la categoría:

```
📁 Tienes un anillo → images/anillos/
📁 Tienes un collar → images/collares/
📁 Tienes aretes → images/aretes/
📁 Tienes una pulsera → images/pulseras/
```

### ✅ Paso 2: Nombra tus Archivos
Usa los nombres exactos de la lista de arriba. Por ejemplo:
- `collar-martina.jpg`
- `anillo-sofia.jpg`
- etc.

### ✅ Paso 3: Recarga el Navegador
Presiona `Ctrl + F5` para refrescar completamente.

---

## 📋 Resumen Rápido

**Total de imágenes necesarias**: 20 imágenes

- 4 imágenes de categorías
- 5 collares
- 4 anillos
- 4 aretes
- 3 pulseras

---

## ❓ Problemas Comunes

**🔴 Las imágenes no aparecen:**
- Verifica que el nombre del archivo sea EXACTO (incluyendo minúsculas/mayúsculas)
- Verifica que la extensión sea `.jpg` (o cambia en el código si usas `.png`)
- Asegúrate de que estén en la carpeta correcta
- Recarga con `Ctrl + F5`

**🔴 Usar formato PNG en vez de JPG:**
Si tus imágenes son `.png`, simplemente cambia la extensión en el código:
```typescript
image: '/images/collares/collar-martina.png'  // Cambiar .jpg a .png
```
