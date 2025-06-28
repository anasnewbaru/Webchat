// admin.js
import { db } from './firebase-config.js';
import { collection, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const userPanel = document.getElementById("userStatusPanel");

async function loadUsers() {
  const snapshot = await getDocs(collection(db, "users"));
  snapshot.forEach(user => {
    const data = user.data();
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="p-4 bg-gray-800 rounded shadow">
        <p><strong>${data.username}</strong></p>
        <p>Status: ${data.banned ? "❌ Diblokir" : "✅ Aktif"}</p>
        <button class="mt-2 bg-${data.banned ? 'green' : 'red'}-500 px-4 py-1 rounded toggleBtn">
          ${data.banned ? 'Unban' : 'Ban'}
        </button>
      </div>
    `;
    div.querySelector(".toggleBtn").onclick = async () => {
      await updateDoc(doc(db, "users", user.id), { banned: !data.banned });
      location.reload();
    };
    userPanel.appendChild(div);
  });
}

loadUsers();