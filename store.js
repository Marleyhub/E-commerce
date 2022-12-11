var cartRemoveButton = document.getElementsByClassName('item-remove-button')
console.log(cartRemoveButton)
for(var i = 0; i < cartRemoveButton.length; i++) {
    var button = cartRemoveButton[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}