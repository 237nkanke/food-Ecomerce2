let form = document.getElementById('form')
let re = document.getElementById('re')
let ra = document.getElementById('ra')
let busi = document.getElementById('business')
ra.addEventListener('change' , come)
function come()
{
    form.style.display = 'none'
    ra=true
    re=false
    busi.style.display = 'block'
}
 re.addEventListener('click' , see)
 function see()
 {
    form.style.display = 'block'
 busi.style.display = 'none'
    ra=false
    re=true
 }
 