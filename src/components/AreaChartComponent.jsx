import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'


function AreaChartComponent() {
 const data = [
    { month: 'Jan', receita: 3000, despesa: 2400 },
    { month: 'Fev', receita: 4000, despesa: 1398 },
    { month: 'Mar', receita: 5000, despesa: 2800 },
    { month: 'Abr', receita: 4780, despesa: 3200 },
    { month: 'Mai', receita: 6890, despesa: 3800 },
    { month: 'Jun', receita: 5390, despesa: 2900 },
]

  return (
    <div className="Area-container">
      <h2>Vendas Mensais</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area dataKey="receita" fill="#4cAF50" />
          <Area dataKey="despesas" fill="#f44336" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
export default AreaChartComponent
