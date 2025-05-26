import './Styles/CardDescription.css'
import CardHeader from "../Atoms/CardHeader"
import CardNumber from "../Atoms/CardNumber"

function CardDescription() {
  return (
    <div className="CardDescription">
        <CardNumber number="001"/>
        <br/>
        <CardHeader name="Bulbasor"/>
    </div>
  )
}

export default CardDescription