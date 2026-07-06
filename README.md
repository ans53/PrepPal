<h1 align="center">🚀 PrepPal</h1>
<h3 align="center">Real-Time Study Collaboration Platform</h3>
<br/>
<p>While numerous online learning resources—such as coding platforms, video tutorials, discussion forums, and digital documentation—are readily available, many learners continue to prepare in isolation. This lack of peer interaction often leads to reduced motivation, limited exposure to diverse problem-solving strategies, and insufficient practice of real-world interview scenarios.<br/>
PrepPal is conceived as a real-time, community-driven web platform designed to address these challenges and support students as well as early-career professionals in their journey toward securing technical roles. The platform aims to transform the traditional, solitary approach to interview preparation into a collaborative and engaging learning experience. By fostering a supportive community environment, PrepPal enables users to connect with like-minded peers based on their technology stacks, experience levels, skill sets, and career aspirations. This targeted networking facilitates meaningful interactions, encourages knowledge exchange, and promotes structured peer-to-peer learning.
<p>
  <br/>
<p align="center">
A full-stack real-time chat and video calling platform built for students.
</p>


<hr/>

<h2>✨ Features</h2>
<ul>
  <li>🔐 JWT Authentication (Login / Register)</li>
  <li>👥 Friend Requests & Suggestions</li>
  <li>💬 Real-Time 1–1 Chat using Socket.IO</li>
  <li>📎 File & PDF Upload (Cloudinary)</li>
  <li>📹 Peer-to-Peer Video Calling (WebRTC)</li>
  <li>🌗 Multiple Themes</li>
  <li>🔒 Protected Routes</li>
</ul>

<hr/>

<h2>🏗 Tech Stack</h2>

<h3>💻 Frontend</h3>
<ul>
  <li>React (Vite)</li>
  <li>TailwindCSS</li>
  <li>Socket.IO Client</li>
  <li>WebRTC</li>
  <li>Axios</li>
  <li>Context API</li>
</ul>

<h3>🖥 Backend</h3>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB + Mongoose</li>
  <li>Socket.IO</li>
  <li>JWT Authentication</li>
  <li>Cloudinary</li>
  <li>Multer</li>
</ul>

<hr/>

<h2>📂 Project Structure</h2>

<pre><code>
PrepPal/
├─ backend/
│  ├─ src/
│  │  ├─ config/
│  │  │  ├─ db.js
│  │  │  └─ jwt.js
│  │  ├─ controllers/
│  │  │  ├─ auth.controller.js
│  │  │  ├─ chat.controller.js
│  │  │  └─ user.controller.js
│  │  ├─ lib/
│  │  │  └─ cloudinary.js
│  │  ├─ middleware/
│  │  │  ├─ auth.middleware.js
│  │  │  └─ upload.middlewear.js
│  │  ├─ models/
│  │  │  ├─ FriendRequest.js
│  │  │  ├─ Message.js
│  │  │  └─ User.js
│  │  ├─ routes/
│  │  │  ├─ auth.routes.js
│  │  │  ├─ chat.routes.js
│  │  │  └─ user.routes.js
│  │  ├─ socket/
│  │  │  └─ socket.js
│  │  └─ server.js
│  ├─ .env
│  ├─ package-lock.json
│  └─ package.json
│
├─ frontend/
│  ├─ public/
│  │  ├─ prep.png
│  │  └─ vite.svg
│  ├─ src/
│  │  ├─ api/
│  │  │  ├─ auth.js
│  │  │  ├─ axios.js
│  │  │  ├─ chat.js
│  │  │  ├─ friend.js
│  │  │  └─ user.js
│  │  ├─ assets/
│  │  │  ├─ login.png
│  │  │  ├─ react.svg
│  │  │  └─ register.png
│  │  ├─ components/
│  │  │  ├─ chat/
│  │  │  │  ├─ ChatList.jsx
│  │  │  │  ├─ ChatWindow.jsx
│  │  │  │  ├─ MessageBubble.jsx
│  │  │  │  └─ MessageInput.jsx
│  │  │  ├─ common/
│  │  │  │  ├─ Loader.jsx
│  │  │  │  └─ ThemeButton.jsx
│  │  │  ├─ layout/
│  │  │  │  └─ Navbar.jsx
│  │  │  ├─ routes/
│  │  │  │  └─ ProtectedRoute.jsx
│  │  │  ├─ users/
│  │  │  │  ├─ FriendCard.jsx
│  │  │  │  ├─ FriendRequestCard.jsx
│  │  │  │  └─ SuggestedUserCard.jsx
│  │  │  └─ video/
│  │  │     └─ VideoCall.jsx
│  │  ├─ context/
│  │  │  ├─ AuthContext.jsx
│  │  │  └─ AuthContextProvider.jsx
│  │  ├─ hooks/
│  │  │  ├─ useAuth.js
│  │  │  ├─ useFriends.js
│  │  │  ├─ usePeer.js
│  │  │  ├─ useSocket.js
│  │  │  └─ useUsers.js
│  │  ├─ pages/
│  │  │  ├─ Home.jsx
│  │  │  ├─ Login.jsx
│  │  │  ├─ Profile.jsx
│  │  │  └─ Register.jsx
│  │  ├─ services/
│  │  │  └─ authService.js
│  │  ├─ utils/
│  │  │  └─ call.js
│  │  ├─ App.jsx
│  │  ├─ index.css
│  │  └─ main.jsx
│  ├─ .env
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ README.md
│  ├─ tailwind.config.js
│  └─ vite.config.js
│
├─ .gitignore
└─ README.md
</code></pre>

<hr/>

<h2>🔐 Environment Variables</h2>

<h3>Backend (.env)</h3>

<pre>
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
</pre>

<h3>Frontend (.env)</h3>

