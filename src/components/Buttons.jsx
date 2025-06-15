/**
 * Node module
 */

const Button = ({
  classes = "",
  variant = "filled",
  color = "primary",
  children,
  ...rest
}) => {
  return (
    <button className={`btn ${classes} ${variant} ${color}`} {...rest}>
      {/* {children} In React, children is a special prop that represents everything between a component’s opening and closing tags. */}
      {children}
      <div className="state-layer"></div>
    </button>
  );
};

export { Button };
