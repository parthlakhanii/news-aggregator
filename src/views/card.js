import React from "react";
import "./view.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '7px',
        maxHeight: 316.88,
        minHeight: 316.88,
        backgroundColor: '#404040',
        color: 'white'
    },
    root2: {
        maxWidth: 650,
        margin: '7px',
        maxHeight: 650
    },
    media: {
        height: 200,
    },
});

export default function Cards(data) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea href={data.url} target="_blank">
                    <CardMedia
                        className={classes.media}
                        image={data.image}
                        title={data.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body2" component="p">
                            {data.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {data.publishedDate}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                <Button size="small" color="primary">
                    Share
          </Button>
                <Button size="small" color="primary">
                    Learn More
          </Button>
            </CardActions> */}
            </Card>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <Card className={classes.root2}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={data.image}
                            title={data.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body2" component="p">
                                {data.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {data.publishedDate}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                {/* <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Disagree
          </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
          </Button>
                </DialogActions> */}
            </Dialog>
        </>
    );
}

// export function ResponsiveDialog() {
//     const [open, setOpen] = React.useState(false);
//     const theme = useTheme();
//     const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

//     const handleClickOpen = () => {
//       setOpen(true);
//     };

//     const handleClose = () => {
//       setOpen(false);
//     };

//     return (
//       <div>
//         <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//           Open responsive dialog
//         </Button>
//         <Dialog
//           fullScreen={fullScreen}
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="responsive-dialog-title"
//         >
//           <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               Let Google help apps determine location. This means sending anonymous location data to
//               Google, even when no apps are running.
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button autoFocus onClick={handleClose} color="primary">
//               Disagree
//             </Button>
//             <Button onClick={handleClose} color="primary" autoFocus>
//               Agree
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     );
//   }
