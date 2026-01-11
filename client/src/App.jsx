import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function App() {
  const [topic, setTopic] = useState("");
  const [joined, setJoined] = useState(false);
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [warning, setWarning] = useState("");
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChatLog((prev) => [...prev, data.message]);
      setWarning("");
    });

    socket.on("error_message", (err) => {
      setWarning(err);
    });

    return () => {
      socket.off("receive_message");
      socket.off("error_message");
    };
  }, []);

  const joinChat = () => {
    if (topic !== "") {
      socket.emit("join_topic", topic);
      setJoined(true);
    }
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("send_message", { message, topic });
      setMessage("");
    }
  };

  const leaveChat = () => {
    setJoined(false);
    setChatLog([]);
    setTopic("");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-500 ${
        highContrast ? "bg-black text-white" : "bg-[#0f172a] text-slate-200"
      }`}
    >
      {!joined ? (
        <div
          className={`p-8 rounded-3xl shadow-2xl w-full max-w-md text-center border ${
            highContrast
              ? "border-white bg-black"
              : "border-slate-700 bg-[#1e293b]"
          }`}
        >
          <h1 className="text-4xl font-extralight mb-2 text-white">MindLift</h1>
          <p className="text-slate-400 mb-8 text-sm uppercase tracking-widest">
            Anonymous Peer Support
          </p>

          <h2 className="text-xl mb-4 text-white">Choose a safe space:</h2>
          <select
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-4 mb-6 bg-slate-900 rounded-xl border border-slate-700 text-white outline-none focus:border-[#38bdf8]"
          >
            <option value="">-- Select a Topic --</option>
            <option value="Work Stress">Work Stress</option>
            <option value="Exams & School">Exams & School</option>
            <option value="Loneliness">Loneliness</option>
            <option value="General Venting">General Venting</option>
          </select>

          <button
            onClick={joinChat}
            className="w-full bg-[#38bdf8] text-[#0f172a] font-bold py-4 rounded-xl hover:bg-white transition-all transform hover:scale-[1.02]"
          >
            Start Talking
          </button>
        </div>
      ) : (
        <div
          className={`p-6 rounded-3xl shadow-2xl w-full max-w-md border ${
            highContrast
              ? "border-white bg-black"
              : "border-slate-700 bg-[#1e293b]"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#38bdf8] text-xs font-bold uppercase">
              Topic: {topic}
            </span>
            <button
              onClick={leaveChat}
              className="text-slate-500 text-xs hover:text-white underline"
            >
              Change Topic
            </button>
          </div>

          <div className="h-80 overflow-y-auto mb-4 p-4 bg-[#0f172a] rounded-2xl border border-slate-800 flex flex-col gap-3">
            {chatLog.map((msg, i) => (
              <div
                key={i}
                className="bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-700 max-w-[90%] self-start"
              >
                <p className="text-white text-sm">{msg}</p>
              </div>
            ))}

            {warning && (
              <div className="bg-red-900/30 border border-red-500 p-3 rounded-xl">
                <p className="text-red-400 text-xs italic">{warning}</p>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Talk to me..."
              className="flex-1 bg-slate-900 p-3 rounded-xl border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-[#38bdf8]"
            />
            <button
              onClick={sendMessage}
              className="bg-[#38bdf8] text-[#0f172a] px-5 rounded-xl font-bold hover:bg-sky-400"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setHighContrast(!highContrast)}
        className="mt-8 text-[10px] uppercase tracking-widest border border-slate-700 px-4 py-2 rounded-full opacity-40 hover:opacity-100 transition-opacity"
      >
        {highContrast
          ? "Switch to Calm Blue Mode"
          : "Switch to High Contrast (B&W)"}
      </button>
    </div>
  );
}

export default App;
