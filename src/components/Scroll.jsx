import React from "react";

const Scroll = (props) => {
    return (
        <div className="shadow-5 bt bw1 b--light-silver" style={{overflowY: 'scroll',  height: '500px'}}>
            {props.children}
        </div>
    );
}
export default Scroll;