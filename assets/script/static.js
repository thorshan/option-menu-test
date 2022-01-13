 
var openbtn = document.getElementById('circle-open');
var closebtn = document.getElementById('circle-close');
function openMenu(){
    openbtn.addEventListener('click', (e)=>{
        e.preventDefault()
        var menu = document.querySelector('.menu').style.display = 'flex'
        openbtn.style.display = 'none'
        closebtn.style.display = 'flex'
    })
}
function closeMenu(){
    closebtn.addEventListener('click', (e)=>{
        e.preventDefault()
        var menu = document.querySelector('.menu').style.display = 'none'
        openbtn.style.display = 'flex'
        closebtn.style.display = 'none'
    })
}

var download = document.getElementById('download')
var share = document.getElementById('share')
var copy = document.getElementById('copy')
var deleted = document.getElementById('delete')

download.addEventListener('click', (e)=>{
    e.preventDefault()
    var menu = document.querySelector('.menu').style.display = 'none'
    alert('Image has downloaded')
})
share.addEventListener('click', (e)=>{
    e.preventDefault()
    var menu = document.querySelector('.menu').style.display = 'none'
    alert('Copied to clipboard')
})
copy.addEventListener('click', (e)=>{
    e.preventDefault()
    var menu = document.querySelector('.menu').style.display = 'none'
    alert('Copied to clipboard')
})
deleted.addEventListener('click', (e)=>{
    e.preventDefault()
    var menu = document.querySelector('.menu').style.display = 'none'
    alert('Image has deleted')
})