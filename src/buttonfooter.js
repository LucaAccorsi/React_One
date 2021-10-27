import * as React from 'react';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';


export default function ButtonFooter() {
    return (
        <div>
            <ButtonGroup variant="text" aria-label="text button group">
                <Button href='https://twitter.com/?lang=it' target='_blank' style={{ color: '#3378c8' }}>TWITTER</Button>
                {/* <Divider orientation="vertical" flexItem /> */}
                <Button href='http://it-it.facebook.it/' target='_blank' style={{ color: '#3378c8' }}>FACEBOOK</Button>
            </ButtonGroup>
        </div>
    );
}



