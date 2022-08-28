// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

const vaccinationByGender = props => {
  const {vaccinationByGenderDetails} = props
  return (
    <div>
      <h1>Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="70%"
          cy="40%"
          data={vaccinationByGenderDetails}
          startAngle={180}
          endAngle={0}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#fecba6" />
          <Cell name="Female" fill="#b3d23f" />
          <Cell name="Others" fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </div>
  )
}

export default vaccinationByGender
