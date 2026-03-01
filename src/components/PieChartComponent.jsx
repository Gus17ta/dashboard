import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'


 const data = [
    { name: 'Eletrônicos', value: 400 },
    { name: 'Roupas', value: 300 },
    { name: 'Alimentos', value: 200 },
    { name: 'Serviços', value: 100 },
]

const COLORS = ['#4caf50', '#2196f3', '#ff9800', '#9c27b0']

function PieChartComponent() {

    return (

        <div className='chart-container'>

        <h2> Vendas por Categoria</h2>
        <ResponsiveContainer width="100%" height={300}>
        <PieChart>
        <Pie 
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100} 
        >
            {data.map ((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
            ))}
        </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
        </ResponsiveContainer>
        </div>
)
} 
export default PieChartComponent