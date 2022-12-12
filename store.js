
// Botão remover

var cartRemoveButton = document.getElementsByClassName('item-remove-button')
console.log(cartRemoveButton)
for(var i = 0; i < cartRemoveButton.length; i++) {
    var button = cartRemoveButton[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        console.log(buttonClicked)
        buttonClicked.parentElement.parentElement.remove()
    })
}


// Botão commprar 

var shopButton = document.getElementsByClassName('item-shop-button')
console.log(shopButton)
for(i = 0; i < shopButton.length; i++){
    var button = shopButton[i]
    button.addEventListener('click', shopbuttonclicked)
}
