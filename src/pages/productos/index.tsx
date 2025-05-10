import CardProducto from '@/modules/productos/components/CardProducto'
import { ProductoType } from '@/modules/productos/types/productoTypes'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Pagination, Rating, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const DEFAULT_LIMIT = 10;
const DEFAULT_PAGE = 1;

const getSkip = (page:number) => (page - 1) * DEFAULT_LIMIT;

const getTotalPages = (total:number) => Math.ceil(total / DEFAULT_LIMIT);

const PaginaProductos = () => {
    const [productos, setProductos] = useState<ProductoType[]>([]);
    const [loading, setLoading] = useState(false);

    const [busqueda, setBusqueda] = useState("")
    const [pagina,setPagina] = useState(DEFAULT_PAGE)
    const [totalPages,setTotalPages] = useState(0)

    useEffect(() => {
        setLoading(true);
        const skip = getSkip(pagina);

        fetch(`https://dummyjson.com/products/search?q=${busqueda}&limit=${DEFAULT_LIMIT}&skip=${skip}`)
        .then(res => res.json())
        .then((datos) => {
            setProductos(datos.products);
            const totalPages = getTotalPages(datos.total)
            setTotalPages(totalPages)
        })
        .catch((error)=>{        
            console.error(error);
        })
        .finally(()=>{
            setLoading(false);
        });
    },[pagina,busqueda])

  return (
    <Container maxWidth={'xl'} >
        <Box sx={{marginBottom:2}}>
            <Typography variant='h6' fontWeight={'bold'}>
                Results
            </Typography>
            <Typography variant='body2' color="textSecondary">
                Check each producto page for other buying options
            </Typography>
        </Box>
        <Stack spacing={2}>
            <TextField id="searchProduct" label="Buscar producto" variant="outlined"
                onChange={(e)=>{
                    const valor = e.target.value;
                    setBusqueda(valor);
                    setPagina(DEFAULT_PAGE);
                }}
            />
            {loading && <Typography>Cargando productos... </Typography>}
            {productos.map((producto)=>(
                <CardProducto key={producto.id} producto={producto}/>
            ))}
            <Box display={"flex"} justifyContent={"center"}>
                <Pagination count={totalPages} variant="outlined" shape="rounded"
                onChange={(e, pagina) => {setPagina(pagina)}}
            />
            </Box>
            <Box height={"100px"}/>
        </Stack>
    </Container>
  )
}

export default PaginaProductos