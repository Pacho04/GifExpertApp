import React, { useState } from 'react'
import PropType from 'prop-types'

export const AddCategory = ({setCategory}) => {
    
    const [inputValue, setinputValue] = useState('');
    
    const handleInputChange = (e) =>{
        setinputValue(e.target.value);
    }

    const handleInputSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategory(cats => [inputValue, ...cats]);
            setinputValue('');
        }
    }

    return (
        <>
        <form onSubmit={handleInputSubmit}>
            <h3 className='animate__animated animate__heartBeat'>Buscar:</h3>
            <input 
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
        
        <p className='animate__animated animate__pulse'><strong>Por Ejemplo: Naruto, Dragon Ball, Pokemon... etc.</strong></p>
        </>
    )
}

AddCategory.propTypes = {
    setCategory: PropType.func.isRequired
}
