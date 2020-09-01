import React, { useState } from 'react';
import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';

export const GifExpertApp = () => {

    const [category, setCategory] = useState(['']);

    return ( 
        <>
            <h2 className='animate__animated animate__heartBeat'>Busca el Gif de tu personaje favorito</h2>
            <hr></hr>
            <AddCategory setCategory={setCategory}/>
            <ol>
                {
                    category.map(category =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    );
}
 