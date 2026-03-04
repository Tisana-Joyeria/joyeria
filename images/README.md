# 📸 Estructura de Imágenes - GINEBRA Joyería

## 📁 Estructura Actual

```
images/
├── 📂 collares/        ✅ Imágenes de collares (5 productos)
├── 📂 anillos/         ✅ Imágenes de anillos (4 productos)
├── 📂 pulseras/        ✅ Imágenes de pulseras (3 productos)
├── 📂 aretes/          ✅ Imágenes de aretes (4 productos)
├── 📂 categorias/      ✅ Tarjetas de categoría (4 imágenes)
└── 📂 hero/            ⚪ Banner principal (opcional)
```

---

## ✅ Código Ya Actualizado

Todos los archivos del proyecto **ya están configurados** para usar esta estructura:

- ✅ [products.service.ts](../../../src/app/services/products.service.ts)
- ✅ [best-sellers.component.ts](../../../src/app/components/best-sellers/best-sellers.component.ts)
- ✅ [categories.component.ts](../../../src/app/components/categories/categories.component.ts)

---

## 🚀 Solo Necesitas:

1. **Agregar tus imágenes** en las carpetas correspondientes
2. **Usar los nombres exactos** de la lista abajo
3. **Refrescar** el navegador (Ctrl + F5)

---

## 📋 Lista Completa de Imágenes

### 📂 `/categorias/` (4 imágenes)
- `anillos.jpg`
- `aretes.jpg`
- `collares.jpg`
- `pulseras.jpg`

### 📂 `/collares/` (5 imágenes)
1. `collar-martina.jpg`
2. `collar-victoria.jpg`
3. `collar-isabella.jpg`
4. `collar-rapsodia.jpg` (Best Seller)
5. `collar-tasha.jpg` (Best Seller)

### 📂 `/anillos/` (4 imágenes)
1. `anillo-sofia.jpg`
2. `anillo-diana.jpg`
3. `anillo-camila.jpg`
4. `anillo-mini-aro.jpg` (Best Seller)

### 📂 `/aretes/` (4 imágenes)
1. `aretes-luna.jpg`
2. `aretes-carolina.jpg`
3. `aretes-valeria.jpg`
4. `aretes-bela.jpg` (Best Seller)

### 📂 `/pulseras/` (3 imágenes)
1. `pulsera-elena.jpg`
2. `pulsera-valentina.jpg`
3. `pulsera-natalia.jpg`

---

## 💡 Ejemplo de Uso

```typescript
// ✅ CORRECTO - Organizado por categoría
{
  name: 'Collar Martina',
  image: '/images/collares/collar-martina.jpg',
  category: 'Collares'
}

{
  name: 'Anillo Sofia',
  image: '/images/anillos/anillo-sofia.jpg',
  category: 'Anillos'
}
```

---

**Total de imágenes**: 20 (16 productos + 4 categorías)

📖 **Guía completa**: [GUIA-IMAGENES.md](../../GUIA-IMAGENES.md)
