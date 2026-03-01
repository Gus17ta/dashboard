function MetricCard({ title, value, icon, color }) {
  return (
    <div className="metric-card" style={{ borderColor: color }}>
      <div className="metric-icon" style={{ color: color }}>
        {icon}
      </div>
      <div className="metric-info">
        <h3>{title}</h3>
        <p className="metric-value">{value}</p>
     

     
     
      </div>
    </div>
  )
}

export default MetricCard