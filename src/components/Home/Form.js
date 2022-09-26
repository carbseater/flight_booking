import React from 'react';

function Form() {

    return (
        <div>
            <form className='form_body'>
                <input placeholder='Enter source' type="text" />
                <input placeholder='Enter destination' type="text" />
                <input placeholder='Date' type="date" />
                <input placeholder="Time" type="time" />
            </form>
        </div>
    );
}

export default Form;