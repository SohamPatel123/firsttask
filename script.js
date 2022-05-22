var  details = [
    {
        "previewImage": "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "cat.jpeg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "a man and a woman trying to cook a meal together in a modern kitchen.jpg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "bali-kelingking-beach-plastic-removal-drive.key"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "NextByk Investor Pitch 2022.ppt"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "title": "interns-performance-report-may-2022.key"
    }
];

let ck1 = document.getElementById("name_img1");
let ck2 = document.getElementById("name_img2");
let ck3 = document.getElementById("name_img3");
let ck4 = document.getElementById("name_img4");
let ck5 = document.getElementById("name_img5");
ck1.addEventListener('click',displayimage1,false)
ck2.addEventListener('click',displayimage2,false)
ck3.addEventListener('click',displayimage3,false)
ck4.addEventListener('click',displayimage4,false)
ck5.addEventListener('click',displayimage5,false)
i=0;            // i indicates the currently selected image number [0-indexing]

/*All the functions for event-listeners for clicking event on left-panel*/
function displayimage1(){
    i=0;
    displayimage(i);
}
function displayimage2(){
    i=1;
    displayimage(i);
}
function displayimage3(){
    i=2;
    displayimage(i);
}
function displayimage4(){
    i=3;
    displayimage(i);   
}
function displayimage5(){
    i=4;
    displayimage(i);
}
displayimage1();            //by default call image 1

function initializing_left_panel()      // for initializing the left panel of icons and names
{
    for(let j=1;j<=5;j++)
    {
        let imagename = "name_img" + j;
        let icon  = "icon" + j;
        let ckk = document.getElementById(imagename);
        let icons = document.getElementById(icon);
        if(details[j-1].title.length>25)                //  codition  to prevent overflow and make it at center
        {
            let total_length = details[j-1].title.length;
            dashed_title = details[j-1].title.substring(0,13) + ' ... ' + details[j-1].title.substring(total_length-10,total_length); 
            ckk.innerHTML = dashed_title;
        }
        else
        ckk.innerHTML = details[j-1].title;
        icons.innerHTML  = `<img src = ${details[j-1].previewImage} height="50px" width="50px">`;   
    }
}

let change_name = document.querySelector("input");
change_name.addEventListener('change',change_value,false);

function change_value(e)                // function for changing the name of image from bottom rightpanel [change event listneer]
{
    details[i].title = e.target.value;
    displayimage(i);
}

function displayimage(i)        // mainn fuction to change the image in right panel and indicate selected image on left panel
{
    let rp = document.getElementById("rightpanel_img");
    rp.src  = details[i].previewImage;
    for(let n=1;n<=5;n++)
    {
        let imagenumber = "img" + n;
        let ckk = document.getElementById(imagenumber);
        if(n===i+1){
        let image_text = document.getElementById("full_text");
        image_text.value = details[i].title;    
        ckk.style.backgroundColor = "#3377ee";
        ckk.style.color = "white";
        }
        else{
        ckk.style.backgroundColor = "white";
        ckk.style.color = "black";
        }
    }
    initializing_left_panel();
 }


document.onkeydown = function(e)        //for up-down arrrow key functionality
{
    switch(e.key)
    {
        case 'ArrowUp':
            i=(i+4)%5;
            displayimage(i);
            break;
        case 'ArrowDown':
            i=(i+1)%5;
            displayimage(i);
            break;
    }
}