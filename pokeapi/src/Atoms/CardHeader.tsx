import './Styles/CardHeader.css';

function CardHeader({name}:{name:string}) {
  return (
    <span className="CardHeader">{name}</span>
  )
}

export default CardHeader