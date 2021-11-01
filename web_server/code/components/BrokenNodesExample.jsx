// taken from: https://codesandbox.io/s/silly-cerf-lgc16?file=/index.js:24970-24993
// also see: https://codesandbox.io/s/optimistic-bush-4hwo1?file=/src/components/HelloWorld.vue
import G6 from '@antv/g6';
const data = {
  "nodes": [
    {
      "id": "trend",
      "name": "Trend",
      "level": 0,
      "childrenNum": 11,
      "tag": "trend"
    },
    {
      "id": "compare",
      "name": "Compare",
      "level": 0,
      "childrenNum": 33,
      "tag": "compare"
    },
    {
      "id": "percentage",
      "name": "Percentage",
      "level": 0,
      "childrenNum": 14,
      "tag": "percentage"
    },
    {
      "id": "flow",
      "name": "Flow",
      "level": 0,
      "childrenNum": 4,
      "tag": "flow"
    },
    {
      "id": "distribution",
      "name": "Distribution",
      "level": 0,
      "tag": "distribution",
      "childrenNum": 12
    },
    {
      "id": "relation",
      "name": "Relation",
      "level": 0,
      "tag": "relation",
      "childrenNum": 34
    },
    {
      "id": "composition",
      "name": "Composition",
      "level": 0,
      "childrenNum": 1,
      "tag": "composition"
    },

    {
      "id": "clustering",
      "name": "Clustering",
      "level": 1,
      "childrenNum": 7,
      "tag": "clustering",
      "isLeaf": false,
      "tags": ["relation"]
    },
    {
      "id": "hierarchy",
      "name": "Hierarchy",
      "level": 1,
      "childrenNum": 5,
      "tag": "hierarchy",
      "isLeaf": false,
      "tags": ["relation"]
    },

    {
      "id": "basiclinechart",
      "name": "Line\nChart",
      "level": 2,
      "isLeaf": true,
      "tags": ["trend"]
    },
    {
      "id": "multilinechart",
      "name": "Multi-line\nChart",
      "level": 2,
      "isLeaf": true,
      "tags": ["trend", "compare"]
    },
    {
      "id": "basicareachart",
      "name": "Area\nChart",
      "level": 2,
      "isLeaf": true,
      "tags": ["trend"]
    },
    {
      "id": "stackareachart",
      "name": "Stacked\nArea Chart",
      "level": 2,
      "isLeaf": true,
      "tags": ["trend", "compare", "percentage"]
    },
    {
      "id": "percentstackareachart",
      "name": "% Stacked\nArea Chart",
      "level": 2,
      "isLeaf": true,
      "tags": ["trend", "compare", "percentage"]
    },
    {
      "id": "intervalareachart",
      "name": "Interval\nArea Chart",
      "level": 2,
      "isLeaf": true,
      "tags": ["trend", "compare"]
    },
    {
      "id": "streamchart",
      "name": "Stream Chart",
      "level": 2,
      "isLeaf": true,
      "tags": ["trend", "compare"]
    },
    {
      "id": "basichistogram",
      "name": "Histogram",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare"]
    },
    {
      "id": "grouphistogram",
      "name": "Grouped\nHistogram",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare"]
    },
    {
      "id": "stackhistogram",
      "name": "Stacked\nHistogram",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare"]
    },
    {
      "id": "percentstackhistogram",
      "name": "% Stacked\nHistogram",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare", "percentage"]
    },
    {
      "id": "intervalhistogram",
      "name": "Interval\nHistogram",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare"]
    },
    {
      "id": "waterfall",
      "name": "Waterfall",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare"]
    },
    {
      "id": "histogramunit",
      "name": "Histogram",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare", "distribution"]
    },
    {
      "id": "basicbarchart",
      "name": "Bar Chart",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare", "percentage"]
    },
    {
      "id": "stackbarchart",
      "name": "Stacked\nBar Chart",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare", "percentage"]
    },
    {
      "id": "percentstackbarchart",
      "name": "Percent Stacked\nBar Chart",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare", "percentage"]
    },
    {
      "id": "groupbarchart",
      "name": "Grouped\nBar Chart",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare", "percentage"]
    },
    {
      "id": "intervalbarchart",
      "name": "Interval Bar Chart",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare", "percentage"]
    },
    {
      "id": "radiobarchart",
      "name": "Radio\nBar Chart",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare", "percentage"]
    },
    {
      "id": "symetricgroupbarchart",
      "name": "Symetric Grouped\nBar Chart",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare"]
    },
    {
      "id": "basicpiechart",
      "name": "Pie Chart",
      "level": 2,
      "isLeaf": true,
      "tags": ["percentage"]
    },
    {
      "id": "ringpiechart",
      "name": "Ring\nPie Chart",
      "level": 2,
      "isLeaf": true,
      "tags": ["percentage"]
    },
    {
      "id": "nestpiechart",
      "name": "Nested\nPie Chart",
      "level": 2,
      "isLeaf": true,
      "tags": ["percentage"]
    },
    {
      "id": "nightingalechart",
      "name": "Nightingale\nChart",
      "level": 2,
      "isLeaf": true,
      "tags": ["percentage"]
    },
    {
      "id": "scatterplotunit",
      "name": "Scatter\nPlot",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare", "distribution", "relation"]
    },
    {
      "id": "bubblescatterplot",
      "name": "Bubble\nChart",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare", "distribution", "relation"]
    },
    {
      "id": "circulararcdiagram",
      "name": "Circular\nArc Diagram",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation"]
    },
    {
      "id": "arcdiagram",
      "name": "Arc\nDiagram",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation"]
    },
    {
      "id": "chorddiagram",
      "name": "Chord\nDiagram",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation"]
    },
    {
      "id": "treemap",
      "name": "Treemap",
      "level": 2,
      "isLeaf": true,
      "tags": ["percentage", "compare", "relation"]
    },
    {
      "id": "sankey",
      "name": "Sankey",
      "level": 2,
      "isLeaf": true,
      "tags": ["flow", "trend", "relation"]
    },
    {
      "id": "basicfunnel",
      "name": "Funnel",
      "level": 2,
      "isLeaf": true,
      "tags": ["flow", "compare", "relation"]
    },
    {
      "id": "comparefunnel",
      "name": "Compared\nFunnel",
      "level": 2,
      "isLeaf": true,
      "tags": ["flow", "compare", "relation"]
    },
    {
      "id": "symetricfunnel",
      "name": "Symetric\nFunnel",
      "level": 2,
      "isLeaf": true,
      "tags": ["flow", "compare", "relation"]
    },
    {
      "id": "bubblemap",
      "name": "Bubble\nMap",
      "level": 2,
      "isLeaf": true,
      "tags": ["distribution", "compare"]
    },
    {
      "id": "binchart",
      "name": "Bin\nChart",
      "level": 2,
      "isLeaf": true,
      "tags": ["distribution", "compare"]
    },
    {
      "id": "colorblockheatmap",
      "name": "Color Block\nHeatmap",
      "level": 2,
      "isLeaf": true,
      "tags": ["distribution", "compare"]
    },
    {
      "id": "basicheatmap",
      "name": "Heatmap",
      "level": 2,
      "isLeaf": true,
      "tags": ["distribution", "compare"]
    },
    {
      "id": "instrument",
      "name": "Instrument",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare"]
    },
    {
      "id": "radar",
      "name": "Radar",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare"]
    },
    {
      "id": "stockklines",
      "name": "Stock\nKLines",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare", "trend"]
    },
    {
      "id": "wordcloud",
      "name": "Word\nCloud",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare"]
    },
    {
      "id": "candlestick",
      "name": "Candle\nStick",
      "level": 2,
      "isLeaf": true,
      "tags": ["trend"]
    },
    {
      "id": "compactBox",
      "name": "CompactBox",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation-hierarchy"],
      "imgSrc": "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*WGHWQYjLmXoAAAAAAAAAAABkARQnAQ",
      "links": [
        "/g6/zh/examples/tree/compactBox#tbCompactBox"
      ],
      "links_en": [
        "/g6/en/examples/tree/compactBox#tbCompactBox"
      ],
      "linkNames": ["G6"]
    },
    {
      "id": "dendrogram",
      "name": "Dendrogram",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation-hierarchy"],
      "imgSrc": "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*r51nTJ-Ha5MAAAAAAAAAAABkARQnAQ",
      "links": [
        "/g6/zh/examples/tree/dendrogram#tbDendrogram"
      ],
      "links_en": [
        "/g6/en/examples/tree/dendrogram#tbDendrogram"
      ],
      "linkNames": ["G6"]
    },
    {
      "id": "mindmap",
      "name": "Mindmap",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation-hierarchy"],
      "imgSrc": "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*VFXlT6A_g7wAAAAAAAAAAABkARQnAQ",
      "links": ["/g6/zh/examples/tree/mindmap"],
      "links_en": ["/g6/en/examples/tree/mindmap"],
      "linkNames": ["G6"]
    },
    {
      "id": "indented",
      "name": "Indeted",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation-hierarchy"],
      "imgSrc": "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ywVeSJIfeK8AAAAAAAAAAABkARQnAQ",
      "links": ["/g6/zh/examples/tree/indented"],
      "links_en": ["/g6/en/examples/tree/indented"],
      "linkNames": ["G6"]
    },
    {
      "id": "radialtree",
      "name": "Radial\nTree",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation-hierarchy"],
      "imgSrc": "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*vUkTSpv9YqkAAAAAAAAAAABkARQnAQ",
      "links": ["/g6/zh/examples/tree/radialtree"],
      "links_en": ["/g6/en/examples/tree/radialtree"],
      "linkNames": ["G6"]
    },
    {
      "id": "flowdiagram",
      "name": "Flow\nDiagram",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation"],
      "imgSrc": "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*35XETpuMRpsAAAAAAAAAAABkARQnAQ",
      "links": ["/g6/zh/examples/net/dagreFlow"],
      "links_en": ["/g6/en/examples/net/dagreFlow"],
      "linkNames": ["G6"]
    },
    {
      "id": "fruchtermancluster",
      "name": "Fruchterman\nClustering",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation-clustering"],
      "imgSrc": "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*8qAMTomesZcAAAAAAAAAAABkARQnAQ",
      "links": [
        "/g6/zh/examples/net/furchtermanLayout#fruchtermanClustering"
      ],
      "links_en": [
        "/g6/en/examples/net/furchtermanLayout#fruchtermanClustering"
      ],
      "linkNames": ["G6"]
    },
    {
      "id": "fruchterman",
      "name": "Fruchterman",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation"],
      "imgSrc": "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*XD22Q7uxddEAAAAAAAAAAABkARQnAQ",
      "links": [
        "/g6/zh/examples/net/furchtermanLayout"
      ],
      "links_en": [
        "/g6/en/examples/net/furchtermanLayout"
      ],
      "linkNames": ["G6"]
    },
    {
      "id": "forcedirected",
      "name": "Force\nDirected",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation"],
      "imgSrc": "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*dokGR7uP50oAAAAAAAAAAABkARQnAQ",
      "links": ["/g6/zh/examples/net/forceDirected"],
      "links_en": ["/g6/en/examples/net/forceDirected"],
      "linkNames": ["G6"]
    },
    {
      "id": "circular",
      "name": "Circular",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation"],
      "imgSrc": "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*2ZNjRqRzJggAAAAAAAAAAABkARQnAQ",
      "links": ["/g6/zh/examples/net/circular"],
      "links_en": ["/g6/en/examples/net/circular"],
      "linkNames": ["G6"]
    },
    {
      "id": "spiral",
      "name": "Spiral",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation"],
      "imgSrc": "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*5NkUTJyXfIcAAAAAAAAAAABkARQnAQ",
      "links": [
        "/g6/zh/examples/net/circular#spiralCircular"
      ],
      "links_en": [
        "/g6/en/examples/net/circular#spiralCircular"
      ],
      "linkNames": ["G6"]
    },
    {
      "id": "radial",
      "name": "Radial",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation"],
      "imgSrc": "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*KON0Rbv5XtEAAAAAAAAAAABkARQnAQ",
      "links": ["/g6/zh/examples/net/radialLayout"],
      "links_en": ["/g6/en/examples/net/radialLayout"],
      "linkNames": ["G6"]
    },
    {
      "id": "concentric",
      "name": "Concentric",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation"],
      "imgSrc": "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*zxlhRobv7VEAAAAAAAAAAABkARQnAQ",
      "links": ["/g6/zh/examples/net/concentricLayout"],
      "links_en": [
        "/g6/en/examples/net/concentricLayout"
      ],
      "linkNames": ["G6"]
    },
    {
      "id": "grid",
      "name": "Grid",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation"],
      "imgSrc": "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*wlkBRKmjVNgAAAAAAAAAAABkARQnAQ",
      "links": ["/g6/zh/examples/net/gridLayout"],
      "links_en": ["/g6/en/examples/net/gridLayout"],
      "linkNames": ["G6"]
    },
    {
      "id": "bubbles",
      "name": "Bubbles",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation", "compare"],
      "imgSrc": "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*EaIlRqda-VcAAAAAAAAAAABkARQnAQ",
      "links": [
        "/g6/zh/examples/net/forceDirected#forceBubbles"
      ],
      "links_en": [
        "/g6/en/examples/net/forceDirected#forceBubbles"
      ],
      "linkNames": ["G6"]
    },
    {
      "id": "dotmap",
      "name": "Dot Map",
      "level": 2,
      "isLeaf": true,
      "tags": ["distribution"]
    },

    {
      "id": "symbollayer",
      "name": "Symbol\nLayer",
      "level": 2,
      "isLeaf": true,
      "tags": ["distribution", "compare"]
    },
    {
      "id": "clustermap",
      "name": "Clustered\nMap",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation-clustering", "compare"]
    },
    {
      "id": "chartmap",
      "name": "Chart\nMap",
      "level": 2,
      "isLeaf": true,
      "tags": ["distribution", "compare", "composition"]
    },
    {
      "id": "columnmap",
      "name": "3D Column\nMap",
      "level": 2,
      "isLeaf": true,
      "tags": ["distribution", "compare"]
    },
    {
      "id": "scattermap",
      "name": "Scatter\nMap",
      "level": 2,
      "isLeaf": true,
      "tags": ["distribution"]
    },
    {
      "id": "pathmap",
      "name": "Path Map",
      "level": 2,
      "isLeaf": true,
      "tags": ["trend"]
    },
    {
      "id": "relationmap",
      "name": "Relation\nMap",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation"]
    },
    {
      "id": "arc3dmap",
      "name": "3D Arc Map",
      "level": 2,
      "isLeaf": true,
      "tags": ["relation"]
    },
    {
      "id": "choroplethmap",
      "name": "Chropleth\nMap",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare"]
    },
    {
      "id": "hexagonalheatmap",
      "name": "Hexagonal\nHeatmap",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare", "relation-clustering"]
    },
    {
      "id": "3dgridbinheatmap",
      "name": "3D Grid\nHeatmap",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare", "relation-clustering"]
    },
    {
      "id": "3dhexagonalheatmap",
      "name": "3D Hexagonal\nHeatmap",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare", "relation-clustering"]
    },
    {
      "id": "classicalheatmap",
      "name": "Classical\nHeatmap",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare", "relation-clustering"]
    },
    {
      "id": "gridbinheatmap",
      "name": "Grid Bin\nHeatmap",
      "level": 2,
      "isLeaf": true,
      "tags": ["compare", "relation-clustering"]
    }
  ],
  "edges": [
    {
      "source": "relation",
      "target": "hierarchy"
    },
    {
      "source": "relation",
      "target": "clustering"
    },
    {
      "source": "trend",
      "target": "basiclinechart"
    },
    {
      "source": "trend",
      "target": "multilinechart"
    },
    {
      "source": "compare",
      "target": "multilinechart"
    },
    {
      "source": "trend",
      "target": "basicareachart"
    },
    {
      "source": "trend",
      "target": "stackareachart"
    },
    {
      "source": "compare",
      "target": "stackareachart"
    },
    {
      "source": "percentage",
      "target": "stackareachart"
    },
    {
      "source": "trend",
      "target": "percentstackareachart"
    },
    {
      "source": "compare",
      "target": "percentstackareachart"
    },
    {
      "source": "percentage",
      "target": "percentstackareachart"
    },
    {
      "source": "trend",
      "target": "intervalareachart"
    },
    {
      "source": "compare",
      "target": "intervalareachart"
    },
    {
      "source": "trend",
      "target": "streamchart"
    },
    {
      "source": "compare",
      "target": "streamchart"
    },

    {
      "source": "compare",
      "target": "basichistogram"
    },
    {
      "source": "compare",
      "target": "grouphistogram"
    },
    {
      "source": "compare",
      "target": "stackhistogram"
    },
    {
      "source": "compare",
      "target": "percentstackhistogram"
    },
    {
      "source": "percentage",
      "target": "percentstackhistogram"
    },
    {
      "source": "compare",
      "target": "intervalhistogram"
    },
    {
      "source": "compare",
      "target": "waterfall"
    },
    {
      "source": "compare",
      "target": "histogramunit"
    },
    {
      "source": "distribution",
      "target": "histogramunit"
    },
    {
      "source": "compare",
      "target": "basicbarchart"
    },
    {
      "source": "percentage",
      "target": "basicbarchart"
    },
    {
      "source": "compare",
      "target": "stackbarchart"
    },
    {
      "source": "percentage",
      "target": "stackbarchart"
    },
    {
      "source": "compare",
      "target": "percentstackbarchart"
    },
    {
      "source": "percentage",
      "target": "percentstackbarchart"
    },
    {
      "source": "compare",
      "target": "groupbarchart"
    },
    {
      "source": "percentage",
      "target": "groupbarchart"
    },
    {
      "source": "compare",
      "target": "intervalbarchart"
    },
    {
      "source": "percentage",
      "target": "intervalbarchart"
    },
    {
      "source": "compare",
      "target": "radiobarchart"
    },
    {
      "source": "percentage",
      "target": "radiobarchart"
    },
    {
      "source": "compare",
      "target": "symetricgroupbarchart"
    },
    {
      "source": "percentage",
      "target": "basicpiechart"
    },
    {
      "source": "percentage",
      "target": "ringpiechart"
    },
    {
      "source": "percentage",
      "target": "nestpiechart"
    },
    {
      "source": "percentage",
      "target": "nightingalechart"
    },
    {
      "source": "comare",
      "target": "scatterplotunit"
    },
    {
      "source": "distribution",
      "target": "scatterplotunit"
    },
    {
      "source": "relation",
      "target": "scatterplotunit"
    },
    {
      "source": "comare",
      "target": "bubblescatterplot"
    },
    {
      "source": "distribution",
      "target": "bubblescatterplot"
    },
    {
      "source": "relation",
      "target": "bubblescatterplot"
    },
    {
      "source": "relation",
      "target": "circulararcdiagram"
    },
    {
      "source": "relation",
      "target": "arcdiagram"
    },
    {
      "source": "relation",
      "target": "chorddiagram"
    },
    {
      "source": "compare",
      "target": "treemap"
    },
    {
      "source": "relation",
      "target": "treemap"
    },
    {
      "source": "percentage",
      "target": "treemap"
    },
    {
      "source": "flow",
      "target": "sankey"
    },
    {
      "source": "relation",
      "target": "sankey"
    },
    {
      "source": "trend",
      "target": "sankey"
    },
    {
      "source": "flow",
      "target": "basicfunnel"
    },
    {
      "source": "compare",
      "target": "basicfunnel"
    },
    {
      "source": "relation",
      "target": "basicfunnel"
    },
    {
      "source": "flow",
      "target": "comparefunnel"
    },
    {
      "source": "compare",
      "target": "comparefunnel"
    },
    {
      "source": "relation",
      "target": "comparefunnel"
    },
    {
      "source": "flow",
      "target": "symetricfunnel"
    },
    {
      "source": "compare",
      "target": "symetricfunnel"
    },
    {
      "source": "relation",
      "target": "symetricfunnel"
    },
    {
      "source": "compare",
      "target": "bubblemap"
    },
    {
      "source": "distribution",
      "target": "bubblemap"
    },
    {
      "source": "compare",
      "target": "binchart"
    },
    {
      "source": "distribution",
      "target": "binchart"
    },
    {
      "source": "compare",
      "target": "colorblockheatmap"
    },
    {
      "source": "distribution",
      "target": "colorblockheatmap"
    },
    {
      "source": "compare",
      "target": "basicheatmap"
    },
    {
      "source": "distribution",
      "target": "basicheatmap"
    },
    {
      "source": "compare",
      "target": "instrument"
    },
    {
      "source": "compare",
      "target": "radar"
    },
    {
      "source": "trend",
      "target": "stockklines"
    },
    {
      "source": "compare",
      "target": "stockklines"
    },
    {
      "source": "compare",
      "target": "wordcloud"
    },
    {
      "source": "trend",
      "target": "candlestick"
    },
    {
      "source": "hierarchy",
      "target": "compactBox"
    },
    {
      "source": "hierarchy",
      "target": "dendrogram"
    },
    {
      "source": "hierarchy",
      "target": "mindmap"
    },
    {
      "source": "hierarchy",
      "target": "indented"
    },
    {
      "source": "hierarchy",
      "target": "radialtree"
    },
    {
      "source": "relation",
      "target": "flowdiagram"
    },
    {
      "source": "clustering",
      "target": "fruchtermancluster"
    },
    {
      "source": "relation",
      "target": "fruchterman"
    },
    {
      "source": "relation",
      "target": "forcedirected"
    },
    {
      "source": "relation",
      "target": "circular"
    },

    {
      "source": "relation",
      "target": "spiral"
    },
    {
      "source": "relation",
      "target": "radial"
    },
    {
      "source": "relation",
      "target": "concentric"
    },
    {
      "source": "distribution",
      "target": "concentric"
    },
    {
      "source": "distribution",
      "target": "grid"
    },
    {
      "source": "relation",
      "target": "grid"
    },
    {
      "source": "relation",
      "target": "bubbles"
    },
    {
      "source": "compare",
      "target": "bubbles"
    },
    {
      "source": "distribution",
      "target": "dotmap"
    },
    {
      "source": "distribution",
      "target": "symbollayer"
    },
    {
      "source": "compare",
      "target": "symbollayer"
    },
    {
      "source": "clustering",
      "target": "clustermap"
    },
    {
      "source": "compare",
      "target": "clustermap"
    },
    {
      "source": "compare",
      "target": "chartmap"
    },
    {
      "source": "composition",
      "target": "chartmap"
    },
    {
      "source": "distribution",
      "target": "chartmap"
    },
    {
      "source": "distribution",
      "target": "columnmap"
    },
    {
      "source": "compare",
      "target": "columnmap"
    },
    {
      "source": "distribution",
      "target": "scattermap"
    },
    {
      "source": "trend",
      "target": "pathmap"
    },
    {
      "source": "relation",
      "target": "relationmap"
    },
    {
      "source": "relation",
      "target": "arc3dmap"
    },
    {
      "source": "compare",
      "target": "choroplethmap"
    },
    {
      "source": "compare",
      "target": "hexagonalheatmap"
    },
    {
      "source": "clustering",
      "target": "hexagonalheatmap"
    },
    {
      "source": "compare",
      "target": "3dgridbinheatmap"
    },
    {
      "source": "clustering",
      "target": "3dgridbinheatmap"
    },
    {
      "source": "compare",
      "target": "3dhexagonalheatmap"
    },
    {
      "source": "clustering",
      "target": "3dhexagonalheatmap"
    },
    {
      "source": "compare",
      "target": "classicalheatmap"
    },
    {
      "source": "clustering",
      "target": "classicalheatmap"
    },
    {
      "source": "compare",
      "target": "gridbinheatmap"
    },
    {
      "source": "clustering",
      "target": "gridbinheatmap"
    }
  ]
}
/**
 * by Shiwu
 */
