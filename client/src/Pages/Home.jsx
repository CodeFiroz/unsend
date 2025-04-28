import Hero from "../Components/Hero/Hero";
import PostCard from "../Components/PostCard/PostCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Components/Loading/Loading";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMsg = async () => {
      try {
        const messagesRes = await axios.get(import.meta.env.VITE_API_ENDPOINT);
        
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
      <>
      <Loading />
      </>
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
