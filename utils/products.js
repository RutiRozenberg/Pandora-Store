const page =document.getElementById('page');

const drewProducts=(namePage)=>{
    const title =document.createElement('div');
    const h1=document.createElement('h1');
    title.classList="backgroundTitle";
    page.appendChild(title);
    if(namePage==="chains"){
        h1.innerHTML="necklace";
    }
    else{
        h1.innerHTML=namePage;
    }

    title.appendChild(h1);

$.ajax({
    url:"/pages/"+namePage+"/"+namePage+".json",
    success:(result)=>{
        create(result);
    },
    error:(err)=>{

    }
});

const create=(br)=>{

    br.forEach(b => {
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
        price.innerHTML=b.price+"$";



        product.onclick=()=>{
           localStorage.setItem("detailProduct",JSON.stringify(b));
           window.location="../../utils/details.html";
        }

        product.appendChild(img);
        product.appendChild(des);
        product.appendChild(price);

        page.appendChild(product);
        //sessionStorage.setItem("fff",JSON.stringify(b));
        //console.log("fffff    :   " + JSON.parse(sessionStorage.getItem("fff")).id);
        
        
    });
}
}


