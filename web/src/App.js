import { useState, useEffect } from "react"
import Charts from "react-apexcharts"
import axios from "axios";
function App() {
  const [data1, setData1] = useState()
  const [data2, setData2] = useState()

  useEffect(() => {
    axios.get("http://localhost:4500/api/v1/list/data")
      .then((res) => (setData1(res.data.data1), setData2(res.data.data2)))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className="App">
      <h1>Live Chart For Investment & Profit </h1>
      <Charts
        type="bar"
        width={1000}
        height={1000}
        series={
          [
            {
              name: "Investment",
              data: data1
            },
            {
              name: "Profit",
              data: data2
            }
          ]
        }
        options={{
          theme: {
            mode: 'dark'
          },
          chart: {
            stacked: true,
            stackType: 'vertical'
          },
          colors: ["#EEEEEE", "#76ABAE"],
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 1500
            },
            dynamicAnimation: {
              enabled: true,
              speed: 3500
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 100],
              colorStops: []
            }
          },
        }}
      >

      </Charts>
    </div >
  );
}

export default App;
