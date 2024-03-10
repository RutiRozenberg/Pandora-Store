
let countId=0;
const page=document.getElementById('cart');
page.classList="page";

const allParts=document.createElement('div');
allParts.classList="allParts"
page.appendChild(allParts);
const cart=document.createElement('div');
cart.classList="cart";
allParts.appendChild(cart);

const arr=JSON.parse(localStorage.getItem(sessionStorage.getItem("thisUser")));

const sumPay=document.createElement('div');
sumPay.innerHTML="0$";
let finalPrice=0;
arr.arr.forEach(element => {
    
    const price=document.createElement('div');
    price.innerHTML=element.price+"$";
    price.classList="priceP";

   
    finalPrice+=element.price;
    sumPay.innerHTML=finalPrice+"$";

    const allObject =document.createElement('div');
    

    allObject.classList="allObject";
    cart.appendChild(allObject);


    const img=document.createElement('img');
    img.src=element.img;
    allObject.appendChild(img);

    const des=document.createElement('div');
    des.classList="desP";
    des.innerHTML=element.des;
    allObject.appendChild(des);

    const add=document.createElement('div');
    add.classList="addP";
    allObject.appendChild(add);

    const buttonPlus=document.createElement('button');
    const buttonMinus=document.createElement('button');
    buttonMinus.type="button";
    buttonPlus.type="button";
    buttonMinus.innerHTML="-";
    buttonPlus.innerHTML="+";
    const valueCount=document.createElement('div');
  
    valueCount.classList="valueCountP";
    let count=1;
    valueCount.innerHTML=count;
    buttonMinus.disabled=true;
    buttonPlus.onclick=()=>{
        count++;
        price.innerHTML=count*element.price+"$";
        finalPrice+=element.price;
        sumPay.innerHTML=finalPrice+"$";
        console.log("final"+ finalPrice);
        valueCount.innerHTML=count;
        if(count>1){
            buttonMinus.disabled=false;
        }
    }
    buttonMinus.onclick=()=>{
        count--;
        price.innerHTML=count*element.price+"$";
        finalPrice-=element.price;
        sumPay.innerHTML=finalPrice+"$";
        console.log("final"+ finalPrice);
        valueCount.innerHTML=count;
        if(count===1){
            buttonMinus.disabled=true;
        }
    }

    add.appendChild(buttonPlus);
    add.appendChild(valueCount)
    add.appendChild(buttonMinus);
   
    allObject.appendChild(price);
    console.log("final"+ finalPrice);

    const deleteP=document.createElement('i');
    deleteP.classList="fas fa-trash";
    deleteP.id=countId;
    countId++;
    deleteP.onclick=()=>{
        const arrLocal=JSON.parse(localStorage.getItem(sessionStorage.getItem("thisUser")));
        console.log(cart.childNodes);
        console.log("arr",arrLocal);
        let flag=false;

        console.log("אחרון" ,cart.childNodes[deleteP.id]);
        const newC={arr:[]};

        if(cart.childNodes[deleteP.id]!=null){
            const desObj=cart.childNodes[deleteP.id].childNodes[1].innerHTML;

            arrLocal.arr.forEach(e=>{
                console.log("e  ",e.des);
                if(e.des===desObj&&flag===false){
                    flag=true;
                }
                else{
                    newC.arr.push(e);
                }
            });
            
        }

        
        console.log(newC.arr);
        localStorage.setItem(sessionStorage.getItem("thisUser"),JSON.stringify(newC));


        // cart.childNodes.forEach(element => {
        //     console.log(element.childNodes);
            
        //     if(flag ===false){
        //         arrLocal.arr.forEach(e => {
        //             if(element[1]===arrLocal[2]){
        //                 flag=true;
        //                 const newC = [];
        //                 arrLocal.arr.forEach(o=>{

        //                 })
                        

        //             }  
        //         });
        //     }
           
        // });
        cart.removeChild(allObject);
        finalPrice-=count*element.price;
        sumPay.innerHTML=finalPrice+"$";
    }
    allObject.appendChild(deleteP);

    
});

const toPay=document.createElement('div');
toPay.classList.add("toPay");
allParts.appendChild(toPay);

const mountAndPay=document.createElement('div');
mountAndPay.classList="mountAndPay";
toPay.appendChild(mountAndPay);

