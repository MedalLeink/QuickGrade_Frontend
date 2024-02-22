import { useState } from "react";

interface Props {
  title?: string;
  text?: string;
  bg?: string;
  type?: any;
  onClick?: () => any;
}

function Button(props: Props) {
  const [isHovered, setHovered] = useState(false);
  const buttonStyle = {
    backgroundColor: isHovered ? `${props.text}` : `${props.bg}`,
    color: isHovered ? `${props.bg}` : `${props.text}`,
    border: isHovered ? `0.1rem solid ${props.bg}` : `0.1rem solid ${props.bg}`,
  };
  return (
    <button
      type={props.type || "button"}
      className={`flex px-4 py-1 justify-center border border-purple-50 text-purple-50 items-center hover:bg-purple-50 hover:text-white flex-shrink-0 rounded-full text-xs font-Inter `}
      style={buttonStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => props.onClick && props.onClick()}
    >
      {props.title}
    </button>
  );
}
       
export default Button;
