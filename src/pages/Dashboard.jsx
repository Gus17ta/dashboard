import MetricCard from '../components/MetricCard.jsx'
import SalesChart from '../components/SalesChart.jsx'
import SalesTable from '../components/SalesTable.jsx'
import PieChartComponent from '../components/PieChartComponent.jsx'
import AreaChartComponent from '../components/AreaChartComponent.jsx'
import RadialChartComponent from '../components/RadialChartComponent.jsx'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (

    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard Administrativo</h1>
     <Link to="/analytics" className="btn-analytics">Ver Analytics →</Link>
        
      </header>
      
      <div className="metrics-grid">
        <MetricCard 
          title="Vendas Totais"
          value="R$ 45.231"
          icon="💰"
          color="#4CAF50"
        />
        <MetricCard 
          title="Novos Usuários"
          value="1.234"
          icon="👥"
          color="#2196F3"
        />
        <MetricCard 
          title="Receita Mensal"
          value="R$ 12.450"
          icon="📈"
          color="#FF9800"
        />
        <MetricCard 
          title="Pedidos Hoje"
          value="89"
          icon="📦"
          color="#9C27B0"
        />

        <MetricCard
        title="Taxa de Conversão"
        value= "3.2%"
        icon="📊"
        color="#FF9800"  
         />
         <MetricCard
          title="Ticket Médio"
          value="R$ 1.620"
          icon="⚖️"
          color="#29d4ffff"
/>
        <MetricCard
    title="Taxa de Cancelamento"
    value="1,5%"
    icon="❌"
    color="#000"
/>
        <MetricCard
    title="Nível de satisfação"
    value="3,5%"
    icon="✅"
    color="#0aca00ff"
/>

      </div>
      <SalesTable />
      <SalesChart />    
    </div>
  )
}
export default Dashboard