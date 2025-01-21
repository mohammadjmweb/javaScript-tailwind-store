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