<pre>
VITE_API_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
</pre>

<hr/>

<h2>⚙️ Installation</h2>

<h3>Clone the Repository</h3>

<pre>
git clone https://github.com/ans53/PrepPal.git
cd PrepPal
</pre>

<h3>Backend Setup</h3>

<pre>
cd backend
npm install
npm run dev
</pre>

<h3>Frontend Setup</h3>

<pre>
cd frontend
npm install
npm run dev
</pre>

<hr/>
<h3>Screenshots</h3>
<img width="1920" height="1080" alt="Screenshot (1129)" src="https://github.com/user-attachments/assets/c6945abe-9529-4f2c-9cea-bbd2f812b2ee" />
<img width="1920" height="1080" alt="Screenshot (1130)" src="https://github.com/user-attachments/assets/43f57b58-b46b-4c7c-954b-79f2b87d3160" />
<img width="1920" height="1080" alt="Screenshot (1131)" src="https://github.com/user-attachments/assets/c615e66a-a912-4cb2-a3f1-1c65136deaf9" />
<img width="1920" height="1080" alt="Screenshot (1132)" src="https://github.com/user-attachments/assets/4d7668ba-1e23-44cc-ae09-ea474cc93fae" />
<img width="1920" height="1080" alt="Screenshot (1133)" src="https://github.com/user-attachments/assets/7d239b43-28bc-4b28-82ec-25f9922fd14e" />
<img width="1920" height="1080" alt="Screenshot (1134)" src="https://github.com/user-attachments/assets/5b48d87b-71ac-4d79-8935-25d71009133a" />
<img width="1920" height="1080" alt="Screenshot (1135)" src="https://github.com/user-attachments/assets/89b98208-1133-4bd0-9088-8fd4f74d2951" />
<img width="1920" height="1080" alt="Screenshot (1136)" src="https://github.com/user-attachments/assets/4a3c3daf-f078-4efb-8d0d-e5d1d9b0f047" />
<img width="1920" height="1080" alt="Screenshot (1137)" src="https://github.com/user-attachments/assets/f52ac531-e7cd-4068-9141-e79fdf829f66" />
<img width="1920" height="1080" alt="Screenshot (1138)" src="https://github.com/user-attachments/assets/f3215bdb-938e-434f-a5a2-a6be1c69daec" />
<img width="1920" height="1080" alt="Screenshot (1139)" src="https://github.com/user-attachments/assets/b6ff738e-18eb-4a9f-bb1d-58276c60e33a" />
<img width="1920" height="1080" alt="Screenshot (1140)" src="https://github.com/user-attachments/assets/73c76b5e-61b2-4aed-b738-948f4fbebbb8" />
<img width="1920" height="1080" alt="Screenshot (1141)" src="https://github.com/user-attachments/assets/8953766e-3bbc-461a-8054-cccd4c1f557a" />
<img width="1920" height="1080" alt="Screenshot (1142)" src="https://github.com/user-attachments/assets/b51fc09d-cb2a-429c-9d50-50aa54fa271c" />
<img width="1920" height="1080" alt="Screenshot (1143)" src="https://github.com/user-attachments/assets/bdba0f78-67a4-48b5-8c12-ec4a5fa3d637" />
<img width="1920" height="1080" alt="Screenshot (1144)" src="https://github.com/user-attachments/assets/2d39dc3e-ee61-46ef-8c27-d903ba9b59b4" />
<img width="1920" height="1080" alt="Screenshot (1145)" src="https://github.com/user-attachments/assets/383c1639-9cca-4b7a-8c60-2ddac5e62fe5" />
<img width="1920" height="1080" alt="Screenshot (1146)" src="https://github.com/user-attachments/assets/04d2fcdd-fde1-431f-a929-e4e02b4b51f0" />
<img width="1920" height="1080" alt="Screenshot (1147)" src="https://github.com/user-attachments/assets/e00d6a4b-7ce3-4f6b-ab7d-57cd88ddf79b" />
<img width="1920" height="1080" alt="Screenshot (1148)" src="https://github.com/user-attachments/assets/e7f4d296-85d9-43b5-b319-6ff9a4808350" />
<img width="1920" height="1080" alt="Screenshot (1149)" src="https://github.com/user-attachments/assets/5591b127-733d-4e58-a903-fd2edb96f1cf" />
<img width="1920" height="1080" alt="Screenshot (1150)" src="https://github.com/user-attachments/assets/41581f6b-3967-4ae1-aad4-f92df3310536" />
<img width="1920" height="1080" alt="Screenshot (1151)" src="https://github.com/user-attachments/assets/2b554a89-0564-4581-8451-db227636262b" />
<img width="1920" height="1080" alt="Screenshot (1152)" src="https://github.com/user-attachments/assets/ff3cde89-a80f-4a43-8db1-68e5d690439b" />
<img width="1920" height="1080" alt="Screenshot (1153)" src="https://github.com/user-attachments/assets/c1276d0e-2948-49e9-b06c-cb996544c249" />
<img width="1920" height="1080" alt="Screenshot (1154)" src="https://github.com/user-attachments/assets/a37ce8c2-8d32-4d26-b2d9-e69d3546d456" />
<img width="1920" height="1080" alt="Screenshot (1156)" src="https://github.com/user-attachments/assets/9cdc5e0f-1be0-48a1-b573-8121e2836ba0" />
<img width="1920" height="1080" alt="Screenshot (1157)" src="https://github.com/user-attachments/assets/75bbcdc6-6dbd-4d5b-9f7b-12b46aed3aab" />





<hr/>

<h2>🎯 Purpose</h2>

<p>
PrepPal was built to provide students with a seamless environment
to chat, collaborate, and prepare together in real-time.
</p>

<hr/>

<p align="center">⭐ If you like the project, consider giving it a star!</p>
