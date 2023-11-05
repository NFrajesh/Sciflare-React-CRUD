import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import ListProducts from "./listProducts";

const Products = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <ListProducts />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Products;
