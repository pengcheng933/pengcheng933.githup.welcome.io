const h1=document.querySelector('h1')

function getColor(){
    function getRandom(m,n){
    var x=Math.max(m,n);
    var y=Math.min(m,n);
    return Math.floor(Math.random()*(x-y)+y)
 }
 var r=getRandom(0,256);
 var g=getRandom(0,256);
 var b=getRandom(0,256);
 return rgba=`rgb(${r},${g},${b},1)`
}
const rgb1=getColor()
const rgb2=getColor()
document.addEventListener('scroll',(e)=>{
   
  
    h1.style.backgroundImage=`linear-gradient(75deg,${rgb1} 0%,${rgb2} 33.33%,rgba(110, 69, 226,0) 66.67%,rgba(110, 69, 226,0) 100%)`


    let scrolled=document.documentElement.scrollTop/(document.documentElement.scrollHeight-document.documentElement.clientHeight)
    h1.style.setProperty('--percentage',`${scrolled * 100}%`)
})