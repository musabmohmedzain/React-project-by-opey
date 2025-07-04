    import { KeyboardArrowUp } from "@mui/icons-material";
    import { Fab, useScrollTrigger, Zoom } from "@mui/material";

    export default function ScrollToTop() {
    return (
        <Zoom in={useScrollTrigger({threshold : 100})}>
        <Fab
        onClick={() => {
            window.scrollTo(0,0);
        }}
            variant="extended"
            size="small"
            sx={{ position: "fixed", bottom: 33, right: 33 }}
            color="primary"
            aria-label="add"
        >
            <KeyboardArrowUp fontSize="medium" />
        </Fab>
        </Zoom>
        
    );
    }
