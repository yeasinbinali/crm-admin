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
import { Link } from "@mui/material";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Divider />
      <List sx={{ display: "grid", gridColumn: "auto" }}>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Dashboard</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Customers</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Transaction</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Sales</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Task</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Accounting</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Report</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Attendance</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Recruitment</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Payroll</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Stock</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Tickets</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Utilities</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Charts</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Icons</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Other Page</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>UI Elements</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Settings</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Companies</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Public Holiday</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>User</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Items</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Departments</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Documents</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Traning</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Calendar</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Notice Board</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Message</Link>
        <Link href="" sx={{textDecoration: 'none', fontSize: '18px', marginLeft: '20px', marginBottom: '3px', color: 'black'}}>Notes</Link>
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
