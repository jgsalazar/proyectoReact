import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();

  return (
    <>
      <Box>
        <Typography>Página Principal</Typography>
        <Button variant="contained"
          onClick={() => {router.push("/productos")}}
        >
          Ver productos
        </Button>
      </Box>
      
    </>
  );
}
