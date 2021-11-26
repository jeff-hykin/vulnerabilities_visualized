const { frequencies: getFrequencies } = require("lodash-contrib")
const { Chart } = require("../systems/chartjs")
const { mountedToDom } = require("../systems/utilities")

/**
 * Function
 *
 * @param {Array} label - string for graph
 * @param {Array} elements - list of values
 * @param {Array} data - object, keys are the y axis, values are the x axis
 * @return {HTMLElement}
 *
 * @example
 *     <FrequencyChart elements={[1,2,3,3,3,3,2,2,2]} />
 *     <FrequencyChart data={{ "1":1, "2":4 , "3": 4 }} />
 *     <FrequencyChart elements={["F", "F", "D", "D", "D", ]} />
 */
module.exports = ({ children, label, elements, data = {}, height=300, width=400, ...props }) => {
    let canvas = <canvas width={width} height={height} />
    if (elements instanceof Array) {
        data = getFrequencies(elements)
    }
    mountedToDom(canvas).then(()=>{
        const stackedBarChart = new Chart(canvas.getContext("2d"), {
            type: "bar",
            data: {
                labels: Object.keys(data),
                datasets: [
                    {
                        axis: "y",
                        label: "",
                        data: Object.values(data),
                        fill: false,
                        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
                        borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
                plugins: {
                    legend: {
                        position: 'none',
                    },
                    title: {
                        display: !!label,
                        text: label,
                    }
                }
            },
        })
    })
    return canvas
}
