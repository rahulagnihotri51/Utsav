let cart = [];
 
function toggleLoginDropdown() {
  document.getElementById('loginDropdown').classList.toggle('open');
}
 
document.addEventListener('click', function(e) {
  const dd = document.getElementById('loginDropdown');
  if (!dd.contains(e.target)) dd.classList.remove('open');
});
 
function openModal(type) {
  document.getElementById('loginDropdown').classList.remove('open');
  document.getElementById(type + 'Modal').classList.add('active');
}
 
function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}
 
document.querySelectorAll('.modal-overlay').forEach(function(overlay) {
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) overlay.classList.remove('active');
  });
});
 
function handleLogin(role) {
  alert( role + ' login successful! Welcome to Utsav.');
  document.querySelectorAll('.modal-overlay').forEach(function(m) { m.classList.remove('active'); });
}
 
function toggleChat() {
  const panel = document.getElementById('chatPanel');
  panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
}
 
function sendMessage() {
  const input = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  const text = input.value.trim();
  if (!text) return;
 
  const userMsg = document.createElement('div');
  userMsg.className = 'msg';
  userMsg.innerHTML = '<strong>You:</strong> ' + text;
  chatMessages.appendChild(userMsg);
 
  const botMsg = document.createElement('div');
  botMsg.className = 'msg';
  botMsg.innerHTML = '<strong>Bot:</strong> We have festive products like diyas, lights, gift boxes, and puja items. Try searching above!';
  chatMessages.appendChild(botMsg);
 
  input.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
 
function searchProducts() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.product-card').forEach(function(card) {
    const name = card.getAttribute('data-name');
    card.style.display = (name.indexOf(input) > -1 || input === '') ? 'block' : 'none';
  });
}
 
function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}
 
function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const totalItems = document.getElementById('totalItems');
  const totalAmount = document.getElementById('totalAmount');
 
  if (!cart.length) {
    cartItems.innerHTML = '<p style="color:#c8a830;font-family:Arial,sans-serif;font-size:14px;">No items added yet.</p>';
    totalItems.textContent = '0';
    totalAmount.textContent = '₹0';
    return;
  }
 
  cartItems.innerHTML = cart.map(item =>
    `<div class="cart-item"><span>${item.name}</span><span>₹${item.price}</span></div>`
  ).join('');
 
  totalItems.textContent = cart.length;
  totalAmount.textContent = '₹' + cart.reduce((s, x) => s + x.price, 0);
  document.getElementById('cart').scrollIntoView({ behavior: 'smooth' });
}
 
function placeOrder() {
  if (!cart.length) { alert('Your cart is empty!'); return; }
  alert('Order placed successfully! Thank you for shopping at Utsav.');
  cart = [];
  updateCart();
}