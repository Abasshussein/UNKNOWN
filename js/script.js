function enter() {
    var input=prompt("Enter word here")
    var arr=input.slice(0,input.length-1)
    var last=parseInt(input.chartAt(input.length-1))
    if (isNaN(last)){
        alert(input+1)
    } else {
        alert(arr+(last+1))
    }
}
enter()
