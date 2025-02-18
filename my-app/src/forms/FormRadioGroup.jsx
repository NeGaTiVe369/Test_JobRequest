export function FormRadioGroup({
    label,
    required,
    error,
    options,
    inline = true,
    name,
    value,
    onChange,
    onBlur,
    ...props
  }) {
    return (
      <div className="form-group">
        {label && <label className={`form-label ${required ? "required" : ""}`}>{label}</label>}
        <div className="radio-group" style={{ flexDirection: inline ? "row" : "column" }}>
          {options.map((option) => (
            <label key={option.value} className="radio-label">
              <input
                type="radio"
                className="radio-input"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                onBlur={onBlur}
                {...props}
              />
              {option.label}
            </label>
          ))}
        </div>
        {error && <div className="form-error">{error}</div>}
      </div>
    )
  }
  
  