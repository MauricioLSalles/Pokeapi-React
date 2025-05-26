import Label from '../Label/Label'
import './MultipleLabels.css'
function MultipleLabels({labels}:{labels:string[]}) {
  return (
    <div className="MultipleLabels">
        {labels.map(label => 
            <Label color='grey' label={label}/>
        )}
    </div>
  )
}

export default MultipleLabels