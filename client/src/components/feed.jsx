
import Card from "./card"
import {useEffect, useContext,useState} from'react';
import AppContext from './AppContext';

function Feed() {

  //  const [feed,setfeed]=useState([]);
    
    const myContext = useContext(AppContext);
    console.log(process.env.REACT_APP_SERVER);
  
    const [showText,setShowText]=useState(true);

    let feedText = "loading .....";

    function setFeedText(e)
    {
      feedText=e;
    }
    
    useEffect(() => {
        
      
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          };
          
          setShowText(true);
          setFeedText("loading .....");
          
          fetch(process.env.REACT_APP_SERVER+'memes', requestOptions)
          .then(response => response.json())
          .then(data => {myContext.setfeed(data);if(data.length!=0)setShowText(false);else setFeedText("no post yet");});
          

          if(myContext.feed.length==0)
          setFeedText("No post yet!!!");
          

        },[]);

    return (
            <div class="flex-container">
          
             {/* { console.log(data) */}

             
             {  (showText)?(<h1>{feedText}</h1>):
                 myContext.feed.map((ele)=>(
                     <Card
                     owner = {ele.name} 
                     imgUrl = {ele.url}
                     caption= {ele.caption}
                     
                    />
                 ))
             
            }
            
            {/* 
            

            <div class="card flex-child">
            <img class="card-img-top" src="https://images.indianexpress.com/2021/02/Rose-day-1200.jpg" alt="Card image cap"/>
            <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div> */}

            </div>
    );
  }
  
  export default Feed;