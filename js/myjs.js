
// main function
let productList;

if(localStorage.getItem("ourproducts")== null)
{
    productList=[];
    
}
else
{
    productList= JSON.parse (localStorage.getItem("ourproducts"));
    displayproduct();
}
//============== add =====================
function addproduct()
{

let product=
{

    name:ProductNameInput.value,
    price:productPriceInput.value,
    category:productCategoryInput.value,
    Description:productDescriptionInput.value

};
    productList.push(product);
    localStorage.setItem("ourproducts",JSON.stringify(productList))
    displayproduct();
    clearForm();

}

//  =============== display  function ======================

function displayproduct()
{

    let cartona="";

    for( i=0;i<productList.length;i++)
    {
        cartona+=
        `<tr>
            <td>${i}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].Description}</td>
            <td><button class=" btn btn-warning"> Update</button></td>
            <td><button onclick="DeleteProduct(${i})" class=" btn btn-danger">Delete</button></td>
        </tr>
        `
        
    }
    document.getElementById("tbbody").innerHTML=cartona;
    
}

//  ===============clear======================

function clearForm()
{

        ProductNameInput.value="";
        productPriceInput.value="";
        productCategoryInput.value="";
        productDescriptionInput.value="";
    
}



//  ===============delete======================

function DeleteProduct(index)

{
    productList.splice(index,1);
    localStorage.setItem("ourproducts",JSON.stringify(productList));
    displayproduct();
}

//  ===============serch======================

function searchProduct()
{
    let term = serchProduct.value;
    let WantedProduct=[];
    for(i=0;i<productList.length ;i++)
    {

        if( productList[i].name.toLowerCase().includes(term.toLowerCase()) )

        {
           WantedProduct.push(productList[i]);
        }
    }


    let cartona="";

    for( i=0;i<WantedProduct.length;i++)
    {
        cartona+=
        `<tr>
            <td>${i}</td>
            <td>${WantedProduct[i].name}</td>
            <td>${WantedProduct[i].price}</td>
            <td>${WantedProduct[i].category}</td>
            <td>${WantedProduct[i].Description}</td>
            <td><button class=" btn btn-warning"> Update</button></td>
            <td><button onclick="DeleteProduct(${i})" class=" btn btn-danger">Delete</button></td>
        </tr>
        `
        
    }
    document.getElementById("tbbody").innerHTML=cartona;
    
}
//searchProduct();























//     //===================== Main function ========================
//     var productlist=[];
//         function ddproduct()
//     {
//         var product=
//         { 
//             name:ProductNameInput.value,
//             price:productPriceInput.value,
//             category:productCategoryInput.value,
//             Description:productDescriptionInput.value,
//         }
//         productlist.push(product);
//         displayproduct();
//         clearForm();
           
//     }
    
        
// //================== display function ============================    
// function displayproduct()
//     {

//              var cartona="";

//             for(i= 0; i <productlist.length; i++)
//                {
//                     cartona+=
//                  `<tr>
//                         <td>${i}</td>
//                         <td>${productlist[i].name}</td>
//                         <td> ${productlist[i].price}</td>
//                         <td>${productlist[i].category}</td>
//                         <td>${productlist[i].Description}</td>
//                         <td><button class=" btn btn-warning"> Update</button></td>
//                         <td><button class=" btn btn-danger">Delete</button></td>
//                     </tr>`

//                 };
//             document.getElementById("tbbody").innerHTML = cartona;
//     }
// //=================== clear function ===============================
//     function clearForm()
//     {
 
//         ProductNameInput.value="";
//         productPriceInput.value="";
//         productCategoryInput.value="";
//         productDescriptionInput.value="";

//     }




    
 
    
    





   
  