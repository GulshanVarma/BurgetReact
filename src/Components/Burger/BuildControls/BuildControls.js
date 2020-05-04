import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)} 
                disabled={props.disabled[ctrl.type]} 
                // disable each bc acc to disabled array
            />
        ))}
        <p><strong>Total price: {props.price.toFixed(2)}$</strong></p>
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}>ORDER NOW</button>
            <br />
        <button 
        className={[classes.OrderButton,classes.Reset].join(' ')}
        onClick={props.reset}>RESET</button>    
    </div>
);

export default buildControls;