const proddata=[
    {id:1,name:'boys clothes',price:4000,img:'pics/boys-cloth2.jpg',cate:'boys dress'},
    {id:2,name:'girls Abays',price:2000,img:'pics/girls-abaya.jpg',cate:'abaya'},
    {id:3,name:'girls Arabic Abaya',price:2500,img:'pics/girls-abaya2.jpg',cate:'abaya'},
    {id:4,name:'girls shirt',price:1400,img:'pics/girls-shirt.jpg',cate:'girls shirt'},
    {id:5,name:'girls shoes',price:900,img:'pics/girls-shoes.jpg',cate:'girls shoes'},
    {id:6,name:'boys clothes',price:5000,img:'pics/boys-clothes1.jpg',cate:'boys dress'},
    {id:7,name:'girls shoes',price:2400,img:'pics/girls-shoes4.jpg',cate:'girls shoes'},
    {id:8,name:'girls shoes',price:160,img:'pics/girls-shoes2.jpg',cate:'girls shoes'},

]


let products=document.querySelector('.products')

let searchbar=document.querySelector('.searchbar')

let categories =document.querySelector('.categories')

let rangbar=document.querySelector('.rangebar')

let rangeprice=document.querySelector('.rangeprice')




const ShowProducts=(newproducts)=>{
products.innerHTML=newproducts.map((item)=>{
    return `
 
<div class="product">
<img src="${item.img}" alt="${item.name}" class="pics">
<h2 class="prodname">${item.name}</h2>
<h3 class="prodprice">${item.price}</h3>
</div>
`

}).join(" ");

};




searchbar.addEventListener("keyup",(e)=>{
const value=e.target.value.toLowerCase()

if(value){
    ShowProducts(proddata.filter(item=>item.name.toLowerCase().indexOf(value)!==-1))
}

else{

    ShowProducts(proddata);
}


});



const showCategories = () => {
    
const allcategories=proddata.map((item)=>item.cate)


const newcate= ['All',...allcategories.filter((item,index)=>{

    return allcategories.indexOf(item)===index;
}),
]


categories.innerHTML=newcate.map(cat=>
 `
    
<span class="category">${cat}</span>

`).join(" ")



categories.addEventListener("click",(e)=>{
    const eventvalue=e.target.textContent;
   if(eventvalue==="All"){
    ShowProducts(proddata)
   }
   else{
    ShowProducts(proddata.filter((item)=>item.cate===eventvalue))
   }
})


};

const setprice=()=>{
    const price=proddata.map((item)=>item.price)
   const minprice=Math.min(...price)
   const maxprice=Math.max(...price)
   rangbar.min=minprice
   rangbar.max=maxprice
   rangeprice.textContent="RS"+maxprice


   rangbar.addEventListener("input",(e)=>{
    rangeprice.textContent="RS"+e.target.value
    ShowProducts(proddata.filter(item=>item.price<=e.target.value))
})



}





showCategories()

ShowProducts(proddata)

setprice()