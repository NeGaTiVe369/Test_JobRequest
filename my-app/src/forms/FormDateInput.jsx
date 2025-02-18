export function FormDateInput({ label, required, error, ...props }) {
    return (
      <div className="form-group">
        <label className={`form-label ${required ? "required" : ""}`}>{label}</label>
        <div className="date-input">
          <input
            type="text"
            className="form-input"
            placeholder="дд.мм.гггг"
            {...props}
          />
          <div className="date-icon" />
        </div>
        {error && <div className="form-error">{error}</div>}
      </div>
    )
  }

