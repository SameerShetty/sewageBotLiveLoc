const firebaseConfig = {
  apiKey: "AIzaSyAVXftjtU3qNtVG7LGQCz8vLVDzhrXb6Bk",
  authDomain: "database-70430.firebaseapp.com",
  databaseURL: "https://database-70430-default-rtdb.firebaseio.com",
  projectId: "database-70430",
  storageBucket: "database-70430.appspot.com",
  messagingSenderId: "304186209320",
  appId: "1:304186209320:web:737a43220d1e066f21f11d",
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// Get a reference to the database
const database = firebase.database();

// Fetch data
function openGoogleMaps(lat, lng) {
  const url = `https://www.google.com/maps?q=${lat},${lng}`;
  window.open(url, "_blank");
}

function getBotLocation() {
  database.ref("/").on("value", (snapshot) => {
    const data = snapshot.val();
    document.getElementById(
      "latlan"
    ).innerHTML = `<h3>Lat : ${data.latitude}</h3> <h3>Long : ${data.longitude}</h3>`;
    document.getElementById("btn").addEventListener("click", (e) => {
      e.preventDefault();
      openGoogleMaps(data.latitude, data.longitude);
    });
  });
}

document.addEventListener("DOMContentLoaded", getBotLocation);
