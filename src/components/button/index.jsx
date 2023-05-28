const Button = ({ onClick, title, ...props }) => {
  return (
    <button
      onClick={onClick}
      role="button"
      {...props}
    >
      {title}
    </button>
  )
};

export default Button;