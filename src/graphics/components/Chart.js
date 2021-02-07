import React, { useEffect, useState } from 'react'
import { Tooltip, XAxis, YAxis, BarChart, Bar, CartesianGrid } from 'recharts'
import { readRemoteFile } from 'react-papaparse'

const defaultData =
  'https://raw.githubusercontent.com/CodeForManaus/vacina-manaus-backend/master/analytics/uncategorized_service_group_by_vaccination_site_percent.csv'

const formatData = ({ data }) => {
  const formattedData = data.map((row) => {
    if (row[1] !== 'uncategorized_percent')
      return { name: row[0], value: parseFloat(row[1]) }
    return undefined
  })

  return formattedData
}

const Chart = () => {
  const [data, setData] = useState()
  useEffect(() => {
    readRemoteFile(defaultData, {
      complete: (results) => {
        const formattedData = formatData(results)
        setData(formattedData)
      },
    })
  }, [])

  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
      <Bar type='monotone' dataKey='value' />
    </BarChart>
  )
}

export default Chart
