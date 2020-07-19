import React from 'react';
import Cards from "../views/card"
import Grid from "@material-ui/core/Grid";
import "../views/view.css"
import Container from '@material-ui/core/Container';
import SideBar from '../views/sideBar'
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.catagory)
        this.state = {
            newsData: []
        };
    }
    componentDidMount() {
        console.log('componentDidMount')
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

    changeCategory=(category)=>{
        console.log('changeCategory')
        let url = `http://localhost:3001/api/v1/get/newsData?country=in&catagory=${category}`;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    newsData: json.data
                })
            })
    }
    render() {
        var { newsData } = this.state;
        return (
            <>
                <SideBar changeCategoryEvent={this.changeCategory.bind(this)}/>
                <Grid justify="center" direction="row" container alignItems="center" className="Grid">
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
            </>
        );
    }
}

export default Dashboard;