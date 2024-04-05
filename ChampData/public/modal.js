function showChampionDetails(championId) {
  const champion = championsData[championId];
  const modalContent = document.getElementById('championModalContent');
  modalContent.innerHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        <h4>${champion.name}</h4> <img src="https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${champion.image.full}" alt="${champion.name}" style="width: 100px;">
        <p><strong>Title:</strong> ${champion.title}</p>
        <p><strong>Class:</strong> ${champion.tags.join(',')}
        <p><strong>Attack:</strong> ${champion.info.attack}</p>
        <p><strong>Defense:</strong> ${champion.info.defense}</p>
        <p><strong>Magic:</strong> ${champion.info.magic}</p>
        <p><strong>Difficulty:</strong> ${champion.info.difficulty}</p>
        <p><strong>HP:</strong> ${champion.stats.hp}</p>
        <p><strong>MP:</strong> ${champion.stats.mp}</p>
        <p><strong>Movespeed:</strong> ${champion.stats.movespeed}</p>
        <p><strong>Lore Extract:</strong> ${champion.blurb}</p>
        <!-- Add more champion stats as needed -->
    `;
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}