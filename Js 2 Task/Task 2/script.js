let words = document.querySelectorAll("li")

for (let i = 0; i<words.length; i++) {
    let flag = false
    words[i].onclick = function(){

        if(flag == false){
            this.style.color ="red"
            flag = true
        } 
        
        else{
            this.style.color="black"
            flag = false
        }
    }
}
console.log(words)