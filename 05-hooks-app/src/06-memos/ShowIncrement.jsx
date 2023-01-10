import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    console.log('Tornat a generar :(')
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment(5);
            }}
        >
            +1
        </button>      
    )
})