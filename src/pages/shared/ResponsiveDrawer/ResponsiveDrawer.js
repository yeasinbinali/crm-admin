import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Outlet } from "react-router";
import { Link, ListItemButton, ListItemIcon } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import PersonIcon from "@mui/icons-material/Person";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import StarBorder from "@mui/icons-material/StarBorder";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <Divider />
      <List sx={{ display: "grid", gridColumn: "auto" }}>
        <Link
          href="/"
          sx={{
            textDecoration: "none",
            fontSize: "18px",
            marginLeft: "20px",
            marginBottom: "10px",
            color: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <DashboardIcon sx={{ marginRight: "3px" }} />
          Dashboard
        </Link>
        <Link
          href="/customer"
          sx={{
            textDecoration: "none",
            fontSize: "18px",
            marginLeft: "20px",
            marginBottom: "10px",
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <GroupAddIcon sx={{ marginRight: "3px" }} />
            Customers{" "}
          </Typography>
          <ArrowBackIosNewIcon sx={{ fontSize: "14px", marginRight: "5px" }} />
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            fontSize: "18px",
            color: "black",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              marginLeft: "20px",
              marginBottom: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={handleClick}
          >
            <Typography sx={{ display: "flex", alignItems: "center", fontSize: '18px' }}>
              <GroupAddIcon sx={{ marginRight: "3px" }} />
              Customer
            </Typography>
            {open ? (
              <ExpandLess />
            ) : (
              <ArrowBackIosNewIcon
                sx={{ fontSize: "14px", marginRight: "5px" }}
              />
            )}
          </Typography>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </Link>
        <Link
          href="/transaction"
          sx={{
            textDecoration: "none",
            fontSize: "18px",
            marginLeft: "20px",
            marginBottom: "10px",
            color: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <AccountBalanceWalletIcon sx={{ marginRight: "3px" }} />
          Transaction
        </Link>
        <Link
          href="/sales"
          sx={{
            textDecoration: "none",
            fontSize: "18px",
            marginLeft: "20px",
            marginBottom: "10px",
            color: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <AttachMoneyIcon sx={{ marginRight: "3px" }} />
          Sales
        </Link>
        <Link
          href="attendance"
          sx={{
            textDecoration: "none",
            fontSize: "18px",
            marginLeft: "20px",
            marginBottom: "10px",
            color: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <AddToPhotosIcon sx={{ marginRight: "3px" }} />
          Attendance
        </Link>
        <Link
          href="recruitment"
          sx={{
            textDecoration: "none",
            fontSize: "18px",
            marginLeft: "20px",
            marginBottom: "10px",
            color: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <AutoModeIcon sx={{ marginRight: "3px" }} />
          Recruitment
        </Link>
        <Link
          href="publicHoliday"
          sx={{
            textDecoration: "none",
            fontSize: "18px",
            marginLeft: "20px",
            marginBottom: "10px",
            color: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <HolidayVillageIcon sx={{ marginRight: "3px" }} />
          Public Holiday
        </Link>
        <Link
          href="user"
          sx={{
            textDecoration: "none",
            fontSize: "18px",
            marginLeft: "20px",
            marginBottom: "10px",
            color: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PersonIcon sx={{ marginRight: "3px" }} />
          User
        </Link>
        <Link
          href="department"
          sx={{
            textDecoration: "none",
            fontSize: "18px",
            marginLeft: "20px",
            marginBottom: "10px",
            color: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <RoomPreferencesIcon sx={{ marginRight: "3px" }} />
          Departments
        </Link>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          minHeight: "75px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ padding: "5px 20px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: 'center'
            }}
          > */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AdminPanelSettingsIcon sx={{ color: "black", fontSize: "60px" }} />
            <Box>
              <Typography
                variant="h5"
                sx={{ color: "black", fontWeight: "800" }}
                noWrap
                component="div"
              >
                <span style={{ color: "#0097a7" }}>CRM</span> Admin
              </Typography>
              <p style={{ color: "black", margin: "0", fontSize: "14px" }}>
                Very Detailed and feathered admin
              </p>
            </Box>
          </Box>
          {/* <Link href='/login' sx={{textDecoration: 'none', fontSize: '24px', color: 'black', float: 'right'}}>Login</Link> */}
          {/* </Box> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <img
            style={{ backgroundColor: "black" }}
            src="https://i.ibb.co/HdXRGhc/logo.png"
            alt=""
          />
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <img
            style={{ backgroundColor: "black" }}
            src="https://i.ibb.co/HdXRGhc/logo.png"
            alt=""
          />
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
