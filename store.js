
// Botão remover

var cartRemoveButton = document.getElementsByClassName('item-remove-button')
for(var i = 0; i < cartRemoveButton.length; i++) {
    var button = cartRemoveButton[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        console.log('remove-clicked')
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}
        
// Update do valor total 

function updateCartTotal(){
    var cartConteiner = document.getElementsByClassName('shopping-cart-conteiner')
    var cartRows = document.getElementsByClassName('cart-row')
    for (i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var itemPrice = cartRow.getElementsByClassName('item-price')[0]
        var itemQuantity = cartRow.getElementsByClassName('item-quantity')[0]
        console.log(itemQuantity, itemPrice)
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
     
 
