import IconButton from "@mui/material/IconButton";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HouseIcon from "@mui/icons-material/House";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ListItemText from "@mui/material/ListItemText";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { styled, useTheme } from "@mui/material/styles";
import { useNavigate, Link } from "react-router-dom";

interface IFitAppBar {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const drawerWidth = 240;

const FitDrawer = (props: IFitAppBar) => {
  const { open, setOpen } = props;
  const navigate = useNavigate();
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickNavegarBemVindo = () => {
    navigate("/bem-vindo");
  };

  const handleClickNavegarTreinos = () => {
    navigate("/treinos");
  };

  const handleClickNavegarFinanceiro = () => {
    navigate("/financeiro");
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClickNavegarBemVindo}>
            <ListItemIcon>
              <HouseIcon />
            </ListItemIcon>
            <ListItemText primary={"Bem vindo!"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItem button onClick={handleClickNavegarTreinos}>
            <ListItemIcon>
              <FitnessCenterIcon />
            </ListItemIcon>
            <ListItemText primary="Treinos" />
          </ListItem>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClickNavegarFinanceiro}>
            <ListItemIcon>
              <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Financeiro" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default FitDrawer;
