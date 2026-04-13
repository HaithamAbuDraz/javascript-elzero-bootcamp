/*
  DOM Challenge
*/

// ================================================
// ============== HEADER SECTION ==================
// ================================================

// Create header elements
let header = document.createElement("header");

// Create and style logo
let logo = document.createElement("a");
logo.href = "#";
logo.textContent = "Elzero";
logo.style.cssText = `
  color: green;
  font-weight: 700;
  font-size: 25px;
  text-decoration: none
`;

// Create navigation menu
let ul = document.createElement("ul");
ul.style.cssText = `
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 0
`;

// Navigation items with hover effects
let navItems = ["Home", "About", "Service", "Contact"];
let navLinks = [];

navItems.forEach(item => {
  let li = document.createElement("li");
  li.style.cssText = `
    list-style: none;
  `;

  let a = document.createElement("a");
  a.href = "#";
  a.textContent = item;
  a.style.cssText = `
    color: gray;
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s
  `;

  // Add hover effect
  a.addEventListener("mouseenter", () => a.style.color = "green");
  a.addEventListener("mouseleave", () => a.style.color = "gray");

  li.appendChild(a);
  ul.appendChild(li);
  navLinks.push(a);
});

// Assemble header
header.append(logo, ul);
header.style.cssText = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1)
`;

// Add header to body
document.body.style.cssText = `
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
`;
document.body.appendChild(header);

// ================================================
// ============== CONTENT SECTION =================
// ================================================

// Create content container
let content = document.createElement("div");
content.className = "content";

// Style content container
content.style.cssText = `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background-color: #f1f1f1;
  padding: 20px
`;

// Add content after header
header.after(content);

// Create 15 product cards
for (let i = 1; i <= 15; i++) {
  // Create product card
  let product = document.createElement("div");
  product.className = "product";

  // Create product number span
  let span = document.createElement("span");
  span.textContent = i;

  // Create product text
  let productText = document.createTextNode("Product");

  // Style product card
  product.style.cssText = `
    background-color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;
    border: 2px solid balck;
    border-radius: 5px;
    color: gray;
    font-size: 14px;
  `;

  // Style product number
  span.style.cssText = `
    font-size: 30px;
    color: black;
    margin-bottom: 10px
  `;

  // Add hover effect for product cards
  product.addEventListener("mouseenter", () => {
    product.style.transform = "translateY(-5px)";
    product.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    product.style.borderColor = "green";
  })

  product.addEventListener("mouseleave", () => {
    product.style.transform = "translateY(0)";
    product.style.boxShadow = "none";
    product.style.borderColor = "#ddd";
  })

  // Assemble product card
  product.append(span, productText);
  content.appendChild(product);
};

// ================================================
// ============== FOOTER SECTION ==================
// ================================================

// Create footer
let footer = document.createElement("footer");
footer.textContent = "Copyright 2026";

// Style footer
footer.style.cssText = `
  font-size: 25px;
  background-color: green;
  text-align: center;
  color: white;
  padding: 20px
`;

// Add footer after content
content.after(footer);

// ================================================
// ============== ADDITIONAL ENHANCEMENTS =========
// ================================================

// Add responsive behavior for mobile devices
let style = document.createElement("style");
style.textContent = `
  @media (max-width: 768px) {
    header {
      flex-direction: column;
      gap: 15px;
      text-align: center;
    }

    ul {
      flex-wrap: wrap;
      justify-content: center;
    }

    .content {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important;
      gap: 15px !important;
      padding: 15px !important;
    }
  }

  @media (max-width: 480px) {
    .content {
      grid-template-columns: 1fr !important;
    }

    footer {
      font-size: 14px !important;
      padding: 15px !important;
    }
  }
`;
document.head.appendChild(style);
