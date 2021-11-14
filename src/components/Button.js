function Button({ label, classes, handle, disabled }) {
  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={handle}
    >
      {label}
    </button>
  );
}

export default Button;
