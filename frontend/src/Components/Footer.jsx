import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/giphy.gif'

export const Footer = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [query, setQuery] = useState("");
    
    const getAIsuggestion = () => {
        axios.post("http://localhost:8080/getsuggestion", { query })
        .then((res)=>{
            navigate(`${res.data.url}`);
        })
        .catch((err)=>{
            console.log(err);
        })
        setQuery("");
    }

    return(
        <>
        <div style={{height: "7rem", display: "flex", justifyContent: "right"}}>
            {
                show ? <><textarea value={query} onChange={(e) => {setQuery(e.target.value)}} rows={10} cols={55}></textarea>
                <button onClick={getAIsuggestion} style={{backgroundColor: 'black'}}>ASK
                </button></> : ""
            }
        </div>
        <div style={{display: "flex", justifyContent: "right"}}>
            <button onClick={() => {setShow(!show)}} style={{display: 'flex', alignItems: 'center', backgroundColor: 'Background'}} >Ask an<span style={{color: 'yellow', display: 'flex', alignItems: 'center'}}>&nbsp;AI&nbsp;<img src={logo} alt="loading..." style={{height: "3rem"}} /></span></button>
        </div>
        </>
    )
}