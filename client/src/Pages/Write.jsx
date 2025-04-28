import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

const Write = () => {
  const [formdata, setFormdata] = useState({
    from: '',
    to: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const [loading, setLoading] = useState(false);
  const [btntext, setBtntext] = useState("Submit Message");

  // Handle form reset
  const resetForm = () => {
    setFormdata({
      from: '',
      to: '',
      message: ''
    });
  };

  // Handle button and loading state
  const setButtonState = (text, isLoading = false) => {
    setBtntext(text);
    setLoading(isLoading);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (formdata.from === "" || formdata.to === "" || formdata.message === "") {
      toast.error("Please fill all the fields.");
      return; // Prevent submission if validation fails
    }

    // Set button state to loading
    setButtonState("Submitting...", true);

    try {
      const formResponse = await axios.post(import.meta.env.VITE_API_ENDPOINT, formdata);

      if (formResponse.data.success) {
        toast.success("Message Submitted");
        resetForm();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      // Reset button and loading state
      setButtonState("Submit Message");
    }
  };

  return (
    <>
      <Toaster />
      <div className="write-message">
        <h1>Say it. Don't send it.</h1>
        <p>
          Draft the messages you never dared to deliver — and let them live in a space built just for them.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={formdata.to}
            type="text"
            name="to"
            autoComplete="off"
            placeholder="Message to..."
          />

          <input
            onChange={handleChange}
            value={formdata.from}
            type="text"
            name="from"
            autoComplete="off"
            placeholder="From... (Don't Reveal your name)"
          />

          <textarea
            onChange={handleChange}
            value={formdata.message}
            name="message"
            autoComplete="off"
            placeholder="Message"
          ></textarea>

          <button type="submit" disabled={loading}>
            {btntext}
          </button>
        </form>
      </div>
    </>
  );
};

export default Write;
