const panels = document.querySelectorAll('.panel') // node list i.e array like

function removeActiveClasses() {
    panels.forEach( panel => {
        panel.classList.remove('active')
    })
}
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
