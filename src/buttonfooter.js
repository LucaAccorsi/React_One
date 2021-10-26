import * as React from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import Twitter from './twitter';
import Facebook from './facebook';


export default function ButtonFooter() {
    return (
        <div>
            <Link to='/twitter'>
                <Button style={{color: '#3378c8'}}>TWITTER</Button>
            </Link>
        {/* <Divider orientation="vertical" flexItem /> */}
            <Link to='/facebook'>
                <Button style={{color: '#3378c8'}}>FACEBOOK</Button>
            </Link>
        </div>
        );
    }
    
    
    
