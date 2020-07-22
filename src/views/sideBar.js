import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        color: 'black'
    },
    icon: {
        color: "#fff"
    },
    appBar: {
        backgroundColor: '#404040',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        backgroundColor: '#404040',
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        backgroundColor: '#404040',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        backgroundColor: '#404040',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function SideBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const setCategory = (category) => {
        console.log('setCategory')
        props.changeCategoryEvent(category)
    }

    window.x = true
    return (
        <>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            News Aggregator
          </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    {/* <Divider /> */}
                    <List>
                        <ListItem button key='Business' onClick={()=>setCategory('business')}>
                            <ListItemIcon className={classes.icon} ><i className="fa fa-2x fa-briefcase"></i></ListItemIcon>
                            <ListItemText className={classes.icon} primary="Business" />
                        </ListItem>
                        <ListItem button key='Sports' onClick={()=>setCategory('sports')}>
                            <ListItemIcon className={classes.icon}><i className="fa fa-2x fa-futbol-o"></i></ListItemIcon>
                            <ListItemText className={classes.icon} primary="Sports" />
                        </ListItem>
                        <ListItem button key='Technology' onClick={()=>setCategory('technology')}>
                            <ListItemIcon className={classes.icon}><i className="fa fa-2x fa-laptop"></i></ListItemIcon>
                            <ListItemText className={classes.icon} primary="Technology" />
                        </ListItem>
                        <ListItem button key='Science' onClick={()=>setCategory('science')}>
                            <ListItemIcon className={classes.icon}><i className="fa fa-2x fa-flask"></i></ListItemIcon>
                            <ListItemText className={classes.icon} primary="Science" />
                        </ListItem>
                        <ListItem button key='Entertainment' onClick={()=>setCategory('entertainment')}>
                            <ListItemIcon className={classes.icon}><i className="fa fa-2x fa-film" aria-hidden="true"></i></ListItemIcon>
                            <ListItemText className={classes.icon} primary="Entertainment" />
                        </ListItem>
                        <ListItem button key='Health' onClick={()=>setCategory('health')}>
                            <ListItemIcon className={classes.icon}><i className="fa fa-2x fa-medkit"></i></ListItemIcon>
                            <ListItemText className={classes.icon} primary="Health" />
                        </ListItem>
                        {/* <ListItem button key='Politics'>
                        <ListItemIcon className={classes.icon}><InboxIcon /></ListItemIcon>
                        <ListItemText className={classes.icon} primary="Politics" />
                    </ListItem> */}
                        {/* {['Business', 'Sports', 'Science', 'Technology', 'Politics'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon className={classes.icon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText className={classes.icon} primary={text} />
                        </ListItem>
                    ))} */}
                    </List>
                    {/* <Divider /> */}
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Typography paragraph>
                    </Typography>
                    <Typography paragraph></Typography>
                </main>
            </div>
        </>
    );
}