const toatl =document.createElement('div');
toatl.classList="total";
const totalText=document.createElement('div');
totalText.innerHTML="total";
sumPay.classList.add("sumPay");

toatl.appendChild(totalText);
toatl.appendChild(sumPay);


const moveToPay=document.createElement('button');
moveToPay.type="button";
moveToPay.innerHTML="for payment";

moveToPay.onclick=()=>{
    scrollTop=document.documentElement.scrollTop;
    scrollLeft=document.documentElement.scrollLeft;
    window.onscroll=function(){
         window.scrollTo(scrollLeft,scrollTop);
    }
    const alertPay=document.createElement('div');
    alertPay.classList="alertPay";
    const greyB=document.createElement('div');
    greyB.classList="greyB";


    
    const titlePay=document.createElement('div');
    titlePay.classList="titlePay";
    const xPay=document.createElement('div');
    xPay.classList="xPay";
    const tilteText=document.createElement('div');
    const logoPay=document.createElement('img');

    const formPay=document.createElement('form');

    const addressPay=document.createElement('label');
    addressPay.innerHTML="Address";

    const country=document.createElement('input');
    const city=document.createElement('input');
    const street=document.createElement('input');
    const num=document.createElement('input');

    const cerditCard=document.createElement('label');
    cerditCard.innerHTML="Cerdit Card"

    const cerditCardNum=document.createElement('input');
    const cerditCardName=document.createElement('input');
    const cerditCardCvv=document.createElement('input');
    const cerditCardmonth=document.createElement('select');
    const cerditCardYear=document.createElement('select');

    const cerditCardLabelDate=document.createElement('div');
    const buttonPay=document.createElement('button');
    
    for(let i =1 ;i<=12;i++){
        const month=document.createElement('option');
        if(i<10){
            month.innerHTML="0"+i;
        }
        else{
            month.innerHTML=i;
        }
        cerditCardmonth.appendChild(month);
    }
    for(let i =23 ;i<=30;i++){
        const year=document.createElement('option');
        year.innerHTML=i;
        cerditCardYear.appendChild(year);
    }

    

    
    buttonPay.type="submit";
    buttonPay.innerHTML="OK";

    formPay.onsubmit=()=>{
        console.log("fyuvutgvuy");
        window.onscroll=function(){};
    }

    xPay.innerHTML="x";
    tilteText.innerHTML="payment";
    logoPay.src="../../assest/pictures/utils/miniLogo.png";

    const ll =document.getElementById('pay');

    xPay.onclick=()=>{

        ll.removeChild(alertPay);
        ll.removeChild(greyB);
        ll.style.display="none";
        window.onscroll=function(){};

    }

    formPay.onsubmit=(event)=>{
        event.preventDefault();
        localStorage.setItem(sessionStorage.getItem("thisUser"),JSON.stringify({arr:[]}));
        ll.removeChild(alertPay);
        ll.removeChild(greyB);
        ll.style.display="none";
        window.location="../../pages/cart/cart.html";

    }

    cerditCardLabelDate.innerHTML="Card validity";
    cerditCardLabelDate.id="date";
    country.placeholder="country";
    city.placeholder="city";
    street.placeholder="street";
    num.placeholder="number";

    country.required="true";
    city.required="true";
    street.required="true";
    num.required="true";

    cerditCardNum.placeholder="Card number";
    cerditCardName.placeholder="Cardholder's name";   
    cerditCardCvv.placeholder="CVV";
    cerditCardmonth.placeholder="MM";
    cerditCardYear.placeholder="YY";

    cerditCardNum.required="true";
    cerditCardName.required="true";
    cerditCardCvv.required="true";
    cerditCardmonth.required="true";
    cerditCardYear.required="true";


    let flagCvv=false;
    let flagNum=false;

    //בדיקות תקינות
    cerditCardCvv.onchange=()=>{
        if(cerditCardCvv.value.length!=3){
            flagCvv=false;
            if(document.getElementById('err')==null){
                const errPay=document.createElement('div');
                errPay.innerHTML="One of the data is wrong";
                errPay.id="err";
                formPay.appendChild(errPay);

            }
        }
        let count=0;
        // console.log(cerditCardCvv.value.charAt(0));
        for(let i=0;i<cerditCardCvv.value.length;i++){
            if(cerditCardCvv.value.charAt(i)<'0' || cerditCardCvv.value.charAt(i)>'9'){
                if(document.getElementById('err')==null){
                    const errPay=document.createElement('div');
                    errPay.innerHTML="One of the data is wrong";
                    errPay.id="err";
                    formPay.appendChild(errPay);
                    
                }
                flagCvv=false;
            }
            else{
                count++;
            }
        }
        if(count===3){
            flagCvv=true;
            if(flagNum===true){
                const errPay=document.getElementById('err');
                formPay.removeChild(errPay);
            }
        }
    }


    cerditCardNum.onchange=()=>{
        if(cerditCardNum.value.length<12 ||cerditCardNum.value.length>19){
            flagNum=false;
            if(document.getElementById('err')==null){
                const errPay=document.createElement('div');
                errPay.innerHTML="One of the data is wrong";
                errPay.id="err";
                formPay.appendChild(errPay);

            }
        }
        let count=0;
        // console.log(cerditCardCvv.value.charAt(0));
        for(let i=0;i<cerditCardNum.value.length;i++){
            if(cerditCardNum.value.charAt(i)<'0' || cerditCardCvv.value.charAt(i)>'9'){
                if(document.getElementById('err')==null){
                    const errPay=document.createElement('div');
                    errPay.innerHTML="One of the data is wrong";
                    errPay.id="err";
                    formPay.appendChild(errPay);
                    
                }
                flagNum=false;
            }
            else{
                count++;
            }
        }
        if(count>=12 && count<=19){
            flagNum=true;
            if(flagCvv===true){
                const errPay=document.getElementById('err');
                formPay.removeChild(errPay);
            }
        }
    }

        



    alertPay.appendChild(titlePay);
    alertPay.appendChild(formPay);

    titlePay.appendChild(logoPay);
    titlePay.appendChild(tilteText);
    titlePay.appendChild(xPay);


    formPay.appendChild(addressPay);
    formPay.appendChild(country);
    formPay.appendChild(city);
    formPay.appendChild(street);
    formPay.appendChild(num);

    formPay.appendChild(cerditCard);
    formPay.appendChild(cerditCardName);
    formPay.appendChild(cerditCardNum);
    formPay.appendChild(cerditCardCvv);
    formPay.appendChild(cerditCardLabelDate);
    formPay.appendChild(cerditCardmonth);
    formPay.appendChild(cerditCardYear);

    formPay.appendChild(buttonPay);
    

   

   

    
    ll.appendChild(greyB);
    ll.appendChild(alertPay);

    ll.style.display="flex";

}

