import Label from '../Atoms/Label'
import './Styles/MultipleLabels.css'
function MultipleLabels({labels}:{labels:string[]}) {
  return (
    <div className="MultipleLabels">
        {labels.map(label => 
            <Label />
        )}
    </div>
  )
}

export default MultipleLabels