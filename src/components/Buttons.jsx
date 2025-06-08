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
      {children}
      <div className="state-layer"></div>
    </button>
  );
};

export { Button };
