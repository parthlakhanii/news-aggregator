import React from 'react';
import Cards from '../views/card';
import Grid from '@material-ui/core/Grid';
import '../views/view.css';
import SideBar from '../views/sideBar';
import { RepeatOneSharp } from '@material-ui/icons';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.catagory);
    this.state = {
      newsData: [],
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
    let url = 'http://localhost:3001/api/v1/get/newsData';
    // let url = "https://newsaggregator.canadaeast.cloudapp.azure.com:3001/api/v1/get/newsData?country=in&catagory=technology";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        // sessionStorage.setItem('newsData', json)
        this.setState({
          newsData: json.data,
        });
      });
  }

  changeCategory = (category) => {
    console.log('changeCategory');
    const getNewsUrl = `http://localhost:3001/api/v1/get/newsData?category=${category}`;
    // let url = `https://newsaggregator.canadaeast.cloudapp.azure.com:3001/api/v1/get/newsData?country=in&catagory=${category}`;
    fetch(getNewsUrl)
      .then((res) => res.json())
      .then((json) => {
        if (json.data.length === 0) {
          console.log();
          this.addNewsData(category);
        } else {
          this.setState({
            newsData: json.data,
          });
        }
      });
  };

  addNewsData = (category) => {
    const addNewsUrl = `http://localhost:3001/api/v1/wrapper/newsApiCall`;
    const body = { country: 'us', category: category };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    };

    fetch(addNewsUrl, options)
      .then((response) => response.json())
      .then((json) => {
        if (json.data === []) {
          throw Error('No data available');
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
          justify='center'
          direction='row'
          container
          alignItems='center'
          className='Grid'
        >
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
