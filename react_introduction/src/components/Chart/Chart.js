import './chart.css';
import ChartBar from './ChartBar';
const Chart = (pros) => {
  console.log(pros.chartArray);
  const maxValue = pros.chartArray.reduce((pre, cur) => {
    return pre.value >= cur.value ? pre : cur;
  });
  console.log(maxValue);
  const bars = pros.chartArray.map((ele) => {
    return <ChartBar value={ele.value} label={ele.label} key={ele.label} maxValue={maxValue.value}></ChartBar>;
  });

  return <div className="chart">{bars}</div>;
};
export default Chart;
