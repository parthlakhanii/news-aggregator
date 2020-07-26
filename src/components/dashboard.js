import React from 'react';
import Cards from "../views/card"
import Grid from "@material-ui/core/Grid";
import "../views/view.css"
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
        // let url = "http://localhost:3001/api/v1/get/newsData?catagory=sports";
        let url = "http://newsaggregator.canadaeast.cloudapp.azure.com:3001/api/v1/get/newsData?country=in&catagory=technology";
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

    changeCategory = (category) => {
        console.log('changeCategory')
        // let url = `http://localhost:3001/api/v1/get/newsData?catagory=${category}`;
        let url = `http://newsaggregator.canadaeast.cloudapp.azure.com:3001/api/v1/get/newsData?country=in&catagory=${category}`;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    newsData: json.data
                })
            })
    }

    removeDuplicates = (newsData) => {
        const titles = []
        for (let data in newsData) {
            if (!titles.includes(newsData[data].title)) {
                titles.push(newsData[data].title)
            } else {
                delete newsData[data]
            }
        }
    }

    render() {
        var { newsData } = this.state;
        this.removeDuplicates(newsData)
        return (
            <>
                <SideBar changeCategoryEvent={this.changeCategory.bind(this)} />
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