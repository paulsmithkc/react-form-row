function InputGroupRow({ className, children, success, error, validated = true }) {
  return (
    <div className="mb-3">
      <div className="input-group">{children}</div>
      {validated && success && <div className="valid-feedback">{success}</div>}
      {validated && error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

export default InputGroupRow;
