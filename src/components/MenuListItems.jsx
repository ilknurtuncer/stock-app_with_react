import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
import StoreIcon from '@mui/icons-material/Store';
import StarsIcon from '@mui/icons-material/Stars';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useNavigate } from 'react-router-dom';

const icons = [
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        url: "/stock/",
    },
    {
        title: "Purchase",
        icon: <ShoppingCartIcon/>,
        url: "/stock/purchase/",
    },
    {
        title: "Sales",
        icon: <AttachMoneyIcon/>,
        url: "/stock/sales/",
    },
    {
        title: "Firms",
        icon: <StoreIcon/>,
        url: "/stock/firms/",
    },
    {
        title: "Brands",
        icon: <StarsIcon/>,
        url: "/stock/brands/",
    },
    {
        title: "Products",
        icon: <InventoryIcon/>,
        url: "/stock/products/",
    },
    {
        title: "Admin Panel",
        icon: <SupervisorAccountIcon/>,
        url: "https://12226.fullstack.clarusway.com/admin/",
    },
]

const iconStyle ={
  color:"white",
  "& .MuiSvgIcon-root": {color:"white"},
  "&:hover": {color:"red"},
  "&:hover .MuiSvgIcon-root": {color:"red"}
  
}

const MenuListItems = () => {
  const navigate = useNavigate()
  return (
    <div>
        <List>
          {icons?.map((item, index) => (
        
            <ListItem key={index} disablePadding sx={{ display: 'block'}}>
              {item.url.includes("http") ? (
              <ListItemButton to={item.url} sx={iconStyle}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>) 
              :(
                <ListItemButton sx={iconStyle} onClick={()=> navigate(item.url)}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>)}
              
            </ListItem>
          ))}
        </List>
    </div>
  )
}

export default MenuListItems