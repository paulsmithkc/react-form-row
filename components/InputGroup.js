function InputGroup({ className, children, error, validated = true }) {
  return (
    <div className="mb-3">
      <div className="input-group">{children}</div>
      {validated && error && <div className="text-danger mt-1">{error}</div>}
    </div>
  );
}

export default InputGroup;
