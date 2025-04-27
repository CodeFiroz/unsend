import React from 'react'

const Write = () => {
  return (
    <>

     <div className="write-message">

        <h1>
        Say it. Don't send it.
        </h1>
        <p>
            Draft the messages you never dared to deliver — and let them live in a space built just for them.
        </p>

        <form>

            <input type="text" name='to' placeholder='Message to...' />
            <input type="text" name='from' placeholder="From... (Don't Reveal your name)" />
            <textarea name="message" id="message" placeholder='Message'></textarea>
            <button>Submit Message</button>
        </form>

     </div>

    </>
  )
}

export default Write
