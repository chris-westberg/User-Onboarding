import React from 'react';
import styled from 'styled-components';


const Form = () => {
    const Formulated = styled.form `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
    const Label = styled.label `
        display: flex;
        flex-direction: column;
        font-size: 15pt;
    `
    return (
        <div>
            <Formulated>
                <Label htmlFor='name'>
                    Name:
                    <input type='text' placeholder='Enter Name...' />
                </Label>
                <Label htmlFor='email'>
                    Email:
                    <input type='email' placeholder='Enter Email...' />
                </Label>
                <Label htmlFor='password'>
                    Password: 
                    <input type='password' />
                </Label>
                <Label htmlFor='photo'>
                    <input type='file' />
                </Label>
                <label htmlFor='terms'>
                    <input type='checkbox' />
                    Terms of Service
                </label>
            </Formulated>
        </div>
    )
}

export default Form;