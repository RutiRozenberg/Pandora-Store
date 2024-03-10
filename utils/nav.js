console.log(document);

const nav=()=>{
    //שליפת הבסיס לתוכו יווצר הניווט העליון
    const n=document.getElementById("top_nav");
    console.log(n);
    //יצירת שלושת החלקים בניווט העליון
    const img=document.createElement('a');
    const link=document.createElement('div');
    const icon=document.createElement('div');

    const imgLogo=document.createElement('img');
    imgLogo.src="/assest/pictures/utils/logoTop.jpg";
    
    img.href="/pages/home/home.html";
    img.classList="imgLogo";

    img.appendChild(imgLogo);

    //יצירת החלקים של קישורי הדפים
    const home=document.createElement('a');
    const charms=document.createElement('a');
    const rings=document.createElement('a');
    const bracelet=document.createElement('a');
    const chains=document.createElement('a');

    //יצירת האיקונים
    const user=document.createElement('i');
    const buy=document.createElement('i');
    const heart=document.createElement('i');
    const FatherSearch=document.createElement('div');
    const search=document.createElement('i');
    const line=document.createElement('div');

    //הוספת הקלאס המתאים
    user.classList+="far fa-user";
    buy.classList+="fas fa-shopping-cart";
    heart.classList+="far fa-heart";
    search.classList+="fas fa-search";
    line.innerHTML="|";
    FatherSearch.id="fatherSearch";


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


    user.onclick=()=>{
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

    buy.onclick=()=>{
        window.location="../../pages/cart/cart.html"
    }
    
    //פונקציה לפתיחת 
    //input
    //לחיפוש
    let s=false;

    search.onclick=(event)=>{
        //אם אין אינפוט ליפוש תיצור אותו
        if(!s){
            //יצירת האינפוט והכפתור לחיפוש
            s=true;
            const SA =document.createElement('a');
            const button=document.createElement('button')
            const input =document.createElement('input');
            const buttonSearch=document.createElement('i');
            input.type="text";
            input.placeholder="search...";
            input.id="inputSearch";
            SA.href="/pages/search/search.html";
            SA.id="SA";
            button.type="button";
            button.id="buttonSearch";
            buttonSearch.classList+="fas fa-search";
            button.appendChild(buttonSearch);
            SA.appendChild(button);
            FatherSearch.appendChild(SA);
            FatherSearch.appendChild(input);
            //פונקציה שמחפשת ומציגה תוצאות
            SA.onclick=()=>{
                const userSearch=document.getElementById('inputSearch');
                const valueUserSearch=userSearch.value.trim(userSearch.value);
                sessionStorage.setItem("inputSearch",valueUserSearch);

            }
        }
        else{
            s=false;
            const fatherRemove=document.getElementById('fatherSearch');
            const buttonRemove=document.getElementById('SA');
            const inputRemove=document.getElementById('inputSearch');
            fatherRemove.removeChild(buttonRemove);
            fatherRemove.removeChild(inputRemove);
        }
    }

    

    //קישור האיקונים לאבא שלהם
    icon.appendChild(user);
    icon.appendChild(heart);
    icon.appendChild(buy);
    icon.appendChild(line);
    icon.appendChild(FatherSearch);
    FatherSearch.appendChild(search);

    // מה יהיה כתוב בקישורים
    home.innerHTML="homepage";
    charms.innerHTML="Charms";
    rings.innerHTML="rings";
    chains.innerHTML="necklace";
    bracelet.innerHTML="bracelet";
    

    //הגדרת הקישורים לדפים המתאימים
    home.href="/pages/home/home.html";
    charms.href="/pages/charms/charms.html";
    rings.href="/pages/rings/rings.html";
    chains.href="/pages/chains/chains.html";
    bracelet.href="/pages/bracelet/bracelet.html";
    

    console.log(home.href);


    icon.classList="iconsNav";
    link.classList="linksNav";

    //הוספת קלאס ללינקים
    // home.classList+="Alink";
    // charms.classList+="Alink";
    // rings.classList+="Alink";
    // chains.classList+="Alink";
    // bracelet.classList+="Alink";
    // gift.classList+="Alink";
    

    //קישור שלושת החלקים לדום
    n.appendChild(img);
    n.appendChild(link);
    n.appendChild(icon);

    //קישור הלינקים לאבא שלהם בניווט
    
    link.appendChild(home);
    link.appendChild(bracelet);
    link.appendChild(rings);
    link.appendChild(chains);
    link.appendChild(charms);
   
}
nav();
