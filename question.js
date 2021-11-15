ElementsDom.questionIcon.addEventListener('mouseover', () => {
    ElementsDom.instruction.style.display = 'block'
    ElementsDom.windowElement.style.opacity = '0.3'
})

ElementsDom.questionIcon.addEventListener('mouseout', () => {
    ElementsDom.instruction.style.display = 'none'
    ElementsDom.windowElement.style.opacity = '1'
})