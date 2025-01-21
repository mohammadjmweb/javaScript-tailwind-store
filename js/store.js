let products=[
    {
        id:'product1',
        name:'flash memory AData 64gb',
        price:11.99,
        img:"../images/adata64.jpg"
    },
    {
        id:'product2',
        name:'flash memory SanDisk 128gb',
        price:12.99,
        img:'../images/sandisk128.jpg'
    },
    {
        id:'product3',
        name:'airpod Oraimo',
        price:29.99,
        img:'../images/airpodOraimo.jpg'
    },
    {
        id:'product4',
        name:'airpod QCY',
        price:26.99,
        img:'../images/airpodQCY.jpg'
    }
]

let shoppingcartBtn=document.querySelector('#shopping-cart-btn')
let shoppingCart=document.querySelector('#shopping-cart')
let flag=true
shoppingcartBtn.addEventListener('click',function(){
    if(flag==true){
        shoppingCart.classList.add('shoppingCartOpen')
        shoppingCart.classList.remove('shoppingCartClose')
        flag=false
    }else{
        shoppingCart.classList.remove('shoppingCartOpen')
        shoppingCart.classList.add('shoppingCartClose')
        flag=true
    }
    renderCart()
})

let closeCart=document.querySelector('#close-cart')
closeCart.addEventListener('click',function(){
    shoppingCart.classList.remove('shoppingCartOpen')
    shoppingCart.classList.add('shoppingCartClose')
    flag=true
})

let cart=JSON.parse(localStorage.getItem('cart')) || []
console.log('Current Cart',cart)

function displayProducts(){
    const productContainer=document.querySelector('#product-container')
    productContainer.innerHTML=''
    products.forEach(product=>{
        const added=cart.find(item=>item.id===product.id) ? 'Remove From Cart' : 'Add To Cart'
        const buttonClass=added === 'Remove From Cart' ? 'bg-red-500' : 'bg-blue-500'
        productContainer.innerHTML += `
            <div class="border-2 border-blue-950 p-2 rounded-xl flex flex-col justify-between h-full text-lg" id="${product.id}" >
                <img class="w-full mb-2" src="${product.img}" alt="${product.name}" >
                <h2 class="my-1" >${product.name}</h2>
                <h2 class="my-1" >$${product.price}</h2>
                <button onclick="toggleCart('${product.id}')" class="text-white bg-blue-700 w-full rounded-lg ${buttonClass} ">${added}</button>
            </div>
        `
    })
}

function toggleCart(productId){
    if(cart.find(item=>item.id===productId)){
        removeFromCart(productId)
    }else{
        addToCart(productId)
    }
    renderCart()
    displayProducts()
}