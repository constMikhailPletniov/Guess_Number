



dom.questionIcon.addEventListener('mouseover', () => {
    dom.instruction.style.display = 'block'
    dom.windowElement.style.opacity = '0.3'
})

dom.questionIcon.addEventListener('mouseout', () => {
    dom.instruction.style.display = 'none'
    dom.windowElement.style.opacity = '1'
})