

//////////scrolling animation

window.addEventListener('scroll', () =>{
    let belowContent = document.querySelector('.belowContent')
    let belowContentPosition = belowContent.getBoundingClientRect().top
    let screenPosition = window.innerHeight/1.5
    if(belowContentPosition<screenPosition){
        belowContent.classList.add('action')
    }
    else 
    {
        belowContent.classList.remove('action')
    }

    let subFooter = document.querySelector('.subFooter')
    let subFooterPosition = subFooter.getBoundingClientRect().top
    let subfooScreenposition = window.innerHeight*.5
    if (subFooterPosition < subfooScreenposition)
    {
        subFooter.classList.add('action')
        
    }
    else 
    {
        subFooter.classList.remove('action')
    }

 
})





///heading animation

let i = 0
let Text = `The agency for what comes next,`


function typing()
{
    if(i<Text.length)
    {
        document.getElementById('textAnimation').innerHTML += Text.charAt(i)
        setTimeout(typing, 150)
        i++
    }
}

typing()


// nug container 

const nugContainer = document.querySelector('.nugsContainer')
const nugBtn = document.querySelector('.nugBtn')

nugBtn.addEventListener('click', popUp)

function popUp(){
    nugContainer.classList.toggle('nugactive')
}


// ///////////// nugs editing tick and add




const tick = document.querySelector('.doneCheck')
const nugadded = document.querySelector('.nugAdded')
const input = document.querySelector('input')

nugadded.addEventListener('click', doSomething)


function doSomething() {
    nugadded.style.transform = 'rotate(45deg)'
    tick.style.opacity = '1'
    tick.style.transform = 'scale(1)'
    input.value = ''
    nugadded.style.opacity = '0'
    return closeit

}
function closeit(){
    nugadded.style.transform = 'rotate(0deg)'
    tick.style.opacity = '0'
    tick.style.transform = 'scale(0)'
    nugadded.style.opacity = '1'
}
setInterval(closeit, 5800)



