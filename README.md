#  MindLift – The Anonymous Peer-Support Network

**MindLift** is a safe, moderated, and anonymous text-based platform designed to bridge the gap between social media pressure and expensive professional therapy. It connects people experiencing daily stress with empathetic peer listeners in a calm, distraction-free environment.

---

##  The Problem & Solution
- **The Problem:** Many individuals feel isolated by daily stressors (work, exams, loneliness) but find professional therapy unaffordable or social media too "performative" and public.
- **The Solution:** A 1-on-1 anonymous chat system where users are matched based on specific "Topics" and protected by an automated safety filter.

---

##  Key Features
* **Anonymity First:** No profiles, no "perfect life" photos—just human-to-human conversation.
* **Calm UI:** A minimalist interface featuring **Dark Mode** and **High-Contrast** options to reduce digital eye strain.
* **Real-time Matching:** An algorithm that connects "Seekers" and "Listeners" based on shared topics ( *Exam Stress, Career Anxiety*).
* **AI Sentiment Filter:** A backend safety layer that flags and blocks aggressive or harmful language before it reaches the other user.

---

## The Tech Stack (MERN)
I chose this stack for its scalability and the ability to use **JavaScript** across the entire application.

- **Frontend:** [React.js](https://reactjs.org/) (for a fast, responsive UI)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (for the Calm UI/Dark Mode)
- **Backend:** [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) (for storing anonymous chat logs and topics)
- **Real-time Engine:** [Socket.io](https://socket.io/) (enables instant, 1-on-1 messaging)
- **Safety Logic:** [Sentiment.js](https://www.npmjs.com/package/sentiment) (for the harmful language filter)

---

##  Project Roadmap

### Phase 1: Foundation
- [ ] Set up React project and Tailwind CSS.
- [ ] Create the "Calm UI" homepage and chat interface.

### Phase 2: Backend & Safety
- [ ] Build the Node.js server.
- [ ] Implement the **Sentiment Filter** logic to detect toxic messages.

### Phase 3: Real-Time Connection
- [ ] Integrate Socket.io for instant messaging.
- [ ] Create the Matching Algorithm based on user-selected "Topics."

### Phase 4: Final Polish
- [ ] Add High-Contrast accessibility mode.
- [ ] Deploy the app (Render/Vercel).

---

##  How to Contribute
As this project is in its early development stages, feedback and suggestions are welcome! This project is being built with a focus on **beginner-friendly coding practices.**

---

**Developed with ❤️ for Mental Wellness.**
