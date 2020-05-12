import React from 'react';


function Worm() {
  return (
    <div>
      
  <h2> Sign up</h2>
  <p1>It's quick and easy</p1>
  
   <form>
     <label title="first name">First Name</label>
     <input type="text" id="Fname"name="fname"/><br/>
     <label title="last name">Last Name</label>
     <input type="text" id="Lname"name="Lname"/><br/>
     <div class="row">
        <input type="radio"id="male" name="gender"value="male"></input>
        <label for="male">Male</label>
        <input type="radio"id="female"name="gender"value="female"></input>
        <label for="female">Female</label>
        <input type="radio"id="other"name="gender"value="other"></input>
        <label for="other">Other</label><br></br>
        <input type="submit" value="submit"/>

     </div>
   </form>
   
    </div>
  );
}

export default Worm;
