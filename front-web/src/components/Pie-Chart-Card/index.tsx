import './styles.css';
import { buildPieChartConfig } from './helpers';
import ReactApexChart from 'react-apexcharts';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

const PieChartCard = ({ labels, name, series }: Props) => {
  return (
    <div className="pie-chart-card base-card">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width="350"
        height="350"
        series={series}
      />
    </div>
  );
};

export default PieChartCard;
