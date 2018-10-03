import React from 'react';


export default function Survey ({
  user,
  login,
  logout
}){
    return (
        <div>
          
          {
            user ? 
            <section>
              <p>Logged In {user.name}</p>
              <button onClick = {logout}>LOOUT</button>
            </section>
               : 
              <section>
                <p>Not logged in!</p>
                <button onClick = {login}>LOGIN</button>
              </section>
          }
        </div>
    );
}

