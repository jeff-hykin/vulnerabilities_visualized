require("../systems/on_scroll")
const GraphDisplay = require("../skeletons/GraphDisplay")
const BaseTree = require("../skeletons/BaseTree")
const InfoGraphic = require("../skeletons/InfoGraphic")

const treeData = 
  {
    name: 'topLevel',
    parent: 'null',
    blurb: 10,
    type: 'black',
    level: 'black',
    children: [
      {
        name: 'midLevel',
        parent: 'topLevel',
        blurb: 5,
        type: 'black',
        level: 'none',
        children: [
          {
            name: 'lowA',
            parent: 'midLevel',
            blurb: 5,
            type: 'Type of bug',
            level: 'red'
          },
          {
            name: 'lowB',
            parent: 'midLevel',
            blurb: 18,
            type: 'Type of vulnerability',
            level: 'red'
          }
        ]
      },
      {
        name: 'midLevelB',
        parent: 'topLevel',
        blurb: 10,
        type: 'grey',
        level: 'none',
        children: [
          {
            name: 'lowC',
            parent: 'midLevelB',
            blurb: 5,
            type: 'Type of vulnerability',
            level: 'red'
          },
          {
            name: 'lowD',
            parent: 'midLevelB',
            blurb: 18,
            type: 'Type of vulnerability',
            level: 'red'
          }
        ]
      }
    ]
  }

const org = [treeData, treeData];

module.exports = ({ children, ...properties }) => {
    let thing
    // setTimeout(() => {
    //     let listener = e=>(e.preventDefault(),console.log(e))
    //     console.log(`thing is:`,thing)
    //     thing.addEventListener("scroll", listener)
    //     // thing.addEventListener("wheel", listener)
    //     // thing.addEventListener("onscroll", listener)
    //     // thing.addEventListener("onScroll", listener)
    //     // thing.addEventListener("onsscroll", listener)
    //     // thing.addEventListener("sscroll", listener)
    // }, 2000)

    let orgSelected = false;
    let treeSelected = null;
    return <body class="column centered" style="height: 100vh; overflow: hidden;">
        {orgSelected && treeSelected ? <BaseTree treeData={treeData}/> : orgSelected ? <div>
        {org.map((tree, i) => <div style={`position: absolute; transform: translate(${i * 100 / org.length}%,${i % 2 * -50}px)`}><BaseTree treeData={tree}/></div>)}
        </div> : <div className="orgBubble">
            {org.map((tree, i) => {
                  return <div style={`position: absolute; transform: translate(${i * 100 / org.length}%,${i % 2 * -50}px); pointer-events: none;`}><BaseTree treeData={tree}/></div>
            })}</div>}
        <InfoGraphic>
            <div class="centered" style="width: 100%; transform: scale(4)" >
                {thing = <div style="height: 1rem; width: 2rem; overflow: scroll; background-color: red;">
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                </div>}
            </div>
            
            <div style="min-height: 10rem">
                <h3>Test Data</h3>
            </div>
            <div style="min-height: 10rem">
                <h3>Test Data</h3>
            </div>
            <div style="min-height: 10rem">
                <h3>Test Data</h3>
            </div>
            <div style="min-height: 10rem">
                <h3>Test Data</h3>
            </div>
        </InfoGraphic>
    </body>
}