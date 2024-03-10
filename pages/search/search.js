
//שליפת 
//ה-dom
//מ-html
const  page=document.getElementById('searchResult');

// מחיקת החיפוש הקודם
page.childNodes.forEach(childP =>{
      page.removeChild(childP);
} );

//שליפת המחרוזת לחיפוש והפיכתה לאותיות קטנות
const VV=sessionStorage.getItem("inputSearch").toLocaleLowerCase();
console.log("vvvvv",VV);
if(VV===""){
    page.innerHTML="NOT FOUND RESULT";
    console.log("NOT FOUND RESULT");
}
else{
    page.innerHTML="";
    //מערך שמות קנצי ה
//JSON
//לחיפוש
const arr=["bracelet","chains","charms","rings"];

const searchAll=(arr)=>{
    arr.forEach(p => {
        $.ajax({
            url: "/pages/"+p+"/"+p+".json",
            success: (result)=>{
                searchBB(result);
                
        
            },
            error: (err)=>{
                console.log(err);
            }
       });
   });
  
}
const searchBB=(BB)=>{  
               
    BB.forEach(b => {
        if(b.type.toLocaleLowerCase().includes(VV)||b.des.toLocaleLowerCase().includes(VV)){
           
                const product =document.createElement('button');
                const img=document.createElement('img');
                const des=document.createElement('div');
                const price =document.createElement('div');
        
                product.id=b.id;
                product.classList="product";
                product.type="button";
                //product.classList+="btn btn-primary";
                img.src=b.img;
                des.innerHTML=b.des;
                price.innerHTML=b.price;
        
        
        
                product.onclick=()=>{
                   localStorage.setItem("detailProduct",JSON.stringify(b));
                   window.location="../../utils/details.html";
                }
        
                product.appendChild(img);
                product.appendChild(des);
                product.appendChild(price);
        
                page.appendChild(product);
        
                
                
            
        }
    });
    console.log("page.childNodes",page.childNodes);
    if(page.childNodes.length===0){
     console.log("page.childNodes.length",page.childNodes.length);
     page.innerHTML="NOT FOUND RESULT";
    }


}

searchAll(arr);




















}
