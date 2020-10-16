import React from 'react';

export default function Form(props){

    const { update, submit,values } = props;

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        update(name, valueToUse);
    }

    const onSubmit = (evt) => {
        evt.preventDefault(); 
        submit();
    }

    return (
        <>
        <form onSubmit={onSubmit}>
                <label>
                    name:
                <input type='text' name="name" onChange={onChange} value={values.name}/>
                </label>
                <label>
                    Choose Your Size:
                <select name="size" onChange={onChange} value={values.size}>
                        <option>---SELECT---</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>X-Large</option>
                    </select>
                </label>
                <label>
                    Toppings:
                    <label>
                        <input type="checkbox" name="pepporoni" onChange={onChange} value={values.pepporoni}/>
                        Pepporoni
                    </label>
                    <label>
                        <input type="checkbox" name="ham" onChange={onChange} value={values.ham}/>
                        Ham
                    </label> <label>
                        <input type="checkbox" name="pineaple" onChange={onChange} value={values.pineaple}/>
                        Pineaple
                    </label> <label>
                        <input type="checkbox" name="bacon" onChange={onChange} value={values.bacon}/>
                        Bacon
                    </label>
                </label>
                <label>
                    <input type="text" name="instructions" onChange={onChange} value={values.instructions}/>
                    Special Instructions
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}