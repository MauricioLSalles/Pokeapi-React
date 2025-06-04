import LabelText from '../../Atoms/LabelText/LabelText'
import './Label.css'

function Label({label, color}:{label:string, color:string}) {
  return (
    <div className="label" style={{backgroundColor:color}}>
      <img src='/types-icons/Fairy.svg' className='label-icon'></img>
      <LabelText label={label}/>
    </div>
  )
}

export default Label