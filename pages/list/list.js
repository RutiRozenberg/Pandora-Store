const page2 =document.getElementById('page-branch-list');
page2.classList="pageL";

const titlePage=document.createElement('h1');
titlePage.innerHTML="branch list";
titlePage.id="titlePage";
page2.appendChild(titlePage);

const allLists=document.createElement('div');
allLists.classList="allLists";
page2.appendChild(allLists);


$.ajax({
    url:"/pages/list/list.json",
    success:(result)=>{
        drewCity(result);
    },
    error:(err)=>{
        console.log(err);
    }
});

drewCity=(arr)=>{
    arr.forEach(A => {
        const divA=document.createElement('div');
        divA.classList="divA";
        allLists.appendChild(divA);
        const titleA=document.createElement('h1');
        titleA.innerHTML=A.title;
        divA.appendChild(titleA);
        A.list.forEach(p=>{
            const city=document.createElement('div');
            city.classList="city";
            city.innerHTML=p.city;
            divA.appendChild(city);
            
            //console.log(p);
            p.place.forEach(shop =>{
                const palce=document.createElement('div');
                palce.classList="place";
                palce.innerHTML=shop;
                divA.appendChild(palce);
            });
           
        });
        

    });
}