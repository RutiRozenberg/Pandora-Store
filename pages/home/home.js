

const homePage = document.getElementById('homePage');

const circles = document.createElement('div');
const back=document.createElement('img');
back.src="../../assest/pictures/utils/צמיד\ עם\ תליונים\ לרוחב.png";
back.classList="back";
homePage.appendChild(back);
circles.classList="circles";
homePage.appendChild(circles);


let Cobject = [{
    id: "default",
    img: "default"
}];


$.ajax({
    url: "/pages/home/home.json",
    success: (result) => {
        Cobject = result;
        createCircles(Cobject);
    },
    error: (err) => {
        console.log(err);
    }

})


const createCircles = (C) => {
    C.forEach(circle => {

        const A=document.createElement('a');
        A.id=`"${circle.id}"`;
        if(circle.id!="necklace"){
            A.href=`/pages/${circle.id}/${circle.id}.html`;
        }
        else{
            A.href=`/pages/chains/chains.html`;
        }
        const img=document.createElement('img')
        img.src=`${circle.img}`;
        img.classList.add("circleImg");
        const name =document.createElement('div');
        name.innerHTML=`${circle.id}`;


        A.appendChild(img);
        A.appendChild(name);

        circles.appendChild(A);

    });

}