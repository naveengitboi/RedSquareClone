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
