import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/giphy.gif'
import Routes from '../Pages/routesInfo.js';

export const Footer = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [query, setQuery] = useState("");
    
    const getAIsuggestion = () => {
        axios.post("http://localhost:8080/getsuggestion", { query })
        .then((res)=>{
            const key = res.data.url;
            if(1<= key && key <= 6){
                navigate(`${Routes[key]}`);
            }
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
            <button onClick={() => {setShow(!show)}} style={{display: 'flex', alignItems: 'center', backgroundColor: 'Background'}} >Ask to<span style={{color: 'yellow', display: 'flex', alignItems: 'center'}}>&nbsp;AI&nbsp;<img src={logo} alt="loading..." style={{height: "3rem"}} /></span></button>
        </div>
        </>
    )
}