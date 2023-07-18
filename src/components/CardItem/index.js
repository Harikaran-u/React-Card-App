// Write your code here.
import './index.css'

const CardItem = props => {
  const {card} = props
  const {title, description, imgUrl, className} = card
  const nameCard = `${className} name-card`
  const cardEl = (
    <li className={nameCard}>
      <div className="info-card">
        <h1 className="header">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <img className="img-design" src={imgUrl} alt={title} />
    </li>
  )
  return cardEl
}

export default CardItem
