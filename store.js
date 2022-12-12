
// Botão remover

var cartRemoveButton = document.getElementsByClassName('item-remove-button')
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

    }

