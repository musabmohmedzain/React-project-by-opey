    import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
    import React from "react";

    export default function ProductDetails() {
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            gap: 2.5,
            flexDirection: {xs: "column", sm: "row"}
        }}>
        <Box sx={{display: "flex"}}>
            <img width={300} src="/images/1.jpg" alt="" />
        </Box>

        <Box sx={{textAlign: {xs: "center", sm: "left"}}}>
            <Typography variant="h5">WOMEN'S FASHION</Typography>
            <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h5">
            $12.99
            </Typography>

            <Typography variant="body1">
            A luxurious bouquet made with fresh red roses, wrapped in elegant
            paper. Perfect for romantic occasions, anniversaries, or to express
            </Typography>

            <Stack sx={{justifyContent: {xs: "center", sm: "left"}}} direction={"row"} gap={1} my={2}>

                {["/images/2.jpg", "/images/3.jpg", ].map((item) => {
                    return(
                        <img width={90} height={100} style={{borderRadius: 3}} key={item} src={item} alt="" />
                    )
                })}

            </Stack>

            <Button
            sx={{ textTransform: "capitalize", mb: {xs: 1, sm: 0}}}
            variant="contained"
            >
            <AddShoppingCartOutlined sx={{mr:1}} fontSize="small" />
            Buy now
            </Button>
        </Box>
        </Box>
    );
    }
