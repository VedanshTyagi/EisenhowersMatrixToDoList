document.querySelector(".OIU").innerHTML = localStorage.getItem("OIU") || ""
document.querySelector(".OI").innerHTML = localStorage.getItem("OI") || ""
document.querySelector(".OU").innerHTML = localStorage.getItem("OU") || ""
document.querySelector(".O").innerHTML = localStorage.getItem("O") || ""

function add(){
    let important = ""
    let urgent = ""
    let task = document.querySelector(".work").value

    if (document.querySelector(".I").checked){important = 'I'}
    if (document.querySelector(".U").checked){urgent = 'U'}
    let listClass = "O"+important+urgent
    let boxToPut = document.querySelector("."+listClass)

    localStorage.setItem("taskCount",((localStorage.getItem("taskCount")||0)+1))
    let taskCount = localStorage.getItem("taskCount")
    localStorage.setItem(listClass,((localStorage.getItem(listClass) || "")+'<input type="checkbox" class="taskCheck" id="t'+taskCount+'"><label for="t'+taskCount+'">'+task+'</label>'))
    boxToPut.innerHTML = localStorage.getItem(listClass)
}
function doneClear(){
    document.querySelector(".OIU").innerHTML = getNewHTML(document.querySelectorAll(".OIU input ,.OIU label"))
    document.querySelector(".OI").innerHTML = getNewHTML(document.querySelectorAll(".OI input ,.OI label"))
    document.querySelector(".OU").innerHTML = getNewHTML(document.querySelectorAll(".OU input ,.OU label"))
    document.querySelector(".O").innerHTML = getNewHTML(document.querySelectorAll(".O input ,.O label"))

    localStorage.setItem("OIU",document.querySelector(".OIU").innerHTML)
    localStorage.setItem("OI",document.querySelector(".OI").innerHTML)
    localStorage.setItem("OU",document.querySelector(".OU").innerHTML)
    localStorage.setItem("O",document.querySelector(".O").innerHTML)
}
function Clear(){
    localStorage.clear()
    let lists = document.querySelectorAll(".taskList")
    lists[0].innerHTML = ""
    lists[1].innerHTML = ""
    lists[2].innerHTML = ""
    lists[3].innerHTML = ""
}
function getNewHTML(HTML){
    let newHTML = ""
    for(var i = 0; i < HTML.length;i=i+2){
        let element = HTML[i]
        if (element.tagName == "INPUT" && element.checked == false){
            newHTML += element.outerHTML
            newHTML += HTML[i+1].outerHTML
        }
    }
    return(newHTML)
}