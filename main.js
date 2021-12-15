/*==================== DataBase ====================*/
const shoper_list = {
    "goodBreakfast": {
        'id': "goodday-breakfast",
        'menu': [
            {"name": "厚切豬排三明治", "price": 80, "img": 'https://i.ibb.co/gVDpM7c/goodday-breakfast.png' },
            {"name": "美式餐盤", "price": 120, "img": 'https://i.ibb.co/gVDpM7c/goodday-breakfast.png' },
            {"name": "美式大鬆餅", "price": 100, "img": 'https://i.ibb.co/gVDpM7c/goodday-breakfast.png' },
            {"name": "花生醬燒肉總匯", "price": 60, "img": 'https://i.ibb.co/gVDpM7c/goodday-breakfast.png' },
            {"name": "披薩漢堡", "price": 80, "img": 'https://i.ibb.co/gVDpM7c/goodday-breakfast.png' },
            {"name": "風味漢堡", "price": 60, "img": 'https://i.ibb.co/gVDpM7c/goodday-breakfast.png' },
            {"name": "紅茶", "price": 20, "img": 'https://i.ibb.co/gVDpM7c/goodday-breakfast.png' },
        ]
    },

     'ichrouCarry' : {
        'id': "ichrou-carry",
        'menu': [
        {"name": "嫩牛咖哩蛋包飯", "price": 200, "img": 'https://i.ibb.co/Fb9gw6Y/ichrou-carry.png' },
        {"name": "嫩雞咖哩蛋包飯", "price": 180, "img": 'https://i.ibb.co/Fb9gw6Y/ichrou-carry.png' },
        {"name": "豬排咖哩飯", "price": 150, "img": 'https://i.ibb.co/Fb9gw6Y/ichrou-carry.png' },
        {"name": "唐揚雞咖哩飯", "price": 130, "img": 'https://i.ibb.co/Fb9gw6Y/ichrou-carry.png' },
        {"name": "漢堡排咖哩飯", "price": 120, "img": 'https://i.ibb.co/Fb9gw6Y/ichrou-carry.png' },
        {"name": "南洋咖哩飯", "price": 120, "img": 'https://i.ibb.co/Fb9gw6Y/ichrou-carry.png' },
        {"name": "紅茶", "price": 30, "img": 'https://i.ibb.co/Fb9gw6Y/ichrou-carry.png' },
        ]
    },

    'nkustNoodle' : {
        'id': "nkust-noodle",
        'menu': [
        {"name": "焗烤奶油義大利麵", "price": 100, "img": 'https://i.ibb.co/8PCxmpZ/nkust-noodle.png' },
        {"name": "松露義大利麵", "price": 80, "img": 'https://i.ibb.co/8PCxmpZ/nkust-noodle.png' },
        {"name": "焗烤肌肉燉飯", "price": 80, "img": 'https://i.ibb.co/8PCxmpZ/nkust-noodle.png' },
        {"name": "奶油燉飯", "price": 100, "img": 'https://i.ibb.co/8PCxmpZ/nkust-noodle.png' },
        {"name": "焗烤奶油燉飯", "price": 120, "img": 'https://i.ibb.co/8PCxmpZ/nkust-noodle.png' },
        {"name": "焗烤火腿義大利麵", "price": 120, "img": 'https://i.ibb.co/8PCxmpZ/nkust-noodle.png' },
        ]
    },

    'exoticFood' : {
        'id': "exotic-food",
        'menu': [
        {"name": "肉骨茶麵", "price": 80, "img": 'https://i.ibb.co/mD7ysX5/exotic-food.png' },
        {"name": "天婦羅丼", "price": 100, "img": 'https://i.ibb.co/mD7ysX5/exotic-food.png' },
        {"name": "漢堡排套餐", "price": 100, "img": 'https://i.ibb.co/mD7ysX5/exotic-food.png' },
        {"name": "蔥爆牛肉", "price": 100, "img": 'https://i.ibb.co/mD7ysX5/exotic-food.png' },
        {"name": "羊小排", "price": 160, "img": 'https://i.ibb.co/mD7ysX5/exotic-food.png' },
        {"name": "炒青菜", "price": 30, "img": 'https://i.ibb.co/mD7ysX5/exotic-food.png' },
        {"name": "主廚推薦", "price": 200, "img": 'https://i.ibb.co/mD7ysX5/exotic-food.png' },
        ]
    },

    'kimbap' : {
        'id': "kimbap",
        'menu': [
        {"name": "肉鬆飯捲", "price": 60, "img": 'https://i.ibb.co/Bc9QcFJ/kimbap.png' },
        {"name": "玉米飯捲", "price": 60, "img": 'https://i.ibb.co/Bc9QcFJ/kimbap.png' },
        {"name": "牛肉條飯捲", "price": 60, "img": 'https://i.ibb.co/Bc9QcFJ/kimbap.png' },
        {"name": "豬肉飯捲", "price": 60, "img": 'https://i.ibb.co/Bc9QcFJ/kimbap.png' },
        {"name": "香雞飯捲", "price": 60, "img": 'https://i.ibb.co/Bc9QcFJ/kimbap.png' },
        {"name": "滑嫩香雞蛋飯捲", "price": 60, "img": 'https://i.ibb.co/Bc9QcFJ/kimbap.png' },
        {"name": "烤肉飯捲", "price": 60, "img": 'https://i.ibb.co/Bc9QcFJ/kimbap.png' },
        ]
    },
}

