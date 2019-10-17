import React, { useState } from "react";
import Members from "./Members";

const TeamForm = props => {

    const [team, setTeam] = useState({
        name: "",
        email: "",
        role: "",
      
      });
   
    const changeHandler = (event) => {
        setTeam({...team, [event.target.name]: event.target.value})
        
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(team);
        setTeam({name: "", email: "", role: ""})
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name: </label>
                <input
                name="name"
                id="name"
                type="text"
                placeholder="name"
                onChange={changeHandler}
                value={team.name}
                />

                <label htmlFor="email">Email: </label>
                <input
                name="email"
                id="email"
                type="text"
                placeholder="email"
                onChange={changeHandler}
                value={team.email}
                />

                <label htmlFor="role">Role </label>
                <input
                name="role"
                id="role"
                type="text"
                placeholder="role"
                onChange={changeHandler}
                value={team.role}
                />

                <button type="submit">Add Member</button>

            </form>
        </div>
    );
    

}

export default TeamForm;