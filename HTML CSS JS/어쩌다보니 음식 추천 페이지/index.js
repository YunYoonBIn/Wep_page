let food = document.querySelector('#food')
let price = document.querySelector('#price')

let foodList = {
    간식: [
        푸딩 = {
            name: '푸딩',
            price: '3000'
        },
        케이크 = {
            name: '케이크',
            price: '6000'
        },
    ],

    밥: [
        돼지국밥 = {
            name: '돼지국밥',
            price: '6000'
        },
        김치볶음밥 = {
            name: '김치볶음밥',
            price: '6000'
        },
        돼지국밥 = {
            name: '필라프',
            price: '6000 ~ 12000'
        },
    ]
}

randomSnack = () => {
    let list = Object.values(foodList.간식)
    const randomSnack = Math.floor(Math.random() * list.length)
    snack = foodList.간식[randomSnack].name
    snackPrice = foodList.간식[randomSnack].price
    food.innerHTML = snack
    price.innerHTML = snackPrice
}

randomRice = () => {
    let list = Object.values(foodList.밥)
    const randomRice = Math.floor(Math.random() * list.length)
    rice = foodList.밥[randomRice].name
    ricePrice = foodList.밥[randomRice].price
    food.innerHTML = rice
    price.innerHTML = ricePrice
}


