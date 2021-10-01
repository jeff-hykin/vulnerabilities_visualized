const d3 = require("../../../static_files/d3")

module.exports = () => {
    // create the container that gets exported
    const container = <div></div>
    const d3Container = d3.select(container)

    // i got this demo from here: http://jsfiddle.net/superboggly/QajDa/1/
    let graph = {
        nodes: [
            { name: "Betty", size: 12, company: "X", location: "ChicagoIL" },
            { name: "Frank", size: 12, company: "Y", location: "NewYorkNY" },
            { name: "Jim", size: 12, company: "Y", location: "LosAngelesCA" },
            { name: "Sally", size: 12, company: "Z", location: "TorontoON" },
            { name: "Tom", size: 12, company: "X", location: "ChicagoIL" },
            { name: "GroupA", size: 18, company: "T", location: "x" },
            { name: "GroupB", size: 18, company: "T", location: "x" },
        ],
        links: [
            { source: 2, target: 5, bond: 1 },
            { source: 3, target: 5, bond: 2 },
            { source: 4, target: 5, bond: 1 },
            { source: 0, target: 6, bond: 1 },
            { source: 1, target: 6, bond: 2 },
            { source: 4, target: 6, bond: 1 },
        ],
        locs: [
            { lat: 40.7142, long: -74.0064, location: "NewYorkNY" },
            { lat: 34.0522, long: -118.2428, location: "LosAngelesCA" },
            { lat: 43.6481, long: -79.4042, location: "TorontoON" },
            { lat: 41.85, long: -87.65, location: "ChicagoIL" },
        ],
    }

    let width = 250
    let height = 250
    let padding = 20

    let color = d3.scale.category20()

    let radius = d3.scale.sqrt().range([0, 7])

    let scale = d3.scale.linear()

    let svg = d3Container.append("svg").attr("width", width).attr("height", height)

    let svg2 = d3Container.append("svg").attr("width", width).attr("height", height)

    let force = d3.layout
        .force()
        .size([width, height])
        .charge(-400)
        .linkStrength(3)
        .linkDistance(function (d) {
            return radius(d.source.size) + radius(d.target.size) + 30 / (2 * d.bond - 1)
        })

    // network diagram stuff

    force.nodes(graph.nodes).links(graph.links).on("tick", tick).start()

    let link = svg.selectAll(".link").data(graph.links).enter().append("g").attr("class", "link")

    link.append("line").style("stroke-width", function (d) {
        return (d.bond * 2 - 1) * 3 + "px"
    })

    link.filter(function (d) {
        return d.bond > 1
    })
        .append("line")
        .attr("class", "separator")

    let node = svg
        .selectAll(".node")
        .data(graph.nodes)
        .enter()
        .append("g")
        .attr("class", function (d) {
            return "node " + d.name + " " + d.location
        })
        .call(force.drag)
        .on("mouseover", function (d) {
            // I would like to insert an if statement to do all of these things to the connected nodes
            // if(isConnected(d, o)) {
            d3.select(this).select("circle").style("stroke-width", 6)

            // Figure out the neighboring node id's with brute strength because the graph is small
            let nodeNeighbors = graph.links
                .filter(function (link) {
                    // Filter the list of links to only those links that have our target
                    // node as a source or target
                    return link.source.index === d.index || link.target.index === d.index
                })
                .map(function (link) {
                    // Map the list of links to a simple array of the neighboring indices - this is
                    // technically not required but makes the code below simpler because we can use
                    // indexOf instead of iterating and searching ourselves.
                    return link.source.index === d.index ? link.target.index : link.source.index
                })

            // Reset all circles - we will do this in mouseout also
            svg.selectAll("circle").style("stroke", "gray")

            // now we select the neighboring circles and apply whatever style we want.
            // Note that we could also filter a selection of links in this way if we want to
            // Highlight those as well
            svg.selectAll("circle")
                .filter(function (node) {
                    // I filter the selection of all circles to only those that hold a node with an
                    // index in my listg of neighbors
                    return nodeNeighbors.indexOf(node.index) > -1
                })
                .style("stroke", "orange")

            d3.select(this).select("circle").style("stroke", "orange")
            d3.select(this).select("text").style("font", "20px sans-serif")
            d3.selectAll("rect." + d.location).style("stroke-width", 6)
            d3.selectAll("rect." + d.location).style("stroke", "orange")
            d3.selectAll("text." + d.location).style("font", "20px sans-serif")
            d3.selectAll("tr." + d.name).style("background-color", "orange")
            //}
        })
        .on("mouseout", function (d) {
            // if(isConnected(d, o)) {
            svg.selectAll("circle").style("stroke", "gray")
            d3.select(this).select("circle").style("stroke-width", 1.5)
            //d3.select(this).select("circle").style("stroke", "gray");
            d3.select(this).select("text").style("font", "12px sans-serif")
            d3.selectAll("rect." + d.location).style("stroke-width", 1.5)
            d3.selectAll("rect." + d.location).style("stroke", "gray")
            d3.selectAll("text." + d.location).style("font", "12px sans-serif")
            d3.selectAll("tr." + d.name).style("background-color", "white")
            //}
        })

    node.append("circle")
        .attr("r", function (d) {
            return radius(d.size)
        })
        .style("fill", function (d) {
            return color(d.name)
        })

    node.append("text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text(function (d) {
            return d.name
        })

    let linkedByIndex = {}
    graph.links.forEach(function (d) {
        linkedByIndex[d.source.index + "," + d.target.index] = 1
    })

    function isConnected(a, b) {
        return linkedByIndex[a.index + "," + b.index] || linkedByIndex[b.index + "," + a.index] || a.index == b.index
    }

    function tick() {
        link.selectAll("line")
            .attr("x1", function (d) {
                return d.source.x
            })
            .attr("y1", function (d) {
                return d.source.y
            })
            .attr("x2", function (d) {
                return d.target.x
            })
            .attr("y2", function (d) {
                return d.target.y
            })
        node.attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")"
        })
    }

    // map stuff

    let xScale = d3.scale
        .linear()
        .domain([
            d3.min(graph.locs, function (d) {
                return d.long
            }),
            d3.max(graph.locs, function (d) {
                return d.long
            }),
        ])
        .range([padding, width - 4 * padding])

    let yScale = d3.scale
        .linear()
        .domain([
            d3.min(graph.locs, function (d) {
                return d.lat
            }),
            d3.max(graph.locs, function (d) {
                return d.lat
            }),
        ])
        .range([height - padding, padding])

    let mapit = svg2
        .selectAll(".mapit")
        .data(graph.locs)
        .enter()
        .append("g")
        .on("mouseover", function (d) {
            d3.select(this).select("rect").style("stroke-width", 6)
            d3.select(this).select("rect").style("stroke", "orange")
            d3.select(this).select("text").style("font", "20px sans-serif")
            d3.selectAll("g." + d.location + " circle").style("stroke-width", 6)
            d3.selectAll("g." + d.location + " circle").style("stroke", "orange")
            d3.selectAll("g." + d.location + " text").style("font", "20px sans-serif")
            d3.selectAll("tr." + d.location).style("background-color", "orange")
        })
        .on("mouseout", function (d) {
            d3.select(this).select("rect").style("stroke-width", 1.5)
            d3.select(this).select("rect").style("stroke", "gray")
            d3.select(this).select("text").style("font", "12px sans-serif")
            d3.selectAll("g." + d.location + " circle").style("stroke-width", 1.5)
            d3.selectAll("g." + d.location + " circle").style("stroke", "gray")
            d3.selectAll("g." + d.location + " text").style("font", "12px sans-serif")
            d3.selectAll("tr." + d.location).style("background-color", "white")
        })

    mapit
        .append("rect")
        .attr("x", function (d) {
            return xScale(d.long)
        })
        .attr("y", function (d) {
            return yScale(d.lat)
        })
        .attr("height", 20)
        .attr("width", 20)
        .attr("fill", "gray")
        .attr("stroke-width", "1.5")
        .attr("stroke", "gray")
        .attr("class", function (d) {
            return d.location
        })

    mapit
        .append("text")
        .attr("x", function (d) {
            return xScale(d.long)
        })
        .attr("y", function (d) {
            return yScale(d.lat) - 5
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "12px")
        .attr("fill", "black")
        .text(function (d) {
            return d.location
        })
        .attr("class", function (d) {
            return d.location
        })

    // table stuff

    function tabulate(tdata, columns) {
        let table = d3Container.append("table"),
            thead = table.append("thead"),
            tbody = table.append("tbody")
        thead
            .append("tr")
            .selectAll("th")
            .data(columns)
            .enter()
            .append("th")
            .text(function (column) {
                return column
            })

        let rows = tbody
            .selectAll("tr")
            .data(tdata)
            .enter()
            .append("tr")
            .attr("class", function (d) {
                return d.name + " " + d.location
            })
            .on("mouseover", function (d) {
                d3.select(this).style("background-color", "orange")
                d3.selectAll("g." + d.name + " circle").style("stroke-width", 6)
                d3.selectAll("g." + d.name + " circle").style("stroke", "orange")
                d3.selectAll("g." + d.name + " text").style("font", "20px sans-serif")
                d3.selectAll("rect." + d.location).style("stroke-width", 6)
                d3.selectAll("rect." + d.location).style("stroke", "orange")
                d3.selectAll("text." + d.location).style("font", "20px sans-serif")
            })
            .on("mouseout", function (d) {
                d3.select(this).style("background-color", "white")
                d3.selectAll("g." + d.name + " circle").style("stroke-width", 1)
                d3.selectAll("g." + d.name + " circle").style("stroke", "gray")
                d3.selectAll("g." + d.name + " text").style("font", "12px sans-serif")
                d3.selectAll("rect." + d.location).style("stroke-width", 1.5)
                d3.selectAll("rect." + d.location).style("stroke", "gray")
                d3.selectAll("text." + d.location).style("font", "12px sans-serif")
            })

        let cells = rows
            .selectAll("td")
            .data(function (row) {
                return columns.map(function (column) {
                    return { column: column, value: row[column] }
                })
            })
            .enter()
            .append("td")
            .text(function (d) {
                return d.value
            })
        return table
    }

    let subdata = graph.nodes.filter(function (d) {
        return d.location != "x"
    })

    let myTable = tabulate(subdata, ["name", "company", "location"])

    myTable.selectAll("thead th").text(function (column) {
        return column.charAt(0).toUpperCase() + column.substr(1)
    })

    myTable.selectAll("tbody tr").sort(function (a, b) {
        return d3.ascending(a.name, b.name)
    })
    
    
    return container
}