let showNodes = [];
let showEdges = [];
let curShowNodes = [];
let curShowEdges = [];
let nodes = [];
let edges = [];
let nodeMap = new Map();
let edgesMap = new Map();
let curShowNodesMap = new Map();
let highlighting = false;
let currentFocus;
const width = document.getElementById('container').scrollWidth;
const height = document.getElementById('container').scrollHeight || 500;

const LIMIT_OVERFLOW_WIDTH = width;
const LIMIT_OVERFLOW_HEIGHT = height;

const mapNodeSize = (nodes, propertyName, visualRange) => {
  let minp = 9999999999;
  let maxp = -9999999999;
  nodes.forEach((node) => {
    minp = node[propertyName] < minp ? node[propertyName] : minp;
    maxp = node[propertyName] > maxp ? node[propertyName] : maxp;
  });
  const rangepLength = maxp - minp;
  const rangevLength = visualRange[1] - visualRange[0];
  nodes.forEach((node) => {
    node.size = ((node[propertyName] - minp) / rangepLength) * rangevLength + visualRange[0];
  });
};

const lightColors = [
  '#8FE9FF',
  '#87EAEF',
  '#FFC9E3',
  '#A7C2FF',
  '#FFA1E3',
  '#FFE269',
  '#BFCFEE',
  '#FFA0C5',
  '#D5FF86',
];
const darkColors = [
  '#7DA8FF',
  '#44E6C1',
  '#FF68A7',
  '#7F86FF',
  '#AE6CFF',
  '#FF5A34',
  '#5D7092',
  '#FF6565',
  '#6BFFDE',
];
const uLightColors = [
  '#CFF6FF',
  '#BCFCFF',
  '#FFECF5',
  '#ECFBFF',
  '#EAD9FF',
  '#FFF8DA',
  '#DCE2EE',
  '#FFE7F0',
  '#EEFFCE',
];
const uDarkColors = [
  '#CADBFF',
  '#A9FFEB',
  '#FFC4DD',
  '#CACDFF',
  '#FFD4F2',
  '#FFD3C9',
  '#EBF2FF',
  '#FFCBCB',
  '#CAFFF3',
];

