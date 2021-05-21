import "./Button.css";
import cn from "../utils/classnames";

export default function Button({
  children,
  square = false,
  variant = "",
  size = "",
  onMouseOver = () => null,
  onMouseLeave = () => null,
  onClick = () => null,
}) {
  const classNames = cn({
    button: true,
    "button--square": square,
    [`button--${variant}`]: variant,
  });
  return (
    <button
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      onClick={onClick}
      className={classNames}
    >
      {children}
    </button>
  );
}
