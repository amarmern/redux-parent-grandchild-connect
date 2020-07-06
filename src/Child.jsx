import React from 'react'
import GrandChild from "./GrandChild";

const Child = (props) => {
    return (
        <div className="child-component">
         <div>This is the child component</div>
    <GrandChild />
        </div>
    )
}

export default Child