const gColors = [];
const unlightColorMap = new Map();
lightColors.forEach((lcolor, i) => {
  gColors.push('l(0) 0:' + lcolor + ' 1:' + darkColors[i]);
  unlightColorMap.set(gColors[i], 'l(0) 0:' + uLightColors[i] + ' 1:' + uDarkColors[i]);
});

let graph;
const layoutCfg = {
  type: 'force',
  nodeSize: (d) => {
    return d.size / 2 + 5;
  },
  nodeStrength: 2500,
  collideStrength: 0.8,
  alphaDecay: 0.01,
  preventOverlap: true,
  onTick: () => {
    const nodeItems = graph.getNodes();
    const height = graph.get('height');
    const width = graph.get('width');
    const padding = 10;
    nodeItems.forEach((item) => {
      const model = item.getModel();
      if (model.x > width - padding) model.x = width - padding;
      else if (model.x < padding) model.x = padding;

      if (model.y > height - padding) model.y = height - padding;
      else if (model.y < padding) model.y = padding;
    });
  },
};

G6.registerBehavior('double-finger-drag-canvas', {
  getEvents: function getEvents() {
    return {
      wheel: 'onWheel',
    };
  },

  onWheel: (ev) => {
    if (ev.ctrlKey) {
      const canvas = graph.get('canvas');
      const point = canvas.getPointByClient(ev.clientX, ev.clientY);
      let ratio = graph.getZoom();
      if (ev.wheelDelta > 0) {
        ratio = ratio + ratio * 0.05;
      } else {
        ratio = ratio - ratio * 0.05;
      }
      graph.zoomTo(ratio, {
        x: point.x,
        y: point.y,
      });
    } else {
      const x = ev.deltaX || ev.movementX;
      const y = ev.deltaY || ev.movementY || (-ev.wheelDelta * 125) / 3;
      translate(x, y);
    }
    ev.preventDefault();
  },
});

G6.registerNode(
  'bubble',
  {
    drawShape(cfg, group) {
      const self = this;
      const r = cfg.size / 2;
      // a circle by path
      const path = [
        ['M', -r, 0],
        ['C', -r, r / 2, -r / 2, r, 0, r],
        ['C', r / 2, r, r, r / 2, r, 0],
        ['C', r, -r / 2, r / 2, -r, 0, -r],
        ['C', -r / 2, -r, -r, -r / 2, -r, 0],
        ['Z'],
      ];
      const keyShape = group.addShape('path', {
        attrs: {
          x: 0,
          y: 0,
          path,
          fill: cfg.color || 'steelblue',
        },
        name: 'path-shape',
      });

      const mask = group.addShape('path', {
        attrs: {
          x: 0,
          y: 0,
          path,
          opacity: 0.25,
          fill: cfg.color || 'steelblue',
          shadowColor: cfg.color.split(' ')[2].substr(2),
          shadowBlur: 40,
          shadowOffsetX: 0,
          shadowOffsetY: 30,
        },
        name: 'mask-shape',
      });

      const spNum = 10; // split points number
      const directions = [],
        rs = [];
      self.changeDirections(spNum, directions);
      for (let i = 0; i < spNum; i++) {
        const rr = r + directions[i] * ((Math.random() * r) / 1000); // +-r/6, the sign according to the directions
        if (rs[i] < 0.97 * r) rs[i] = 0.97 * r;
        else if (rs[i] > 1.03 * r) rs[i] = 1.03 * r;
        rs.push(rr);
      }
      keyShape.animate(
        () => {
          const path = self.getBubblePath(r, spNum, directions, rs);
          return { path };
        },
        {
          repeat: true,
          duration: 10000,
        },
      );

      const directions2 = [],
        rs2 = [];
      self.changeDirections(spNum, directions2);
      for (let i = 0; i < spNum; i++) {
        const rr = r + directions2[i] * ((Math.random() * r) / 1000); // +-r/6, the sign according to the directions
        if (rs2[i] < 0.97 * r) rs2[i] = 0.97 * r;
        else if (rs2[i] > 1.03 * r) rs2[i] = 1.03 * r;
        rs2.push(rr);
      }
      mask.animate(
        () => {
          const path = self.getBubblePath(r, spNum, directions2, rs2);
          return { path };
        },
        {
          repeat: true,
          duration: 10000,
        },
      );
      return keyShape;
    },
    changeDirections(num, directions) {
      for (let i = 0; i < num; i++) {
        if (!directions[i]) {
          const rand = Math.random();
          const dire = rand > 0.5 ? 1 : -1;
          directions.push(dire);
        } else {
          directions[i] = -1 * directions[i];
        }
      }
      return directions;
    },
    getBubblePath(r, spNum, directions, rs) {
      const path = [];
      const cpNum = spNum * 2; // control points number
      const unitAngle = (Math.PI * 2) / spNum; // base angle for split points
      let angleSum = 0;
      const sps = [];
      const cps = [];
      for (let i = 0; i < spNum; i++) {
        const speed = 0.001 * Math.random();
        rs[i] = rs[i] + directions[i] * speed * r; // +-r/6, the sign according to the directions
        if (rs[i] < 0.97 * r) {
          rs[i] = 0.97 * r;
          directions[i] = -1 * directions[i];
        } else if (rs[i] > 1.03 * r) {
          rs[i] = 1.03 * r;
          directions[i] = -1 * directions[i];
        }
        const spX = rs[i] * Math.cos(angleSum);
        const spY = rs[i] * Math.sin(angleSum);
        sps.push({ x: spX, y: spY });
        for (let j = 0; j < 2; j++) {
          const cpAngleRand = unitAngle / 3;
          const cpR = rs[i] / Math.cos(cpAngleRand);
          const sign = j === 0 ? -1 : 1;
          const x = cpR * Math.cos(angleSum + sign * cpAngleRand);
          const y = cpR * Math.sin(angleSum + sign * cpAngleRand);
          cps.push({ x, y });
        }
        angleSum += unitAngle;
      }
      path.push(['M', sps[0].x, sps[0].y]);
      for (let i = 1; i < spNum; i++) {
        path.push([
          'C',
          cps[2 * i - 1].x,
          cps[2 * i - 1].y,
          cps[2 * i].x,
          cps[2 * i].y,
          sps[i].x,
          sps[i].y,
        ]);
      }
      path.push(['C', cps[cpNum - 1].x, cps[cpNum - 1].y, cps[0].x, cps[0].y, sps[0].x, sps[0].y]);
      path.push(['Z']);
      return path;
    },
    setState(name, value, item) {
      const shape = item.get('keyShape');
      if (name === 'dark') {
        if (value) {
          if (shape.attr('fill') !== '#fff') {
            shape.oriFill = shape.attr('fill');
            const uColor = unlightColorMap.get(shape.attr('fill'));
            shape.attr('fill', uColor);
          } else {
            shape.attr('opacity', 0.2);
          }
        } else {
          if (shape.attr('fill') !== '#fff') {
            shape.attr('fill', shape.oriFill || shape.attr('fill'));
          } else {
            shape.attr('opacity', 1);
          }
        }
      }
    },
  },
  'single-node',
);

G6.registerNode(
  'animate-circle',
  {
    setState(name, value, item) {
      const shape = item.get('keyShape');
      const label = shape.get('parent').get('children')[1];
      if (name === 'disappearing' && value) {
        shape.animate(
          (ratio) => {
            return {
              opacity: 1 - ratio,
              r: shape.attr('r') * (1 - ratio),
            };
          },
          {
            duration: 200,
          },
        );
        label.animate(
          (ratio) => {
            return {
              opacity: 1 - ratio,
            };
          },
          {
            duration: 500,
          },
        );
      } else if (name === 'appearing' && value) {
        const r = item.getModel().size / 2;
        shape.animate(
          (ratio) => {
            return {
              opacity: ratio,
              r: r * ratio,
              fill: shape.attr('fill'),
            };
          },
          {
            duration: 300,
          },
        );
        label.animate(
          {
            onFrame(ratio) {
              return {
                opacity: ratio,
              };
            },
          },
          {
            duration: 300,
          },
        );
      } else if (name === 'dark') {
        if (value) {
          if (shape.attr('fill') !== '#fff') {
            shape.oriFill = shape.attr('fill');
            const uColor = unlightColorMap.get(shape.attr('fill'));
            shape.attr('fill', uColor);
          } else {
            shape.attr('opacity', 0.2);
            label.attr('fill', '#A3B1BF');
          }
        } else {
          if (shape.attr('fill') !== '#fff') {
            shape.attr('fill', shape.oriFill || shape.attr('fill'));
          } else {
            shape.attr('opacity', 1);
            label.attr('fill', '#697B8C');
          }
        }
      }
    },
  },
  'circle',
);

G6.registerEdge(
  'animate-line',
  {
    drawShape(cfg, group) {
      const self = this;
      let shapeStyle = self.getShapeStyle(cfg);
      shapeStyle = Object.assign(shapeStyle, {
        opacity: 0,
        strokeOpacity: 0,
      });
      const keyShape = group.addShape('path', {
        attrs: shapeStyle,
        name: 'path-shape',
      });
      return keyShape;
    },
    afterDraw(cfg, group) {
      const shape = group.get('children')[0];
      shape.animate(
        (ratio) => {
          const opacity = ratio * cfg.style.opacity;
          const strokeOpacity = ratio * cfg.style.strokeOpacity;
          return {
            opacity: ratio || opacity,
            strokeOpacity: ratio || strokeOpacity,
          };
        },
        {
          duration: 300,
        },
      );
    },
    setState(name, value, item) {
      const shape = item.get('keyShape');
      if (name === 'disappearing' && value) {
        shape.animate(
          (ratio) => {
            return {
              opacity: 1 - ratio,
              strokeOpacity: 1 - ratio,
            };
          },
          {
            duration: 200,
          },
        );
      } else if (name === 'dark') {
        if (value) shape.attr('opacity', 0.2);
        else shape.attr('opacity', 1);
      }
    },
  },
  'line',
);

graph = new G6.Graph({
  container: 'container',
  width,
  height,
  linkCenter: true,
  layout: layoutCfg,
  modes: {
    default: ['drag-canvas'],
  },
  defaultNode: {
    type: 'bubble',
    size: 95,
    labelCfg: {
      position: 'center',
      style: {
        fill: 'white',
        fontStyle: 'bold',
      },
    },
  },
  defaultEdge: {
    color: '#888',
    type: 'animate-line', //'animate-line'
  },
});
graph.get('canvas').set('localRefresh', false);

function translate(x, y) {
  let moveX = x;
  let moveY = y;

  /* 获得当前偏移量*/
  const group = graph.get('group');
  const bbox = group.getBBox();
  const leftTopPoint = graph.getCanvasByPoint(bbox.minX, bbox.minY);
  const rightBottomPoint = graph.getCanvasByPoint(bbox.maxX, bbox.maxY);
  /* 如果 x 轴在区域内，不允许左右超过100 */
  if (x < 0 && leftTopPoint.x - x > LIMIT_OVERFLOW_WIDTH) {
    moveX = 0;
  }
  if (x > 0 && rightBottomPoint.x - x < width - LIMIT_OVERFLOW_WIDTH) {
    moveX = 0;
  }

  if (y < 0 && leftTopPoint.y - y > LIMIT_OVERFLOW_HEIGHT) {
    moveY = 0;
  }
  if (y > 0 && rightBottomPoint.y - y < height - LIMIT_OVERFLOW_HEIGHT) {
    moveY = 0;
  }
  graph.translate(-moveX, -moveY);
}

function refreshDragedNodePosition(e) {
  const model = e.item.get('model');
  model.fx = e.x;
  model.fy = e.y;
}
graph.on('node:dragstart', (e) => {
  graph.layout();
  refreshDragedNodePosition(e);
});
graph.on('node:drag', (e) => {
  refreshDragedNodePosition(e);
});
graph.on('node:dragend', (e) => {
  e.item.get('model').fx = null;
  e.item.get('model').fy = null;
});

