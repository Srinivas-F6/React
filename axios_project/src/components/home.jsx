import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
export function Home() {

    const[values, setValues] = useState("");
    const[loading, setLoading] = useState(false);

    async function axiosUse() {
        setLoading(true);
        try{
           const res = await axios.get("https://v2.jokeapi.dev/joke/Any");
        setValues(res.data);
        
        }
        catch(err){
            console.log(err);
        }
        finally{
            setLoading(false);
        }
        
    }
    return (
        <>
        <h1>
        {loading ? "⏳ Loading joke..." : values.joke || values.setup ? (
          <>
            {values.joke} {values.setup}
            <br /> {values.delivery}
          </>
        ) : (
          "Click the button to get a joke!"
        )}
      </h1>
        <button onClick={axiosUse}>Get Joke</button>
        </>
    )
}