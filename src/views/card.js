import React from "react";
// import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Button from "react-bootstrap/Button"
import "./view.css"
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: '5px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function Cards(data) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    console.log(data)

    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                image={data.image}
                title={data.title}
            />
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        PKMKB
            </Avatar>
                }
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title={data.title}
                subheader={data.publishedDate}
            />
            {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {data.description ? data.description : data.content}
                </Typography>
            </CardContent> */}
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton href={data.url} target="_blank">
                    <OpenInNewIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {data.description ? data.description : data.content}
                </CardContent>
            </Collapse>
        </Card>

    );
}

// class Cards extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             image: this.props.image,
//             title: this.props.title,
//             description: this.props.description,
//             url: this.props.url,
//             publishedDate: this.props.publishedDate
//         }
//     }



// render() {
//     return (
//         <div className="newsDiv">
//             <a className="Card" target="_blank" href={this.state.url} >
//                 <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={this.state.image} />
//                     <Card.Body>
//                         <Card.Title>{this.state.title}</Card.Title>
//                         <Card.Text>{this.state.description}</Card.Text>
//                         {/* <Button variant="primary">Go somewhere</Button> */}
//                     </Card.Body>
//                     <Card.Footer>
//                         <small className="text-muted">Published Date: {this.state.publishedDate}</small>
//                     </Card.Footer>
//                 </Card>
//             </a>
//         </div>
//     );

// }
// }

// export default Cards;