import { useState, useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router-dom"
import Loading from "../Components/Loading/Loading";

const Messages = () => {

  const back = ()=>{
    history.back();
  }

  const {msg} = useParams();

  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMsg = async () => {
      try {
        const messagesRes = await axios.get(import.meta.env.VITE_API_ENDPOINT + msg);
        
        setMessage(messagesRes.data.Note);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMsg();
  }, [msg]);

  if (loading) {
    return (
      <>
      <Loading />
      </>
    );
  }


  return (
    <>

<div className="backBtn" onClick={back}>
  <i className="bi bi-arrow-left"></i>
</div>

      <div className="message-wrapper">

        <h1>
          Dear - {message[0].to}
        </h1>

       <pre>
       {message[0].message}
       </pre>

      <h4>
        ~ <span>From</span> {message[0].from}
      </h4>

      </div>
    </>
  )
}

export default Messages
