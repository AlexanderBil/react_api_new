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


   news = () => {
   const {firstNews, lastNews} = this.state;
   let newsList = [];
   
     fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a5492cb2d5a54e628e2e4f3b33e13418`)
     .then(data => data.json())
     .then(data => data.articles)
     .then(data => {
      for(let i = firstNews; i < lastNews; i++){
        let transitObj = {}
         transitObj.title = data[i].title
         transitObj.description = data[i].description
         transitObj.img = data[i].urlToImage
         newsList.push(transitObj)
         this.setState({newsList})
         this.setState({firstNews: firstNews + 10})
         this.setState({lastNews: lastNews + 10})
    }
     })
  
   }


componentDidMount(){
this.news()
}


  render(){
    const {newsList} = this.state;

return(
    <div className = 'news-main'>

<div className = 'news-main-block'>
      {
       newsList.length ?     
      }


               <button onClick = {this.news} className = 'btn'>Load more</button>
             </div>   
      </div>
    )
  }
}

export default News;
