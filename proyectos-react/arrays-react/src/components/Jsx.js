import React, { Fragment } from 'react';

const Jsx = () => {

    // const saludo = 'saludo';
    const temperatura = 21;
    return (
        
        <Fragment>
            <h1>¿Frío o calor?</h1>
            <h4>
                {
                    temperatura > 20 ? 'Calor' : 'Frío'
                }
            </h4>
        </Fragment>

     );
}
 
export default Jsx;