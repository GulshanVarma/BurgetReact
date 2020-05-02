import React from 'react';
import Aux from '../../hoc/_Aux';
import classes from './Layout.module.css';

const layout = (props) =>(
    <Aux>
        <div>   
            <h1 className={classes.Red}>testing css modules</h1>
            <p>Toolbar, SideDrawer, Backdrop</p>
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;