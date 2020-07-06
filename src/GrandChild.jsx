import React from 'react'
import { connect } from "react-redux";

const GrandChild = (props) => {
    console.log(props);
    
    return (
        <div className="grandchild-component">
          <div>This is a grandchild component </div>
          <div className="emp">Count:{props.count} </div>
        </div>
    )
}
const mapStateToProps = state =>({
    count : state.count
})

export default connect(mapStateToProps,null)(GrandChild)
