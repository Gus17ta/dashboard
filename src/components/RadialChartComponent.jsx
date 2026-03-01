import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts'


const data = [
    { name: 'Meta Vendas', value: 80, fill: '#4CAF50' },
    { name: 'Meta Usuários', value: 65, fill: '#2196F3' },
    { name: 'Meta Receita', value: 90, fill: '#FF9800' },
]


function RadialChartComponent() {
 
    return (

<div className='chart-container'>

<h2>Metas Atingidas</h2>
<ResponsiveContainer width='100%' height={300}>
<RadialBarChart
innerRadius="30%"
outerRadius="90%"
data={data}
>
<RadialBar dataKey="value" />
<Legend />
</RadialBarChart>
</ResponsiveContainer>
</div>
    )

}
export default RadialChartComponent