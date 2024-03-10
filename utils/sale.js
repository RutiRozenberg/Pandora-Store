const sale=document.getElementById('sale');
const grey=document.createElement('div');
grey.classList="greyBackGround";


const alertSale=document.createElement('div');
alertSale.classList="alertSale";

grey.onclick=()=>{
    sale.removeChild(grey);
    sale.removeChild(alertSale);
    window.onscroll=function(){
        
    }

}

window.onload=function(){
    setTimeout(show,5000);
}

function show (){
    scrollTop=document.documentElement.scrollTop;
    scrollLeft=document.documentElement.scrollLeft;
    window.onscroll=function(){
        window.scrollTo(scrollLeft,scrollTop);
    }
    sale.appendChild(grey);
    sale.appendChild(alertSale);

}