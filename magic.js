let file=document.getElementById("myfiles");
let columns=document.querySelectorAll(".column");
let arrImg = [];
file.onchange = () => {
    //console.log(file.files);
    //get files from directory
    for (const key in file.files) {
        if (file.files.hasOwnProperty(key)) {
            const element = file.files[key];
            
            if(element.type == "image/jpeg" || element.type == "image/png")
            {
                console.log(element);
                let parent_column = minParent(columns);
                let img = createImg(element.webkitRelativePath);
                arrImg[key]= img;
                parent_column.appendChild(img);
            }
        }
        //animate
        let i =0 ;
        let cleartime = setInterval(()=>{
            arrImg[i].setAttribute("style","display:initial");
            arrImg[i].classList.add("animated","zoomIn");
            i++;
            i == arrImg.length ? clearInterval(cleartime) : undefined;
        },200)
    }
}

//console.log(minParent(columns));

//obtaine parentNode
function minParent(parentNode)
{
    let arry = [];
    //get Children of Parent Node
    parentNode.forEach((element,i) => {
        //console.log(element.children.length);
        arry[i] = element.children.length;
    });
    //console.log(arry);
    let min =   Math.min.apply(null,arry);
    console.log(min);
    for (let i = 0; i < parentNode.length; i++) {
        if(parentNode[i].children.length == min){
            return parentNode[i];
        }
        
    }
}

//create images

function createImg(imgsrc){
    let img = document.createElement("img");
    img.setAttribute("src",imgsrc);
    img.className = "img";
    return img;
}