var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
document.getElementById('demo1').innerHTML = fruits

const cars = [
  { name: 'Volvo V70', price: '60000', img: '/cars_js/img/Volvo.jpg' },
  { name: 'BMW M3', price: '40000', img: '/cars_js/img/BMW.jpg' },
  { name: 'Bujaty Verona', price: '70000', img: '/cars_js/img/Bujaty.jpg' },
  { name: 'Ford Mustang', price: '25000', img: '/cars_js/img/Ford.jpg' },
]

function createCard(car) {
  return `
  <div class="card">
    <div class="card-img">
      <img src="${car.img}" alt="${car.name}" />
    </div>
    <h3>${car.name}</h3>
    <p>${car.price}</p>
  </div>`
}

const templates = cars.map((car) => createCard(car))
const html = templates.join(' ')
document.querySelector('.list').innerHTML = html
