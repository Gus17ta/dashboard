import MetricCard from './components/MetricCard.jsx'
import SalesChart from './components/SalesChart.jsx'
import SalesTable from './components/SalesTable.jsx'
import './App.css'
import './SalesTable.css'


function App() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard Administrativo</h1>
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
      </div>
      <SalesTable />
      <SalesChart />
    </div>
  )
}

export default App
