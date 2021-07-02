import React from 'react';
import './News.css';

class News extends React.Component{

  constructor(props){
    super (props);
    this.state = {
      newsList : [],
      firstNews: 0,
      lastNews: 10
    }
   }


  
componentDidMount(){
  const {firstNews, lastNews} = this.state;
  let newsList = {};
  
    fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a5492cb2d5a54e628e2e4f3b33e13418`)
    .then(data => data.json())
    .then(data => data.articles)
    .then(data => {
     for(let i = firstNews; i < lastNews; i++){
       let transitObj = {}
        transitObj.title = data[i].title
        transitObj.description = data[i].description
        transitObj.img = data[i].urlToImage
        newsList = transitObj)
        this.setState({newsList})
        this.setState({firstNews: firstNews + 10})
        this.setState({lastNews: lastNews + 10})
   }
    })
}


  render(){
    const {newsList} = this.state;

return(
    <div className = 'news-main'>

      {
        newsList.length ? <div className = 'news-main-block'>
        {newsList.map((item, index) =>
                <div className="news-block-item" key = {index}>
                  <div style={{textTransform: 'capitalize'}} className="news-block-item-title">{item.title}</div>
                  <div style={{textTransform: 'capitalize'}} className="news-block-item-description">{item.description}</div>
                  <div className="news-block-item-img"><img src={item.img} alt="" /></div>
                </div>
        )} 
           <button onClick = {this.news} className = 'btn'>Load more</button>
         </div>  :  <h4>Loading...</h4>
      }


      </div>
    )
  }
}

export default News;
