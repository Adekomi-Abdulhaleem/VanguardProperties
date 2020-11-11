var navButton = document.querySelector('header button')
var navList = document.querySelector('header ul')

navButton.addEventListener('click', () => {
    navList.classList.toggle('active')
})



var mobile = document.querySelector('header .mobile')
var menus = document.querySelectorAll('header .menu')

window.addEventListener('scroll', activateOnScroll);

function activateOnScroll() {
    mobile.classList.toggle("active", window.scrollY > 0)
    menus.forEach(function (item) {
        item.classList.toggle("active", window.scrollY > 0)
    })
}


        var header = document.getElementById('header')
        
            var x = 0
            arr = ['url(../VanguardProperties/headerImage2.jpg)', 'url(../VanguardProperties/headerImage3.jpg)', 'url(../VanguardProperties/headerImage4.jpg)', 'url(../VanguardProperties/headerImage1.jpg)']

            function changeImg() {
                header.style.backgroundImage = arr[x]
            
            if (x < arr.length - 1) {
                x++
            } else {
                x = 0;
            }

            setTimeout('changeImg()', 3000)
            }

            window.onload = changeImg


            var landFigure = document.querySelector('.section-five .land-slider figure')
            y = 0

            function changeSection() {
                landFigure.style.marginLeft = y + '%'
            }

            var btn2 = document.getElementById('btn-0')
            var btn3 = document.getElementById('btn-1')

            btn2.addEventListener('click', () => {
                if (y < 0 && y >= -200) {
                y += 100
                changeSection()
                }
            })
            btn3.addEventListener('click', () => {
                if (y <= 0 && y > -200) {
                y -= 100
                changeSection()
                }
            })

            var carFigure = document.querySelector('.section-five .car-slider figure')
            z = 0

            function changeSection2() {
                carFigure.style.marginLeft = z + '%'
            }

            var btn2 = document.getElementById('btn-2')
            var btn3 = document.getElementById('btn-3')

            btn2.addEventListener('click', () => {
                if (z < 0 && z >= -200) {
                z += 100
                changeSection2()
                }
            })
            btn3.addEventListener('click', () => {
                if (z <= 0 && z > -200) {
                z -= 100
                changeSection2()
                }
            })