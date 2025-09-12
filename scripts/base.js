// Array of course objects
const courses = [
    {
      subject: "CSE",
      number: 110,
      title: "Introduction to Programming",
      credits: 2,
      certificate: "Web and Computer Programming",
      description: "This course will introduce students to programming...",
      technology: ["Python"],
      completed: true,
    },
    {
      subject: "WDD",
      number: 130,
      title: "Web Fundamentals",
      credits: 2,
      certificate: "Web and Computer Programming",
      description: "This course introduces students to the World Wide Web...",
      technology: ["HTML", "CSS"],
      completed: true,
    },
    {
      subject: "CSE",
      number: 111,
      title: "Programming with Functions",
      credits: 2,
      certificate: "Web and Computer Programming",
      description: "CSE 111 students become more organized programmers...",
      technology: ["Python"],
      completed: true,
    },
    {
      subject: "CSE",
      number: 210,
      title: "Programming with Classes",
      credits: 2,
      certificate: "Web and Computer Programming",
      description: "This course will introduce the notion of classes...",
      technology: ["C#"],
      completed: true,
    },
    {
      subject: "WDD",
      number: 131,
      title: "Dynamic Web Fundamentals",
      credits: 2,
      certificate: "Web and Computer Programming",
      description: "Students will learn to create dynamic websites...",
      technology: ["HTML", "CSS", "JavaScript"],
      completed: true,
    },
    {
      subject: "WDD",
      number: 231,
      title: "Frontend Web Development I",
      credits: 2,
      certificate: "Web and Computer Programming",
      description: "Students will focus on user experience and accessibility...",
      technology: ["HTML", "CSS", "JavaScript"],
      completed: false,
    },
  ];
  
  // DOM Elements
  const courseCardsContainer = document.getElementById("course-cards");
  const totalCreditsElement = document.getElementById("total-credits");
  const filterButtons = {
    all: document.getElementById("filter-all"),
    cse: document.getElementById("filter-cse"),
    wdd: document.getElementById("filter-wdd"),
  };
  
  // Dynamically display courses
  function displayCourses(filter = "all") {
    courseCardsContainer.innerHTML = ""; // Clear previous content
    let filteredCourses = courses;
  
    if (filter === "CSE") {
      filteredCourses = courses.filter((course) => course.subject === "CSE");
    } else if (filter === "WDD") {
      filteredCourses = courses.filter((course) => course.subject === "WDD");
    }
  
    let totalCredits = 0;
  
    filteredCourses.forEach((course) => {
      totalCredits += course.credits;
  
      const card = document.createElement("div");
      card.className = `card ${course.completed ? "completed" : ""}`;
  
      card.innerHTML = `
        <h3>${course.subject} ${course.number} - ${course.title}</h3>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Description:</strong> ${course.description}</p>
        <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
      `;
  
      courseCardsContainer.appendChild(card);
    });
  
    totalCreditsElement.textContent = totalCredits;
  }
  
  // Handle menu toggle
  const hamburgerButton = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  
  hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
  
  // Handle filtering
  filterButtons.all.addEventListener("click", () => displayCourses("all"));
  filterButtons.cse.addEventListener("click", () => displayCourses("CSE"));
  filterButtons.wdd.addEventListener("click", () => displayCourses("WDD"));

   // Function to create course blocks and attach event listeners
   function buildCourseList() {
    const container = document.getElementById("courseContainer");

    courses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");
        courseDiv.innerHTML = `<h3>${course.title}</h3>`;
        courseDiv.addEventListener("click", () => displayModal(course));
        container.appendChild(courseDiv);
    });
}

// Function to display modal with course details
function displayModal(course) {
    document.getElementById("modalTitle").innerText = course.title;
    document.getElementById("modalSubject").innerText = course.subjectNumber;
    document.getElementById("modalCredits").innerText = course.credits;
    document.getElementById("modalDescription").innerText = course.description;
    document.getElementById("modalCertificate").innerText = course.certificate;
    document.getElementById("modalTech").innerText = course.techStack;

    const modal = document.getElementById("courseDialog");
    modal.showModal();

    // Event listener to close modal when clicking outside
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}

// Function to close modal
function closeModal() {
    document.getElementById("courseDialog").close();
}

// Build course list on page load
buildCourseList();
  
  // Display the current year and last modified date
  const currentYearElement = document.getElementById("currentyear");
  const lastModifiedElement = document.getElementById("lastModified");
  
  currentYearElement.textContent = new Date().getFullYear();
  lastModifiedElement.textContent = `Last Update: ${document.lastModified}`;
  
  // Initialize the page
  displayCourses("all");
  