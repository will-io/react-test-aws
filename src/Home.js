import React , { useState} from 'react';
import './App.css';
import Rating from '@material-ui/lab/Rating';

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
    const [rating, setRating] = useState(2);

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
        console.log(rating);
        console.log("form submitted");
    };
    
    return(
        <form onSubmit = {handleSubmit} >
            <h3>select a Coffe or Tea shop around campus and give it a rating</h3>
         <div>
            <label>Please enter your name: </label>
            <input type = "text" value = {name} required onChange={(event)=> setName(event.target.value)}></input>
         </div>
         <br  />
         <div>
            <label>Please enter a location: </label>
            <input type = "text" value = {location} required onChange={(event)=> setLocation(event.target.value)}></input>
         </div>
            <br />
            
            <div>
            <label>Give us a rating</label>
            <br  /> 
            <Rating name="simple-controlled" precision ={0.5} value ={rating} onChange={(event,newValue) => setRating(newValue)}/>
            </div>
            <br />
            <b>Bonus Feature(s):</b> 
            <br  />
            <table border = '1px solid black' >

                <tr>
                <th> Wi-fi </th>
                <th> Outlets </th>
                <th> Kid Friendly</th>
                <th> Reward Program  </th>
                <th> Sofa(s) </th>
                <th> Order Ahead </th>
                <th> Gluten-free Options </th>
                <th> Vegan Options </th>
                </tr>

                <tr>
                <td  >
                <input type="checkbox" value = {wifi}  onChange={(event) => setWifi( prevState => !prevState)}/>
                </td>
                <td >
                <input type="checkbox" value = {outlets}  onChange={(event) => setOutlets( prevState => !prevState)}/>
                </td>
                <td >
                <input type="checkbox" value = {kids}  onChange={(event) => setKids( prevState => !prevState)}/>
                </td>
                <td >
                <input type="checkbox" value = {reward}  onChange={(event) => setRewards( prevState => !prevState)}/>
                </td>
                <td >
                <input type="checkbox" value = {sofas}  onChange={(event) => setSofas( prevState => !prevState)}/>
                </td>
                <td >
                <input type="checkbox" value = {order}  onChange={(event) => setOrder( prevState => !prevState)}/>
                </td>
                <td >
                <input type="checkbox" value = {gluten}  onChange={(event) => setGluten( prevState => !prevState)}/>
                </td>
                <td >
                <input type="checkbox" value = {vegan}  onChange={(event) => setVegan( prevState => !prevState)}/>
                </td>
                </tr>

            </table>
    
            <br />
         <div>
            <textarea rows="5" cols="50"  type="text" placeholder="Please enter your review/feedback here." value = {review} onChange={(event) => setReview(event.target.value)}></textarea>
         </div>
        <input  type="submit" value= "submit review" />
        </form>
    );
};
export default Home;
