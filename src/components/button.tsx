import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

type Props = {
  setToggle: (filterToggle:string) => void,
  filterToggle: string
}

const VariantButtonGroup: React.FC<Props> = ( {setToggle, filterToggle }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          my: 2.7,
        },
      }}
    >

      <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ marginLeft: '140px' }}>

        <Button id='x' style={{ marginRight: '1px', boxShadow: '0px 1px 2px grey', marginTop: '1px', borderColor: '#3378c8' }} key='one'
        variant={filterToggle === 'in' ? 'contained' : 'outlined'}
        onClick={() => {filterToggle === 'in' ? setToggle('all') : setToggle('in') }} >IN STOCK</Button>

        <Button id='y' style={{ boxShadow: '0px 1px 2px grey', marginTop: '1px' }} key='two'
        variant={filterToggle === 'out' ? 'contained' : 'outlined'}
         onClick={() => {filterToggle === 'out' ? setToggle('all') : setToggle('out') }}>OUT OF STOCK</Button>

      </ButtonGroup>
    </Box>
  );
}

export default VariantButtonGroup;