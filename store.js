
// Botão remover

var cartRemoveButton = document.getElementsByClassName('cart-remove-button')
for(var i = 0; i < cartRemoveButton.length; i++) {
    var button = cartRemoveButton[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
        updateCartTotal()
    })
}

// Update do valor total 
  /* após a função remover ser acionada mandamos o função de callback de update
     do valor total rodar, fazendo um loop na variael carRows(HTML colection [.lenght])
     fazendo os calculos necessários ' */

function updateCartTotal(){
    var cartConteiner = document.getElementsByClassName('shopping-cart')[0]
    var cartRows = cartConteiner.getElementsByClassName('card-cart-row')
    for (i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var itemPrice = cartRow.getElementsByClassName('cart-item-price')[0]
        var itemQuantity = cartRow.getElementsByClassName('cart-item-quantity')[0]
        var price = parseFloat(itemPrice.innerHTML.replace('$',''))
        var quantity = itemQuantity.value
        console.log(price *  quantity)
    }
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
     
 
