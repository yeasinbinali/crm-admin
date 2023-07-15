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
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import PersonIcon from "@mui/icons-material/Person";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [openCustomer, setOpenCustomer] = React.useState(false);
  const [openTranaction, setOpenTransaction] = React.useState(false);
  const [openSales, setOpenSales] = React.useState(false);

  const handleCustomerClick = () => {
    setOpenCustomer(!openCustomer);
  };
  const handleTransactionClick = () => {
    setOpenTransaction(!openTranaction);
  };
  const handleSalesClick = () => {
    setOpenSales(!openSales);
  }

  const drawer = (
    <div>
      <Divider />
      <List sx={{ display: "grid", gridColumn: "auto" }}>
        {/* dashboard */}
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
        {/* customer */}
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
            onClick={handleCustomerClick}
          >
            <Typography
              sx={{ display: "flex", alignItems: "center", fontSize: "18px" }}
            >
              <GroupAddIcon sx={{ marginRight: "3px" }} />
              Customer
            </Typography>
            {openCustomer ? (
              <ExpandLess />
            ) : (
              <ArrowBackIosNewIcon
                sx={{ fontSize: "14px", marginRight: "5px" }}
              />
            )}
          </Typography>
          <Collapse in={openCustomer} timeout="auto" unmountOnExit>
            <Link
              href="/addCustomer"
              sx={{
                textDecoration: "none",
                paddingLeft: "20px",
                fontSize: "18px",
                marginLeft: "20px",
                marginBottom: "10px",
                color: "black",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowRightIcon />
              Add Customer
            </Link>
            <Link
              href="/customerList"
              sx={{
                textDecoration: "none",
                paddingLeft: "20px",
                fontSize: "18px",
                marginLeft: "20px",
                marginBottom: "10px",
                color: "black",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowRightIcon />
              List
            </Link>
          </Collapse>
        </Link>
        {/* transaction */}
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
            onClick={handleTransactionClick}
          >
            <Typography
              sx={{ display: "flex", alignItems: "center", fontSize: "18px" }}
            >
              <AccountBalanceIcon sx={{ marginRight: "3px" }} />
              Transaction
            </Typography>
            {openTranaction ? (
              <ExpandLess />
            ) : (
              <ArrowBackIosNewIcon
                sx={{ fontSize: "14px", marginRight: "5px" }}
              />
            )}
          </Typography>
          <Collapse in={openTranaction} timeout="auto" unmountOnExit>
            <Link
              href="/deposit"
              sx={{
                textDecoration: "none",
                paddingLeft: "20px",
                fontSize: "18px",
                marginLeft: "20px",
                marginBottom: "10px",
                color: "black",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowRightIcon />
              Deposit
            </Link>
            <Link
              href="/expense"
              sx={{
                textDecoration: "none",
                paddingLeft: "20px",
                fontSize: "18px",
                marginLeft: "20px",
                marginBottom: "10px",
                color: "black",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowRightIcon />
              Expense
            </Link>
            <Link
              href="/transfer"
              sx={{
                textDecoration: "none",
                paddingLeft: "20px",
                fontSize: "18px",
                marginLeft: "20px",
                marginBottom: "10px",
                color: "black",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowRightIcon />
              Transfer
            </Link>
          </Collapse>
        </Link>
        {/* sales */}
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
            onClick={handleSalesClick}
          >
            <Typography
              sx={{ display: "flex", alignItems: "center", fontSize: "18px" }}
            >
              <AttachMoneyIcon sx={{ marginRight: "3px" }} />
              Sales
            </Typography>
            {openSales ? (
              <ExpandLess />
            ) : (
              <ArrowBackIosNewIcon
                sx={{ fontSize: "14px", marginRight: "5px" }}
              />
            )}
          </Typography>
          <Collapse in={openSales} timeout="auto" unmountOnExit>
            <Link
              href="/invoice"
              sx={{
                textDecoration: "none",
                paddingLeft: "20px",
                fontSize: "18px",
                marginLeft: "20px",
                marginBottom: "10px",
                color: "black",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowRightIcon />
              Invoice
            </Link>
            <Link
              href="/quote"
              sx={{
                textDecoration: "none",
                paddingLeft: "20px",
                fontSize: "18px",
                marginLeft: "20px",
                marginBottom: "10px",
                color: "black",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowRightIcon />
              Quote
            </Link>
            <Link
              href="/payment"
              sx={{
                textDecoration: "none",
                paddingLeft: "20px",
                fontSize: "18px",
                marginLeft: "20px",
                marginBottom: "10px",
                color: "black",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowRightIcon />
              Payment
            </Link>
          </Collapse>
        </Link>
        <Link
          href="noticeBoard"
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
          Notice Board
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
