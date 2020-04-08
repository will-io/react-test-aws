import React , {Component} from 'react';
import './App.css';



class Home extends Component {

    constructor(props){
        super(props)
           this.state ={
                name: '',
                review: '',
                wifi: false,

           };
           this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleNameChange = (event) =>{
        this.setState({
            name: event.target.value
        })
    }
    handleReviewChange = (event) =>{
        this.setState({
            review: event.target.value
        })
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:value
        });
    }
    
    render(){
       return(
        <form>
            <h3>Please select a Coffe/Tea shop around campus and give it a rating</h3>
         <div>
            <label>Please enter your name: </label>
            <input type = "text" value = {this.state.nameChange} onChange={this.handleNameChange}></input>
         </div>
            <br>
            </br>
            
            <div>

            <b>Bonus Feature(s):</b> 
            <br  />
            <label>wifi
            <br />
            <input name="wifi" type="checkbox" checked={this.state.wifi} onChange={this.handleInputChange}/>
            </label>
            
            </div>
        
            <br>
            </br>
         <div>
            <textarea rows="5" cols="50"  type="text" placeholder="Please enter your review here." value = {this.state.review} onChange={this.handleReviewChange}></textarea>
         </div>

        </form>
       )
    }
}
export default Home;
