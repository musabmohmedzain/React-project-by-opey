    import { Box, Container, Divider, Stack, Typography } from "@mui/material";
    import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
    import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
    import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
    import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
    import { useTheme } from "@emotion/react";
    import { useMediaQuery } from "@mui/material";

    export default function IconSection() {
        const theme = useTheme()
    return (
        <Container sx={{ bgcolor: theme.palette.mode === "dark"? "#000" : "#fff", mt: 3, }}>
        <Stack
            divider={
            useMediaQuery("(min-width:600px)") ? (
                <Divider orientation="vertical" flexItem />
            ) : null
            }
            sx={{ flexWrap: "wrap" }}
            direction={"row"}
            alignItems={"center"}
        >
            <MyBox
            icon={<ElectricBoltIcon />}
            title={"Fast Delivery"}
            subTitle={"Start from 10$"}
            />
            <MyBox
            icon={<WorkspacePremiumOutlinedIcon />}
            title={"Money Guarantee"}
            subTitle={"7 Dayes Back"}
            />
            <MyBox
            icon={<AccessAlarmOutlinedIcon />}
            title={"365 Dayes"}
            subTitle={"For Free return"}
            />
            <MyBox
            icon={<CreditScoreOutlinedIcon />}
            title={"Payment"}
            subTitle={"Secure System"}
            />
        </Stack>
        </Container>
    );
    }

    const MyBox = ({ icon, title, subTitle }) => {
    const theme = useTheme();
    return (
        <Box
        sx={{
            width: 250,
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            gap: 3,
            justifyContent : useMediaQuery("(min-width:600px)") ? "center" : "left",
            py: 1.6,
        }}
        >
        {icon}
        <Box>
            <Typography variant="body1">{title}</Typography>
            <Typography
            sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
            variant="body1"
            >
            {subTitle}
            </Typography>
        </Box>
        </Box>
    );
    };
