import { Box, Container, Stack, Typography, Button, Rating, Dialog, IconButton } from '@mui/material';
import React, { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '@emotion/react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Close } from '@mui/icons-material';
import ProductDetails from './ProductDetails';
import { useGetproductByNameQuery } from '../../Redux/product';


const Main = () => {


    const handleAlignment = (event, newValue) => {
        setmyDate(newValue)
    };
    const theme = useTheme()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
     


    const allProductsAPI = "products?populate=*"
    const menProductsAPI = "products?populate=*&filters[category][$eq]=men"
    const womenProductsAPI = "products?populate=*&filters[category][$eq]=women"
    const [myDate,setmyDate] = useState(allProductsAPI);
    const { data, error, isLoading } = useGetproductByNameQuery(myDate);


    if(data){
        console.log(data.data)
    }

if (isLoading){
    return(
        <Typography variant="h6"> LOADING............... </Typography>
    )
}
if (error){
    return(
        <Typography variant="h6"> {error.message}  </Typography>
    )
}
if (data){
    return (
        <Container sx={{ py: 9 }}>
            <Stack direction={"row"} alignContent={"center"} justifyContent={"space-between"} flexWrap={"wrap"} gap={3}>

                <Box>
                    <Typography variant="h6"> Selected Products</Typography>
                    <Typography fontWeight={300} variant="body1">
                        All our new arrivals in a exclusive brand selection
                    </Typography>
                </Box>


                <ToggleButtonGroup
                    color="error"
                    value={myDate}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    s={{
                        ".MuiSelected": {
                            border: "1px solid rgba(233, 69, 96, 0.5) !important",
                            color: "#e94560",
                            backgroundColor: "initial",
                        }
                    }}
                >
                    <ToggleButton sx={{ color: theme.palette.text.primary }} className="myButton" value={allProductsAPI} aria-label="left aligned">
                        All Products
                    </ToggleButton>
                    <ToggleButton sx={{ mx: "16px !important", color: theme.palette.text.primary }} className="myButton" value={menProductsAPI} aria-label="centered">
                        MEN CATEGORY
                    </ToggleButton>
                    <ToggleButton sx={{ color: theme.palette.text.primary }} className="myButton" value={womenProductsAPI} aria-label="right aligned">
                        WOMEN CATEGORY
                    </ToggleButton>

                </ToggleButtonGroup>
            </Stack>

            <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>

                {data.data.map((item) => {
                    return (
                        <Card key={item} sx={{ maxWidth: 333, mt: 6, ":hover .MuiCardMedia-root ": { rotate: "1deg", scale: "1.1", transition: "0.35s" } }}>
                            <CardMedia
                                sx={{ height: 277 }}
                                image={`${item.attributes.productImg.data[0].attributes.url}`}
                                title="green iguana"
                            />


                            <CardContent>
                                <Stack
                                    direction={"row"}
                                    justifyContent={"space-between"}
                                    alignItems={"center"}
                                >
                                    <Typography gutterBottom variant="h6" component="div">
                                        {item.attributes.productTitle}
                                    </Typography>

                                    <Typography variant="subtitle1" component="p">
                                    {item.attributes.productPrice}
                                    </Typography>
                                </Stack>

                                <Typography variant="body2" color="text.secondary">
                                {item.attributes.productDescription}

                                </Typography>

                            </CardContent>


                            <CardActions sx={{ justifyContent: "space-between" }}>
                                <Button onClick={handleClickOpen} sx={{ textTransform: "capitalize" }} size="large">
                                    <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small" />
                                    add to cart
                                </Button>
                                <Rating precision={0.1} name="read-only" value={item.attributes.productRating} readOnly />

                            </CardActions>



                        </Card>
                    )
                })}


            </Stack>





            <Dialog
                sx={{".MuiPaper-root": {minWidth: {xs:"100%", md: 800}}}}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                    <IconButton 
                    sx={{
                        ":hover": { color: "red", rotate: "180deg",
                        transition: "0.3s" },
                        position: "absolute",
                        top: 0, 
                        right: 10 
                        }} 
                        onClick={handleClose}>
                        <Close />
                    </IconButton>
                   
                   
                   <ProductDetails/>

            </Dialog>

        </Container>
    );
}
}

export default Main;