import './PostCard.css'



const PostCard = (props) => {

  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const secondsAgo = Math.floor((now - date) / 1000);
  
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };
  
    for (let key in intervals) {
      const interval = Math.floor(secondsAgo / intervals[key]);
      if (interval >= 1) {
        return `${interval} ${key}${interval > 1 ? 's' : ''} ago`;
      }
    }
  
    return 'just now';
  }

  return (
    <>
     <a href={props.slug} className="postCard">
        <h2>
            <span>To : </span> {props.to}
        </h2>    
        <div className="date">
            <i className="bi bi-clock-history"></i>
            <span>{timeAgo(props.time)}</span>
        </div>
    </a> 
    </>
  )
}

export default PostCard
