// VARIABLES
var addToCartButton = $('.highlightedProductsButton');
var cartItemsDiv = $('.cartItems')

// ADDS TO CART
addToCartButton.on("click", ()=>{
    var htmlCode = "<section></section>";

    cartItemsDiv.append(htmlCode);

    alert("button clicked");
});