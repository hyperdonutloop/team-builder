import React from "react";

const Members = props => {
    console.log(props);
    
    return (
        <div className="members-list">
            {props.membersList.map((member, index) => {
                console.log(member);
                
            })}
        </div>
    )

}

export default Members;