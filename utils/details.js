

const cart={
    arr: []
}

const page=document.getElementById('details');

const product=JSON.parse(localStorage.getItem("detailProduct"));

const div=document.createElement('div');
div.classList="details";
page.appendChild(div);
const img=document.createElement('img');
img.src=product.img;
div.appendChild(img);

const AllDetails=document.createElement('div');
div.appendChild(AllDetails);

const des =document.createElement('div');
des.innerHTML=product.des;
des.id="des";
AllDetails.appendChild(des);


const price =document.createElement('div');
price.innerHTML="price :  "+product.price+"$";
AllDetails.appendChild(price);
let flagSize=false;
let chooseSize="not choose";

if(product.type!="gifts" && product.type!="charms"){
    const size =document.createElement('div');
    size.id="arrSize";
    size.classList="size";
    const productSize=product.size;
    AllDetails.appendChild(size);

    productSize.forEach(thisSize => {
        const buttonSize=document.createElement('button');
        buttonSize.innerHTML=thisSize;
        buttonSize.classList="colorSize";
        buttonSize.type="button";
        size.appendChild(buttonSize);
        buttonSize.onclick=()=>{
            chooseSize=thisSize;
            console.log(size.childNodes);
            size.childNodes.forEach(ps => {
                console.log(ps);
                ps.classList=("colorSize");
                console.log("aa");
            });
            buttonSize.classList=("buttonSize");
        };
    });
}
const errSize=document.createElement('div');
errSize.classList="err";
errSize.innerHTML="You must choose a size before adding to the bascket";
const buttonAdd=document.createElement('button');
buttonAdd.type="button";
buttonAdd.innerHTML="Add to baskat";
buttonAdd.classList="buttonAdd";
AllDetails.appendChild(buttonAdd);
buttonAdd.onclick=()=>{
    const thisUserS=sessionStorage.getItem("thisUser");
    if(thisUserS===null){
        const alertUser=document.getElementById('login');
    const account =document.createElement('div');
    account.classList="account";

    function createSign(){

        const l=document.getElementById('l');
        const s=document.getElementById('s');
        l.classList.remove("pass");
        s.classList.add("pass");
        const b=document.getElementById('box');
        console.log("b   :  ",b);
        if(b){
            account.removeChild(b);
        }


        const box=document.createElement('div');
        box.id='box';
        
        const form =document.createElement('form');
        const email=document.createElement('input');
        const password=document.createElement('input');
        email.type="email";
        email.placeholder="email"
        email.required="true";
        password.type="password";
        password.placeholder="password";
        password.required="true";
        const ok=document.createElement('button');
        ok.type="submit";
        ok.innerHTML="sign in";


        form.onsubmit=(event)=>{
            event.preventDefault();
            if (sessionStorage.getItem(email.value)===null || JSON.parse(sessionStorage.getItem(email.value)).password!=password.value ){
                const errDiv=document.createElement('div');
                const btnlogin=document.createElement('a');
                btnlogin.innerHTML="login";

                btnlogin.onclick=()=>{
                    const bbb=document.getElementById('box');
                    account.removeChild(bbb);
                    createLogin();
                }

                const errNotExiste =document.createElement('div');
                errNotExiste.innerHTML="Your account name or password is incorrect";
                console.log(form.childNodes.length);
                if(form.childNodes.length===3){
                    form.appendChild(errDiv);
                    errDiv.appendChild(errNotExiste);
                    errDiv.appendChild(btnlogin);
                }
            }
            else{
                sessionStorage.setItem("thisUser",email.value);
                const topA=document.getElementById('topA');
                account.removeChild(topA);
                alertUser.removeChild(account);
                const gb=document.getElementById('gb');
                alertUser.removeChild(gb);
                alertUser.style.display="none"; 
                window.onscroll=function(){}

            }  
        }


        account.appendChild(box);
        form.appendChild(email);
        form.appendChild(password);
        form.appendChild(ok);
        box.appendChild(form);

    }

    function createLogin(){
        const l=document.getElementById('l');
        const s=document.getElementById('s');
        s.classList.remove("pass");
        l.classList.add("pass");

        const b=document.getElementById('box');
        console.log("b   :  ",b);
        if(b){
            account.removeChild(b);
        }


        const box=document.createElement('div');
        box.id='box';

        const form =document.createElement('form');
        const name=document.createElement('input');
        const email=document.createElement('input');
        const password=document.createElement('input');
        email.type="email";
        email.placeholder="email";
        email.required="true";
        name.type="text";
        name.required="true"
        name.placeholder="name";
        password.type="password";
        password.placeholder="password";
        password.required="true";
        const ok=document.createElement('button');
        ok.type="submit";
        ok.innerHTML="login";


        form.onsubmit=(event)=>{
            event.preventDefault();
            const userDetails={
                user: name.value,
                email: email.value,
                password: password.value
            };
            if(sessionStorage.getItem(email.value)!=null && form.childNodes.length===4){
                const errDiv=document.createElement('div');
                const errExiste=document.createElement('div');
                errExiste.innerHTML="This email address already exists";
                const btnSign=document.createElement('a');
                btnSign.innerHTML="Sign in";
               // btnSign.href="";
                btnSign.onclick=()=>{
                    const bbb=document.getElementById('box');
                    account.removeChild(bbb);
                    createSign();
                }
                errDiv.appendChild(errExiste);
                errDiv.appendChild(btnSign);
                form.appendChild(errDiv);

            }
            else{
                sessionStorage.setItem(email.value,JSON.stringify(userDetails));
                sessionStorage.setItem("thisUser",email.value);
                const topA=document.getElementById('topA');
                account.removeChild(topA);
                alertUser.removeChild(account);
                const gb=document.getElementById('gb');
                alertUser.removeChild(gb);
                alertUser.style.display="none"; 
                window.onscroll=function(){}

            }
            
        };


        account.appendChild(box);
        form.appendChild(name);
        form.appendChild(email);
        form.appendChild(password);
        form.appendChild(ok);
        box.appendChild(form);

    }


    
        alertUser.appendChild(account);
        scrollTop=document.documentElement.scrollTop;
        scrollLeft=document.documentElement.scrollLeft;
        window.onscroll=function(){
            window.scrollTo(scrollLeft,scrollTop);
        }
        alertUser.style.display="flex";
        const greyBack=document.createElement('div');
        greyBack.id="gb";
        greyBack.classList="greyBack";
        alertUser.appendChild(greyBack);
        const topA=document.createElement('div');
        topA.id="topA";
        const login =document.createElement('button');
        const sign = document.createElement('button');
        const cancel=document.createElement('button');
        login.id="l";
        sign.id="s";
        login.innerHTML="login";
        sign.innerHTML="sign in";
        cancel.innerHTML="X";
        cancel.onclick=()=>{
            account.removeChild(topA);
            alertUser.removeChild(account);
            alertUser.removeChild(greyBack);
            alertUser.style.display="none";
            window.onscroll=function(){}
        }

        login.onclick=()=>{
            createLogin();
        }

        sign.onclick=()=>{
            createSign();
        }

        const linksLogin =document.createElement('div');
        
        linksLogin.appendChild(login);
        linksLogin.appendChild(sign);
        topA.appendChild(linksLogin);
        topA.appendChild(cancel);
        account.appendChild(topA);
        createSign();


    
    }
    else{
        //console.log(errSize);
        //console.log("12345678910");
    if(product.type==="charms"|| product.type==="gifts"){
        chooseSize="one size";
        //console.log("12345678910");
    }
    if(chooseSize==="not choose") {
        flagSize=true;
        AllDetails.appendChild(errSize);
    }
    else{

        



        //console.log("12345678910");
        if(flagSize===true){
            AllDetails.removeChild(errSize);
        }
        const arrSize=document.getElementById('arrSize');
        if(arrSize!=null){
            arrSize.childNodes.forEach(sizeA =>{
                sizeA.disabled=true;
            })
        }
        //console.log(arrSize);
        buttonAdd.disabled=true;
        buttonAdd.classList.add("buyIt");
        buttonAdd.innerHTML="Item successfully added!";
        const thisCast=sessionStorage.getItem("thisUser");
        if(JSON.parse(localStorage.getItem(thisCast)===null)){
            cart.arr.push(product);
            localStorage.setItem(thisCast,JSON.stringify(cart));
        }
        else{
            const ObjectCart=JSON.parse(localStorage.getItem(thisCast));
            //console.log(ObjectCart.arr);
            ObjectCart.arr.push(product);
            localStorage.setItem(thisCast,JSON.stringify(ObjectCart));

        }
    }   


    }
}
