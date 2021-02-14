import {useState,useEffact,useContext} from'react';
import AppContext from './AppContext';

function Form() {

    const [formData,setFormData]=useState({name:'',caption:'',url:''});
    const myContext = useContext(AppContext);
    

    const handleSubmit=(ele)=>{
        
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        };

        
        fetch(process.env.REACT_APP_SERVER+'memes', requestOptions)
        .then(response => response.json())
        .then(data =>console.log(data));
         
         
    }
    



    const handleChange=(event)=>{
       console.log(event.target.value);
       
       setFormData((preData)=>{return {...preData,[event.target.name]:event.target.value}})
       
    }


    return (




        <div class="memeform">
            
        <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label  >Meme Owner</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} class="form-control"  placeholder="Enter your full name" required />
        </div>
        <div class="form-group">
          <label >Caption</label>
          <input type="text" name="caption" value={formData.caption} onChange={handleChange} class="form-control"  placeholder="Be creative with caption" />
        </div>
        <div class="form-group i">
          <label >Meme Url</label>
          <div class="input-group"> 
            <input type="url" name ="url" value={formData.url}  onChange={handleChange} class="form-control"  placeholder="Enter meme url here" required />
             <span><button type="submit" class="btn btn-primary input-group-addon">Submit</button></span>
          </div>
          
        </div>
        
      </form>

      </div>

    );
  }
  
  export default Form;