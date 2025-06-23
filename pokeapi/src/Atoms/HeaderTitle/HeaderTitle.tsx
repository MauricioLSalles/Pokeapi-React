import { type ReactElement } from "react";
import './HeaderTitle.css';
type CustomProps = {
  text: string
};

type Props = CustomProps & React.ButtonHTMLAttributes<HTMLDivElement>;

function HeaderTitle(props: Props): ReactElement {
  const { text, ...TitleProps } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }} {...TitleProps}>
      <img src={"/icons/pokeball.png"} className='HeaderTitle-icon' />
      <span className="header-title">
        {text}
      </span>
    </div>
  )
}

export default HeaderTitle