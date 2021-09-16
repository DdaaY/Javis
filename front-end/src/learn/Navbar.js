import { AppBar, Button,Menu,MenuItem,IconButton, InputBase, makeStyles, Toolbar, Typography,Badge, } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import { AccountCircle,} from '@material-ui/icons';


import React from 'react';

const useStyles = makeStyles((theme)=>({
    menuButton : {
        marginRight : theme.spacing(2),
    },
    title : {
        display: 'none',
        [theme.breakpoints.up('sm')] : {
            display:'block',
        }
    },
    search : {
        position : 'reletive',
        borderRadius : theme.shape.borderRadius,/* curvature of the border(边界的曲度) */
        backgroundColor : '#CBCCCC', 
        '&:hover' : {
            backgroundColor : '#E2E2E2',
        },/*color when mouse is over this tag */
        marginRight: theme.spacing(2),
        marginLeft : 0,
        width : '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft : theme.spacing(3),
            width : 'auto',
        },
    },
    searchIcon : {
        padding : theme.spacing(0,2),
        height : '30px',
        position : 'absolute',
        PointerEvent : 'none',
        display : 'flex',
        alignItems: 'center',
        justifyContent : 'center',
    },
    inputRoot : {
        color : 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function Navbar(){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    return (
        <AppBar position = 'static'>
            <Toolbar>
                <IconButton 
                    edge = 'start' 
                    className = {classes.menuButton}
                    color = 'inehrit'
                    aria-label = 'open drawer'
                >
                <i className = 'fas fa-bars'/>
                </IconButton>
                <Typography variant = 'h5' className = {classes.title} noWrap>
                    Javis
                </Typography>
                <div className = {classes.search}>
                    <div className = {classes.searchIcon}>
                        <i className = 'fas fa-search'/>
                    </div>
                    <InputBase 
                        placeholder = 'Search...'
                        classes = {{
                            root: classes.inputRoot,
                            input : classes.inputInput,
                        }}
                        inputProps = {{'aria-label' : 'search'}}
                    />
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                    <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}