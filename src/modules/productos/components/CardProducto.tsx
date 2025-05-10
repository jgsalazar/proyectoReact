import { Card, CardActionArea, CardMedia, CardContent, Typography, Rating, Button, Box } from '@mui/material'
import React from 'react'
import { ProductoType } from '../types/productoTypes'

interface CardProductoProps {
    producto: ProductoType;
}

const CardProducto = ({producto}:CardProductoProps) => {
  return (
    <Card variant='outlined'>
        <CardActionArea sx={{display:"flex"}}>
            <CardMedia
            component="img"
            //height="140"
            //width={240}
            image={producto.thumbnail}
            alt="thumbnail"
            sx={{width:'240px'}}
            />
            <CardContent sx={{flexGrow:1}}>
                <Typography gutterBottom variant="h5" component="div">
                    {producto.title}
                </Typography>
                <Box display={'flex'} gap={1}>
                    <Rating 
                        name="half-rating-read" 
                        defaultValue={producto.rating} 
                        precision={0.5}
                        size='small' 
                        readOnly />
                    <Typography variant='caption' color='info'>{producto.rating}</Typography>
                </Box>
                <Typography variant="body2" color='text.secondary'>
                    {producto.shippingInformation}
                </Typography>
                <Typography color='info' fontWeight={'bold'}>
                    {producto.brand}
                </Typography>
                <Typography variant='h4' fontWeight={'bold'}>
                    ${producto.price}
                </Typography>
                <Typography variant='body2'>
                    {producto.warrantyInformation}
                </Typography>
                <Button variant='contained' sx={{borderRadius:'30px', backgroundColor:'purple',textTransform:'none'}}>
                    Add to cart
                </Button>
            </CardContent>
        </CardActionArea>
    </Card>
)
}

export default CardProducto