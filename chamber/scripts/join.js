
  // Function to get URL parameters
  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const data = {};
    params.forEach((value, key) => {
      data[key] = value;
    });
    return data;
  }

  // Function to populate placeholders with form field values
  function populateFormValues() {
    const queryParams = getQueryParams();

    // Replace placeholders with actual values
    document.getElementById("first-name").textContent = queryParams["first-name"] || "[First Name]";
    document.getElementById("last-name").textContent = queryParams["last-name"] || "[Last Name]";
    document.getElementById("email").textContent = queryParams["email"] || "[Email]";
    document.getElementById("mobile").textContent = queryParams["mobile"] || "[Mobile]";
    document.getElementById("business-name").textContent = queryParams["organization"] || "[Business Name]";
    document.getElementById("timestamp").textContent = queryParams["timestamp"] || "[Date]";
    
     // Display current year and last modified date
 const currentYear = new Date().getFullYear();
 document.getElementById("year").textContent = currentYear;
 document.getElementById("lastModified").textContent = document.lastModified;
  }

  // Run the function when the page loads
  window.onload = populateFormValues;

