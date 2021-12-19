function SelectField({
  label,
  id,
  className,
  children,
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
      {validated && error && <div className="text-danger mt-1">{error}</div>}
    </div>
  );
}

export default SelectField;
