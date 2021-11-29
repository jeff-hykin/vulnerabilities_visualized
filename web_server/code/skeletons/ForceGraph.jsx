const d3 = require('../../static_files/d3_v3');

module.exports = ({ json, onNodeClick = () => {} } = {}) => {
  var width = 960,
    height = 500;

  const container = <div></div>;
  var svg = d3
    .select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  var force = d3.layout
    .force()
    .gravity(0.05)
    .distance(100)
    .charge(-100)
    .size([width, height]);

  force.nodes(json.nodes).links(json.links).start();

  var link = svg
    .selectAll('.link')
    .data(json.links)
    .enter()
    .append('line')
    .attr('class', 'link')
    .style('stroke-width', 1)
    .style('stroke', 'grey');

  var node = svg
    .selectAll('.node')
    .data(json.nodes)
    .enter()
    .append('g')
    .attr('class', 'node')
    .attr('fill', (d) => d.color)
    .on('click', function (d) {
      onNodeClick(d);
    })
    .call(force.drag);

  node.append('circle').attr('r', '5');

  node
    .append('text')
    .attr('dx', 12)
    .attr('dy', '.35em')
    .text(function (d) {
      return d.name;
    });

  force.on('tick', function () {
    link
      .attr('x1', function (d) {
        return d.source.x;
      })
      .attr('y1', function (d) {
        return d.source.y;
      })
      .attr('x2', function (d) {
        return d.target.x;
      })
      .attr('y2', function (d) {
        return d.target.y;
      });

    node.attr('transform', function (d) {
      return 'translate(' + d.x + ',' + d.y + ')';
    });
  });
  return container;
};
