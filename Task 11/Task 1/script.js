
var looping = (startNumber , endNumber , breakNumber , contNumber)=>{
    if (startNumber != undefined && endNumber != undefined && breakNumber != undefined && contNumber !=undefined) {
        for(var i = startNumber ; i <= endNumber ; i++){
            if (i == breakNumber) break

            if (i == contNumber) continue
            
            console.log(i)
        }
    }
    else
        alert("Enter The Number")
}

looping(1, 10 , 8 , 3)