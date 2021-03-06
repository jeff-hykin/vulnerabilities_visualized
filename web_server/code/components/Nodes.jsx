const G6 = require("@antv/g6").default
const { backend } = require("quik-client")
const { nodeTheme } = require("../systems/theme")
const { mountedToDom } = require('../systems/utilities')

// how data needs to be for the graph
const exampleData = {
    "nodes": [
        //   
        // parents
        //   
        {
            "id": "_1",
            "name": "Tiny-http Project",
            "tag": "Tiny-http Project",
            "level": 0,
            "childrenNum": 1,
        },
        {
            "id": "_2",
            "name": "Mozwire Project",
            "tag": "Mozwire Project",
            "level": 0,
            "childrenNum": 1,
        },
        // 
        // children
        // 
        {
            "id": "_1_1",
            "name": "Tiny-http",
            "level": 1,
            "isLeaf": true,
            "tags": ["Tiny-http Project"]
        },
        {
            "id": "_2_1",
            "name": "Mozwire Project",
            "level": 1,
            "isLeaf": true,
            "tags": ["Mozwire Project"]
        },
        {
            "id": "_2_2",
            "name": "Mozwire Project",
            "level": 1,
            "isLeaf": true,
            "tags": ["Mozwire Project"]
        },
    ],
    "edges": [
        {
            "source": "_1",
            "target": "_1_1"
        },
        {
            "source": "_2",
            "target": "_2_1"
        },
        {
            "source": "_2",
            "target": "_2_2"
        },
    ]
}

// Get the org data from backend
const orgTreeData =backend.data.getOrgTree().then((orgTree) => {
    let maxNumber = 8
    let parents = []
    let children = []
    let edges = []
    let parentId = 1
    let childrenId = 1
    for (const [key, value] of Object.entries(orgTree)) {
        if (maxNumber-- <= 0) {
            break
        }
        parents.push({
            id: "_" + parentId,
            name: key,
            tag: key,
            level: 0,
            childrenNum: value.orgSummary.numberOfRepos,
        })
        for (const [repo_key, repo_value] of Object.entries(value.repoSummaries)) {
            children.push({
                id: "_" + parentId + "_" + childrenId,
                name: repo_key,
                level: 1,
                isLeaf: true,
                tags: [key],
            })
            edges.push({
                source: "_" + parentId,
                target: "_" + parentId + "_" + childrenId,
            })
            childrenId += 1
        }

        parentId += 1
        childrenId = 1
    }

    return {
        nodes: [...parents, ...children],
        edges: [...edges],
    }
})

