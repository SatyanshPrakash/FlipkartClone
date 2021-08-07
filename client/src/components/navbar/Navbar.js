import React, { useState, useEffect } from "react";
import "./styles.css";
import { useHistory, useLocation } from "react-router-dom";
import logo from "./logo.png";
import decode from "jwt-decode";
import Login from "../login/Login";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import { AccountCircle, ChatOutlined, Notifications, Add, AccountBalanceWallet, PowerSettingsNew, Favorite, AssignmentTurnedIn, CardMembership, DonutLarge } from '@material-ui/icons';
import { GetApp, BusinessCenter, LiveHelp, TrendingUp, ShoppingCart } from "@material-ui/icons";


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
}))(MenuItem);

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const history = useHistory()
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [MoreAnchorEl, setMoreAnchorEl] = useState(null);

  const openLoginDialog = () => {
    setOpen(true);
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
  };

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMoreClick = (e) => {
    setMoreAnchorEl(e.currentTarget);
  };

  const handleMoreClose = () => {
    setMoreAnchorEl(null);
  };

  const onCart = () => {
    history.push('/cart');
  }


  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  useEffect(() => {
    const token = user?.token;

    if (token) {
      setOpen(false);
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [user]);

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="Flipkart" className="logo" />
        <textarea
          row={1}
          cols={50}
          className="textArea"
          placeholder="Search for products, brands and more"
        />
        {user ? (
          <div className="myAccount">
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              onMouseOver={handleMenuClick}
            >
              My Account
            </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClick={handleMenuClose}
            >
              <StyledMenuItem onClick={handleMenuClose}>
                <ListItemIcon><AccountCircle /></ListItemIcon>
                <ListItemText>My Profile</ListItemText>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                <ListItemIcon><DonutLarge fontSize="small" /></ListItemIcon>
                <ListItemText>SuperCoin Zone</ListItemText>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                <ListItemIcon><Add fontSize="small"/></ListItemIcon> 
                <ListItemText>Flipkart Plus Zone</ListItemText>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                <ListItemIcon><AssignmentTurnedIn fontSize="small"/></ListItemIcon>
                <ListItemText>Orders</ListItemText>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                <ListItemIcon><Favorite fontSize="small"/></ListItemIcon>
               <ListItemText>Wishlist</ListItemText>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                <ListItemIcon><ChatOutlined fontSize="small" /></ListItemIcon>
                <ListItemText>My Chats</ListItemText>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                <ListItemIcon><CardMembership fontSize="small"/></ListItemIcon>
                <ListItemText>Coupons</ListItemText>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                <ListItemIcon><AccountBalanceWallet fontSize="small"/></ListItemIcon>
                <ListItemText>Gift Cards</ListItemText>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                <ListItemIcon><Notifications fontSize="small"/></ListItemIcon>
                <ListItemText>Notifications</ListItemText>
              </StyledMenuItem>
              <StyledMenuItem onClick={logout}>
                <ListItemIcon><PowerSettingsNew fontSize="small"/></ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </StyledMenuItem>
            </StyledMenu>
          </div>
        ) : (
          <button className="loginButton" onClick={openLoginDialog}>
            Login
          </button>
        )}

          <div className="navbarItem" 
            aria-controls="customized-menu"
            aria-haspopup="true"
            onMouseOver={handleMoreClick}>More</div>
            <StyledMenu
              id="customized-menu"
              anchorEl={MoreAnchorEl}
              keepMounted
              open={Boolean(MoreAnchorEl)}
              onClick={handleMoreClose}
            >
              <StyledMenuItem onClick={handleMoreClose}>
                <ListItemIcon><Notifications /></ListItemIcon>
                <ListItemText>Notification Preferences</ListItemText>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMoreClose}>
                <ListItemIcon><BusinessCenter fontSize="small" /></ListItemIcon>
                <ListItemText>Sell on Flipkart</ListItemText>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMoreClose}>
                <ListItemIcon><LiveHelp fontSize="small"/></ListItemIcon> 
                <ListItemText>24x7 Customer Care</ListItemText>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMoreClose}>
                <ListItemIcon><TrendingUp fontSize="small"/></ListItemIcon>
                <ListItemText>Advertise</ListItemText>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMoreClose}>
                <ListItemIcon><GetApp fontSize="small"/></ListItemIcon>
                <ListItemText>Download App</ListItemText>
              </StyledMenuItem>
            </StyledMenu>
        <ul className="navbarUl">
          <li className="navbarItem">
            <li style={{display:'flex', cursor: 'pointer'}} onClick={onCart}>
              <ShoppingCart style={{padding: 2}}/>
              Cart
            </li>
          </li>
        </ul>
      </nav>
      <Login open={open} setOpen={setOpen} user />
    </>
  );
};

export default Navbar;
