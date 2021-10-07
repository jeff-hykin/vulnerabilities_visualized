const { frequencies: getFrequencies } = require("lodash-contrib")
const { Chart } = require("../systems/chartjs")

module.exports = ({ children, label, elements, data = {}, ...props }) => {
    let canvas = <canvas width="400" height="400" />
    if (elements instanceof Array) {
        data = getFrequencies(elements)
    }
    const stackedBarChart = new Chart(canvas.getContext("2d"), {
        type: "bar",
        data: {
            labels: Object.keys(data),
            datasets: [
                {
                    axis: "y",
                    label,
                    data: Object.values(data),
                    fill: false,
                    backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
                    borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    })
    return canvas
}
