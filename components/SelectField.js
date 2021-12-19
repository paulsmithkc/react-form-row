function SelectField({ label, id, className, error, children, ...rest }) {
  const inputClasses = 'form-select ' + (error ? 'is-invalid' : 'is-valid');

  return (
    <div className="mb-3">
      {label && (
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
      )}
      <select className={inputClasses} id={id} {...rest}>
        {children}
      </select>
      {error && <div className="text-danger mt-1">{error}</div>}
    </div>
  );
}

export default SelectField;
