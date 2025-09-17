document.addEventListener("DOMContentLoaded", async () => {
    
    const response = await fetch("data/members.json");
    const members = await response.json();
  
    const directoryContainer = document.getElementById("directory");
    members.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("member-card");
  
        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}">Visit Website</a>
        `;
  
        directoryContainer.appendChild(memberCard);
    });

  
    // Display current year and last modified date
    const currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;
    document.getElementById("lastModified").textContent = document.lastModified;
  });
