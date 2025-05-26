import LabelText from '../../Atoms/LabelText/LabelText'
import './Label.css'

function Label({label, color}:{label:string, color:string}) {
  return (
    <div className="label" style={{backgroundColor:color}}>
      <svg className='label-icon'></svg>
      <LabelText label={label}/>
      </div>
  )
}

export default Label