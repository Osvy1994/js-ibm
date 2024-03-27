const breakfastMenu = [
  'Pancakes- $12',
  'Eggs Benedict -$22.99',
  'Oatmeal -$21.99',
  'Frittata -$15',
]
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon']
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad']

const breakfastMenuItemsHTML = breakfastMenu
  .map((item, index) => {
    return `<p>Item ${index + 1}: ${item}</p>`
  })
  .join('')

document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML

let mainCourseItem = ''

mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`
})

document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem

let dessertMenuItem = ''

for (let i = 0; i < dessertMenu.length; i++) {
  dessertMenuItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`
}

document.getElementById('dessertMenuItems').innerHTML = dessertMenuItem

document.getElementById('breakfastTotalItems').innerText =
  `Total Items: ${breakfastMenu.length}`
document.getElementById('maincourseTotalItems').innerText =
  `Total Items: ${mainCourseMenu.length}`
document.getElementById('dessertTotalItems').innerText =
  `Total Items: ${dessertMenu.length}`
