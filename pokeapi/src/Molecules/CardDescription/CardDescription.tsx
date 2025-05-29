import './CardDescription.css'
import CardHeader from "../../Atoms/CardHeader/CardHeader"
import CardNumber from "../../Atoms/CardNumber/CardNumber"

function CardDescription({number,name}:{number:string,name:string}) {
  return (
    <div className="CardDescription">
        <CardNumber number={number}/>
        <br/>
        <CardHeader name={name}/>
    </div>
  )
}

export default CardDescription