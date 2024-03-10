const navb=document.getElementById('bottom-nav');

//Useful information

const usefullInformation =document.createElement('div');
navb.appendChild(usefullInformation);

const usefullInformationTitle=document.createElement('h1');
usefullInformationTitle.innerHTML="Useful information";
usefullInformation.appendChild(usefullInformationTitle);


const AboutPandora=document.createElement('a');
AboutPandora.innerHTML="About Pandora";
usefullInformation.appendChild(AboutPandora);

const Returnsexchangespolicy=document.createElement('a');
Returnsexchangespolicy.innerHTML="Returns/exchanges policy";
usefullInformation.appendChild(Returnsexchangespolicy);

const ShippingPolicy=document.createElement('a');
ShippingPolicy.innerHTML="Shipping Policy";
usefullInformation.appendChild(ShippingPolicy);

const Jewelrywarranty=document.createElement('a');
Jewelrywarranty.innerHTML="Jewelry warranty";
usefullInformation.appendChild(Jewelrywarranty);

const Siteregulations=document.createElement('a');
Siteregulations.innerHTML="Site regulations";
usefullInformation.appendChild(Siteregulations);

const Cancellingatransaction=document.createElement('a');
Cancellingatransaction.innerHTML="Cancelling a transaction";
usefullInformation.appendChild(Cancellingatransaction);

const PrivacyPolicy=document.createElement('a');
PrivacyPolicy.innerHTML="Privacy Policy";
usefullInformation.appendChild(PrivacyPolicy);

const Accessibilitystatement=document.createElement('a');
Accessibilitystatement.innerHTML="Accessibility statement";
usefullInformation.appendChild(Accessibilitystatement);

const Bandaloperationregulations=document.createElement('a');
Bandaloperationregulations.innerHTML="Bandal operation regulations";
usefullInformation.appendChild(Bandaloperationregulations);

// const Termsofsale=document.createElement('a');
// Termsofsale.innerHTML="Terms of sale - pair of arms in the purchase of a bracelet";
// usefullInformation.appendChild(Termsofsale);

console.log(usefullInformation);

//How can I help you?


const HowcanIhelpyou =document.createElement('div');
navb.appendChild(HowcanIhelpyou);

const HowcanIhelpyouTitle=document.createElement('h1');
HowcanIhelpyouTitle.innerHTML="How can I help you?";
HowcanIhelpyou.appendChild(HowcanIhelpyouTitle);

const Loginandregistration=document.createElement('a');
Loginandregistration.innerHTML="Login and registration";
HowcanIhelpyou.appendChild(Loginandregistration);

const myaccount=document.createElement('a');
myaccount.innerHTML="my account";
HowcanIhelpyou.appendChild(myaccount);

const myorders=document.createElement('a');
myorders.innerHTML="my orders";
HowcanIhelpyou.appendChild(myorders);

const QuestionsandAnswers=document.createElement('a');
QuestionsandAnswers.innerHTML="Questions and Answers";
HowcanIhelpyou.appendChild(QuestionsandAnswers);

const Ourjewelry=document.createElement('a');
Ourjewelry.innerHTML="Our jewelry";
HowcanIhelpyou.appendChild(Ourjewelry);

const Sizeguideforbracelets=document.createElement('a');
Sizeguideforbracelets.innerHTML="Size guide for bracelets";
HowcanIhelpyou.appendChild(Sizeguideforbracelets);

const Ringsizeguide=document.createElement('a');
Ringsizeguide.innerHTML="Ring size guide";
HowcanIhelpyou.appendChild(Ringsizeguide);

const contact=document.createElement('a');
contact.innerHTML="contact";
HowcanIhelpyou.appendChild(contact);


//PANDORA is for you


const PANDORAisforyou =document.createElement('div');
navb.appendChild(PANDORAisforyou);

const PANDORAisforyouTitle=document.createElement('h1');
PANDORAisforyouTitle.innerHTML="PANDORA is for you";
PANDORAisforyou.appendChild(PANDORAisforyouTitle);

const Silverjewellery=document.createElement('a');
Silverjewellery.innerHTML="Silver jewellery";
PANDORAisforyou.appendChild(Silverjewellery);

const earrings=document.createElement('a');
earrings.innerHTML="earrings";
PANDORAisforyou.appendChild(earrings);

const bracelets=document.createElement('a');
bracelets.href="../../pages/bracelet/bracelet.html";
bracelets.innerHTML="bracelets";

PANDORAisforyou.appendChild(bracelets);

const chains=document.createElement('a');
chains.innerHTML="necklace";
chains.href="../../pages/chains/chains.html";
PANDORAisforyou.appendChild(chains);

const rings=document.createElement('a');
rings.innerHTML="rings";
rings.href="../../pages/rings/rings.html";
PANDORAisforyou.appendChild(rings);

const pendants=document.createElement('a');
pendants.innerHTML="pendants";
PANDORAisforyou.appendChild(pendants);

const Jewelryandfashionblog=document.createElement('a');
Jewelryandfashionblog.innerHTML="Jewelry and fashion blog";
PANDORAisforyou.appendChild(Jewelryandfashionblog);


const four =document.createElement('div');
four.id="four";
navb.appendChild(four);

const mov =document.createElement('a');
const iMov=document.createElement('i');
const textMov = document.createElement('div');

mov.href="/pages/list/list.html"

iMov.classList="fas fa-map-marker-alt";
textMov.innerHTML="locate store";
mov.id="mov";


const chat =document.createElement('div');
const chatI=document.createElement('i');
const chatT=document.createElement('div');

chat.id="chat";

chatI.classList="fas fa-comment-dots";
chatT.innerHTML="We are here for you";

chat.onclick=()=>{
    const formChat=document.createElement('form');
    formChat.id="formChat";
    const emailChat=document.createElement('input');
    const xChat=document.createElement('button');
    xChat.id="xChat";
    xChat.type="button";
    xChat.innerHTML="x";
    xChat.onclick=()=>{
        navb.removeChild(formChat);
    }
    
    emailChat.type="email";
    emailChat.placeholder="email";
    emailChat.required="true";
    const messege =document.createElement('textarea');
    messege.type="text";
    // messege.name="message";
    messege.placeholder="message";
    messege.required="true";
    messege.id="message";
    const buttonChat=document.createElement('button');
    buttonChat.type="submit";
    buttonChat.innerHTML="send";

    formChat.onsubmit=(event)=>{
        event.preventDefault();
        navb.removeChild(formChat);
    }

    navb.appendChild(formChat);
    formChat.appendChild(xChat);
    formChat.appendChild(emailChat);
    formChat.appendChild(messege);
    formChat.appendChild(buttonChat);


    
}

mov.appendChild(iMov);
mov.appendChild(textMov);

four.appendChild(mov);

chat.appendChild(chatI);
chat.appendChild(chatT);

four.appendChild(chat);