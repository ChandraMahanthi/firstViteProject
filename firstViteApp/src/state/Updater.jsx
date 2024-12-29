import React, { useState } from 'react';

function Updater() {
    let [normalState , setnormalState] = useState(0);
    let [updaterState , setupdaterState] = useState(0);
    function update()
    {
        setnormalState(normalState + 1);

        setnormalState(normalState + 1);
    }
    function usingUpdater()
    {
        setupdaterState(function callback(currentState)
        {
            return currentState + 1
        });

        setupdaterState((currentState) => {
            return currentState + 1
        });
    }

    function event(para1)
    {
        alert(para1)
    }
  return (
    <div>
        <button onClick={update}>Normal</button>
        <h1>{normalState}</h1>
        <button onClick={usingUpdater}>Updater function</button>
        <h1>{updaterState}</h1>
        <button onClick={()=> {
                event("argument passed")
            }
        }>Event handler in a different way</button>
    </div>
  )
}

export default Updater