import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import PieChartCard from './components/Pie-Chart-Card';
import SalesByDate from './components/Sales-By-Date';
import SalesSummary from './components/Sales-Summary';
import SalesTable from './components/sales-table';
import { FilterData } from './Utils/types';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDate filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Ituiutaba', 'Uberlândia', 'Araguari', 'Uberaba']}
            series={[20, 30, 30, 20]}
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
