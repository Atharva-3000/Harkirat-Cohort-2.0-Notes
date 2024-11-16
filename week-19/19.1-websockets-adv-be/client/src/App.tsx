import { useEffect, useState } from "react"

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);

  const [latestmessages, setLatestMessages] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = () => {
      ('Connected')
      setSocket(socket)
    }
    socket.onmessage = (message) => {
      console.log('Received message:', message.data);
      setLatestMessages(message.data);
    }
    return () => {
      socket.close()
    }
  }, [])



  if (!socket) {
    return <div>Loading...</div>
  }
  return (
    <>
      <input type="text" placeholder="Enter message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value)
        }}
      />
      <button onClick={() => {
        socket.send(message)
      }}>
        Send
      </button>
      <div>{latestmessages}</div>
    </>
  )
}

export default App
