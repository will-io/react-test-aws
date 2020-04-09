import React , { useState} from 'react';
import './App.css';


const Home = () => {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [review,setReview] = useState('');
    const [wifi,setWifi] =  useState(false);
    const [outlets,setOutlets] =  useState(false);
    const [reward,setRewards] =  useState(false);
    const [kids,setKids] =  useState(false);
    const [sofas,setSofas] =  useState(false);
    const [order,setOrder] =  useState(false);
    const [gluten,setGluten] =  useState(false);
    const [vegan,setVegan] =  useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(name);
        console.log(location);
        console.log(wifi);
        console.log(outlets);
        console.log(kids);
        console.log(reward);
        console.log(sofas);
        console.log(order);
        console.log(gluten);
        console.log(vegan);
        console.log(review);
        console.log("form submitted");
    };
    
    return(
        <form onSubmit = {handleSubmit} >
            <h3>select a Coffe or Tea shop around campus and give it a rating</h3>
         <div>
            <label>Please enter your name: </label>
            <input type = "text" value = {name} required onChange={(event)=> setName(event.target.value)}></input>
         </div>
         <div>
            <label>Please enter a location: </label>
            <input type = "text" value = {location} required onChange={(event)=> setLocation(event.target.value)}></input>
         </div>
            <br />
            
            <b>Bonus Feature(s):</b> 
            <br  />
            <table >
                <tr>
                <th>  </th><th>  </th><th>  </th><th>  </th>
                <th> wifi </th>
                <th>  </th><th>  </th><th>  </th><th>  </th>
                <th>  Outlets </th>
                <th>  </th><th>  </th><th>  </th><th>  </th>
                <th>  Kid Friendly</th>
                <th>  </th><th>  </th><th>  </th><th>  </th>
                <th> Reward Program  </th>
                <th>  </th><th>  </th><th>  </th><th>  </th>
                <th> Sofa(s) </th>
                <th>  </th><th>  </th><th>  </th><th>  </th>
                <th> Order Ahead </th>
                <th>  </th><th>  </th><th>  </th><th>  </th>
                <th> Gluten-free options </th>
                <th>  </th><th>  </th><th>  </th><th>  </th>
                <th> Vegan options </th>
                </tr>
                <tr>
                <th>  </th><th>  </th><th>  </th><th>  </th>
                <input type="checkbox" value = {wifi}  onChange={(event) => setWifi( prevState => !prevState)}/>
                <th>  </th><th>  </th><th>  </th><th>  </th>
                <input type="checkbox" value = {outlets}  onChange={(event) => setOutlets( prevState => !prevState)}/>
                <th>  </th><th>  </th><th>  </th><th>  </th>
                <input type="checkbox" value = {kids}  onChange={(event) => setKids( prevState => !prevState)}/>
                <th>  </th><th>  </th><th>  </th><th>  </th>
                <input type="checkbox" value = {reward}  onChange={(event) => setRewards( prevState => !prevState)}/>
                <th>  </th><th>  </th><th>  </th><th>  </th>
                <input type="checkbox" value = {sofas}  onChange={(event) => setSofas( prevState => !prevState)}/>
                <th>  </th><th>  </th><th>  </th><th>  </th>
                <input type="checkbox" value = {order}  onChange={(event) => setOrder( prevState => !prevState)}/>
                <th>  </th><th>  </th><th>  </th><th>  </th>
                <input type="checkbox" value = {gluten}  onChange={(event) => setGluten( prevState => !prevState)}/>
                <th>  </th><th>  </th><th>  </th><th>  </th>
                <input type="checkbox" value = {vegan}  onChange={(event) => setVegan( prevState => !prevState)}/>
                </tr>
            </table>
        
            <br />
         <div>
            <textarea rows="5" cols="50"  type="text" placeholder="Please enter your review here." value = {review} onChange={(event) => setReview(event.target.value)}></textarea>
         </div>
        <input  type="submit" value= "submit review" />
        </form>
    );
};
export default Home;
