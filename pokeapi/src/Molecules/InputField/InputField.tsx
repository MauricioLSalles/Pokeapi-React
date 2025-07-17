import { type ReactElement } from "react";

type MyComponentProps = {
  props?: React.HTMLAttributes<HTMLDivElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  title?: string;
  details?: string;
};

export default function InputField({
  inputProps,
  title = "",
  details = "",
  props,
}: MyComponentProps): ReactElement {
  return (
    <div className="inputContainer" {...props}>
      <span>{title}</span>
      <input {...inputProps} />
      <span>{details}</span>
    </div>
  );
}
