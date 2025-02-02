import React from "react";
import Cards from "../views/card";
import Grid from "@material-ui/core/Grid";
import "../views/view.css";
import SideBar from "../views/sideBar";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: [],
    };
  }
  componentDidMount() {
    let url = "http://localhost:3001/api/v1/get/newsData";
    // let url = "https://newsaggregator.canadaeast.cloudapp.azure.com:3001/api/v1/get/newsData?country=in&catagory=technology";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          newsData: json.data,
        });
      });
  }

  changeCategory = (category) => {
    const getNewsUrl = `http://localhost:3001/api/v1/get/newsData?category=${category}`;
    // let url = `https://newsaggregator.canadaeast.cloudapp.azure.com:3001/api/v1/get/newsData?country=in&catagory=${category}`;
    fetch(getNewsUrl)
      .then((res) => res.json())
      .then((json) => {
        if (json.data && json.data.length > 0) {
          const currentDate = new Date();
          const publishedDate = new Date(json.data[0].publishedDate);
          const diffDays = Math.floor(
            (currentDate - publishedDate) / (1000 * 60 * 60 * 24)
          );
          if (diffDays > 1) {
            this.addNewsData(category);
            return;
          } else {
            this.setState({
              newsData: json.data,
            });
          }
        } else {
          this.addNewsData(category);
        }
      });
  };

  addNewsData = (category) => {
    const addNewsUrl = `http://localhost:3001/api/v1/wrapper/newsApiCall`;
    const body = { country: "us", category: category };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(addNewsUrl, options)
      .then((response) => response.json())
      .then((json) => {
        if (json.data === []) {
          throw Error("No data available");
        } else {
          this.setState({
            newsData: json.data,
          });
        }
      });
  };

  removeDuplicates = (newsData) => {
    const titles = [];
    for (let data in newsData) {
      if (!titles.includes(newsData[data].title)) {
        titles.push(newsData[data].title);
      } else {
        delete newsData[data];
      }
    }
  };

  render() {
    var { newsData } = this.state;
    this.removeDuplicates(newsData);
    return (
      <>
        <SideBar changeCategoryEvent={this.changeCategory.bind(this)} />
        <Grid
          justify="center"
          direction="row"
          container
          alignItems="center"
          className="Grid"
        >
          {newsData.map((item, index) => (
            <Cards
              key={index}
              image={item.imageUrl}
              title={item.title}
              content={item.content}
              url={item.url}
              publishedDate={new Date(item.publishedDate).toLocaleDateString(
                "en-US",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
              description={item.description}
            />
          ))}
        </Grid>
      </>
    );
  }
}

export default Dashboard;
