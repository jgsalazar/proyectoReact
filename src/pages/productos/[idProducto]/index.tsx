import { useRouter } from 'next/router'
import React from 'react'

const PaginaDetalleProducto = () => {
    const router = useRouter();
    const idProducto = router.query.idProducto;

  return (
    <div>PaginaDetalleProducto: {idProducto}</div>
  )
}

export default PaginaDetalleProducto