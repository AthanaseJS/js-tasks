function Car(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.car.img} alt={props.car.name} />
      </div>
      <h3>{props.car.name}</h3>
      <p>{props.car.price}</p>
    </div>
  )
}
const app = (
  <div className="app">
    <div className="list">
      <Car
        car={{
          name: 'Volvo V70',
          price: '60000',
          img: '/cars_react/img/Volvo.jpg',
        }}
      />
      <Car
        car={{ name: 'BMW M3', price: '40000', img: '/cars_react/img/BMW.jpg' }}
      />
    </div>
  </div>
)

ReactDom.render(app, document.getElementById('root'))
