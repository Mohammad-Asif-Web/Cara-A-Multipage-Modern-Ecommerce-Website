// Side Navbar Code
const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}

// Sproduct Page Image Selection Code
const mainImg = document.getElementById('MainImg');
const smalling = document.querySelectorAll('.small-img');

smalling.forEach((small) =>{
    small.addEventListener('click', ()=>{
        mainImg.src = small.src
    })
})

// smalling[0].addEventListener('click', ()=>{
//     mainImg.src = smalling[0].src;
// })
// smalling[1].addEventListener('click', ()=>{
//     mainImg.src = smalling[1].src;
// })
// smalling[2].addEventListener('click', ()=>{
//     mainImg.src = smalling[2].src;
// })
// smalling[3].addEventListener('click', ()=>{
//     mainImg.src = smalling[3].src;
// })



// Enters to Sproduct page by clicking any product code
const allProduct = document.querySelectorAll('#product1 .pro-container .pro')
console.log(allProduct);

allProduct.forEach(product =>{
    product.addEventListener('click', ()=>{
        window.location.href = 'sproduct.html'
    })
})



