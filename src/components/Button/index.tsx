import { FC, ReactElement } from "react";

type ButtonProps = {
  text: string;
  style: string;
  onClick: VoidFunction;
};
const Button: FC<ButtonProps> = ({ text, style, onClick }): ReactElement => {
  return (
    <button onClick={onClick} className={style}>
      {text}
    </button>
  );
};

export default Button;
