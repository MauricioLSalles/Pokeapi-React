import './CardHeader.css';

function CardHeader({name}:{name:string}) {
  return (
    <span className="CardHeader text-enourmous">{name}</span>
  )
}

export default CardHeader