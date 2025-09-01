document.addEventListener('DOMContentLoaded', () => {

   // let sumOfCart = 0; // using this when adding and  rendenring at talso in addToCart fundtion

   const products = [
      { id: 1, name: "Nike Air Jordan", price: 120.99 },
      { id: 2, name: "Apple Airpods 3", price: 220.59 },
      { id: 3, name: "Swiss Army Bag", price: 100.33 },
      { id: 4, name: "Nike Sweatshirt", price: 28.00 }
   ];

   const cart = [];

   const productList = document.getElementById('product-list');
   const cartItems = document.getElementById('cart-items');
   const emptyCartMessage = document.getElementById('empty-cart');
   const cartTotalDisplay = document.getElementById('cart-total');
   const totalPriceDisplay = document.getElementById('total-price');
   const checkoutBtn = document.getElementById('checkout-btn')

   loadCartFromLocalStorage();

   products.forEach((product) => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product') // adding product class to productDiv that we are injecting in the dom.
      productDiv.innerHTML = `
   <span>${product.name} - $${product.price.toFixed(2)}</span>
   <button data-id="${product.id}">Add to cart</button>
   `
      productList.appendChild(productDiv);
   });

   productList.addEventListener('click', (e) => {
      if (e.target.tagName === "BUTTON") {
         const productId = parseInt(e.target.getAttribute('data-id')); // Now this is going to get us te attribute of the targated event
         //which is button in this case and for button we want data-id attribute.
         // now before handling this id we should check the data type of this id as we want to 
         // use it so NOTE:- when using arya tag it's value came in string .
         // this productId will be string so change in int to use it .
         const product = products.find(p => p.id === productId);
         //In this product object  -- that is a div  will come that we have clicked button on.
         // console.log(typeof product);// object type and you can check the product too.

         addToCart(product);
      }
   });


   function addToCart(productToCart) {
      // emptyCartMessage.classList.add('hidden')
      // cartTotalDisplay.classList.remove('hidden');

      //Way-2 : in first way showinh the total too.
      cart.push(productToCart)
      // console.log(cart); // In this you will see the full array will all the products (if added more then one)

      //   const cartItem = document.createElement('div')
      //    cartItem.innerHTML = `
      //    <span>${productToCart.name}</span> - $${productToCart.price} 
      //       `
      // no need to do this it is also a way but as we have 
      // created a array for cart items we can directly push it there.

      //trying the sum part however as this fuction is evoking agian and agian because of that it's value it getting 
      //  0 and then showing only value that we are clicking.

      // sumOfCart += parseFloat(productToCart.price)
      // console.log(sumOfCart);
      // totalPriceDisplay.textContent = sumOfCart.toFixed(2);
      // cartItems.appendChild(cartItem); // this is when using innerHTML
      saveCartToLocalStorage();
      renderCart();
   }

   function renderCart() {
      cartItems.innerText = "";
      let sumOfCart = 0;
      if (cart.length > 0) {
         cartTotalDisplay.classList.remove('hidden')
      cart.forEach((item, index) => {
            sumOfCart += item.price
            const cartItem = document.createElement('div')
            cartItem.innerHTML =`
            ${item.name}-$${item.price}
            <button id="btn-id" class="delete-btn">Delete</button>`
            // console.log(cartItem.innerHTML);
           
          cartItem.querySelector('.delete-btn').addEventListener('click' ,(e) => {
            e.stopPropagation();
            cart.splice(index,1)
            saveCartToLocalStorage();
            renderCart()
           });
          
            cartItem.classList.add('cart');
            cartItems.appendChild(cartItem); 
            totalPriceDisplay.textContent = `$${sumOfCart.toFixed(2)}`; 
         })

      } else {
          emptyCartMessage.classList.remove('hidden')
          totalPriceDisplay.textContent = `$0.00`
      }
   }

   checkoutBtn.addEventListener('click' , () => {
      cart.length = 0;
       localStorage.removeItem('cart');
      alert("CheckOut Successfull");
      renderCart();
       totalPriceDisplay.textContent = `$0.00`
       })

function saveCartToLocalStorage() {
   localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
   const storedCart = localStorage.getItem('cart');
   if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      cart.push(...parsedCart); // Load items into the cart array
      renderCart(); // Render the loaded cart
   }
}

});










