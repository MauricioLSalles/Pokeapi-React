import { type ReactElement } from "react"

function HeaderTitle():ReactElement{
  return (
    <div>
        <img src={"/icons/pokeball.png"} className='HeaderTitle-icon'/>
        <span className="header-title">
            HeaderTitle
        </span>
    </div>
  )
}

export default HeaderTitle