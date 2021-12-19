function SelectRow({
  label,
  id,
  className,
  children,
  success,
  error,
  validated = true,
  ...rest
}) {
  let inputClasses = 'form-select';
  if (validated) {
    if (error) {
      inputClasses += ' is-invalid';
    } else {
      inputClasses += ' is-valid';
    }
  }

  return (
    <div className="form-group mb-3">
      {label && (
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
      )}
      <select className={inputClasses} id={id} {...rest}>
        {children}
      </select>
      {validated && success && <div className="valid-feedback">{success}</div>}
      {validated && error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

export default SelectRow;
