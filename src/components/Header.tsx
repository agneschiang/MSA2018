import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import { Link } from 'react-router-dom';




export const Header: React.StatelessComponent<{}> = () => {
    return (
            <AppBar position="static"  style= {{ backgroundColor: '#999'}}>
                <Toolbar>
                    <IconButton  aria-label="Menu" color="inherit">
                        <MenuIcon aria-haspopup="true"/>
                    </IconButton>
                    <Typography variant="display2" color="inherit">
                        <Link style={{color: "white"}} to="/">Weather Forcast / News </Link>
                        <Link to="/ThirdComponent"> Weather </Link>
                        <Link to="/News"> News</Link>
                        
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}