import { useState, useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router-dom"


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
        const messagesRes = await axios.get(`http://localhost:3000/api/msg/${msg}`);
        console.log(messagesRes.data.Note);
        
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
      <div className="loading">
        <h5>Loading...</h5>
      </div>
    );
  }


  return (
    <>

<div className="backBtn" onClick={back}>
  <i className="bi bi-arrow-left"></i>
</div>

      <div className="message-wrapper">

        <h1>
          {message[0].to}
        </h1>

       <p>
       {message[0].message}
       </p>

      </div>
    </>
  )
}

export default Messages
