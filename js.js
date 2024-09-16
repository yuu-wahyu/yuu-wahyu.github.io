const navbarNav = document.querySelector ('.navbar-nav');

document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active')
}

const hamburger = document.querySelector('#menu')

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})

// untuk animasi scrolle page

let sections = document.querySelectorAll('section')

let navLinks = document.querySelectorAll('nav div ul a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top > offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('jojo')
                document.querySelector('nav div ul a[href*=' + id + ']').classList.add('jojo')
            })
        }
    })
}