module.exports = () => {
    const canvas = <div style={`opacity: 0; width: 100%; height: 100%; transition: all 0.5s ease-in-out 0s;`}></div>
    const element = <div style={`width: 100%; height: 100%; position: relative; transition: all 0.5s ease-in-out 0s;`}>
        <div style={`width: 100%; font-size: 15pt; position: absolute; top: 3rem;`} class="centered">Loading...</div>
        {canvas}
    </div>
    const managerData = {
        width: 500, // will be changed upon load
        height: 500, // will be changed upon load
        growingEdgeLength: 1,
    }
    const config = {
        randomAssignmentPercentBounds: 0.75,
        nodeSizeRange: [120, 180],
        leafNode: {
            defaultLinkDistance: 120,
            defaultAnimationTime: 1700,
            defaultOptions: {
                size: 60,
                type: "animate-circle",
                style: {
                    lineWidth: 1,
                    opacity: 1,
                    fill: "#fff",
                },
                labelCfg: {
                    style: {
                        fontSize: 11,
                        lineHeight: 19,
                        fill: "#697B8C",
                    },
                    position: "center",
                }
            }
        },
        rootNode: {
            defaultLinkDistance: 250,
            style: {
                lineFill: 0,
            },
            labelCfg: {
                style: {
                    fontSize: 16,
                    lineHeight: 19,
                    fill: "#fff",
                },
                position: "center",
            }
        },
        edge: {
            growAnimationTime: 2000,
            animationRate: 100,
            style: {
                lineWidth: 0.5,
                opacity: 1,
                strokeOpacity: 1,
            }
        },
        layout: {
            timeoutWait: 400,
            default: {
                type: "force",
                nodeSize: (d) => {
                    return d.size / 2 + 5
                },
                // damping: 0.19,
                // maxSpeed: 1,
                gravity: 0.5,
                coulombDisScale: 0.005,
                nodeStrength: 0,
                collideStrength: ()=> 0.15,
                alphaDecay: 0.05,
                preventOverlap: true,
                // nodeSpacing: 20,
                linkDistance: (node) => {
                    return config.leafNode.defaultLinkDistance
                },
            },
            showChildNodes: {
                collideStrength: 0.15,
                nodeStrength: () => config.layout.default.nodeStrength,
                edgeStrength: () => 1,
            }
        },
    }
    let graph
    let showNodes = []
    let showEdges = []
    let curShowNodes = []
    let curShowEdges = []
    let nodes = []
    let edges = []
    let nodeMap = new Map()
    let edgesMap = new Map()
    let curShowNodesMap = new Map()
    let highlighting = false
    let currentFocus
    const gColors = []
    const unlightColorMap = new Map()
    
    // 
    // 
    // helpers
    // 
    // 
    
    // 
    // on click
    // 
    const onClickLeafNode = (node) => {
        // TODO: Redirect and load child node to tree view
        console.log("clicked leaf node is: ", node)
    }

    // 
    // set layout
    // 
    const setLayout = (layoutConfig) => {
        Object.assign(
            graph.get("layoutController").layoutCfg,
            layoutConfig
        )
    }

    //
    // get node color
    //
    const getColor = (nodeIndex) => {
        return gColors[nodeIndex % gColors.length]
    }
    
    // 
    // graph sizing
    // 
    const updateDimensions = ()=>{
        if (canvas instanceof Object) {
            managerData.width = canvas.scrollWidth
            managerData.height = canvas.scrollHeight
        }
        if (!graph || graph.get("destroyed")) {
            return
        } 
        graph.changeSize(managerData.width, managerData.height)
    }
    
    // 
    // node sizing
    // 
    const mapNodeSize = (nodes, propertyName, visualRange) => {
        let minp = 9999999999
        let maxp = -9999999999
        nodes.forEach((node) => {
            minp = node[propertyName] < minp ? node[propertyName] : minp
            maxp = node[propertyName] > maxp ? node[propertyName] : maxp
        })
        const rangepLength = maxp - minp
        const rangevLength = visualRange[1] - visualRange[0]
        nodes.forEach((node) => {
            node.size = ((node[propertyName] - minp) / rangepLength) * rangevLength + visualRange[0]
        })
    }

    // 
    // loading data
    // 
    const loadData = (data) => {
        //
        // sanity check
        //
        if (!(data.nodes instanceof Array)) {
            console.error("called loadData(), but there were no nodes")
            return
        }
        
        // setup the layout
        setLayout(config.layout.default)
        
        nodes = data.nodes
        edges = data.edges

        
        // 
        // create nodes
        // 
        showNodes = []
        showEdges = []
        nodeMap = new Map()
        edgesMap = new Map()
        for (const edge of edges) {
            // map the id
            edge.id = `${edge.source}-${edge.target}`
            edge.style = config.edge.style
            edgesMap.set(edge.id, edge)
        }
        canvas.style.opacity = 0.3
        for (const [nodeIndex, node] of Object.entries(nodes)) {
            nodeMap.set(node.id, node)
            const isNotRootNode = node.level !== 0
            if (isNotRootNode) {
                node.label = node.name
            } else {
                // get config data
                node.style    = {...node.style,    ...config.rootNode.style}
                node.labelCfg = config.rootNode.labelCfg
                
                // assign color
                node.style.fill = node.color = getColor(nodeIndex)
                // assign location
                node.x = Math.random() * (managerData.width * config.randomAssignmentPercentBounds)
                node.y = Math.random() * (managerData.height * config.randomAssignmentPercentBounds)
                // assign label
                node.label = node.childrenNum != null ? `${node.name}\n(${node.childrenNum})` : node.name
                // make visible
                showNodes.push(node)
            }
            
            mapNodeSize(showNodes, "childrenNum", config.nodeSizeRange)
            
            try {
                const forceLayout = graph.get("layoutController").layoutMethods[0]
                forceLayout.forceSimulation.stop()
            } catch (error) {
                
            }
        }
        graph.data({
            nodes: showNodes,
            edges: showEdges,
        })
        graph.positionsAnimate()
        
        setTimeout(() => {
            graph.layout()
            graph.render()
            // remove the loading
            element.removeChild(element.childNodes[0])
            // fade into view
            canvas.style.opacity = 1
        }, nodes.length * 25)
        
    }
    
    // 
    // Call code below after element has been mounted to the dom
    // 
    mountedToDom(element).then(() => {
        // update dimension data soon as mounted
        updateDimensions()
        // attach resize listener
        window.addEventListener("resize", updateDimensions)
        // load data as soon as it is ready
        orgTreeData.then(loadData)

        //
        // setup colors
        //
        nodeTheme.lightColors.forEach((lightColor, i) => {
            gColors.push("l(0) 0:" + lightColor + " 1:" + nodeTheme.darkColors[i])
            unlightColorMap.set(gColors[i], "l(0) 0:" + nodeTheme.uLightColors[i] + " 1:" + nodeTheme.uDarkColors[i])
        })

        //
        // setup graph object
        //
        G6.registerBehavior("double-finger-drag-canvas", {
            getEvents: () => ({ wheel: "onWheel" }),
            onWheel: (ev) => {
                if (ev.ctrlKey) {
                    const canvas = graph.get("canvas")
                    const point = canvas.getPointByClient(ev.clientX, ev.clientY)
                    let ratio = graph.getZoom()
                    if (ev.wheelDelta > 0) {
                        ratio = ratio + ratio * 0.05
                    } else {
                        ratio = ratio - ratio * 0.05
                    }
                    graph.zoomTo(ratio, {
                        x: point.x,
                        y: point.y,
                    })
                } else {
                    const x = ev.deltaX || ev.movementX
                    const y = ev.deltaY || ev.movementY || (-ev.wheelDelta * 125) / 3
                    translate(x, y)
                }
                ev.preventDefault()
            },
        })

        G6.registerNode(
            "bubble",
            {
                drawShape(cfg, group) {
                    const self = this
                    const r = cfg.size / 2
                    // a circle by path
                    const path = [["M", -r, 0], ["C", -r, r / 2, -r / 2, r, 0, r], ["C", r / 2, r, r, r / 2, r, 0], ["C", r, -r / 2, r / 2, -r, 0, -r], ["C", -r / 2, -r, -r, -r / 2, -r, 0], ["Z"]]
                    const keyShape = group.addShape("path", {
                        attrs: {
                            x: 0,
                            y: 0,
                            path,
                            fill: cfg.color || "steelblue",
                        },
                        name: "path-shape",
                    })

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
                    })

                    const spNum = 10 // split points number
                    const directions = [],
                        rs = []
                    self.changeDirections(spNum, directions)
                    for (let i = 0; i < spNum; i++) {
                        const rr = r + directions[i] * ((Math.random() * r) / 1000) // +-r/6, the sign according to the directions
                        if (rs[i] < 0.97 * r) rs[i] = 0.97 * r
                        else if (rs[i] > 1.03 * r) rs[i] = 1.03 * r
                        rs.push(rr)
                    }
                    keyShape.animate(
                        () => {
                            const path = self.getBubblePath(r, spNum, directions, rs)
                            return { path }
                        },
                        {
                            repeat: true,
                            duration: 10000,
                        }
                    )

                    const directions2 = [],
                        rs2 = []
                    self.changeDirections(spNum, directions2)
                    for (let i = 0; i < spNum; i++) {
                        const rr = r + directions2[i] * ((Math.random() * r) / 1000) // +-r/6, the sign according to the directions
                        if (rs2[i] < 0.97 * r) rs2[i] = 0.97 * r
                        else if (rs2[i] > 1.03 * r) rs2[i] = 1.03 * r
                        rs2.push(rr)
                    }
                    mask.animate(
                        () => {
                            const path = self.getBubblePath(r, spNum, directions2, rs2)
                            return { path }
                        },
                        {
                            repeat: true,
                            duration: 10000,
                        }
                    )
                    return keyShape
                },
                changeDirections(num, directions) {
                    for (let i = 0; i < num; i++) {
                        if (!directions[i]) {
                            const rand = Math.random()
                            const dire = rand > 0.5 ? 1 : -1
                            directions.push(dire)
                        } else {
                            directions[i] = -1 * directions[i]
                        }
                    }
                    return directions
                },
                getBubblePath(r, spNum, directions, rs) {
                    const path = []
                    const cpNum = spNum * 2 // control points number
                    const unitAngle = (Math.PI * 2) / spNum // base angle for split points
                    let angleSum = 0
                    const sps = []
                    const cps = []
                    for (let i = 0; i < spNum; i++) {
                        const speed = 0.001 * Math.random()
                        rs[i] = rs[i] + directions[i] * speed * r // +-r/6, the sign according to the directions
                        if (rs[i] < 0.97 * r) {
                            rs[i] = 0.97 * r
                            directions[i] = -1 * directions[i]
                        } else if (rs[i] > 1.03 * r) {
                            rs[i] = 1.03 * r
                            directions[i] = -1 * directions[i]
                        }
                        const spX = rs[i] * Math.cos(angleSum)
                        const spY = rs[i] * Math.sin(angleSum)
                        sps.push({ x: spX, y: spY })
                        for (let j = 0; j < 2; j++) {
                            const cpAngleRand = unitAngle / 3
                            const cpR = rs[i] / Math.cos(cpAngleRand)
                            const sign = j === 0 ? -1 : 1
                            const x = cpR * Math.cos(angleSum + sign * cpAngleRand)
                            const y = cpR * Math.sin(angleSum + sign * cpAngleRand)
                            cps.push({ x, y })
                        }
                        angleSum += unitAngle
                    }
                    path.push(["M", sps[0].x, sps[0].y])
                    for (let i = 1; i < spNum; i++) {
                        path.push(["C", cps[2 * i - 1].x, cps[2 * i - 1].y, cps[2 * i].x, cps[2 * i].y, sps[i].x, sps[i].y])
                    }
                    path.push(["C", cps[cpNum - 1].x, cps[cpNum - 1].y, cps[0].x, cps[0].y, sps[0].x, sps[0].y])
                    path.push(["Z"])
                    return path
                },
                setState(name, value, item) {
                    const shape = item.get("keyShape")
                    if (name === "dark") {
                        if (value) {
                            if (shape.attr("fill") !== "#fff") {
                                shape.oriFill = shape.attr("fill")
                                const uColor = unlightColorMap.get(shape.attr("fill"))
                                shape.attr("fill", uColor)
                            } else {
                                shape.attr("opacity", 0.2)
                            }
                        } else {
                            if (shape.attr("fill") !== "#fff") {
                                shape.attr("fill", shape.oriFill || shape.attr("fill"))
                            } else {
                                shape.attr("opacity", 1)
                            }
                        }
                    }
                },
            },
            "single-node"
        )

        G6.registerNode(
            "animate-circle",
            {
                setState(whatState, value, item) {
                    if (value) {
                        const shape = item.get("keyShape")
                        const label = shape.get("parent").get("children")[1]
                        if (whatState == "dissapearing") {
                            shape.animate(
                                (progress) => ({
                                    opacity: (1-progress)
                                }),
                                {
                                    duration: 2500,
                                }
                            )
                        }
                    }
                },
            },
            "circle"
        )

        G6.registerEdge(
            "animate-line",
            {
                drawShape(cfg, group) {
                    const self = this
                    let shapeStyle = self.getShapeStyle(cfg)
                    shapeStyle = Object.assign(shapeStyle, {
                        opacity: 0,
                        strokeOpacity: 0,
                    })
                    const keyShape = group.addShape("path", {
                        attrs: shapeStyle,
                        name: "path-shape",
                    })
                    return keyShape
                },
                afterDraw(cfg, group) {
                    
                },
                setState(name, value, item) {
                   
                },
            },
            "line"
        )

        graph = new G6.Graph({
            container: canvas,
            width: managerData.width,
            height: managerData.height,
            // linkCenter: true,
            layout: config.layout.default,
            modes: {
                default: ["drag-canvas"],
            },
            defaultNode: {
                type: "bubble",
                size: 95,
                labelCfg: {
                    position: "center",
                    style: {
                        fill: "white",
                        fontStyle: "bold",
                        fontSize: config.rootNode.labelCfg.fontSize,
                    },
                },
            },
            defaultEdge: {
                color: "#888",
                type: "animate-line", //'animate-line'
            },
        })
        graph.get("canvas").set("localRefresh", false)

        //
        //
        // setup graph events
        //
        //
        function translate(x, y) {
            let moveX = x
            let moveY = y

            // Get the current offset 
            const group = graph.get("group")
            const bbox = group.getBBox()
            const leftTopPoint = graph.getCanvasByPoint(bbox.minX, bbox.minY)
            const rightBottomPoint = graph.getCanvasByPoint(bbox.maxX, bbox.maxY)
            // If the x-axis is in the region, no more than 100 left and right are allowed
            if (x < 0 && leftTopPoint.x - x > managerData.width) {
                moveX = 0
            }
            if (x > 0 && rightBottomPoint.x - x < 0) {
                moveX = 0
            }

            if (y < 0 && leftTopPoint.y - y > managerData.height) {
                moveY = 0
            }
            if (y > 0 && rightBottomPoint.y - y < 0) {
                moveY = 0
            }
            graph.translate(-moveX, -moveY)
        }
        function refreshDragedNodePosition(e) {
            const model = e.item.get("model")
            model.fx = e.x
            model.fy = e.y
        }
        graph.on("node:dragstart", (e) => {
            graph.layout()
            refreshDragedNodePosition(e)
        })
        graph.on("node:drag", (e) => {
            refreshDragedNodePosition(e)
        })
        graph.on("node:dragend", (e) => {
            e.item.get("model").fx = null
            e.item.get("model").fy = null
        })
        graph.on("node:mouseenter", (e) => {
            const item = e.item
            const model = item.getModel()
            if (model.level === 0) {
                return
            }
            highlighting = true
            graph.setAutoPaint(false)
            const nodeItems = graph.getNodes()
            const edgeItems = graph.getEdges()
            nodeItems.forEach((node) => {
                graph.setItemState(node, "dark", true)
                node.getModel().light = false
            })
            graph.setItemState(item, "dark", false)
            model.light = true
            const tags = model.tags
            const findTagsMap = new Map()
            let mid = 0

            let fTag = ""
            // if the model is F node, find the leaves of it
            if (!model.isLeaf && model.level !== 0) {
                fTag = model.tag
                nodeItems.forEach((item) => {
                    const itemModel = item.getModel()
                    if (!itemModel.isLeaf) return
                    const modelTags = itemModel.tags
                    modelTags.forEach((mt) => {
                        const mts = mt.split("-")
                        if (mts[1] === fTag) {
                            graph.setItemState(item, "dark", false)
                            itemModel.light = true
                        }
                    })
                })
            }

            // find the tags
            tags.forEach((t) => {
                const ts = t.split("-")
                findTagsMap.set(ts[0], mid)
                mid++
                if (ts[1]) {
                    findTagsMap.set(ts[1], mid)
                    mid++
                }
            })
            // find the nodes with tag === tags[?]
            nodeItems.forEach((item) => {
                const node = item.getModel()
                if (findTagsMap.get(node.tag) !== undefined) {
                    graph.setItemState(item, "dark", false)
                    node.light = true
                }
            })
            edgeItems.forEach((item) => {
                const source = item.getSource().getModel()
                const target = item.getTarget().getModel()
                if (source.light && target.light) {
                    graph.setItemState(item, "dark", false)
                } else {
                    graph.setItemState(item, "dark", true)
                }
            })
            graph.paint()
            graph.setAutoPaint(true)
        })
        graph.on("node:mouseleave", () => {
            if (highlighting) {
                const nodeItems = graph.getNodes()
                const edgeItems = graph.getEdges()
                highlighting = false
                nodeItems.forEach((item) => {
                    graph.setItemState(item, "dark", false)
                })
                edgeItems.forEach((item) => {
                    graph.setItemState(item, "dark", false)
                })
            }
        })
        //
        // node onClick
        //
        graph.on("node:click", (eventObject) => {
            const item = eventObject.item
            const nodeThatGotClicked = item.getModel()
            
            //
            // if clicked a child node
            //
            if (nodeThatGotClicked.level !== 0) {
                onClickLeafNode(nodeThatGotClicked)
            //
            // if clicked root node
            //
            } else {
                console.log(`clicked root node`)
                // reset curShowNodes nad curShowEdges
                curShowNodes = []
                curShowEdges = []

                //
                // if clicking the already-focused-on node
                //
                if (currentFocus && currentFocus.id === nodeThatGotClicked.id) {
                    // then hide the children of the already-focused node
                    // and change the layout parameters to roots view
                    currentFocus = undefined
                    setLayout(config.layout.default)
                //
                // if clicking a not-already-focused-on node
                //
                } else {
                    // click other focus node, hide the current small nodes and show the related nodes
                    currentFocus = nodeThatGotClicked
                    // change layout config when showing child nodes
                    setLayout(config.layout.showChildNodes)
                    curShowNodesMap = new Map()

                    //
                    // find children of nodeThatGotClicked
                    //
                    const parentTag = nodeThatGotClicked.tag
                    for (const node of nodes) {
                        const isChild = node.tags instanceof Array && node.tags.includes(parentTag)
                        if (isChild) {
                            const randomAngle = Math.random() * 2 * Math.PI
                            const color = nodeThatGotClicked.color.split(" ")[1].substr(2) // no idea what this is doing 

                            //
                            // setup the node
                            //
                            Object.assign(node, config.leafNode.defaultOptions)
                            // set color (probably does nothing)
                            node.color = color
                            // set position (make it a little bit offset)
                            node.x = nodeThatGotClicked.x + (Math.cos(randomAngle) * nodeThatGotClicked.size) / 2 + 10
                            node.y = nodeThatGotClicked.y + (Math.sin(randomAngle) * nodeThatGotClicked.size) / 2 + 10
                            curShowNodes.push(node)
                            curShowNodesMap.set(node.id, node)

                            //
                            // setup the edges
                            //
                            const edgeId = `${nodeThatGotClicked.id}-${node.id}`
                            const edge = edgesMap.get(edgeId)
                            if (edge) {
                                edge.color = nodeThatGotClicked.color
                                curShowEdges.push(edge)
                            }
                        }
                    }

                    // find the edges whose target end source are in the curShowNodes
                    curShowNodes.forEach((nu, i) => {
                        const lu = nu.level
                        curShowNodes.forEach((nv, j) => {
                            if (j <= i) return
                            const lv = nv.level
                            let edgeId
                            if (lu < lv) {
                                edgeId = `${nu.id}-${nv.id}`
                            } else {
                                edgeId = `${nv.id}-${nu.id}`
                            }
                            let color = nodeThatGotClicked.color
                            if (nu.isLeaf) {
                                if (nv.level === 0 && nv.tag !== nodeThatGotClicked.tag) color = "#DFE5EB"
                                else if (!nv.isLeaf && nv.tags[0] !== nodeThatGotClicked.tag) {
                                    color = "#DFE5EB"
                                }
                            } else if (nv.isLeaf) {
                                if (nu.level === 0 && nu.tag !== nodeThatGotClicked.tag) color = "#DFE5EB"
                                else if (!nu.isLeaf && nu.tags[0] !== model.tag) {
                                    color = "#DFE5EB"
                                }
                            }
                            const edge = edgesMap.get(edgeId)
                            if (edge) {
                                edge.color = color
                                curShowEdges.push(edge)
                            }
                        })
                    })
                }
                graph.changeData({
                    nodes: showNodes.concat(curShowNodes),
                    edges: showEdges.concat(curShowEdges),
                })
                setTimeout(() => {
                    graph.positionsAnimate()
                }, 0)
            }
        })
        graph.on("canvas:click", () => {
            currentFocus = undefined
            const forceLayout = graph.get("layoutController").layoutMethods[0]
            forceLayout.forceSimulation.stop()
            setTimeout(() => {
                graph.positionsAnimate()
            }, 0)
            const nodeItems = graph.getNodes()
            const edgeItems = graph.getEdges()
            if (highlighting) {
                highlighting = false
                nodeItems.forEach((item) => {
                    graph.setItemState(item, "dark", false)
                })
                edgeItems.forEach((item) => {
                    graph.setItemState(item, "dark", false)
                })
            } else {
                nodeItems.forEach((item) => {
                    const model = item.getModel()
                    if (model.level === 0) {
                        graph.setItemState(item, "dark", false)
                    } else {
                        graph.setItemState(item, "disappearing", true)
                    }
                })
                edgeItems.forEach((item) => {
                    graph.setItemState(item, "disappearing", true)
                })
                curShowNodes = []
                curShowEdges = []
                setTimeout(() => {
                    setLayout(config.layout.default)
                    graph.changeData({
                        nodes: showNodes,
                        edges: showEdges,
                    })
                }, config.layout.timeoutWait)
            }
        })
    })

    return element
}
