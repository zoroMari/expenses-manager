import './Chart.css';
import ChartBar from './ChartBar';

export default function Chart(props) {
  const dataPointsValue = props.dataPoints.map((item) => item.value);
  const totalMaximum = Math.max(...dataPointsValue)

  return (
    <div className='chart'>
      {props.dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={totalMaximum}
          label={item.label}
        />
      ))}
    </div>
  );
}