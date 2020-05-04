import React from 'react';
import Aux from '../../hoc/_Aux';

const layout = (props) =>(
    <Aux>
        <div>   
            <p>Toolbar, SideDrawer, Backdrop</p>
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;