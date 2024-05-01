
const btnContainer = document.querySelectorAll(".btn-container");
const textContainer = document.querySelector(".text-container")

const menuProducts = [
  {
    img : "./assets/company1.jpg",
    category :  "liddy",
    name : "High-Back Bench",
    price : 9.99,
  },
  {
    img : "./assets/company9.jpg",
    category :  "marcos",
    name : "Albany Table",
    price : 79.99,
  },
  {
    img : "./assets/company3.jpg",
    category :  "ikea",
    name : "Accent Chair",
    price : 25.99,
  },
  {
    img : "./assets/company4.jpg",
    category :  "caressa",
    name : "Wooden Table",
    price : 45.99,
  },
  {
    img : "./assets/company2.jpg",
    category :  "marcos",
    name : "Dinning Table",
    price : 6.99,
  },
  {
    img : "./assets/company6.jpg",
    category :  "liddy",
    name : "Sofa Set",
    price : 69.99,
  },
  {
    img : "./assets/company7.jpg",
    category :  "caressa",
    name : "Modern BookShelf",
    price : 8.99,
  },
  {
    img : "./assets/company8.jpg",
    category :  "marcos",
    name : "Emperor Bed",
    price : 21.99,
  },
  {
    img : "./assets/company9.jpg",
    category :  "caressa",
    name : "Utopia Sofa",
    price : 35.25,
  },
  {
    img : "./assets/company10.jpg",
    category :  "liddy",
    name : "Entertainment Center",
    price : 39.98,
  },
  {
    img : "./assets/company11.jpg",
    category :  "ikea",
    name : "Albany  Sectional",
    price : 10.99,
  },

]

window.addEventListener("DOMContentLoaded",  ()=>{
  display(menuProducts);
  filterBtns();
})


function display(menuItem){
  let displayItems = menuItem.map((items)=>{
    return `
    <div class="text-container">
    <div class="category">
      <img src="${items.img}" alt="" class="img">
      <div class="add">
          <div class="categ">${items.name}</div>
        <div class="price">${items.price}</div>
      </div>
    </div>
  </div>
    `
  
  })
  displayItems = displayItems.join(" ");
  textContainer.innerHTML = displayItems;
  

};


function filterBtns (){
  btnContainer.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
      const myClickedBtn = e.target.dataset.id;
      //  to filter category 
      const choiceCategory = menuProducts.filter((itemize)=>{
        if (itemize.category == myClickedBtn){
          return itemize;
        }
      })

      console.log(myClickedBtn == "all");
      if (myClickedBtn == "all"){
        console.log(display(menuProducts));
      }
     else{
         console.log( display(choiceCategory));
      }
    })
    
  })
}

