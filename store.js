
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}
// botão remover

function ready(){
    var cartRemoveButton = document.getElementsByClassName('cart-remove-button')
    for(var i = 0; i < cartRemoveButton.length; i++) {
        var button = cartRemoveButton[i]
        button.addEventListener('click', removeCartItems)
    }
}

var quantityInputs = document.getElementsByClassName('cart-item-quantity')
for(i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    console.log(input)
    input.addEventListener('change', quantityChanged)
}

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1 
    }
    updateCartTotal()
}

function removeCartItems(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateCartTotal()
}

// Update do valor total 
  /* após a função remover ser acionada mandamos o função de callback de update
     do valor total rodar, fazendo um loop na variael carRows(HTML colection [.lenght])
     fazendo os calculos necessários ' */

function updateCartTotal(){
    var cartConteiner = document.getElementsByClassName('shopping-cart')[0]
    var cartRows = cartConteiner.getElementsByClassName('card-cart-row')
    var total = 0 
    for (i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var itemPrice = cartRow.getElementsByClassName('cart-item-price')[0]
        var itemQuantity = cartRow.getElementsByClassName('cart-item-quantity')[0]
        var price = parseFloat(itemPrice.innerHTML.replace('$',''))
        var quantity = itemQuantity.value
        total = total +(price * quantity )
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
  
// Botão commprar 

var shopButtons = document.getElementsByClassName('item-shop-button') 
for (i = 0; i < shopButtons.length; i++){
    shopButton = shopButtons[i]
    shopButton.addEventListener('click', addToCart)
}

function addToCart(event){
    addToCartClicked = event.target
    var card = addToCartClicked.parentElement.parentElement
    var itemPrice = card.getElementsByClassName('item-price')[0].innerText
    var imgSrc = card.getElementsByClassName('card-item-img')[0].src
    console.log(card, itemPrice, imgSrc)
    addRowToCart(itemPrice, imgSrc)
}

function addRowToCart(itemPrice, imgSrc){
    var cartRow = document.createElement('div')
    cartRow.classList.add('card-cart-row')
    cartRow.classList.add('cart-row')
    var shoppingCart = document.getElementsByClassName('shopping-cart')[0]
    shoppingCart.append(cartRow)
    cartRowContent =
        `
        <img src="${imgSrc}" class="card-cart-img" alt="item.jpg">
        <input type="number" class="cart-item-quantity" value="1">
        <p class="cart-item-price">${itemPrice}</p>
        <button type="submit" class="cart-remove-button">Remove</button>
        `
    cartRow.innerHTML = cartRowContent
}