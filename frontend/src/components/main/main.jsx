    import { useTheme } from "@emotion/react";
    import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Dialog,
    IconButton,
    Rating,
    Stack,
    Typography,
    } from "@mui/material";
    import ToggleButton from "@mui/material/ToggleButton";
    import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
    import { useState } from "react";
    import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
    import { Close } from "@mui/icons-material";
    import ProductDetails from "./ProductDetails";
    import { useGetProductByNameQuery } from "../../Redux/product";

    export default function Main() {
    const [alignment, setAlignment] = useState("all");

    const handleAlignment = (event, newValue) => {
        if (newValue !== null) {
        setAlignment(newValue);
        }
    };
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getQueryFromAlignment = (key) => {
        switch (key) {
        case "all":
            return "products?populate=*";
        case "men":
            return "products?populate=*&filters[productCategory][$eq]=men";
        case "women":
            return "products?populate=*&filters[productCategory][$eq]=women";
        default:
            return "products?populate=*";
        }
    };

    const { data, error, isLoading } = useGetProductByNameQuery(
        getQueryFromAlignment(alignment)
    );

    if (isLoading) {
        return <Typography variant="h6">LOADING.........</Typography>;
    }
    if (error) {
        return <Typography variant="h6">{error.message}</Typography>;
    }

    if (data) {
        return (
        <Container sx={{ py: 9 }}>
            <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
            gap={3}
            >
            <Box>
                <Typography variant="h6">Selected Products</Typography>
                <Typography fontWeight={300} variant="body1">
                All our Arrivals in a exclusive brand selection
                </Typography>
            </Box>

            <ToggleButtonGroup
                color="error"
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                sx={{
                "mui-selected": {
                    border: "1px solid rgba(244, 69, 96, 0.5) !important",
                    color: "#e94560",
                    backgroundColor: "initial",
                },
                }}
            >
                <ToggleButton
                sx={{ color: theme.palette.text.primary }}
                className="myButton"
                value="all"
                aria-label="left aligned"
                >
                All Products
                </ToggleButton>
                <ToggleButton
                sx={{ mx: "16px !important", color: theme.palette.text.primary }}
                className="myButton"
                value="men"
                aria-label="centered"
                >
                MEN Category
                </ToggleButton>
                <ToggleButton
                sx={{ color: theme.palette.text.primary }}
                className="myButton"
                value="women"
                aria-label="right aligned"
                >
                Women Category
                </ToggleButton>
            </ToggleButtonGroup>
            </Stack>

            <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            >
            {data?.data.map((item) => {
                return (
                <Card
                    key={item.id}
                    sx={{
                    maxWidth: 333,
                    mt: 6,
                    ":hover .MuiCardMedia-root": {
                        rotate: "1deg",
                        scale: "1.1",
                        transition: "0.35s",
                    },
                    }}
                >
                    <CardMedia
                    sx={{ height: 277 }}
                    image={`${item.productImg[0].url}`}
                    title="green iguana"
                    />

                    <CardContent>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Typography gutterBottom variant="h6" component={"div"}>
                        {item.productTitle}
                        </Typography>

                        <Typography variant="subtitle1" component={"p"}>
                        ${item.productPrice}
                        </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                        {item.productDescription}
                    </Typography>
                    </CardContent>

                    <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                        onClick={handleClickOpen}
                        sx={{ textTransform: "capitalize" }}
                        size="large"
                    >
                        <AddShoppingCartOutlinedIcon
                        sx={{ mr: 1 }}
                        fontSize="small"
                        />
                        add to cart
                    </Button>
                    <Rating
                        precision={0.5}
                        name="read-only"
                        value={item.productRating}
                        readOnly
                    />
                    </CardActions>
                </Card>
                );
            })}
            </Stack>

            <Dialog
            sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <IconButton
                sx={{
                ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
                position: "absolute",
                top: 0,
                right: 10,
                }}
                onClick={handleClose}
            >
                <Close />
            </IconButton>

            <ProductDetails />
            </Dialog>
        </Container>
        );
    }
    }
