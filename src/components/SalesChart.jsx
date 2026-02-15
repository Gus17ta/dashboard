import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function SalesChart() {
  const data = [
    { month: 'Jan', sales: 4000 },
    { month: 'Fev', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Abr', sales: 2780 },
    { month: 'Mai', sales: 6890 },
    { month: 'Jun', sales: 4390 },
    { month: 'Jul', sales: 5200 },
    { month: 'Ago', sales: 4800 },
  ]

  return (
    <div className="chart-container">
      <h2>Vendas Mensais</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SalesChart