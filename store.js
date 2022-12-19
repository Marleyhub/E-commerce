
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
        console.log(total)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
  
// Botão commprar 

    var shopButton = document.getElementsByClassName('item-shop-button')
    for(i = 0; i < shopButton.length; i++){
        var button = shopButton[i]
        var buttonClicked = button.addEventListener('click', shopButtonClicked)
    }
    function shopButtonClicked(event){
        var button = event.target   
        var shopItem = button.parentElement.parentElement
        var itemPrice = document.getElementsByClassName('item-price')[0].innerHTML
        var itemImg = document.getElementsByClassName('card-item-img')[0].src
        console.log(itemPrice, itemImg)
        console.log('shop-clicked')

    }
     
 
