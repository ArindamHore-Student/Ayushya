import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Product A', sales: 4000, profit: 2400 },
  { name: 'Product B', sales: 3000, profit: 1398 },
  { name: 'Product C', sales: 2000, profit: 9800 },
  { name: 'Product D', sales: 2780, profit: 3908 },
  { name: 'Product E', sales: 1890, profit: 4800 },
];

interface BarChartProps {
  title?: string;
  data?: any[];
  xKey?: string;
  yKeys?: string[];
  colors?: string[];
}

export function BarChart({
  title = 'Sample Bar Chart',
  data: customData = data,
  xKey = 'name',
  yKeys = ['sales', 'profit'],
  colors = ['#8884d8', '#82ca9d']
}: BarChartProps) {
  return (
    <div className="w-full h-[400px] p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={customData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {yKeys.map((key, index) => (
            <Bar 
              key={key}
              dataKey={key} 
              fill={colors[index % colors.length]}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
} 