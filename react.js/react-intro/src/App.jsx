// import { useState } from 'react'
// import './App.css'


// function App() {

//   const [prodect, setProdect] = useState({
//     name: "mobile",
//     price: 20000,
//     color: "black"
//   })
  
//   const [cart, setCart] = useState({
//     item: "mobile",
//     title: "samsung",
//     price: 20000
//   })

//   const addToCart = () => {
//     setCart({
//       item: prodect.name,
//       title: "samsung",
//       price: prodect.price
//     })
//   }


//   return (
    
//   <div>
//     <h1>prodect name: {prodect.name}</h1>
//     <h1>prodect price: {prodect.price}</h1>
//     <h1>prodect color: {prodect.color}</h1>

//     <button onClick={addToCart}>cart</button>

//     <h1>cart item:{prodect.item}</h1>
//     <h1>cart title:{prodect.title}</h1>
//     <h1>cart price:{prodect.price}</h1>
//   </div>
    



//   )
// }

// export default App

// qimport React, { useState } from "react";

// function App() {
//   const [Onof, setIsOn] = useState();

//   return (
//     <div >
//       <h1>{Onof ? "Bulb is ON" : "Bulb is OFF"}</h1>

//       <button
//         onClick={() => {
//           if (Onof) {
//             setIsOn(false);
//           } else {
//             setIsOn(true);
//           }
//         }}
//       >
//         {Onof ? "Turn OFF" : "Turn ON"}
//       </button>                                                                 
//     </div>
//   );
// }

// export default App;
                                  


/*
Single-file React WhatsApp-like web app (Tailwind CSS required).
How to use:
1) Create a React project (Vite or CRA). 
2) Install Tailwind CSS and configure (https://tailwindcss.com/docs/guides/vite).
3) Drop this file as `WhatsAppWeb.jsx` in `src/` and import it from App.jsx.
4) Optional: install shadcn/ui and lucide-react for nicer components — code works without them.

Features included:
- Contacts list with search
- Conversation pane with messages, timestamps, read receipts
- Send text messages, emoji picker, attach image (preview, stored in-memory/localStorage)
- LocalStorage persistence for chats
- Responsive two-column layout
- Theme toggle (light/dark)
- Simple simulated bot reply

This is a teaching/demo app, not production-ready for real messaging (no backend/auth/encryption).
*/

import React, { useEffect, useState, useRef } from "react";
import tailwindcss from "@tailwindcss/vite";

const sampleContacts = [
  { id: "c1", name: "Asha", lastSeen: "online", avatarColor: "bg-green-400" },
  { id: "c2", name: "Rahul", lastSeen: "yesterday", avatarColor: "bg-blue-400" },
  { id: "c3", name: "Sita", lastSeen: "2:14 PM", avatarColor: "bg-purple-400" },
  { id: "c4", name: "Team Project", lastSeen: "members: 4", avatarColor: "bg-yellow-400" }
];

const STORAGE_KEY = "whatsapp_clone_chats_v1";
const THEME_KEY = "whatsapp_clone_theme_v1";

