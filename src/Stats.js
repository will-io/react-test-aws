import React ,{useState,useEffect} from 'react';
import './App.css';
import firebase from './firebase'
import 'firebase/firestore';

function useReviews(){
  const [reviews,setReviews] = useState([])

  useEffect(()=>{
     const unsubscribe = firebase
     .firestore()
     .collection('reviews')
     .onSnapshot((snapshot)=>{
        const newReviews = snapshot.docs.map((doc)=>({
           id:doc.id,
           ...doc.data()
        }))

        setReviews(newReviews)
     })
     return () => unsubscribe()
  },[])
  return reviews
}

const Stats = () => {

      const reviews = useReviews()

  return (
    <div className="App">
      
      <h3>Welcome to our stats page!</h3>
   
      <h3>Here are all our past reviews:</h3>

      <div>
        <label><p>Sort by:</p></label>{''}
      <select>
        <option>Location a-z</option>
        <option>Name a-z</option>
      </select>
    </div>
    <div >
    <ol>
      {reviews.map((name)=>

      <li key= {name.id}>
       
        <p> Reviewer: {name.name} </p>
        <p> Location: {name.location} </p>
        <table border = '1px solid black' align = 'center'>
        <thead>
          <tr> 
            <th>Bonus Features:</th> 
            </tr>   
            </thead>
            <tbody>
                <tr> 
          {name.wifi? <td>Wifi &#10004;</td> : <td></td> }
          {name.outlets? <td>Outlets &#10004;</td> : <td></td> }
          {name.kid? <td>Kid Friendly &#10004;</td> : <td></td> }
          {name.reward? <td>Reward Program &#10004;</td> : <td></td> }
          {name.sofas? <td>Sofa(s) &#10004;</td> : <td></td> }
          {name.order? <td> Order ahead &#10004;</td> : <td></td> }
          {name.gluten? <td>Guten-Free Options&#10004;</td> : <td></td> }
          {name.vegan? <td>Vegan Options &#10004;</td> : <td></td> }
              </tr>
              </tbody>
          </table>
       <p> Review: {name.review} </p>
        
      </li>
      )} 
    </ol>
    </div>
    </div>

  )
}

export default Stats;