/*==========  DOM RENDER MENULIST ==========*/

/*===  抓取各商家 ===*/
const gdb = shoper_list.goodBreakfast,
      icu = shoper_list.ichrouCarry,
      nd = shoper_list.nkustNoodle,
      ef = shoper_list.exoticFood,
      kb = shoper_list.kimbap

const list = [gdb, icu, nd, ef, kb]

/*===1.製作Section 2.將內容裝進SECTION 3.產生每個內容 ===*/
const menus = document.querySelector('.main')

/*===  產生菜單Section ===*/
function renderMenu(name) {
    let menuName__id = name.id
    menus.innerHTML +=`<section class="${menuName__id} section" id="${menuName__id}">
    <div class="item__container"></div></section>`

    if (document.getElementById(name.id) === null) {
        let menuName__id = name.id
        menus.innerHTML +=`<section class="${menuName__id} section" id="${menuName__id}">
        <div class="item__container"></div></section>`
    }else {
        let rawHtml = ``
        let menuContainer = document.getElementById(name.id)
        let menuList = menuContainer.firstElementChild
        name.menu.forEach((item) => {
            rawHtml += `<div class="item__content">
            <div class="item__img">
              <img src="${item.img}" alt="img">
            </div> 
            <h3 class="item__title">${item.name}</h3>
            <div class="item__button__container">
              <h3>${'$' + item.price}</h3>
              <button class="modal__button" id="open-modal">
                  購買
              </button>
            </div>
          </div>`
        })
        menuList.innerHTML = rawHtml
    }
}

/*===  製作菜單 ===*/
list.forEach((item) => renderMenu(item))


/*==================== MODAL ACTION ====================*/
/*========== OPEN MODAL ==========*/
const showModal = (openButton, modalContent) => {
    const openBtns = document.querySelectorAll(openButton),
          modalContainer = document.getElementById(modalContent)
    
    if(openBtns && modalContainer) {
        openBtns.forEach((openBtn) => {
            openBtn.addEventListener('click', () => {

                //功能添加
                const name = openBtn.parentElement.parentElement.children[1].innerText
                const price = openBtn.parentElement.children[0].innerText
                let modalTitle = document.querySelector('.modal__title'),
                    modalPrice = document.querySelector('.modal__price')

                modalTitle.innerText = name
                modalPrice.innerText = price
                //功能添加

                modalContainer.classList.add('show-modal')
                document.body.style.overflow = 'hidden'
            })
        })
    }
}
showModal('#open-modal', 'modal-container')

/*========== CLOSE MODAL ==========*/
const modalClose = document.querySelectorAll('#modal-close')

function closeModal() {
    const modalContainer = document.getElementById('modal-container')

    modalContainer.classList.remove('show-modal')

    document.body.style.overflow = 'unset'
}

modalClose.forEach(c => c.addEventListener('click', closeModal))

/*==========  MODAL item choose ==========*/
const items = document.querySelectorAll('.modal__item'),
      checked = 'uil-check-circle',
      noValue = 'uil-circle'

items.forEach(i => i.addEventListener('click', () => {
    let icon = i.firstElementChild.classList

    if (icon.contains(checked)) {
        icon.remove(checked)
        icon.add(noValue)
        i.lastElementChild.style.color = 'black'
        i.classList.remove('1')
        detector(i)

    } else if(icon.contains(noValue)) {
        icon.remove(noValue)
        icon.add(checked)
        i.lastElementChild.style.color = 'var(--first-color-alt)'
        i.classList.add('1')
        detector(i)
    }
}))

function countNumber() {
    let total = 0

    for (let i = 0; i < items.length; i++) {

        total = total + items[i].classList.length;
    }
    return total;
}

