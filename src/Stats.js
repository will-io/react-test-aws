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

// const ReviewList = () =>{
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
      // <div className = "review-entry">
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
          {name.wifi? <p>Wifi &#10004;</p> : <p></p> }
          {name.outlets? <p>Outlets &#10004;</p> : <p></p> }
          {name.kid? <p>Kid Friendly &#10004;</p> : <p></p> }
          {name.reward? <p>Reward Program &#10004;</p> : <p></p> }
          {name.sofas? <p>Sofa(s) &#10004;</p> : <p></p> }
          {name.order? <p> Order ahead &#10004;</p> : <p></p> }
          {name.gluten? <p>Guten-Free Options&#10004;</p> : <p></p> }
          {name.vegan? <p>Vegan Options &#10004;</p> : <p></p> }
              </tr>
              </tbody>
          </table>
       <p> Review: {name.review} </p>
        
      </li>
      //</div>
      )} 
    </ol>
    </div>
    </div>

  )
}

export default Stats;
