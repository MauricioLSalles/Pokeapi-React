import Label from '../Label/Label'
import './Styles/MultipleLabels.css'
function MultipleLabels({labels}:{labels:string[]}) {
  return (
    <div className="MultipleLabels">
        {labels.map(label => 
            <Label label={label}/>
        )}
    </div>
  )
}

export default MultipleLabels