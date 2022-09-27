import React from "react";

function Box({backgroundColor, width, height}) {
    return (
        <div className="box"
             style={{backgroundColor: backgroundColor, width: width, height: height}}>
        </div>
    )
}

export default Box;
