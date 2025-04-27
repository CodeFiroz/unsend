import './Header.css'

const Header = () => {
  return (
    <>
     <div className="header">

        <div className="site-logo">
            <h4><a href="#">Unsend</a></h4>
            <p>Library of unsend messages</p>
        </div>

        <div className="nav">

            <button className="theme">
                <div className="indicator">
                <i className="bi bi-sun-fill"></i>
                </div>
            </button>

            <button className='postBtn'>
                <i className="bi bi-plus-lg"></i>
                Write Message
            </button>

            <button className='infoBtn'>
                <i className="bi bi-info"></i>
            </button>

        </div>

    </div> 
    </>
  )
}

export default Header
