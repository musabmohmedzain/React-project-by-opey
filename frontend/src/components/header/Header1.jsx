  import { useContext } from "react";
  import { useState } from "react";

  import { ColorModeContext } from "../../theme";
  import {
    Box,
    Container,
    IconButton,
    ListItem,
    Stack,
    Typography,
    useTheme,
  } from "@mui/material";
  import {
    DarkModeOutlined,
    ExpandMore,
    LightModeOutlined,
  } from "@mui/icons-material";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import InstagramIcon from "@mui/icons-material/Instagram";
  import TwitterIcon from "@mui/icons-material/Twitter";

  import List from "@mui/material/List";
  import ListItemText from "@mui/material/ListItemText";
  import MenuItem from "@mui/material/MenuItem";
  import Menu from "@mui/material/Menu";

  const options = ["AR", "EN"];

  export default function Header1() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <Box
        sx={{
          bgcolor: "#2B3445",
          color: "#fff",
          py: "4px",
          borderBottomRightRadius: "4px",
          borderBottomLeftRadius: "4px",
        }}
      >
        <Container>
          <Stack direction={"row"} alignItems={"center"}>
            <Typography
              sx={{
                mr: 2,
                p: "3px 10px",
                bgcolor: "#D23f57",
                borderRadius: "12px",
                fontSize: "10px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              HOT
            </Typography>

            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "300",
                color: "#fff",
              }}
              variant="body2"
            >
              Free Express Shipping
            </Typography>

            <Box flexGrow={1} />
            <div>
              {theme.palette.mode === "light" ? (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <LightModeOutlined />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <DarkModeOutlined />
                </IconButton>
              )}
            </div>

            <List
              component="nav"
              aria-label="Device settings"
              sx={{ m: 0, p: 0 }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                <ListItemText
                  sx={{
                    ".MuiTypography-root": { fontSize: "12px", color: "#fff" },
                  }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ fontSize: "16px" }} />
              </ListItem>
            </List>

            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>

            <TwitterIcon
              sx={{
                fontSize: "25px",
                color: "#fff",
              }}
            />
            <FacebookIcon
              sx={{
                fontSize: "25px",
                mx: 1,
                color: "#fff",
              }}
            />
            <InstagramIcon
              sx={{
                fontSize: "25px",
                color: "#fff",
              }}
            />
          </Stack>
        </Container>
      </Box>
    );
  }
