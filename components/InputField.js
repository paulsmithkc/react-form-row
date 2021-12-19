function InputField({ label, id, className, error, type, ...rest }) {
  const inputClasses = 'form-control ' + (error ? 'is-invalid' : 'is-valid');

  return (
    <div className="mb-3">
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
      {error && <div className="text-danger mt-1">{error}</div>}
    </div>
  );
}

export default InputField;