const loadData = (data) => {
  const layoutController = graph.get('layoutController');
  layoutController.layoutCfg.nodeStrength = 2500;
  layoutController.layoutCfg.collideStrength = 0.8;
  layoutController.layoutCfg.alphaDecay = 0.01;
  nodes = data.nodes;
  edges = data.edges;

  showNodes = [];
  showEdges = [];
  nodeMap = new Map();
  edgesMap = new Map();
  // find the roots
  nodes.forEach((node) => {
    if (node.level === 0) {
      node.color = gColors[showNodes.length % gColors.length];
      node.style = {
        fill: gColors[showNodes.length % gColors.length],
        lineWidth: 0,
      };
      node.labelCfg = {
        style: {
          fontSize: 25,
          fill: '#fff',
          fontWeight: 300,
        },
      };
      node.x = Math.random() * 800;
      node.y = Math.random() * 800;
      showNodes.push(node);
    }
    if (!node.isLeaf) {
      const num = node.childrenNum ? `\n(${node.childrenNum})` : '';
      node.label = `${node.name}${num}`;
    } else {
      node.label = node.name;
    }
    nodeMap.set(node.id, node);
  });

  mapNodeSize(showNodes, 'childrenNum', [120, 180]);

  // map the color to F nodes, same to its parent
  nodes.forEach((node) => {
    if (node.level !== 0 && !node.isLeaf) {
      const parent = nodeMap.get(node.tags[0]);
      node.color = parent.color;
      node.style = {
        fill: parent.color,
      };
    }
  });
  edges.forEach((edge) => {
    // map the id
    edge.id = `${edge.source}-${edge.target}`;
    edge.style = {
      lineWidth: 0.5,
      opacity: 1,
      strokeOpacity: 1,
    };
    edgesMap.set(edge.id, edge);
  });
  graph.data({
    nodes: showNodes,
    edges: showEdges,
  });
  graph.render();
};

graph.on('node:mouseenter', (e) => {
  const item = e.item;
  const model = item.getModel();
  if (model.level === 0) {
    return;
  }
  highlighting = true;
  graph.setAutoPaint(false);
  const nodeItems = graph.getNodes();
  const edgeItems = graph.getEdges();
  nodeItems.forEach((node) => {
    graph.setItemState(node, 'dark', true);
    node.getModel().light = false;
  });
  graph.setItemState(item, 'dark', false);
  model.light = true;
  const tags = model.tags;
  const findTagsMap = new Map();
  let mid = 0;

  let fTag = '';
  // if the model is F node, find the leaves of it
  if (!model.isLeaf && model.level !== 0) {
    fTag = model.tag;
    nodeItems.forEach((item) => {
      const itemModel = item.getModel();
      if (!itemModel.isLeaf) return;
      const modelTags = itemModel.tags;
      modelTags.forEach((mt) => {
        const mts = mt.split('-');
        if (mts[1] === fTag) {
          graph.setItemState(item, 'dark', false);
          itemModel.light = true;
        }
      });
    });
  }

  // find the tags
  tags.forEach((t) => {
    const ts = t.split('-');
    findTagsMap.set(ts[0], mid);
    mid++;
    if (ts[1]) {
      findTagsMap.set(ts[1], mid);
      mid++;
    }
  });
  // find the nodes with tag === tags[?]
  nodeItems.forEach((item) => {
    const node = item.getModel();
    if (findTagsMap.get(node.tag) !== undefined) {
      graph.setItemState(item, 'dark', false);
      node.light = true;
    }
  });
  edgeItems.forEach((item) => {
    const source = item.getSource().getModel();
    const target = item.getTarget().getModel();
    if (source.light && target.light) {
      graph.setItemState(item, 'dark', false);
    } else {
      graph.setItemState(item, 'dark', true);
    }
  });
  graph.paint();
  graph.setAutoPaint(true);
});

graph.on('node:mouseleave', () => {
  if (highlighting) {
    const nodeItems = graph.getNodes();
    const edgeItems = graph.getEdges();
    highlighting = false;
    nodeItems.forEach((item) => {
      graph.setItemState(item, 'dark', false);
    });
    edgeItems.forEach((item) => {
      graph.setItemState(item, 'dark', false);
    });
  }
});

fetch('https://gw.alipayobjects.com/os/bmw-prod/fc6e64fc-be94-40fb-b9e2-2d13dd414f38.json')
  .then((res) => res.json())
  .then((data) => {
    loadData(data);
  });

// click root to expand
graph.on('node:click', (e) => {
  curShowNodes = [];
  curShowEdges = [];
  const item = e.item;
  const model = item.getModel();
  if (!model.isLeaf && model.level !== 0) {
    return;
  }
  // if clicked a root, hide unrelated items and show the related items
  if (model.level === 0) {
    const layoutController = graph.get('layoutController');
    const forceLayout = layoutController.layoutMethods[0];
    forceLayout.forceSimulation.stop();
    // light the level 0 nodes
    showNodes.forEach((snode) => {
      const item = graph.findById(snode.id);
      graph.setItemState(item, 'dark', false);
      if (snode.x < 0.5 * width) {
        snode.x = 300;
      } else {
        snode.x = width - 300;
      }
    });
    model.x = width / 2;
    model.y = height / 2;
    // animatively hide the items which are going to disappear
    if (curShowEdges.length) {
      curShowEdges.forEach((csedge) => {
        const item = graph.findById(csedge.id);
        item && graph.setItemState(item, 'disappearing', true);
      });
    }
    curShowNodes.forEach((csnode) => {
      const item = graph.findById(csnode.id);
      item && graph.setItemState(item, 'disappearing', true);
    });
    graph.positionsAnimate();

    // reset curShowNodes nad curShowEdges
    curShowNodes = [];
    curShowEdges = [];

    // click on the same node which is the current focus node, hide the small nodes, change the layout parameters to roots view
    if (currentFocus && currentFocus.id === model.id) {
      currentFocus = undefined;
      layoutController.layoutCfg.nodeStrength = 2500;
      layoutController.layoutCfg.collideStrength = 0.8;
      layoutController.layoutCfg.alphaDecay = 0.01;
    } else {
      // click other focus node, hide the current small nodes and show the related nodes
      currentFocus = model;
      // change data after the original items disappearing
      const layoutController = graph.get('layoutController');
      layoutController.layoutCfg.nodeStrength = () => {
        return -80;
      };
      layoutController.layoutCfg.collideStrength = 0.2;
      layoutController.layoutCfg.linkDistance = (d) => {
        if (d.source.level !== 0) return 120;
        const length = 250;
        return length;
      };
      layoutController.layoutCfg.edgeStrength = () => {
        return 2;
      };

      const tag = model.tag;
      const findTags = [];
      curShowNodesMap = new Map();
      // find the nodes which are the descendants of clicked model
      nodes.forEach((node) => {
        if (!node.tags) return;
        const tags = node.tags;
        const tlength = tags.length;
        let isChild = false;
        const parents = [];
        for (let i = 0; i < tlength; i++) {
          const ts = tags[i].split('-');
          if (ts[0] === tag) {
            isChild = true;
          }
          parents.push(nodeMap.get(ts[0]));
        }
        if (isChild) {
          const randomAngle = Math.random() * 2 * Math.PI;
          node.x = model.x + (Math.cos(randomAngle) * model.size) / 2 + 10;
          node.y = model.y + (Math.sin(randomAngle) * model.size) / 2 + 10;
          // const dist = (model.x - node.x) * (model.x - node.x) + (model.y - node.y) * (model.y - node.y);

          if (!node.style) node.style = {};
          node.style.lineWidth = 0;
          node.style.opacity = 1;
          if (node.isLeaf) {
            node.type = 'animate-circle';
            let color = 'l(0)';
            const parentsNum = parents.length;
            parents.forEach((parent, i) => {
              const parentColor = parent.color.split(' ')[1].substr(2);
              color += ` ${i / (parentsNum - 1)}:${parentColor}`;
            });
            if (parentsNum === 1) {
              color = model.color.split(' ')[1].substr(2);
            }
            node.color = color;
            node.style.fill = color;
            node.style.fill = '#fff';
            node.style.lineWidth = 1;
            node.size = 60;
            node.labelCfg = {
              style: {
                fontSize: 11,
                lineHeight: 19,
                fill: '#697B8C',
              },
              position: 'center',
            };
          } else if (node.level !== 0) {
            node.type = 'circle'; // 'bubble';
            node.size = 95;
            if (!node.style) node.style = {};
            node.color = model.color;
            node.style.fill = model.color;
            node.labelCfg = {
              style: {
                fill: '#fff',
                fontSize: 14,
              },
              position: 'center',
            };
          }
          curShowNodes.push(node);
          curShowNodesMap.set(node.id, node);

          // add the edge connect from model to node which exists in edges
          const edgeId = `${model.id}-${node.id}`;
          const edge = edgesMap.get(edgeId);
          if (edge) {
            edge.color = model.color;
            curShowEdges.push(edge);
          }
          tags.forEach((t) => {
            const ts = t.split('-');
            if (ts[0] !== tag) {
              findTags.push(ts[0]);
            }
            if (ts[1]) {
              findTags.push(ts[1]);
            }
          });
        }
      });

      // find the nodes which are the ancestors of the current curShowNodes
      nodes.forEach((node) => {
        const findTagsLength = findTags.length;
        for (let i = 0; i < findTagsLength; i++) {
          if (node.tag === findTags[i] && curShowNodesMap.get(node.id) === undefined) {
            curShowNodes.push(node);
            curShowNodesMap.set(node.id, node);
            return;
          }
        }
      });

      // find the edges whose target end source are in the curShowNodes
      curShowNodes.forEach((nu, i) => {
        const lu = nu.level;
        curShowNodes.forEach((nv, j) => {
          if (j <= i) return;
          const lv = nv.level;
          let edgeId;
          if (lu < lv) {
            edgeId = `${nu.id}-${nv.id}`;
          } else {
            edgeId = `${nv.id}-${nu.id}`;
          }
          let color = model.color;
          if (nu.isLeaf) {
            if (nv.level === 0 && nv.tag !== model.tag) color = '#DFE5EB';
            else if (!nv.isLeaf && nv.tags[0] !== model.tag) {
              color = '#DFE5EB';
            }
          } else if (nv.isLeaf) {
            if (nu.level === 0 && nu.tag !== model.tag) color = '#DFE5EB';
            else if (!nu.isLeaf && nu.tags[0] !== model.tag) {
              color = '#DFE5EB';
            }
          }
          const edge = edgesMap.get(edgeId);
          if (edge) {
            edge.color = color;
            curShowEdges.push(edge);
          }
        });
      });
    }
    setTimeout(() => {
      graph.changeData({
        nodes: showNodes.concat(curShowNodes),
        edges: showEdges.concat(curShowEdges),
      });
      const nodeItems = graph.getNodes();
      const edgeItems = graph.getEdges();
      edgeItems.forEach((item) => {
        graph.clearItemStates(item);
      });
      nodeItems.forEach((item) => {
        graph.clearItemStates(item);
        graph.setItemState(item, 'appearing', true);
      });
    }, 400);
  }
});
graph.on('canvas:click', () => {
  currentFocus = undefined;
  const forceLayout = graph.get('layoutController').layoutMethods[0];
  forceLayout.forceSimulation.stop();
  const nodeItems = graph.getNodes();
  const edgeItems = graph.getEdges();
  if (highlighting) {
    highlighting = false;
    nodeItems.forEach((item) => {
      graph.setItemState(item, 'dark', false);
    });
    edgeItems.forEach((item) => {
      graph.setItemState(item, 'dark', false);
    });
  } else {
    nodeItems.forEach((item) => {
      const model = item.getModel();
      if (model.level === 0) {
        graph.setItemState(item, 'dark', false);
      } else {
        graph.setItemState(item, 'disappearing', true);
      }
    });
    edgeItems.forEach((item) => {
      graph.setItemState(item, 'disappearing', true);
    });
    curShowNodes = [];
    curShowEdges = [];
    setTimeout(() => {
      const layoutController = graph.get('layoutController');
      layoutController.layoutCfg.nodeStrength = 2500;
      layoutController.layoutCfg.collideStrength = 0.8;
      layoutController.layoutCfg.alphaDecay = 0.01;

      graph.changeData({
        nodes: showNodes,
        edges: showEdges,
      });
    }, 400);
  }
});

if (typeof window !== 'undefined')
  window.onresize = () => {
    if (!graph || graph.get('destroyed')) return;
    if (!container || !container.scrollWidth || !container.scrollHeight) return;
    graph.changeSize(container.scrollWidth, container.scrollHeight);
  };


// 
// 
// Vue example (better animation of movement)
// 
// 

<template>
  <div class="hello">
    <div id="container" style="width: 500px; height: 500px"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
