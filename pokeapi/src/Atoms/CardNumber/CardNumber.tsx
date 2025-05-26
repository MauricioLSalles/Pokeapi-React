import "./CardNumber.css"

function CardNumber({number}:{number:string}) {
  return (
    <span className="CardNumber">
        #{number}
    </span>
  )
}

export default CardNumber