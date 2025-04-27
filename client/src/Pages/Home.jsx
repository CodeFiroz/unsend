import Hero from "../Components/Hero/Hero";
import PostCard from "../Components/PostCard/PostCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMsg = async () => {
      try {
        const messagesRes = await axios.get("http://localhost:3000/api/msg");
        console.log(messagesRes.data.data);
        
        setMessages(messagesRes.data.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMsg();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h5>Loading...</h5>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <div className="postSection">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <PostCard key={msg._id} to={msg.to} time={msg.createdAt} slug={msg.slug} />
          ))
        ) : (
          <h5>No messages yet.</h5>
        )}
      </div>
    </>
  );
};

export default Home;
