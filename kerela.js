function searchDestination() {
    var input = document.getElementById("searchInput").value;
    
    if (input.trim() !== "") {
      document.getElementById("searchResult").innerHTML = 
        "You searched for: <strong>" + input + "</strong>";
    } 
    }
    document.addEventListener("DOMContentLoaded", () => {
      const firstColumn = document.querySelector(".footer-columns").firstElementChild;
      const firstListItem = firstColumn.querySelector("ul").firstElementChild;
  
      firstListItem.style.color = "white";
      firstListItem.style.fontWeight = "bold";
    });
    function searchDestination() {
      const input = document.getElementById("searchInput").value.trim();
      const resultDiv = document.getElementById("searchResult");
    
      // Clear old result
      resultDiv.textContent = "";
    
      // Basic search feedback
      if (input) {
        resultDiv.textContent = `Searching for: ${input}`;
      } else {
        resultDiv.textContent = "Please enter a destination.";
      }
    
      // Dynamically create and insert a new footer notice
      const notice = document.createElement("div");
      notice.textContent = "New destinations will be updated soon!";
      notice.className = "footer-notice";
      notice.style.color = "orange";
      notice.style.fontWeight = "bold";
      notice.style.paddingTop = "10px";
    
      const footer = document.querySelector(".footer-bottom");
    
      // Avoid duplicate notices
      const existingNotice = document.querySelector(".footer-notice");
      if (!existingNotice) {
        footer.append(notice); // or use prepend(), insertBefore(), etc.
      }
    }