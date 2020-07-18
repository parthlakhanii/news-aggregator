import React from 'react';
import Cards from "./card"
import Grid from "@material-ui/core/Grid";
import "./view.css"
import Container from '@material-ui/core/Container';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newsData: []
        };
    }
    componentDidMount() {
        let url = "http://localhost:3001/api/v1/get/newsData?country=in&catagory=sports";
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json.data)
                // sessionStorage.setItem('newsData', json)
                this.setState({
                    newsData: json.data
                })
            })
    }
    render() {
        var { newsData } = this.state;
        return (
            <Container fixed>
                <Grid justify="center" direction="row" container alignItems="center">
                    {newsData.map((item, index) => (
                        <Cards
                            key={index}
                            image={item.imageUrl}
                            title={item.title}
                            content={item.content}
                            url={item.url}
                            publishedDate={item.publishedDate}
                            description={item.description}
                        />
                    ))}
                </Grid>
            </Container>
        );
    }
}

export default Dashboard;