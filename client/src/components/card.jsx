

function Card(props) {
    return (
        
        <div class="card flex-child ">
            <div class="card-header">
               <b> {props.owner}</b>
            </div>
            
            <div class="card-body ">
                
                <p class="card-text">{props.caption}</p>
                <img class="card-img-top" src={props.imgUrl} alt="Card image cap"/>
                </div>

            </div>
        

    );
  }
  
  export default Card;