mountAndPay.appendChild(toatl);
mountAndPay.appendChild(moveToPay);


const iconPay=document.createElement('div');
iconPay.classList="iconPay";
toPay.appendChild(iconPay);

const Shipping1=document.createElement('div');
const Shipping2=document.createElement('div');
const returnn =document.createElement('div');
const secure=document.createElement('div');

const Shipping1I=document.createElement('i');
Shipping1I.classList="fas fa-people-carry";
const Shipping1T=document.createElement('div');
Shipping1T.innerHTML="Free home delivery on purchases over $99";

const Shipping2I=document.createElement('i');
Shipping2I.classList="fas fa-shipping-fast"
const Shipping2T=document.createElement('div');
Shipping2T.innerHTML="Delivery from today to tomorrow for orders until 14:00";

const returnnI=document.createElement('i');
returnnI.classList="fas fa-sync-alt";
const returnnT=document.createElement('div');
returnnT.innerHTML="Returns and exchanges in all branches";

const secureI=document.createElement('i');
secureI.classList="fas fa-user-lock";
const secureT=document.createElement('div');
secureT.innerHTML="Secure purchase";

iconPay.appendChild(Shipping1);
iconPay.appendChild(Shipping2);
iconPay.appendChild(returnn);
iconPay.appendChild(secure);

Shipping1.appendChild(Shipping1I);
Shipping1.appendChild(Shipping1T);

Shipping2.appendChild(Shipping2I);
Shipping2.appendChild(Shipping2T);

returnn.appendChild(returnnI);
returnn.appendChild(returnnT);

secure.appendChild(secureI);
secure.appendChild(secureT);





