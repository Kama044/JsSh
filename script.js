var y = prompt("Write number")
let box= ""
for (let i = 0; i < y; i++) {
    for (let h = 0; h < y; h++) {
        if(i==h || i==0 || h==0 || i==y-1 || h==y-1){
            box+="🟥"
        } else {
            box+="⬜"
        }
    }
    console.log(box)
    box="" }
