import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import PieChartCard from './components/Pie-Chart-Card';
import SalesByDate from './components/Sales-By-Date';
import SalesSummary from './components/Sales-Summary';
import SalesTable from './components/sales-table';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Uberlândia', 'Araguari', 'Uberlandia']}
            series={[40, 30, 30]}
          />

          <PieChartCard
            name="Pagamento"
            labels={['Crédito', 'Débito', 'Dinheiro']}
            series={[20, 50, 30]}
          />
        </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
