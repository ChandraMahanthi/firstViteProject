import React from 'react'
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Electronic({product}) {
    const{image,rating,price,title,id} = product ;
  return (
    <div>
            <div className='card'> 
                <img src={image} alt=""/>
                <h2>{title}</h2>    
                <p>{price}</p>
                <Link to={`/productDetails/${id}`}>
                    <button>Product Details</button>
                </Link>
                <h4>{}</h4>
            </div> 
{/* import Stack from '@mui/material/Stack'; */}
{/* import DeleteIcon from '@mui/icons-material/Delete'; */}
{/* import AlarmIcon from '@mui/icons-material/Alarm'; */}

    <Stack direction="row" spacing={1}>
      {/* <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton> */}
      {/* <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton> */}
      {/* <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton> */}
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>



    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>

    </div>
  )
}

export default Electronic