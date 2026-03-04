import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  // Número de WhatsApp de la tienda (cambiar por tu número)
  // Formato: código de país + número sin espacios ni guiones
  // Ejemplo México: 521234567890, España: 34612345678
  readonly whatsappNumber = '2213335346'; // Cambiar por tu número

  // Control de modales
  showConfirmModal = false;
  showSentConfirmModal = false;
  showSuccessModal = false;
  showClearCartModal = false;
  showRemoveItemModal = false;
  itemToRemoveIndex: number | null = null;

  constructor(public cartService: CartService) {}
  // Acceso al servicio de carrito usando getters
  get cartItems() { return this.cartService.items; }
  get totalItems() { return this.cartService.totalItems; }
  get subtotal() { return this.cartService.subtotal; }

  /**
   * Incrementar cantidad de un producto
   */
  increaseQuantity(index: number) {
    const currentQuantity = this.cartItems()[index].quantity;
    this.cartService.updateQuantity(index, currentQuantity + 1);
  }

  /**
   * Decrementar cantidad de un producto
   */
  decreaseQuantity(index: number) {
    const currentQuantity = this.cartItems()[index].quantity;
    if (currentQuantity > 1) {
      this.cartService.updateQuantity(index, currentQuantity - 1);
    }
  }

  /**
   * Eliminar un producto del carrito
   */
  removeItem(index: number) {
    this.itemToRemoveIndex = index;
    this.showRemoveItemModal = true;
  }

  /**
   * Confirmar eliminación de producto
   */
  confirmRemoveItem() {
    if (this.itemToRemoveIndex !== null) {
      this.cartService.removeItem(this.itemToRemoveIndex);
      this.itemToRemoveIndex = null;
    }
    this.showRemoveItemModal = false;
  }

  /**
   * Cancelar eliminación de producto
   */
  cancelRemoveItem() {
    this.itemToRemoveIndex = null;
    this.showRemoveItemModal = false;
  }

  /**
   * Vaciar todo el carrito
   */
  clearCart() {
    this.showClearCartModal = true;
  }

  /**
   * Confirmar vaciar carrito
   */
  confirmClearCart() {
    this.cartService.clearCart();
    this.showClearCartModal = false;
  }

  /**
   * Cancelar vaciar carrito
   */
  cancelClearCart() {
    this.showClearCartModal = false;
  }

  /**
   * Obtener nombre del color basado en el hex
   */
  getColorName(colorHex: string): string {
    const colorMap: { [key: string]: string } = {
      // Dorados
      '#FFD700': 'Dorado',
      '#ffd700': 'Dorado',
      '#d4af37': 'Dorado',
      '#D4AF37': 'Dorado',
      '#gold': 'Dorado',
      
      // Plateados
      '#C0C0C0': 'Plateado',
      '#c0c0c0': 'Plateado',
      '#silver': 'Plateado',
      '#E5E5E5': 'Plateado Claro',
      '#e5e5e5': 'Plateado Claro',
      '#D3D3D3': 'Gris Claro',
      '#d3d3d3': 'Gris Claro',
      '#808080': 'Gris',
      
      // Oro Rosa
      '#B87333': 'Oro Rosa',
      '#b87333': 'Oro Rosa',
      
      // Blanco y Negro
      '#000000': 'Negro',
      '#000': 'Negro',
      '#FFFFFF': 'Blanco',
      '#ffffff': 'Blanco',
      '#fff': 'Blanco'
    };
    
    // Normalizar el color (convertir a minúsculas)
    const normalizedColor = colorHex?.toLowerCase() || '';
    
    // Buscar en el mapa
    if (colorMap[normalizedColor]) {
      return colorMap[normalizedColor];
    }
    
    // Por defecto, mostrar "Color seleccionado"
    return 'Color seleccionado';
  }

  /**
   * Formatear precio
   */
  formatPrice(amount: number): string {
    return `$ ${amount.toFixed(2)}`;
  }

  /**
   * Enviar pedido por WhatsApp
   */
  sendToWhatsApp() {
    if (this.cartItems().length === 0) {
      alert('El carrito está vacío');
      return;
    }

    // Mostrar modal de confirmación
    this.showConfirmModal = true;
  }

  /**
   * Confirmar y enviar pedido
   */
  confirmOrder() {
    this.showConfirmModal = false;

    // Construir mensaje
    let message = '*NUEVO PEDIDO*\n\n';
    message += '*Productos:*\n';
    message += '─────────────────\n\n';

    // Listar productos
    this.cartItems().forEach((item, index) => {
      const price = parseFloat(item.product.price.replace('$', '').replace(',', ''));
      const colorName = this.getColorName(item.product.colors[item.selectedColor]);
      const subtotalItem = price * item.quantity;

      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   • Categoría: ${item.product.category}\n`;
      message += `   • Color: ${colorName}\n`;
      message += `   • Cantidad: ${item.quantity}\n`;
      message += `   • Precio unitario: ${item.product.price}\n`;
      message += `   • Subtotal: $ ${subtotalItem.toFixed(2)}\n\n`;
    });

    // Resumen
    message += '─────────────────\n';
    message += '*RESUMEN DEL PEDIDO*\n\n';
    message += `*TOTAL: ${this.formatPrice(this.subtotal())}*\n\n`;
    
    message += '¡Gracias por tu compra!\n';
    message += 'Por favor confirma tu pedido y proporciona tus datos de envío.';

    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Abrir WhatsApp
    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    // Mostrar modal intermedio después de abrir WhatsApp
    setTimeout(() => {
      this.showSentConfirmModal = true;
    }, 1000);
  }

  /**
   * Cancelar envío de pedido
   */
  cancelOrder() {
    this.showConfirmModal = false;
  }

  /**
   * Usuario confirmó que envió el mensaje
   */
  confirmedSent() {
    this.showSentConfirmModal = false;
    this.cartService.clearCart();
    this.showSuccessModal = true;
  }

  /**
   * Usuario canceló el envío en WhatsApp
   */
  cancelledSent() {
    this.showSentConfirmModal = false;
    // No limpiar el carrito, el usuario puede intentar de nuevo
  }

  /**
   * Cerrar modal de éxito
   */
  closeSuccessModal() {
    this.showSuccessModal = false;
  }
}
