let flowers=[{
    id:"default",
    price:"default",
    des:"default",
    size: "default",
    type:"default",
    img:"default"
}]

const imgs = document.getElementById("jpg");
$.ajax({
    url: "/pages/bracelet/bracelet.json",
    success:(result)=>{
        flowers=result;
        showPrices(flowers);

    },
    error:(err)=>{
        console.log(err);
    }
})
const showPrices=(f)=>{
    f.forEach(flo => {
        imgs.innerHTML+=`<div id="${flo.id}">
         <img src="${flo.img}">
         <div>${flo.id}</div><div>${flo.price}</div> </div>`;
    });

}