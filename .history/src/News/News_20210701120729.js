import React from 'react';
import './News.css';

class News extends React.Component{

  constructor(props){
    super (props);
    this.state = {
      newsList : [],
      firstNews: 1,
      lastNews: 10
    }
   }


   componentDidMount(){
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
           this.setState({firstNews: firstNews + 9})
          this.setState({lastNews: lastNews + 9})
  }
  

news = () {
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
         this.setState({firstNews: firstNews + 9})
        this.setState({lastNews: lastNews + 9})
   }
 
   this.setState({newsList})
    })
}




  render(){
    const {newsList} = this.state;

return(
    <div className = 'news-main'>

      {
        !newsList.length ? <h4>Loading...</h4> : 
         <div className = 'news-main-block'>
        {newsList.map((item, index) =>
                <div className="news-block-item" key = {index}>
                  <div style={{textTransform: 'capitalize'}} className="news-block-item-title">{item.title}</div>
                  <div style={{textTransform: 'capitalize'}} className="news-block-item-description">{item.description}</div>
                  <div className="news-block-item-img"><img src={item.img} alt="" /></div>
                </div>
        )} 
           <button onClick = {this.news} className = 'btn'>Load more</button>
         </div>
      }


      </div>
    )
  }
}

export default News;
