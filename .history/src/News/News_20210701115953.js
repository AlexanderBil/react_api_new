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
