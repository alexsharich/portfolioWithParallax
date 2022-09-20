window.addEventListener('scroll',e=>{
  document.body.style.cssText += `--scrollTop:${this.scrollY}px`
})
gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
ScrollSmoother.create({
  wrapper:'.wrapper',
  content:'.content'
})

const texts = document.querySelectorAll('.text')
const buttons = document.querySelectorAll('.button')

buttons.forEach(b=>{
  b.addEventListener('click',(e)=>{
   const data = e.target.getAttribute('data')
    texts.forEach(el=>{(el.classList.contains(data)) ? el.classList.remove('hidden'): el.classList.add('hidden')  })
  })
}) 
