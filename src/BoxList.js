import React, { useState } from "react";
import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js";


function BoxList(){
    const [boxList, setBoxList] = useState([])

    function addBox(newBoxData){
        setBoxList(items => [...items, newBoxData])
    }

    return (
        <div className="Boxlist">
            <div>
                <NewBoxForm addBox={addBox} />
            </div>
            <div>
                {boxList.map((box,id) =>
                    <Box backgroundColor={box.boxColor}
                         width={box.boxWidth}
                         height={box.boxHeight}
                         key={id}
                    />
                )}
            </div>
        </div>
    )
}

export default BoxList;