export default {
  name: "HelloWorld",
  // props: {
  //   msg: String,
  // },
  mounted() {
    this.initG6();
  },
  methods: {
    initG6() {
      let data = {
        nodes: [
          {
            id: "trend",
            name: "Trend",
            level: 0,
            childrenNum: 11,
            tag: "trend",
          },
          {
            id: "compare",
            name: "Compare",
            level: 0,
            childrenNum: 33,
            tag: "compare",
          },
          {
            id: "percentage",
            name: "Percentage",
            level: 0,
            childrenNum: 14,
            tag: "percentage",
          },
          {
            id: "flow",
            name: "Flow",
            level: 0,
            childrenNum: 4,
            tag: "flow",
          },
          {
            id: "distribution",
            name: "Distribution",
            level: 0,
            tag: "distribution",
            childrenNum: 12,
          },
          {
            id: "relation",
            name: "Relation",
            level: 0,
            tag: "relation",
            childrenNum: 34,
          },
          {
            id: "composition",
            name: "Composition",
            level: 0,
            childrenNum: 1,
            tag: "composition",
          },
          {
            id: "clustering",
            name: "Clustering",
            level: 1,
            childrenNum: 7,
            tag: "clustering",
            isLeaf: false,
            tags: ["relation"],
          },
          {
            id: "hierarchy",
            name: "Hierarchy",
            level: 1,
            childrenNum: 5,
            tag: "hierarchy",
            isLeaf: false,
            tags: ["relation"],
          },
          {
            id: "basiclinechart",
            name: "Line\nChart",
            level: 2,
            isLeaf: true,
            tags: ["trend"],
          },
          {
            id: "multilinechart",
            name: "Multi-line\nChart",
            level: 2,
            isLeaf: true,
            tags: ["trend", "compare"],
          },
          {
            id: "basicareachart",
            name: "Area\nChart",
            level: 2,
            isLeaf: true,
            tags: ["trend"],
          },
          {
            id: "stackareachart",
            name: "Stacked\nArea Chart",
            level: 2,
            isLeaf: true,
            tags: ["trend", "compare", "percentage"],
          },
          {
            id: "percentstackareachart",
            name: "% Stacked\nArea Chart",
            level: 2,
            isLeaf: true,
            tags: ["trend", "compare", "percentage"],
          },
          {
            id: "intervalareachart",
            name: "Interval\nArea Chart",
            level: 2,
            isLeaf: true,
            tags: ["trend", "compare"],
          },
          {
            id: "streamchart",
            name: "Stream Chart",
            level: 2,
            isLeaf: true,
            tags: ["trend", "compare"],
          },
          {
            id: "basichistogram",
            name: "Histogram",
            level: 2,
            isLeaf: true,
            tags: ["compare"],
          },
          {
            id: "grouphistogram",
            name: "Grouped\nHistogram",
            level: 2,
            isLeaf: true,
            tags: ["compare"],
          },
          {
            id: "stackhistogram",
            name: "Stacked\nHistogram",
            level: 2,
            isLeaf: true,
            tags: ["compare"],
          },
          {
            id: "percentstackhistogram",
            name: "% Stacked\nHistogram",
            level: 2,
            isLeaf: true,
            tags: ["compare", "percentage"],
          },
          {
            id: "intervalhistogram",
            name: "Interval\nHistogram",
            level: 2,
            isLeaf: true,
            tags: ["compare"],
          },
          {
            id: "waterfall",
            name: "Waterfall",
            level: 2,
            isLeaf: true,
            tags: ["compare"],
          },
          {
            id: "histogramunit",
            name: "Histogram",
            level: 2,
            isLeaf: true,
            tags: ["compare", "distribution"],
          },
          {
            id: "basicbarchart",
            name: "Bar Chart",
            level: 2,
            isLeaf: true,
            tags: ["compare", "percentage"],
          },
          {
            id: "stackbarchart",
            name: "Stacked\nBar Chart",
            level: 2,
            isLeaf: true,
            tags: ["compare", "percentage"],
          },
          {
            id: "percentstackbarchart",
            name: "Percent Stacked\nBar Chart",
            level: 2,
            isLeaf: true,
            tags: ["compare", "percentage"],
          },
          {
            id: "groupbarchart",
            name: "Grouped\nBar Chart",
            level: 2,
            isLeaf: true,
            tags: ["compare", "percentage"],
          },
          {
            id: "intervalbarchart",
            name: "Interval Bar Chart",
            level: 2,
            isLeaf: true,
            tags: ["compare", "percentage"],
          },
          {
            id: "radiobarchart",
            name: "Radio\nBar Chart",
            level: 2,
            isLeaf: true,
            tags: ["compare", "percentage"],
          },
          {
            id: "symetricgroupbarchart",
            name: "Symetric Grouped\nBar Chart",
            level: 2,
            isLeaf: true,
            tags: ["compare"],
          },
          {
            id: "basicpiechart",
            name: "Pie Chart",
            level: 2,
            isLeaf: true,
            tags: ["percentage"],
          },
          {
            id: "ringpiechart",
            name: "Ring\nPie Chart",
            level: 2,
            isLeaf: true,
            tags: ["percentage"],
          },
          {
            id: "nestpiechart",
            name: "Nested\nPie Chart",
            level: 2,
            isLeaf: true,
            tags: ["percentage"],
          },
          {
            id: "nightingalechart",
            name: "Nightingale\nChart",
            level: 2,
            isLeaf: true,
            tags: ["percentage"],
          },
          {
            id: "scatterplotunit",
            name: "Scatter\nPlot",
            level: 2,
            isLeaf: true,
            tags: ["compare", "distribution", "relation"],
          },
          {
            id: "bubblescatterplot",
            name: "Bubble\nChart",
            level: 2,
            isLeaf: true,
            tags: ["compare", "distribution", "relation"],
          },
          {
            id: "circulararcdiagram",
            name: "Circular\nArc Diagram",
            level: 2,
            isLeaf: true,
            tags: ["relation"],
          },
          {
            id: "arcdiagram",
            name: "Arc\nDiagram",
            level: 2,
            isLeaf: true,
            tags: ["relation"],
          },
          {
            id: "chorddiagram",
            name: "Chord\nDiagram",
            level: 2,
            isLeaf: true,
            tags: ["relation"],
          },
          {
            id: "treemap",
            name: "Treemap",
            level: 2,
            isLeaf: true,
            tags: ["percentage", "compare", "relation"],
          },
          {
            id: "sankey",
            name: "Sankey",
            level: 2,
            isLeaf: true,
            tags: ["flow", "trend", "relation"],
          },
          {
            id: "basicfunnel",
            name: "Funnel",
            level: 2,
            isLeaf: true,
            tags: ["flow", "compare", "relation"],
          },
          {
            id: "comparefunnel",
            name: "Compared\nFunnel",
            level: 2,
            isLeaf: true,
            tags: ["flow", "compare", "relation"],
          },
          {
            id: "symetricfunnel",
            name: "Symetric\nFunnel",
            level: 2,
            isLeaf: true,
            tags: ["flow", "compare", "relation"],
          },
          {
            id: "bubblemap",
            name: "Bubble\nMap",
            level: 2,
            isLeaf: true,
            tags: ["distribution", "compare"],
          },
          {
            id: "binchart",
            name: "Bin\nChart",
            level: 2,
            isLeaf: true,
            tags: ["distribution", "compare"],
          },
          {
            id: "colorblockheatmap",
            name: "Color Block\nHeatmap",
            level: 2,
            isLeaf: true,
            tags: ["distribution", "compare"],
          },
          {
            id: "basicheatmap",
            name: "Heatmap",
            level: 2,
            isLeaf: true,
            tags: ["distribution", "compare"],
          },
          {
            id: "instrument",
            name: "Instrument",
            level: 2,
            isLeaf: true,
            tags: ["compare"],
          },
          {
            id: "radar",
            name: "Radar",
            level: 2,
            isLeaf: true,
            tags: ["compare"],
          },
          {
            id: "stockklines",
            name: "Stock\nKLines",
            level: 2,
            isLeaf: true,
            tags: ["compare", "trend"],
          },
          {
            id: "wordcloud",
            name: "Word\nCloud",
            level: 2,
            isLeaf: true,
            tags: ["compare"],
          },
          {
            id: "candlestick",
            name: "Candle\nStick",
            level: 2,
            isLeaf: true,
            tags: ["trend"],
          },
          {
            id: "compactBox",
            name: "CompactBox",
            level: 2,
            isLeaf: true,
            tags: ["relation-hierarchy"],
            imgSrc:
              "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*WGHWQYjLmXoAAAAAAAAAAABkARQnAQ",
            links: ["/g6/zh/examples/tree/compactBox#tbCompactBox"],
            links_en: ["/g6/en/examples/tree/compactBox#tbCompactBox"],
            linkNames: ["G6"],
          },
          {
            id: "dendrogram",
            name: "Dendrogram",
            level: 2,
            isLeaf: true,
            tags: ["relation-hierarchy"],
            imgSrc:
              "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*r51nTJ-Ha5MAAAAAAAAAAABkARQnAQ",
            links: ["/g6/zh/examples/tree/dendrogram#tbDendrogram"],
            links_en: ["/g6/en/examples/tree/dendrogram#tbDendrogram"],
            linkNames: ["G6"],
          },
          {
            id: "mindmap",
            name: "Mindmap",
            level: 2,
            isLeaf: true,
            tags: ["relation-hierarchy"],
            imgSrc:
              "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*VFXlT6A_g7wAAAAAAAAAAABkARQnAQ",
            links: ["/g6/zh/examples/tree/mindmap"],
            links_en: ["/g6/en/examples/tree/mindmap"],
            linkNames: ["G6"],
          },
          {
            id: "indented",
            name: "Indeted",
            level: 2,
            isLeaf: true,
            tags: ["relation-hierarchy"],
            imgSrc:
              "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ywVeSJIfeK8AAAAAAAAAAABkARQnAQ",
            links: ["/g6/zh/examples/tree/indented"],
            links_en: ["/g6/en/examples/tree/indented"],
            linkNames: ["G6"],
          },
          {
            id: "radialtree",
            name: "Radial\nTree",
            level: 2,
            isLeaf: true,
            tags: ["relation-hierarchy"],
            imgSrc:
              "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*vUkTSpv9YqkAAAAAAAAAAABkARQnAQ",
            links: ["/g6/zh/examples/tree/radialtree"],
            links_en: ["/g6/en/examples/tree/radialtree"],
            linkNames: ["G6"],
          },
          {
            id: "flowdiagram",
            name: "Flow\nDiagram",
            level: 2,
            isLeaf: true,
            tags: ["relation"],
            imgSrc:
              "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*35XETpuMRpsAAAAAAAAAAABkARQnAQ",
            links: ["/g6/zh/examples/net/dagreFlow"],
            links_en: ["/g6/en/examples/net/dagreFlow"],
            linkNames: ["G6"],
          },
          {
            id: "fruchtermancluster",
            name: "Fruchterman\nClustering",
            level: 2,
            isLeaf: true,
            tags: ["relation-clustering"],
            imgSrc:
              "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*8qAMTomesZcAAAAAAAAAAABkARQnAQ",
            links: [
              "/g6/zh/examples/net/furchtermanLayout#fruchtermanClustering",
            ],
            links_en: [
              "/g6/en/examples/net/furchtermanLayout#fruchtermanClustering",
            ],
            linkNames: ["G6"],
          },
          {
            id: "fruchterman",
            name: "Fruchterman",
            level: 2,
            isLeaf: true,
            tags: ["relation"],
            imgSrc:
              "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*XD22Q7uxddEAAAAAAAAAAABkARQnAQ",
            links: ["/g6/zh/examples/net/furchtermanLayout"],
            links_en: ["/g6/en/examples/net/furchtermanLayout"],
            linkNames: ["G6"],
          },
          {
            id: "forcedirected",
            name: "Force\nDirected",
            level: 2,
            isLeaf: true,
            tags: ["relation"],
            imgSrc:
              "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*dokGR7uP50oAAAAAAAAAAABkARQnAQ",
            links: ["/g6/zh/examples/net/forceDirected"],
            links_en: ["/g6/en/examples/net/forceDirected"],
            linkNames: ["G6"],
          },
          {
            id: "circular",
            name: "Circular",
            level: 2,
            isLeaf: true,
            tags: ["relation"],
            imgSrc:
              "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*2ZNjRqRzJggAAAAAAAAAAABkARQnAQ",
            links: ["/g6/zh/examples/net/circular"],
            links_en: ["/g6/en/examples/net/circular"],
            linkNames: ["G6"],
          },
          {
            id: "spiral",
            name: "Spiral",
            level: 2,
            isLeaf: true,
            tags: ["relation"],
            imgSrc:
              "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*5NkUTJyXfIcAAAAAAAAAAABkARQnAQ",
            links: ["/g6/zh/examples/net/circular#spiralCircular"],
            links_en: ["/g6/en/examples/net/circular#spiralCircular"],
            linkNames: ["G6"],
          },
          {
            id: "radial",
            name: "Radial",
            level: 2,
            isLeaf: true,
            tags: ["relation"],
            imgSrc:
              "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*KON0Rbv5XtEAAAAAAAAAAABkARQnAQ",
            links: ["/g6/zh/examples/net/radialLayout"],
            links_en: ["/g6/en/examples/net/radialLayout"],
            linkNames: ["G6"],
          },
          {
            id: "concentric",
            name: "Concentric",
            level: 2,
            isLeaf: true,
            tags: ["relation"],
            imgSrc:
              "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*zxlhRobv7VEAAAAAAAAAAABkARQnAQ",
            links: ["/g6/zh/examples/net/concentricLayout"],
            links_en: ["/g6/en/examples/net/concentricLayout"],
            linkNames: ["G6"],
          },
          {
            id: "grid",
            name: "Grid",
            level: 2,
            isLeaf: true,
            tags: ["relation"],
            imgSrc:
              "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*wlkBRKmjVNgAAAAAAAAAAABkARQnAQ",
            links: ["/g6/zh/examples/net/gridLayout"],
            links_en: ["/g6/en/examples/net/gridLayout"],
            linkNames: ["G6"],
          },
          {
            id: "bubbles",
            name: "Bubbles",
            level: 2,
            isLeaf: true,
            tags: ["relation", "compare"],
            imgSrc:
              "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*EaIlRqda-VcAAAAAAAAAAABkARQnAQ",
            links: ["/g6/zh/examples/net/forceDirected#forceBubbles"],
            links_en: ["/g6/en/examples/net/forceDirected#forceBubbles"],
            linkNames: ["G6"],
          },
          {
            id: "dotmap",
            name: "Dot Map",
            level: 2,
            isLeaf: true,
            tags: ["distribution"],
          },
          {
            id: "symbollayer",
            name: "Symbol\nLayer",
            level: 2,
            isLeaf: true,
            tags: ["distribution", "compare"],
          },
          {
            id: "clustermap",
            name: "Clustered\nMap",
            level: 2,
            isLeaf: true,
            tags: ["relation-clustering", "compare"],
          },
          {
            id: "chartmap",
            name: "Chart\nMap",
            level: 2,
            isLeaf: true,
            tags: ["distribution", "compare", "composition"],
          },
          {
            id: "columnmap",
            name: "3D Column\nMap",
            level: 2,
            isLeaf: true,
            tags: ["distribution", "compare"],
          },
          {
            id: "scattermap",
            name: "Scatter\nMap",
            level: 2,
            isLeaf: true,
            tags: ["distribution"],
          },
          {
            id: "pathmap",
            name: "Path Map",
            level: 2,
            isLeaf: true,
            tags: ["trend"],
          },
          {
            id: "relationmap",
            name: "Relation\nMap",
            level: 2,
            isLeaf: true,
            tags: ["relation"],
          },
          {
            id: "arc3dmap",
            name: "3D Arc Map",
            level: 2,
            isLeaf: true,
            tags: ["relation"],
          },
          {
            id: "choroplethmap",
            name: "Chropleth\nMap",
            level: 2,
            isLeaf: true,
            tags: ["compare"],
          },
          {
            id: "hexagonalheatmap",
            name: "Hexagonal\nHeatmap",
            level: 2,
            isLeaf: true,
            tags: ["compare", "relation-clustering"],
          },
          {
            id: "3dgridbinheatmap",
            name: "3D Grid\nHeatmap",
            level: 2,
            isLeaf: true,
            tags: ["compare", "relation-clustering"],
          },
          {
            id: "3dhexagonalheatmap",
            name: "3D Hexagonal\nHeatmap",
            level: 2,
            isLeaf: true,
            tags: ["compare", "relation-clustering"],
          },
          {
            id: "classicalheatmap",
            name: "Classical\nHeatmap",
            level: 2,
            isLeaf: true,
            tags: ["compare", "relation-clustering"],
          },
          {
            id: "gridbinheatmap",
            name: "Grid Bin\nHeatmap",
            level: 2,
            isLeaf: true,
            tags: ["compare", "relation-clustering"],
          },
        ],
        edges: [
          {
            source: "relation",
            target: "hierarchy",
          },
          {
            source: "relation",
            target: "clustering",
          },
          {
            source: "trend",
            target: "basiclinechart",
          },
          {
            source: "trend",
            target: "multilinechart",
          },
          {
            source: "compare",
            target: "multilinechart",
          },
          {
            source: "trend",
            target: "basicareachart",
          },
          {
            source: "trend",
            target: "stackareachart",
          },
          {
            source: "compare",
            target: "stackareachart",
          },
          {
            source: "percentage",
            target: "stackareachart",
          },
          {
            source: "trend",
            target: "percentstackareachart",
          },
          {
            source: "compare",
            target: "percentstackareachart",
          },
          {
            source: "percentage",
            target: "percentstackareachart",
          },
          {
            source: "trend",
            target: "intervalareachart",
          },
          {
            source: "compare",
            target: "intervalareachart",
          },
          {
            source: "trend",
            target: "streamchart",
          },
          {
            source: "compare",
            target: "streamchart",
          },
          {
            source: "compare",
            target: "basichistogram",
          },
          {
            source: "compare",
            target: "grouphistogram",
          },
          {
            source: "compare",
            target: "stackhistogram",
          },
          {
            source: "compare",
            target: "percentstackhistogram",
          },
          {
            source: "percentage",
            target: "percentstackhistogram",
          },
          {
            source: "compare",
            target: "intervalhistogram",
          },
          {
            source: "compare",
            target: "waterfall",
          },
          {
            source: "compare",
            target: "histogramunit",
          },
          {
            source: "distribution",
            target: "histogramunit",
          },
          {
            source: "compare",
            target: "basicbarchart",
          },
          {
            source: "percentage",
            target: "basicbarchart",
          },
          {
            source: "compare",
            target: "stackbarchart",
          },
          {
            source: "percentage",
            target: "stackbarchart",
          },
          {
            source: "compare",
            target: "percentstackbarchart",
          },
          {
            source: "percentage",
            target: "percentstackbarchart",
          },
          {
            source: "compare",
            target: "groupbarchart",
          },
          {
            source: "percentage",
            target: "groupbarchart",
          },
          {
            source: "compare",
            target: "intervalbarchart",
          },
          {
            source: "percentage",
            target: "intervalbarchart",
          },
          {
            source: "compare",
            target: "radiobarchart",
          },
          {
            source: "percentage",
            target: "radiobarchart",
          },
          {
            source: "compare",
            target: "symetricgroupbarchart",
          },
          {
            source: "percentage",
            target: "basicpiechart",
          },
          {
            source: "percentage",
            target: "ringpiechart",
          },
          {
            source: "percentage",
            target: "nestpiechart",
          },
          {
            source: "percentage",
            target: "nightingalechart",
          },
          {
            source: "comare",
            target: "scatterplotunit",
          },
          {
            source: "distribution",
            target: "scatterplotunit",
          },
          {
            source: "relation",
            target: "scatterplotunit",
          },
          {
            source: "comare",
            target: "bubblescatterplot",
          },
          {
            source: "distribution",
            target: "bubblescatterplot",
          },
          {
            source: "relation",
            target: "bubblescatterplot",
          },
          {
            source: "relation",
            target: "circulararcdiagram",
          },
          {
            source: "relation",
            target: "arcdiagram",
          },
          {
            source: "relation",
            target: "chorddiagram",
          },
          {
            source: "compare",
            target: "treemap",
          },
          {
            source: "relation",
            target: "treemap",
          },
          {
            source: "percentage",
            target: "treemap",
          },
          {
            source: "flow",
            target: "sankey",
          },
          {
            source: "relation",
            target: "sankey",
          },
          {
            source: "trend",
            target: "sankey",
          },
          {
            source: "flow",
            target: "basicfunnel",
          },
          {
            source: "compare",
            target: "basicfunnel",
          },
          {
            source: "relation",
            target: "basicfunnel",
          },
          {
            source: "flow",
            target: "comparefunnel",
          },
          {
            source: "compare",
            target: "comparefunnel",
          },
          {
            source: "relation",
            target: "comparefunnel",
          },
          {
            source: "flow",
            target: "symetricfunnel",
          },
          {
            source: "compare",
            target: "symetricfunnel",
          },
          {
            source: "relation",
            target: "symetricfunnel",
          },
          {
            source: "compare",
            target: "bubblemap",
          },
          {
            source: "distribution",
            target: "bubblemap",
          },
          {
            source: "compare",
            target: "binchart",
          },
          {
            source: "distribution",
            target: "binchart",
          },
          {
            source: "compare",
            target: "colorblockheatmap",
          },
          {
            source: "distribution",
            target: "colorblockheatmap",
          },
          {
            source: "compare",
            target: "basicheatmap",
          },
          {
            source: "distribution",
            target: "basicheatmap",
          },
          {
            source: "compare",
            target: "instrument",
          },
          {
            source: "compare",
            target: "radar",
          },
          {
            source: "trend",
            target: "stockklines",
          },
          {
            source: "compare",
            target: "stockklines",
          },
          {
            source: "compare",
            target: "wordcloud",
          },
          {
            source: "trend",
            target: "candlestick",
          },
          {
            source: "hierarchy",
            target: "compactBox",
          },
          {
            source: "hierarchy",
            target: "dendrogram",
          },
          {
            source: "hierarchy",
            target: "mindmap",
          },
          {
            source: "hierarchy",
            target: "indented",
          },
          {
            source: "hierarchy",
            target: "radialtree",
          },
          {
            source: "relation",
            target: "flowdiagram",
          },
          {
            source: "clustering",
            target: "fruchtermancluster",
          },
          {
            source: "relation",
            target: "fruchterman",
          },
          {
            source: "relation",
            target: "forcedirected",
          },
          {
            source: "relation",
            target: "circular",
          },
          {
            source: "relation",
            target: "spiral",
          },
          {
            source: "relation",
            target: "radial",
          },
          {
            source: "relation",
            target: "concentric",
          },
          {
            source: "distribution",
            target: "concentric",
          },
          {
            source: "distribution",
            target: "grid",
          },
          {
            source: "relation",
            target: "grid",
          },
          {
            source: "relation",
            target: "bubbles",
          },
          {
            source: "compare",
            target: "bubbles",
          },
          {
            source: "distribution",
            target: "dotmap",
          },
          {
            source: "distribution",
            target: "symbollayer",
          },
          {
            source: "compare",
            target: "symbollayer",
          },
          {
            source: "clustering",
            target: "clustermap",
          },
          {
            source: "compare",
            target: "clustermap",
          },
          {
            source: "compare",
            target: "chartmap",
          },
          {
            source: "composition",
            target: "chartmap",
          },
          {
            source: "distribution",
            target: "chartmap",
          },
          {
            source: "distribution",
            target: "columnmap",
          },
          {
            source: "compare",
            target: "columnmap",
          },
          {
            source: "distribution",
            target: "scattermap",
          },
          {
            source: "trend",
            target: "pathmap",
          },
          {
            source: "relation",
            target: "relationmap",
          },
          {
            source: "relation",
            target: "arc3dmap",
          },
          {
            source: "compare",
            target: "choroplethmap",
          },
          {
            source: "compare",
            target: "hexagonalheatmap",
          },
          {
            source: "clustering",
            target: "hexagonalheatmap",
          },
          {
            source: "compare",
            target: "3dgridbinheatmap",
          },
          {
            source: "clustering",
            target: "3dgridbinheatmap",
          },
          {
            source: "compare",
            target: "3dhexagonalheatmap",
          },
          {
            source: "clustering",
            target: "3dhexagonalheatmap",
          },
          {
            source: "compare",
            target: "classicalheatmap",
          },
          {
            source: "clustering",
            target: "classicalheatmap",
          },
          {
            source: "compare",
            target: "gridbinheatmap",
          },
          {
            source: "clustering",
            target: "gridbinheatmap",
          },
        ],
      };
      /**
       * by Shiwu
       */
      let showNodes = [];
      let showEdges = [];
      let curShowNodes = [];
      let curShowEdges = [];
      let nodes = [];
      let edges = [];
      let nodeMap = new Map();
      let edgesMap = new Map();
      let curShowNodesMap = new Map();
      let highlighting = false;
      let currentFocus;
      const width = document.getElementById("container").scrollWidth;
      const height = document.getElementById("container").scrollHeight || 500;

      const LIMIT_OVERFLOW_WIDTH = width;
      const LIMIT_OVERFLOW_HEIGHT = height;

      const mapNodeSize = (nodes, propertyName, visualRange) => {
        let minp = 9999999999;
        let maxp = -9999999999;
        nodes.forEach((node) => {
          minp = node[propertyName] < minp ? node[propertyName] : minp;
          maxp = node[propertyName] > maxp ? node[propertyName] : maxp;
        });
        const rangepLength = maxp - minp;
        const rangevLength = visualRange[1] - visualRange[0];
        nodes.forEach((node) => {
          node.size =
            ((node[propertyName] - minp) / rangepLength) * rangevLength +
            visualRange[0];
        });
      };

      const lightColors = [
        "#8FE9FF",
        "#87EAEF",
        "#FFC9E3",
        "#A7C2FF",
        "#FFA1E3",
        "#FFE269",
        "#BFCFEE",
        "#FFA0C5",
        "#D5FF86",
      ];
      const darkColors = [
        "#7DA8FF",
        "#44E6C1",
        "#FF68A7",
        "#7F86FF",
        "#AE6CFF",
        "#FF5A34",
        "#5D7092",
        "#FF6565",
        "#6BFFDE",
      ];
      const uLightColors = [
        "#CFF6FF",
        "#BCFCFF",
        "#FFECF5",
        "#ECFBFF",
        "#EAD9FF",
        "#FFF8DA",
        "#DCE2EE",
        "#FFE7F0",
        "#EEFFCE",
      ];
      const uDarkColors = [
        "#CADBFF",
        "#A9FFEB",
        "#FFC4DD",
        "#CACDFF",
        "#FFD4F2",
        "#FFD3C9",
        "#EBF2FF",
        "#FFCBCB",
        "#CAFFF3",
      ];

      const gColors = [];
      const unlightColorMap = new Map();
      lightColors.forEach((lcolor, i) => {
        gColors.push("l(0) 0:" + lcolor + " 1:" + darkColors[i]);
        unlightColorMap.set(
          gColors[i],
          "l(0) 0:" + uLightColors[i] + " 1:" + uDarkColors[i]
        );
      });

      let graph;
      const layoutCfg = {
        type: "force",
        nodeSize: (d) => {
          return d.size / 2 + 5;
        },
        nodeStrength: 2500,
        collideStrength: 0.8,
        alphaDecay: 0.01,
        preventOverlap: true,
        onTick: () => {
          const nodeItems = graph.getNodes();
          const height = graph.get("height");
          const width = graph.get("width");
          const padding = 10;
          nodeItems.forEach((item) => {
            const model = item.getModel();
            if (model.x > width - padding) model.x = width - padding;
            else if (model.x < padding) model.x = padding;

            if (model.y > height - padding) model.y = height - padding;
            else if (model.y < padding) model.y = padding;
          });
        },
      };

      G6.registerBehavior("double-finger-drag-canvas", {
        getEvents: function getEvents() {
          return {
            wheel: "onWheel",
          };
        },

        onWheel: (ev) => {
          if (ev.ctrlKey) {
            const canvas = graph.get("canvas");
            const point = canvas.getPointByClient(ev.clientX, ev.clientY);
            let ratio = graph.getZoom();
            if (ev.wheelDelta > 0) {
              ratio = ratio + ratio * 0.05;
            } else {
              ratio = ratio - ratio * 0.05;
            }
            graph.zoomTo(ratio, {
              x: point.x,
              y: point.y,
            });
          } else {
            const x = ev.deltaX || ev.movementX;
            const y = ev.deltaY || ev.movementY || (-ev.wheelDelta * 125) / 3;
            translate(x, y);
          }
          ev.preventDefault();
        },
      });

      G6.registerNode(
        "bubble",
        {
          drawShape(cfg, group) {
            const self = this;
            const r = cfg.size / 2;
            // a circle by path
            const path = [
              ["M", -r, 0],
              ["C", -r, r / 2, -r / 2, r, 0, r],
              ["C", r / 2, r, r, r / 2, r, 0],
              ["C", r, -r / 2, r / 2, -r, 0, -r],
              ["C", -r / 2, -r, -r, -r / 2, -r, 0],
              ["Z"],
            ];
            const keyShape = group.addShape("path", {
              attrs: {
                x: 0,
                y: 0,
                path,
                fill: cfg.color || "steelblue",
              },
              name: "path-shape",
            });

            const mask = group.addShape("path", {
              attrs: {
                x: 0,
                y: 0,
                path,
                opacity: 0.25,
                fill: cfg.color || "steelblue",
                shadowColor: cfg.color.split(" ")[2].substr(2),
                shadowBlur: 40,
                shadowOffsetX: 0,
                shadowOffsetY: 30,
              },
              name: "mask-shape",
            });

            const spNum = 10; // split points number
            const directions = [],
              rs = [];
            self.changeDirections(spNum, directions);
            for (let i = 0; i < spNum; i++) {
              const rr = r + directions[i] * ((Math.random() * r) / 1000); // +-r/6, the sign according to the directions
              if (rs[i] < 0.97 * r) rs[i] = 0.97 * r;
              else if (rs[i] > 1.03 * r) rs[i] = 1.03 * r;
              rs.push(rr);
            }
            keyShape.animate(
              () => {
                const path = self.getBubblePath(r, spNum, directions, rs);
                return { path };
              },
              {
                repeat: true,
                duration: 10000,
              }
            );

            const directions2 = [],
              rs2 = [];
            self.changeDirections(spNum, directions2);
            for (let i = 0; i < spNum; i++) {
              const rr = r + directions2[i] * ((Math.random() * r) / 1000); // +-r/6, the sign according to the directions
              if (rs2[i] < 0.97 * r) rs2[i] = 0.97 * r;
              else if (rs2[i] > 1.03 * r) rs2[i] = 1.03 * r;
              rs2.push(rr);
            }
            mask.animate(
              () => {
                const path = self.getBubblePath(r, spNum, directions2, rs2);
                return { path };
              },
              {
                repeat: true,
                duration: 10000,
              }
            );
            return keyShape;
          },
          changeDirections(num, directions) {
            for (let i = 0; i < num; i++) {
              if (!directions[i]) {
                const rand = Math.random();
                const dire = rand > 0.5 ? 1 : -1;
                directions.push(dire);
              } else {
                directions[i] = -1 * directions[i];
              }
            }
            return directions;
          },
          getBubblePath(r, spNum, directions, rs) {
            const path = [];
            const cpNum = spNum * 2; // control points number
            const unitAngle = (Math.PI * 2) / spNum; // base angle for split points
            let angleSum = 0;
            const sps = [];
            const cps = [];
            for (let i = 0; i < spNum; i++) {
              const speed = 0.001 * Math.random();
              rs[i] = rs[i] + directions[i] * speed * r; // +-r/6, the sign according to the directions
              if (rs[i] < 0.97 * r) {
                rs[i] = 0.97 * r;
                directions[i] = -1 * directions[i];
              } else if (rs[i] > 1.03 * r) {
                rs[i] = 1.03 * r;
                directions[i] = -1 * directions[i];
              }
              const spX = rs[i] * Math.cos(angleSum);
              const spY = rs[i] * Math.sin(angleSum);
              sps.push({ x: spX, y: spY });
              for (let j = 0; j < 2; j++) {
                const cpAngleRand = unitAngle / 3;
                const cpR = rs[i] / Math.cos(cpAngleRand);
                const sign = j === 0 ? -1 : 1;
                const x = cpR * Math.cos(angleSum + sign * cpAngleRand);
                const y = cpR * Math.sin(angleSum + sign * cpAngleRand);
                cps.push({ x, y });
              }
              angleSum += unitAngle;
            }
            path.push(["M", sps[0].x, sps[0].y]);
            for (let i = 1; i < spNum; i++) {
              path.push([
                "C",
                cps[2 * i - 1].x,
                cps[2 * i - 1].y,
                cps[2 * i].x,
                cps[2 * i].y,
                sps[i].x,
                sps[i].y,
              ]);
            }
            path.push([
              "C",
              cps[cpNum - 1].x,
              cps[cpNum - 1].y,
              cps[0].x,
              cps[0].y,
              sps[0].x,
              sps[0].y,
            ]);
            path.push(["Z"]);
            return path;
          },
          setState(name, value, item) {
            const shape = item.get("keyShape");
            if (name === "dark") {
              if (value) {
                if (shape.attr("fill") !== "#fff") {
                  shape.oriFill = shape.attr("fill");
                  const uColor = unlightColorMap.get(shape.attr("fill"));
                  shape.attr("fill", uColor);
                } else {
                  shape.attr("opacity", 0.2);
                }
              } else {
                if (shape.attr("fill") !== "#fff") {
                  shape.attr("fill", shape.oriFill || shape.attr("fill"));
                } else {
                  shape.attr("opacity", 1);
                }
              }
            }
          },
        },
        "single-node"
      );

      G6.registerNode(
        "animate-circle",
        {
          setState(name, value, item) {
            const shape = item.get("keyShape");
            const label = shape.get("parent").get("children")[1];
            if (name === "disappearing" && value) {
              shape.animate(
                (ratio) => {
                  return {
                    opacity: 1 - ratio,
                    r: shape.attr("r") * (1 - ratio),
                  };
                },
                {
                  duration: 200,
                }
              );
              label.animate(
                (ratio) => {
                  return {
                    opacity: 1 - ratio,
                  };
                },
                {
                  duration: 500,
                }
              );
            } else if (name === "appearing" && value) {
              const r = item.getModel().size / 2;
              shape.animate(
                (ratio) => {
                  return {
                    opacity: ratio,
                    r: r * ratio,
                    fill: shape.attr("fill"),
                  };
                },
                {
                  duration: 300,
                }
              );
              label.animate(
                {
                  onFrame(ratio) {
                    return {
                      opacity: ratio,
                    };
                  },
                },
                {
                  duration: 300,
                }
              );
            } else if (name === "dark") {
              if (value) {
                if (shape.attr("fill") !== "#fff") {
                  shape.oriFill = shape.attr("fill");
                  const uColor = unlightColorMap.get(shape.attr("fill"));
                  shape.attr("fill", uColor);
                } else {
                  shape.attr("opacity", 0.2);
                  label.attr("fill", "#A3B1BF");
                }
              } else {
                if (shape.attr("fill") !== "#fff") {
                  shape.attr("fill", shape.oriFill || shape.attr("fill"));
                } else {
                  shape.attr("opacity", 1);
                  label.attr("fill", "#697B8C");
                }
              }
            }
          },
        },
        "circle"
      );

      G6.registerEdge(
        "animate-line",
        {
          drawShape(cfg, group) {
            const self = this;
            let shapeStyle = self.getShapeStyle(cfg);
            shapeStyle = Object.assign(shapeStyle, {
              opacity: 0,
              strokeOpacity: 0,
            });
            const keyShape = group.addShape("path", {
              attrs: shapeStyle,
              name: "path-shape",
            });
            return keyShape;
          },
          afterDraw(cfg, group) {
            const shape = group.get("children")[0];
            shape.animate(
              (ratio) => {
                const opacity = ratio * cfg.style.opacity;
                const strokeOpacity = ratio * cfg.style.strokeOpacity;
                return {
                  opacity: ratio || opacity,
                  strokeOpacity: ratio || strokeOpacity,
                };
              },
              {
                duration: 300,
              }
            );
          },
          setState(name, value, item) {
            const shape = item.get("keyShape");
            if (name === "disappearing" && value) {
              shape.animate(
                (ratio) => {
                  return {
                    opacity: 1 - ratio,
                    strokeOpacity: 1 - ratio,
                  };
                },
                {
                  duration: 200,
                }
              );
            } else if (name === "dark") {
              if (value) shape.attr("opacity", 0.2);
              else shape.attr("opacity", 1);
            }
          },
        },
        "line"
      );

      graph = new G6.Graph({
        container: "container",
        width,
        height,
        linkCenter: true,
        layout: layoutCfg,
        modes: {
          default: ["drag-canvas"],
        },
        defaultNode: {
          type: "circle", // 'bubble'
          size: 95,
          labelCfg: {
            position: "center",
            style: {
              fill: "white",
              fontStyle: "bold",
            },
          },
        },
        defaultEdge: {
          color: "#888",
          type: "animate-line", //'animate-line'
        },
      });
      graph.get("canvas").set("localRefresh", false);

      function translate(x, y) {
        let moveX = x;
        let moveY = y;

        /* 获得当前偏移量*/
        const group = graph.get("group");
        const bbox = group.getBBox();
        const leftTopPoint = graph.getCanvasByPoint(bbox.minX, bbox.minY);
        const rightBottomPoint = graph.getCanvasByPoint(bbox.maxX, bbox.maxY);
        /* 如果 x 轴在区域内，不允许左右超过100 */
        if (x < 0 && leftTopPoint.x - x > LIMIT_OVERFLOW_WIDTH) {
          moveX = 0;
        }
        if (x > 0 && rightBottomPoint.x - x < width - LIMIT_OVERFLOW_WIDTH) {
          moveX = 0;
        }

        if (y < 0 && leftTopPoint.y - y > LIMIT_OVERFLOW_HEIGHT) {
          moveY = 0;
        }
        if (y > 0 && rightBottomPoint.y - y < height - LIMIT_OVERFLOW_HEIGHT) {
          moveY = 0;
        }
        graph.translate(-moveX, -moveY);
      }

      function refreshDragedNodePosition(e) {
        const model = e.item.get("model");
        model.fx = e.x;
        model.fy = e.y;
      }
      graph.on("node:dragstart", (e) => {
        graph.layout();
        refreshDragedNodePosition(e);
      });
      graph.on("node:drag", (e) => {
        refreshDragedNodePosition(e);
      });
      graph.on("node:dragend", (e) => {
        e.item.get("model").fx = null;
        e.item.get("model").fy = null;
      });

      const loadData = (data) => {
        const layoutController = graph.get("layoutController");
        layoutController.layoutCfg.nodeStrength = 2500;
        layoutController.layoutCfg.collideStrength = 0.8;
        layoutController.layoutCfg.alphaDecay = 0.01;
        nodes = data.nodes;
        edges = data.edges;

        showNodes = [];
        showEdges = [];
        nodeMap = new Map();
        edgesMap = new Map();
        // find the roots
        nodes.forEach((node) => {
          if (node.level === 0) {
            node.color = gColors[showNodes.length % gColors.length];
            node.style = {
              fill: gColors[showNodes.length % gColors.length],
              lineWidth: 0,
            };
            node.labelCfg = {
              style: {
                fontSize: 25,
                fill: "#fff",
                fontWeight: 300,
              },
            };
            node.x = Math.random() * 800;
            node.y = Math.random() * 800;
            showNodes.push(node);
          }
          if (!node.isLeaf) {
            const num = node.childrenNum ? `\n(${node.childrenNum})` : "";
            node.label = `${node.name}${num}`;
          } else {
            node.label = node.name;
          }
          nodeMap.set(node.id, node);
        });

        mapNodeSize(showNodes, "childrenNum", [120, 180]);

        // map the color to F nodes, same to its parent
        nodes.forEach((node) => {
          if (node.level !== 0 && !node.isLeaf) {
            const parent = nodeMap.get(node.tags[0]);
            node.color = parent.color;
            node.style = {
              fill: parent.color,
            };
          }
        });
        edges.forEach((edge) => {
          // map the id
          edge.id = `${edge.source}-${edge.target}`;
          edge.style = {
            lineWidth: 0.5,
            opacity: 1,
            strokeOpacity: 1,
          };
          edgesMap.set(edge.id, edge);
        });
        graph.data({
          nodes: showNodes,
          edges: showEdges,
        });
        graph.render();
      };

      graph.on("node:mouseenter", (e) => {
        const item = e.item;
        const model = item.getModel();
        if (model.level === 0) {
          return;
        }
        highlighting = true;
        graph.setAutoPaint(false);
        const nodeItems = graph.getNodes();
        const edgeItems = graph.getEdges();
        nodeItems.forEach((node) => {
          graph.setItemState(node, "dark", true);
          node.getModel().light = false;
        });
        graph.setItemState(item, "dark", false);
        model.light = true;
        const tags = model.tags;
        const findTagsMap = new Map();
        let mid = 0;

        let fTag = "";
        // if the model is F node, find the leaves of it
        if (!model.isLeaf && model.level !== 0) {
          fTag = model.tag;
          nodeItems.forEach((item) => {
            const itemModel = item.getModel();
            if (!itemModel.isLeaf) return;
            const modelTags = itemModel.tags;
            modelTags.forEach((mt) => {
              const mts = mt.split("-");
              if (mts[1] === fTag) {
                graph.setItemState(item, "dark", false);
                itemModel.light = true;
              }
            });
          });
        }

        // find the tags
        tags.forEach((t) => {
          const ts = t.split("-");
          findTagsMap.set(ts[0], mid);
          mid++;
          if (ts[1]) {
            findTagsMap.set(ts[1], mid);
            mid++;
          }
        });
        // find the nodes with tag === tags[?]
        nodeItems.forEach((item) => {
          const node = item.getModel();
          if (findTagsMap.get(node.tag) !== undefined) {
            graph.setItemState(item, "dark", false);
            node.light = true;
          }
        });
        edgeItems.forEach((item) => {
          const source = item.getSource().getModel();
          const target = item.getTarget().getModel();
          if (source.light && target.light) {
            graph.setItemState(item, "dark", false);
          } else {
            graph.setItemState(item, "dark", true);
          }
        });
        graph.paint();
        graph.setAutoPaint(true);
      });

      graph.on("node:mouseleave", () => {
        if (highlighting) {
          const nodeItems = graph.getNodes();
          const edgeItems = graph.getEdges();
          highlighting = false;
          nodeItems.forEach((item) => {
            graph.setItemState(item, "dark", false);
          });
          edgeItems.forEach((item) => {
            graph.setItemState(item, "dark", false);
          });
        }
      });

      fetch(
        "https://gw.alipayobjects.com/os/bmw-prod/fc6e64fc-be94-40fb-b9e2-2d13dd414f38.json"
      )
        .then((res) => res.json())
        .then((data) => {
          loadData(data);
        });

      // click root to expand
      graph.on("node:click", (e) => {
        curShowNodes = [];
        curShowEdges = [];
        const item = e.item;
        const model = item.getModel();
        if (!model.isLeaf && model.level !== 0) {
          return;
        }
        // if clicked a root, hide unrelated items and show the related items
        if (model.level === 0) {
          const layoutController = graph.get("layoutController");
          const forceLayout = layoutController.layoutMethods[0];
          // forceLayout.forceSimulation.stop();
          // light the level 0 nodes
          //showNodes.forEach((snode) => {
          //  const item = graph.findById(snode.id);
          //  graph.setItemState(item, "dark", false);
          //  if (snode.x < 0.5 * width) {
          //    snode.x = 300;
          //  } else {
          //    snode.x = width - 300;
          //  }
          //});
          //model.x = width / 2;
          //model.y = height / 2;
          // animatively hide the items which are going to disappear
          if (curShowEdges.length) {
            curShowEdges.forEach((csedge) => {
              const item = graph.findById(csedge.id);
              item && graph.setItemState(item, "disappearing", true);
            });
          }
          //curShowNodes.forEach((csnode) => {
          //  const item = graph.findById(csnode.id);
          //  item && graph.setItemState(item, "disappearing", true);
          //});
          

          // reset curShowNodes nad curShowEdges
          curShowNodes = [];
          curShowEdges = [];

          // click on the same node which is the current focus node, hide the small nodes, change the map-gjd-shop-Internet-layout parameters to roots view
          if (currentFocus && currentFocus.id === model.id) {
            currentFocus = undefined;
            layoutController.layoutCfg.nodeStrength = 2500;
            layoutController.layoutCfg.collideStrength = 0.8;
            layoutController.layoutCfg.alphaDecay = 0.01;
          } else {
            // click other focus node, hide the current small nodes and show the related nodes
            currentFocus = model;
            // change data after the original items disappearing
            const layoutController = graph.get("layoutController");
            layoutController.layoutCfg.nodeStrength = () => {
              return -80;
            };
            layoutController.layoutCfg.collideStrength = 0.2;
            layoutController.layoutCfg.linkDistance = (d) => {
              if (d.source.level !== 0) return 120;
              const length = 250;
              return length;
            };
            layoutController.layoutCfg.edgeStrength = () => {
              return 2;
            };

            const tag = model.tag;
            const findTags = [];
            curShowNodesMap = new Map();
            // find the nodes which are the descendants of clicked model
            nodes.forEach((node) => {
              if (!node.tags) return;
              const tags = node.tags;
              const tlength = tags.length;
              let isChild = false;
              const parents = [];
              for (let i = 0; i < tlength; i++) {
                const ts = tags[i].split("-");
                if (ts[0] === tag) {
                  isChild = true;
                }
                parents.push(nodeMap.get(ts[0]));
              }
              if (isChild) {
                const randomAngle = Math.random() * 2 * Math.PI;
                node.x =
                  model.x + (Math.cos(randomAngle) * model.size) / 2 + 10;
                node.y =
                  model.y + (Math.sin(randomAngle) * model.size) / 2 + 10;
                // const dist = (model.x - node.x) * (model.x - node.x) + (model.y - node.y) * (model.y - node.y);

                if (!node.style) node.style = {};
                node.style.lineWidth = 0;
                node.style.opacity = 1;
                if (node.isLeaf) {
                  node.type = "animate-circle";
                  let color = "l(0)";
                  const parentsNum = parents.length;
                  parents.forEach((parent, i) => {
                    const parentColor = parent.color.split(" ")[1].substr(2);
                    color += ` ${i / (parentsNum - 1)}:${parentColor}`;
                  });
                  if (parentsNum === 1) {
                    color = model.color.split(" ")[1].substr(2);
                  }
                  node.color = color;
                  node.style.fill = color;
                  node.style.fill = "#fff";
                  node.style.lineWidth = 1;
                  node.size = 60;
                  node.labelCfg = {
                    style: {
                      fontSize: 11,
                      lineHeight: 19,
                      fill: "#697B8C",
                    },
                    position: "center",
                  };
                } else if (node.level !== 0) {
                  node.type = "circle"; // 'bubble';
                  node.size = 95;
                  if (!node.style) node.style = {};
                  node.color = model.color;
                  node.style.fill = model.color;
                  node.labelCfg = {
                    style: {
                      fill: "#fff",
                      fontSize: 14,
                    },
                    position: "center",
                  };
                }
                curShowNodes.push(node);
                curShowNodesMap.set(node.id, node);

                // add the edge connect from model to node which exists in edges
                const edgeId = `${model.id}-${node.id}`;
                const edge = edgesMap.get(edgeId);
                if (edge) {
                  edge.color = model.color;
                  curShowEdges.push(edge);
                }
                tags.forEach((t) => {
                  const ts = t.split("-");
                  if (ts[0] !== tag) {
                    findTags.push(ts[0]);
                  }
                  if (ts[1]) {
                    findTags.push(ts[1]);
                  }
                });
              }
            });

            // find the nodes which are the ancestors of the current curShowNodes
            nodes.forEach((node) => {
              const findTagsLength = findTags.length;
              for (let i = 0; i < findTagsLength; i++) {
                if (
                  node.tag === findTags[i] &&
                  curShowNodesMap.get(node.id) === undefined
                ) {
                  curShowNodes.push(node);
                  curShowNodesMap.set(node.id, node);
                  return;
                }
              }
            });

            // find the edges whose target end source are in the curShowNodes
            curShowNodes.forEach((nu, i) => {
              const lu = nu.level;
              curShowNodes.forEach((nv, j) => {
                if (j <= i) return;
                const lv = nv.level;
                let edgeId;
                if (lu < lv) {
                  edgeId = `${nu.id}-${nv.id}`;
                } else {
                  edgeId = `${nv.id}-${nu.id}`;
                }
                let color = model.color;
                if (nu.isLeaf) {
                  if (nv.level === 0 && nv.tag !== model.tag) color = "#DFE5EB";
                  else if (!nv.isLeaf && nv.tags[0] !== model.tag) {
                    color = "#DFE5EB";
                  }
                } else if (nv.isLeaf) {
                  if (nu.level === 0 && nu.tag !== model.tag) color = "#DFE5EB";
                  else if (!nu.isLeaf && nu.tags[0] !== model.tag) {
                    color = "#DFE5EB";
                  }
                }
                const edge = edgesMap.get(edgeId);
                if (edge) {
                  edge.color = color;
                  curShowEdges.push(edge);
                }
              });
            });
          }
          setTimeout(() => {
            graph.changeData({
              nodes: showNodes.concat(curShowNodes),
              edges: showEdges.concat(curShowEdges),
            });
            const nodeItems = graph.getNodes();
            const edgeItems = graph.getEdges();
            edgeItems.forEach((item) => {
              graph.clearItemStates(item);
            });
            nodeItems.forEach((item) => {
              graph.clearItemStates(item);
              graph.setItemState(item, "appearing", true);
            });
          }, 400);
        }
      });
      graph.on("canvas:click", () => {
        currentFocus = undefined;
        const forceLayout = graph.get("layoutController").layoutMethods[0];
        forceLayout.forceSimulation.stop();
        const nodeItems = graph.getNodes();
        const edgeItems = graph.getEdges();
        if (highlighting) {
          highlighting = false;
          nodeItems.forEach((item) => {
            graph.setItemState(item, "dark", false);
          });
          edgeItems.forEach((item) => {
            graph.setItemState(item, "dark", false);
          });
        } else {
          nodeItems.forEach((item) => {
            const model = item.getModel();
            if (model.level === 0) {
              graph.setItemState(item, "dark", false);
            } else {
              graph.setItemState(item, "disappearing", true);
            }
          });
          edgeItems.forEach((item) => {
            graph.setItemState(item, "disappearing", true);
          });
          curShowNodes = [];
          curShowEdges = [];
          setTimeout(() => {
            const layoutController = graph.get("layoutController");
            layoutController.layoutCfg.nodeStrength = 2500;
            layoutController.layoutCfg.collideStrength = 0.8;
            layoutController.layoutCfg.alphaDecay = 0.01;

            graph.changeData({
              nodes: showNodes,
              edges: showEdges,
            });
          }, 400);
        }
      });

      if (typeof window !== "undefined")
        window.onresize = () => {
          if (!graph || graph.get("destroyed")) return;
          if (!container || !container.scrollWidth || !container.scrollHeight)
            return;
          graph.changeSize(container.scrollWidth, container.scrollHeight);
        };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
