// 1. Blog Data (Directly embedded to avoid 'Failed to Fetch' error on local files)
const blogs = [
    { 
        "id": 1, 
        "title": "📢 BIG ANNOUNCEMENT: Grand Opening!", 
        "excerpt": "Join us this Friday for the grand opening of our new branch at Metro Star Gate! First 50 customers get free Lattes.", 
        "date": "2026-02-25" 
    },
    { 
        "id": 2, 
        "title": "🌙 Ramadan Special: Iftar Brews", 
        "excerpt": "Celebrate the holy month with our special Date-infused Cold Brew. Available after Maghrib only.", 
        "date": "2026-02-24" 
    },
    { 
        "id": 3, 
        "title": "☕ Barista Workshop 2026", 
        "excerpt": "Want to learn Latte Art? Register for our weekend workshop and brew like a pro.", 
        "date": "2026-02-22" 
    },
    { 
        "id": 4, 
        "title": "The Ethiopia Connection", 
        "excerpt": "Our latest batch of organic beans has arrived directly from the Sidamo region.", 
        "date": "2026-02-20" 
    },
    { 
        "id": 5, 
        "title": "🎁 Flash Sale: 50% OFF", 
        "excerpt": "Today only! Use code 'JAVA50' for a massive discount on all espresso-based drinks.", 
        "date": "2026-02-19" 
    },
    { 
        "id": 6, 
        "title": "Meet Our Head Barista", 
        "excerpt": "Learn about Ali's journey from a coffee lover to a certified Master Brewer.", 
        "date": "2026-02-15" 
    },
    { 
        "id": 7, 
        "title": "New Vegan Menu", 
        "excerpt": "We now offer Oat milk, Almond milk, and Soy milk at no extra cost!", 
        "date": "2026-02-10" 
  },
  { 
        "id": 8, 
        "title": "Coffee & Coding Night", 
        "excerpt": "Special discount for developers tonight! Bring your laptop and enjoy unlimited refills.", 
        "date": "2026-02-08" 
  },
  { 
        "id": 9, 
        "title": "Sustainability Report", 
        "excerpt": "Java Buzz is now 100% plastic-free. Thank you for supporting our green initiative.", 
        "date": "2026-02-05" 
  },
  { 
        "id": 10, 
        "title": "Member of the Month", 
        "excerpt": "Congratulations to Sarah for being our most loyal customer this February!", 
        "date": "2026-02-01" 
  }
];

// 2. Load Blogs Function
function displayBlogs() {
    const container = document.getElementById('blog-container');
    if (!container) return;

    container.innerHTML = ""; // Container clear karein
    
    blogs.forEach(blog => {
        const card = `
            <div class="blog-card">
                <h3>${blog.title}</h3>
                <p>${blog.excerpt}</p>
                <small>Posted on: ${blog.date}</small>
            </div>`;
        container.innerHTML += card;
    });
}

// 3. Initialize Leaflet Map (Metro Star Gate, Karachi)
function initMap() {
    // Coordinates for Metro Star Gate area
    const lat = 24.8943; 
    const lng = 67.1433;

    var map = L.map('map').setView([lat, lng], 15); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map)
        .bindPopup('<b>Java Buzz Coffee Shop</b><br>Metro Star Gate Branch.')
        .openPopup();
}

// 4. Run everything on Page Load
window.onload = function() {
    displayBlogs();
    initMap();
};