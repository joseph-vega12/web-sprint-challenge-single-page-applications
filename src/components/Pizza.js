import React from 'react';

export default function Pizza() {
    return (
        <>
            <h1>CREATE YOUR OWN PIZZA</h1>

            <form>
                <label>
                    name:
                <input type='text' />
                </label>
                <label>
                    Choose Your Size:
                <select name="size">
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
                        <input type="checkbox" name="pepporoni"/>
                        Pepporoni
                    </label>
                    <label>
                        <input type="checkbox" name="ham"/>
                        Ham
                    </label> <label>
                        <input type="checkbox" name="pineaple"/>
                        Pineaple
                    </label> <label>
                        <input type="checkbox" name="bacon" />
                        Bacon
                    </label>
                </label>
                <label>
                    <input type="text" name="instructions"/>
                    Special Instructions
                </label>
                <button>Submits</button>
            </form>
        </>
    );
}