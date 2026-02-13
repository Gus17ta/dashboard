import './SalesTable.css'


function SalesTable() {
  return (
    <div className= "table-container">
        <h3>Vendas por Produto</h3>
        <table className="sales-table">
            <thead>
    <tr>
    <th>Produtos</th>
    <th>Vendas</th>
    <th>Receitas</th>
    <th>Status</th>
    </tr>
 </thead>
    <tbody>
        <tr>
    <td>Produto A</td>
    <td>Produto B</td>
    <td>Produto C</td>
    <td>Produto D</td>
        </tr>
         <tr>
    <td>145</td>
    <td>98</td>
    <td>234</td>
    <td>67</td>
        </tr>
         <tr>
    <td>R$ 3.200</td>
    <td>R$ 2.100</td>
    <td>R$ 5.600</td>
    <td>R$ 1.200</td>
        </tr>
         <tr>
    <td>✅ Ativo</td>
    <td>✅ Ativo</td>
    <td>✅ Ativo</td>
    <td>⏸️ Pausado</td>
        </tr>
    </tbody>
     </table> 
        </div>

  )
}

export default SalesTable