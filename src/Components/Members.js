import React from "react";

const Members = props => {
    console.log(props);
    
    return (
        <div className="members-list">
            {props.membersList.map((member, index) => {
                console.log(member);
                return (
                    <div style = {{border: "2px solid black"}} key={index}>
                        <h2>{member.name}</h2>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                    </div>
                );
                
            })}
        </div>
    );

};

export default Members;