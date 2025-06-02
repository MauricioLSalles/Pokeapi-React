import Label from '../Label/Label'
import './MultipleLabels.css'
function MultipleLabels({labels}:{labels:any[]}) {
  return (
    <div className="MultipleLabels">
        {labels.map((label,id) => 
            <Label key={id} color='grey' label={label.type.name}/>
        )}
    </div>
  )
}

export default MultipleLabels