const navitems = document.querySelector('.nav-container-items')
const navmenu = document.querySelector('.menu')


const bottom = document.querySelector('.cheeseboard')

const openMenus = ()=>{
    const isOpened = navitems.getAttribute('data-visible')
    

    if(isOpened === 'false' ){
        navitems.setAttribute('data-visible', 'true')
        navmenu.setAttribute('data-closed', 'false')
    }else{
        navitems.setAttribute('data-visible', 'false')
        navmenu.setAttribute('data-closed', 'true')
    }
}

const scrolltobottom = ()=>{
    console.log('called')
    bottom.scrollIntoView({
        behavior:'smooth'
    })
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting

        if(intersecting){
            entry.target.classList.remove('elements-invisible')
            return
        }

            entry.target.classList.add('elements-invisible')
    })
},{
    threshold:.5
})

const allSections = Array.from(document.querySelectorAll('body > div'))

const observeOpacity = ()=>{
    allSections.forEach(section => {
        observer.observe(section)
    })
    
}

window.onscroll = observeOpacity