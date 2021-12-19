function InputField({
  label,
  id,
  className,
  type,
  error,
  validated = true,
  ...rest
}) {
  let inputClasses = 'form-control';
  if (validated) {
    if (error) {
      inputClasses += ' is-invalid';
    } else {
      inputClasses += ' is-valid';
    }
  }

  return (
    <div className="form-group mb-3">
      {label && type !== 'hidden' && (
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea className={inputClasses} id={id} {...rest} />
      ) : (
        <input className={inputClasses} id={id} type={type} {...rest} />
      )}
      {validated && error && <div className="text-danger mt-1">{error}</div>}
    </div>
  );
}

export default InputField;
