import React, { useState } from "react";

const TeamForm = props => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        role: "",

    });

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input
            name="name"
            id="name"
            type="text"
            placeholder="name"
            value={form.name}
            />

<label htmlFor="email">Email</label>
            <input
            email="email"
            id="email"
            type="text"
            placeholder="email"
            value={form.email}
            />

<label htmlFor="role">Role</label>
            <input
            role="role"
            id="role"
            type="text"
            placeholder="role"
            value={form.role}
            />







        </form>




    );


}

export default TeamForm;