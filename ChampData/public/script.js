let championsData;
showDataFromLOLAPI();
async function getData(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function fetchDataFromLOLAPI() {
  const responseData = await getData('https://ddragon.leagueoflegends.com/cdn/14.6.1/data/en_US/champion.json');
  return responseData?.data || null;
}

async function showDataFromLOLAPI() {
  try {
    championsData = await fetchDataFromLOLAPI();
    if (championsData) {
      console.log(championsData); // Print the data to the console
      drawChampionInfo(championsData);
    } else {
      console.log('Failed to fetch data from the League of Legends API.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function drawChampionInfo(champions) {
  let html = '';
  let result = document.querySelector('#result');

  for (let champ in champions) {
    const champion = champions[champ];
    html += `
            <div class="champion" onclick="showChampionDetails('${champion.id}')">
                <img src="https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${champion.image.full}" alt="${champion.name}" style="width: 100px;">
                <h3>${champion.name}</h3>
                <p><strong>${champion.title}</strong></p>
            </div>
        `;
  }

  result.innerHTML = html;
}



function filterByTag(tag) {
  let filteredChampions = Object.values(championsData).filter(champion => champion.tags.includes(tag));
  drawChampionInfo(filteredChampions);
}

function searchChampion() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const filteredChampions = Object.values(championsData).filter(champion => champion.name.toLowerCase().includes(input));
  drawChampionInfo(filteredChampions);
}
function sortByDifficulty() {
  const sortedChampions = Object.values(championsData).sort((a, b) => a.info.difficulty - b.info.difficulty);
  drawChampionInfo(sortedChampions);
}
// Call the function to show data from the League of Legends API


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.overflow = "hidden"; // Disable scrolling on the body
}



// Function to filter champions by difficulty
function filterByDifficulty(difficulty) {
  const filteredChampions = Object.values(championsData).filter(champion => champion.info.difficulty === difficulty);
  drawChampionInfo(filteredChampions);
}

// Function to show dropdown menu
function toggleDropdown() {
  document.getElementById("difficultyDropdown").classList.toggle("show");
}




function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";

  }
}
function openModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
  document.body.classList.add('modal-open');
}

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
}




function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.overflow = "auto"; // Enable scrolling on the body
}


