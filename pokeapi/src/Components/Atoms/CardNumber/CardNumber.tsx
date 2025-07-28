import "./CardNumber.css"

function CardNumber({number}:{number:string}) {
  return (
    <span className="CardNumber text-large">
        #{number}
    </span>
  )
}

export default CardNumber