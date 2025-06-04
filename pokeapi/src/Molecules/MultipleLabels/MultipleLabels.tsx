import type { Label as LabelType } from '../../Types/Label'
import Label from '../Label/Label'
import './MultipleLabels.css'
function MultipleLabels({labels}:{labels:LabelType[]}) {
  return (
    <div className="MultipleLabels">
        {labels.map((label,id) => 
            <Label key={id} color='grey' label={label.type.name}/>
        )}
    </div>
  )
}

export default MultipleLabels