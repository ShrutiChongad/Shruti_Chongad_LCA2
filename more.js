const regionFilter = document.getElementById('regionFilter');
const districtFilter = document.getElementById('districtFilter');
const categoryFilter = document.getElementById('categoryFilter');
const cards = document.querySelectorAll('.card');

function filterCards() {
  const region = regionFilter.value;
  const district = districtFilter.value;
  const category = categoryFilter.value;

  cards.forEach(card => {
    const matchesRegion = region === 'all' || card.dataset.region === region;
    const matchesDistrict = district === 'all' || card.dataset.district === district;
    const matchesCategory = category === 'all' || card.dataset.category === category;

    if (matchesRegion && matchesDistrict && matchesCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

regionFilter.addEventListener('change', filterCards);
districtFilter.addEventListener('change', filterCards);
categoryFilter.addEventListener('change', filterCards);