function showRecipe(cocktail) {
    let title, description;

    switch (cocktail) {
        case 'gin-martini':
            title = 'Gin Martini';
            description = 'Ingredients: 2 oz Gin, 1 oz Dry Vermouth. Stir with ice and strain into a chilled glass. Garnish with a twist of lemon.';
            break;
        case 'negroni':
            title = 'Negroni';
            description = 'Ingredients: 1 oz Gin, 1 oz Campari, 1 oz Sweet Vermouth. Stir with ice and strain into a rocks glass. Garnish with an orange slice.';
            break;
        case 'old-fashioned':
            title = 'Old Fashioned';
            description = 'Ingredients: 2 oz Whiskey, 1 Sugar Cube, 2 dashes Angostura Bitters. Muddle sugar with bitters, add whiskey, and stir.';
            break;
        case 'whiskey-sour':
            title = 'Whiskey Sour';
            description = 'Ingredients: 2 oz Whiskey, 3/4 oz Lemon Juice, 1/2 oz Simple Syrup. Shake with ice and strain into a glass.';
            break;
        case 'mojito':
            title = 'Mojito';
            description = 'Ingredients: 2 oz White Rum, 1 oz Lime Juice, 2 tsp Sugar, Mint Leaves, Soda Water. Muddle mint, add sugar and lime, add rum, and top with soda.';
            break;
        case 'piña-colada':
            title = 'Piña Colada';
            description = 'Ingredients: 2 oz Rum, 1 oz Coconut Cream, 1 oz Pineapple Juice. Blend with ice and serve with a pineapple slice.';
            break;
    }

    document.getElementById('recipe-title').innerText = title;
    document.getElementById('recipe-description').innerText = description;
    document.getElementById('recipe-info').style.display = 'block';
}

function closeInfo() {
    document.getElementById('recipe-info').style.display = 'none';
}

window.onclick = function(event) {
    const info = document.getElementById('recipe-info');
    if (event.target === info) {
        info.style.display = 'none';
    }
}
