import AreaChartComponent from '../components/AreaChartComponent.jsx'
import PieChartComponent from '../components/PieChartComponent.jsx'
import RadialChartComponent from '../components/RadialChartComponent.jsx'
import { Link } from 'react-router-dom'


function Analytics() {

return (
 
    <div className='dashboard'>
    <header className='dashboard-header'>
    <h1>Analytics</h1>
    <Link to="/" className="btn-voltar">← Voltar ao Dashboard </Link>
    </header>

<div className='analytics-grid'>
    <AreaChartComponent /> 
    <PieChartComponent /> 
    <RadialChartComponent />
</div>
    </div>
    )
}
export default Analytics