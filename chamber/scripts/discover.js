// Load items from JSON file and render cards
fetch('data/items.json')
  .then(response => response.json())
  .then(data => {
    const itemsSection = document.getElementById('items');
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${item.title}</h2>
        <figure>
          <img src="${item.image}" alt="${item.title}">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;
      itemsSection.appendChild(card);
    });
  });

// Handle localStorage for last visit message
const sidebar = document.getElementById('sidebar');
const lastVisit = localStorage.getItem('lastVisit');
const now = new Date();
localStorage.setItem('lastVisit', now);

if (!lastVisit) {
  sidebar.innerText = "Welcome! Let us know if you have any questions.";
} else {
  const lastVisitDate = new Date(lastVisit);
  const differenceInTime = now - lastVisitDate;
  const days = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
  if (days < 1) {
    sidebar.innerText = "Back so soon! Awesome!";
  } else if (days === 1) {
    sidebar.innerText = `You last visited 1 day ago.`;
  } else {
    sidebar.innerText = `You last visited ${days} days ago.`;
  }

   // Display current year and last modified date
 const currentYear = new Date().getFullYear();
 document.getElementById("year").textContent = currentYear;
 document.getElementById("lastModified").textContent = document.lastModified;
}
