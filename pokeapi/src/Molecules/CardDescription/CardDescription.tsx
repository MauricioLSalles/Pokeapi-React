import './Styles/CardDescription.css'
import CardHeader from "../../Atoms/CardHeader/CardHeader"
import CardNumber from "../../Atoms/CardNumber/CardNumber"

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