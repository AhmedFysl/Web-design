let btn = document.getElementsByTagName('button')
console.log(btn)

let imageChange = ()=>{
    console.log('The pic')
    let img = document.getElementById('myPic')
    
    if(img.src.includes('img/1.jpg')){
        img.src ='img/2.jpg'
    } 
    else{
        img.src ='img/1.jpg' 
    }
}