// Sample collectibles data (you can replace this with real data)
const collectiblesData = [
    { name: 'Collectible 1', price: 0.1, description: 'Description for Collectible 1' },
    { name: 'Collectible 2', price: 0.2, description: 'Description for Collectible 2' },
    { name: 'Collectible 3', price: 0.3, description: 'Description for Collectible 3' },
    // Add more collectibles here
  ];
  
  // Function to display collectibles in a section
  function displayCollectibles(collectibles, sectionId) {
    const section = document.getElementById(sectionId);
    section.innerHTML = '';
    collectibles.forEach((collectible, index) => {
      const collectibleDiv = document.createElement('div');
      collectibleDiv.classList.add('collectible');
      collectibleDiv.innerHTML = `
        <img src="images/collectible-image-${index + 1}.jpg" alt="${collectible.name}">
        <div class="info">
          <h3>${collectible.name}</h3>
          <p>Price: ${collectible.price} ETH</p>
          <p>${collectible.description}</p>
        `;
      section.appendChild(collectibleDiv);
    });
  }
  
  // Initial display of collectibles
  displayCollectibles(collectiblesData, 'all-collectibles');
  
  // Filter collectibles by name
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', () => {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const searchResults = collectiblesData.filter(collectible => collectible.name.toLowerCase().includes(searchTerm));
    displayCollectibles(searchResults, 'all-collectibles');
  });
  