function detector(ele) {
    // if (countNumber() >= 8) {
    //     if(icon.contains(noValue)) {
    //         i.lastElementChild.style.color = 'var(--text-color)';
    //         i.firstElementChild.style.color = 'var(--text-color)';
    //     }
    // }

    if (countNumber(ele) <= 7) {
        let icon__with__none = document.querySelectorAll('.uil-times-circle')
        icon__with__none.forEach(items => {
            items.parentElement.style.opacity = '1'
            items.classList.remove('uil-times-circle')
            items.classList.add('uil-circle')
        })

    }else if (countNumber(ele) >= 8) {
        let icon_with_none = document.querySelectorAll('.uil-circle')

        if(icon_with_none) {
            icon_with_none.forEach(icon => {
                icon.parentElement.style.opacity = '.3'
                icon.classList.remove('uil-circle')
                icon.classList.add('uil-times-circle')
            })
        }
    }
    console.log(countNumber(ele))
}



/*==================== CLICK ACTIVE LINK ====================*/
const scrollTabs = document.querySelectorAll('.scroll__tab')
const m = document.querySelector('.scroll__tabs')
scrollTabs.forEach((scrollTab) => {
    scrollTab.addEventListener('click', ()=> {
        for (let i =0; i< 6; i++){
            if (m.children[i].classList.contains('active-link')) {
                m.children[i].classList.remove('active-link')
                m.children[i].children[0].classList.remove('active-link')
            }
        }
        scrollTab.classList.add('active-link')
        scrollTab.firstElementChild.classList.add('active-link')
    })
})


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
     const scrollY = window.pageYOffset

     sections.forEach(current =>{
         const sectionHeight = current.offsetHeight
         const sectionTop = current.offsetTop - 50;
         sectionId = current.getAttribute('id')

         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
             document.querySelector('.scroll__nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
         }else{
             document.querySelector('.scroll__nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
         }
     })
 }
window.addEventListener('scroll', scrollActive)

const navMenu = document.getElementById('receipt-menu'),
      navBack = document.getElementById('back-button'),
      navToggle = document.getElementById('nav-toggle')
      navCheck = document.getElementById('check-button')
      takeNumner = document.getElementById('take-number')

function navActive() {
    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }
    
    if(navBack){
        navBack.addEventListener('click', () =>　{
            navMenu.classList.remove('show-menu')
        })
    }
}

navActive()
/*==================== 訂購後，餐點加入訂單明細 ====================*/
const modalAdd = document.querySelector('#modal-add'),
      recepiptList = document.querySelector('.receipt__list'),
      priceTotal = document.querySelector('#total')


modalAdd.addEventListener('click', () =>　{
    //隱藏modal
    closeModal()

    //取得品項名稱與價格
    let name = document.querySelector('.modal__title').innerText
    let price = document.querySelector('.modal__price').innerText
    if (price[0] === '$') { price = Number(price.replace('$', '')) }

    //產生對應的商品modal
    let rawHtml = `<li class="receipt__item">
    <div class="receipt__item-container">
        <h2 class="receipt__item-quantity">X 1</h2>

        <h3 class="receipt__item-title">${name}</h3>    
    </div>
    <div class='receipt__subinfo'>
    <h3 class="receipt__item-price"><p>$</p> <div id='price'>${price}</div></h3>
    
    <i class="uil uil-times receipt__item__close" id='receipt__item-close'></i>
    </div>
</li>`
    
    //將modal放入receipt
    recepiptList.innerHTML += rawHtml

    //計算總金額
    caculateTotal()

    //得到close的物件
    
})



function caculateTotal() {
    let total = 0
    let receiptItem = document.querySelectorAll('.receipt__item')
    receiptItem.forEach((i) => {
        
        let price = Number(i.children[1].children[0].children[1].innerText)
        total += price
    })
    priceTotal.innerText = total
}

const modalCheckContainer = document.querySelector('#modal-container-check'),
      modalCheckClose =  document.querySelector('#modal-check-back'),
      modalCheckRemove = document.querySelector('#modal-check-remove')

recepiptList.addEventListener('click', (event) => {
    if (recepiptList.children.length > 0) {
        if (event.target.matches('.receipt__item__close')) {
            modalCheckContainer.classList.add('show-modal')
            
            modalCheckClose.addEventListener('click', () => {
                modalCheckContainer.classList.remove('show-modal')
            })
            
            modalCheckRemove.addEventListener('click', () => {
                modalCheckContainer.classList.remove('show-modal')
                event.target.parentElement.parentElement.remove()
                caculateTotal()
            })
            
        }
    }
})


//判斷購物車裡是否有物件
navCheck.addEventListener('click', () =>　{
    if (recepiptList.children.length > 0) {
        navMenu.classList.remove('show-menu')
        takeNumner.classList.add('show-take__number')
        document.body.style.overflow = 'hidden'
    }else {
        
    }
})

//更改modal內容
// function alterModalElement {
//     console.log
// }

