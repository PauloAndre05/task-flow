import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart
} from "recharts"

const data = [
  { name: 'S', tasks: 3 },
  { name: 'M', tasks: 2 },
  { name: 'T', tasks: 2 },
  { name: 'W', tasks: 1 },
  { name: 'T', tasks: 0 },
  { name: 'F', tasks: 0 },
  { name: 'S', tasks: 0 },
];

export const Activity = () => {
    return(
        <div className="flex-1 flex bg-[#F5F5F7] rounded-md flex-col gap-4 p-4">
            <div className="flex justify-between">
                <h2 className="font-semibold">Activity</h2>
                <h2>This Eeek</h2>
            </div>
            <div className="bg-[#DCE4FF] w-full flex-1 rounded-md p-2">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false}/>
                        <XAxis dataKey="name"/>
                        <YAxis allowDecimals={false} accumulate="sum"/>
                        <Tooltip />
                        <Bar dataKey="tasks" fill="#fff"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}