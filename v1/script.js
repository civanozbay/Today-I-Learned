const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".fact-list");

btn.addEventListener("click", function () {
  factsList.innerHTML = "";
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

/*
curl 'https://nrhryyzyzrqcavistbbv.supabase.co/rest/v1/facts?select=id' \
-H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yaHJ5eXp5enJxY2F2aXN0YmJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyNzE0MDcsImV4cCI6MjAyMDg0NzQwN30.h_yVDc0ia6MehlEqgZUBBRRlGtSdnIcm4lhFEr4CoTM" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yaHJ5eXp5enJxY2F2aXN0YmJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyNzE0MDcsImV4cCI6MjAyMDg0NzQwN30.h_yVDc0ia6MehlEqgZUBBRRlGtSdnIcm4lhFEr4CoTM"
*/

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://nrhryyzyzrqcavistbbv.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yaHJ5eXp5enJxY2F2aXN0YmJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyNzE0MDcsImV4cCI6MjAyMDg0NzQwN30.h_yVDc0ia6MehlEqgZUBBRRlGtSdnIcm4lhFEr4CoTM",
      },
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yaHJ5eXp5enJxY2F2aXN0YmJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyNzE0MDcsImV4cCI6MjAyMDg0NzQwN30.h_yVDc0ia6MehlEqgZUBBRRlGtSdnIcm4lhFEr4CoTM",
    }
  );
  const data = await res.json();
  createFactsList(data);
}

function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");

  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
      >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>
  </li>`
  );

  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}
