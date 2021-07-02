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
    for(let i = firstNews; i < lastNews; i++){
      let transitObj = {}
      fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a5492cb2d5a54e628e2e4f3b33e13418`)
      .then(data => data.json())
      .then(data => data.articles)
      .then(data => {
                transitObj.title = data[i].title
          transitObj.description = data[i].description
          transitObj.img = data[i].urlToImage
          newsList.push(transitObj)
           this.setState({firstNews: firstNews + 9})
          this.setState({lastNews: lastNews + 9})
     }
        })
        
  }
  

  pokemonList = () => {
    const {firstPokemon, lasPokemon} = this.state;
    let pokemonsList = [];
    for(let i = firstPokemon; i < lasPokemon; i++){
    let transitObj = {}
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(data => data.json())
    .then (data => {
      transitObj.name = data.name
      transitObj.img = data.sprites.front_default
      transitObj.types = data.types.map(item => item.type.name)
      transitObj.id = data.id
      pokemonsList.push(transitObj)
  
      this.setState({pokemonsList})
      this.setState({firstPokemon: firstPokemon + 12})
      this.setState({lasPokemon: lasPokemon + 12})
    })
    }
  }







news = () => {

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
