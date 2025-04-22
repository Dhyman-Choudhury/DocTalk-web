import React, { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function Recharts({ showDoctors }) {
    // const {name, consultation_fee}=showDoctors
    // console.log(showDoctors)

    // const {id, name, consultation_fee}=doctors

    // const [value, setValue]=useState([]);

    // const showDoctors = [
    //     {

    //         x: name,
    //         uv:consultation_fee ,
    //      }

    // ];
    //  data.push(
    //   )
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={showDoctors}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="consultation_fee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {showDoctors.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}