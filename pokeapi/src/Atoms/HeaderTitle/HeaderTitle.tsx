import { type ReactElement } from "react";
import './HeaderTitle.css';
type CustomProps = {
  text: string
};

type Props = CustomProps & React.ButtonHTMLAttributes<HTMLDivElement>;

function HeaderTitle(props:Props):ReactElement{
  const {text, ...TitleProps} = props;
  return (
    <div {...TitleProps}>
        <img src={"/icons/pokeball.svg"} className='HeaderTitle-icon'/>
        <span className="header-title">
            {text}
        </span>
    </div>
  )
}

export default HeaderTitle