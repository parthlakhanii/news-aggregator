import React from 'react';
import Cards from "./card"
import GridList from "@material-ui/core/GridList";
import "./view.css"

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newsData: []
        };
    }
    componentDidMount() {
        let url = "http://localhost:3001/api/v1/get/newsData";
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                // sessionStorage.setItem('newsData', json)
                this.setState({
                    newsData: json
                })
            })

    }
    render() {
        var { newsData } = this.state;
        return (
            <div className="news-container" >
                <GridList cols={3} className="gridList">
                    {newsData.map((item, index) => (
                        <Cards
                            key={index}
                            image={item.imageUrl}
                            title={item.title}
                            description={item.content}
                            url={item.url}
                            publishedDate={item.publishedDate}
                        />
                    ))}
                </GridList>
            </div>
        );
    }
}

export default Dashboard;