function nowTime() {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function makeInitialChats() {
  const now = new Date();
  return {
    c1: [
      { id: 'm1', from: 'them', text: 'Hey! Are you coming tonight?', time: '10:05 AM', status: 'read' },
      { id: 'm2', from: 'me', text: "Yes — I'll be there by 8.", time: '10:07 AM', status: 'read' }
    ],
    c2: [
      { id: 'm3', from: 'them', text: 'Check the PR I sent.', time: 'Yesterday', status: 'delivered' }
    ],
    c3: [],
    c4: [
      { id: 'm4', from: 'them', text: 'Project meeting at 5', time: '9:00 AM', status: 'read' }
    ]
  };
}

export default function WhatsAppWeb() {
  const [contacts] = useState(sampleContacts);
  const [activeId, setActiveId] = useState(sampleContacts[0].id);
  const [chats, setChats] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return makeInitialChats();
  });
  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || 'light');
  const [attachmentPreview, setAttachmentPreview] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
  }, [chats]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    // scroll to bottom on active chat change or message send
    if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [activeId, chats]);

  const filtered = contacts.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));

  function sendMessage() {
    if (!input.trim() && !attachmentPreview) return;
    const newMsg = {
      id: 'm' + Math.random().toString(36).slice(2, 9),
      from: 'me',
      text: input.trim() || (attachmentPreview ? `[Image] ${attachmentPreview.name}` : ''),
      time: nowTime(),
      status: 'sent',
      attachment: attachmentPreview ? { name: attachmentPreview.name, data: attachmentPreview.data } : null
    };
    setChats(prev => ({ ...prev, [activeId]: [...(prev[activeId] || []), newMsg] }));
    setInput('');
    setAttachmentPreview(null);

    // simulate delivery/read and a simple bot reply
    setTimeout(() => {
      setChats(prev => {
        const updated = { ...prev };
        updated[activeId] = updated[activeId].map(m => m.id === newMsg.id ? { ...m, status: 'delivered' } : m);
        return updated;
      });
    }, 600);
    setTimeout(() => {
      // bot reply
      const reply = {
        id: 'm' + Math.random().toString(36).slice(2, 9),
        from: 'them',
        text: `Auto-reply: got "${newMsg.text.slice(0, 60)}"`,
        time: nowTime(),
        status: 'read'
      };
      setChats(prev => ({ ...prev, [activeId]: [...(prev[activeId] || []), reply] }));
    }, 1400);
  }

  function handleFile(e) {
    const f = e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      setAttachmentPreview({ name: f.name, data: reader.result });
    };
    reader.readAsDataURL(f);
  }

  function clearChat(id) {
    if (!window.confirm('Clear chat with this contact?')) return;
    setChats(prev => ({ ...prev, [id]: [] }));
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-6xl h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {/* Left column - header + search + contacts */}
        <aside className="md:col-span-1 lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl shadow p-3 flex flex-col">
          <div className="flex items-center justify-between px-2 mb-3">
            <h2 className="text-xl font-semibold">WhatsApp Clone</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
                className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          </div>

          <div className="px-2 mb-3">
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search or start new chat"
              className="w-full rounded-full bg-gray-100 dark:bg-gray-700 p-2 outline-none"
            />
          </div>

          <div className="flex-1 overflow-auto px-1">
            {filtered.map(contact => {
              const lastMsg = (chats[contact.id] && chats[contact.id].slice(-1)[0]);
              return (
                <div
                  key={contact.id}
                  onClick={() => setActiveId(contact.id)}
                  className={`flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${activeId === contact.id ? 'bg-gray-50 dark:bg-gray-700' : ''}`}
                >
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${contact.avatarColor}`}>{contact.name[0]}</div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="font-medium">{contact.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-300">{(lastMsg && lastMsg.time) || contact.lastSeen}</div>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-300 truncate">{lastMsg ? (lastMsg.from === 'me' ? 'You: ' : '') + lastMsg.text : 'No messages yet'}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-3 px-2 flex items-center justify-between text-sm text-gray-500">
            <div>Logged in as <span className="font-medium">You</span></div>
            <div>
              <button className="underline" onClick={() => clearChat(activeId)}>Clear</button>
            </div>
          </div>
        </aside>

        {/* Middle column - chat */}
        <main className="md:col-span-2 lg:col-span-3 bg-white dark:bg-gray-800 rounded-2xl shadow flex flex-col overflow-hidden">
          <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${(contacts.find(c => c.id === activeId) || {}).avatarColor}`}>{(contacts.find(c => c.id === activeId) || {}).name?.[0]}</div>
            <div className="flex-1">
              <div className="font-medium">{(contacts.find(c => c.id === activeId) || {}).name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-300">{(contacts.find(c => c.id === activeId) || {}).lastSeen}</div>
            </div>
            <div className="text-sm text-gray-500">{chats[activeId] ? chats[activeId].length + ' messages' : '0 messages'}</div>
          </div>

          <div className="flex-1 overflow-auto p-4 space-y-4" id="messages">
            {(chats[activeId] || []).map(msg => (
              <div key={msg.id} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] p-3 rounded-lg break-words ${msg.from === 'me' ? 'bg-green-100 dark:bg-green-700 text-black dark:text-white rounded-br-none' : 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white rounded-bl-none'}`}>
                  {msg.attachment && msg.attachment.data && msg.attachment.data.startsWith('data:image') ? (
                    <div className="mb-2">
                      <img src={msg.attachment.data} alt={msg.attachment.name} className="max-h-40 rounded" />
                      <div className="text-xs mt-1">{msg.attachment.name}</div>
                    </div>
                  ) : null}
                  <div>{msg.text}</div>
                  <div className="text-xs mt-2 flex items-center justify-end gap-2 text-gray-500">
                    <span>{msg.time}</span>
                    {msg.from === 'me' ? <span>{msg.status === 'read' ? '✓✓' : msg.status === 'delivered' ? '✓' : '⏳'}</span> : null}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            {attachmentPreview ? (
              <div className="mb-2 flex items-center gap-3">
                <img src={attachmentPreview.data} alt={attachmentPreview.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-medium truncate">{attachmentPreview.name}</div>
                  <div className="text-sm text-gray-500">Image attached</div>
                </div>
                <button onClick={() => setAttachmentPreview(null)} className="p-2">Remove</button>
              </div>
            ) : null}

            <div className="flex items-center gap-2">
              <label className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                📎
                <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
              </label>

              <EmojiPicker onPick={e => setInput(i => i + e)} />

              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
                placeholder="Type a message"
                className="flex-1 rounded-full bg-gray-100 dark:bg-gray-700 p-3 outline-none"
              />
              <button onClick={sendMessage} className="px-4 py-2 rounded-full bg-green-500 text-white">Send</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function EmojiPicker({ onPick }) {
  const emojis = ["😀","😁","😂","😉","😍","🤔","😅","👍","🎉","🔥","🙏","🚀","💡","🙂","😎"];
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(o => !o)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">😊</button>
      {open ? (
        <div className="absolute bottom-10 left-0 bg-white dark:bg-gray-700 rounded shadow p-2 grid grid-cols-7 gap-1">
          {emojis.map(e => (
            <button key={e} onClick={() => { onPick(e); setOpen(false); }} className="p-1 text-lg">{e}</button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
