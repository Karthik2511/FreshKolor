const posters = [
  { filename: 'BMW.png', title: 'BMW Sports Car' },
  { filename: 'ferrari.png', title: 'Ferrari Racing' },
  { filename: 'Lambo.png', title: 'Lamborghini Supercar' },
  { filename: 'supra.png', title: 'Toyota Supra' },
  { filename: 'F1.png', title: 'Formula 1 Racing' },
  { filename: '911.png', title: 'Porsche 911' },
];

const posterGrid = document.querySelector(".poster-grid");

posters.forEach(poster => {
  const card = document.createElement('div');
  card.className = 'poster';
  card.innerHTML = `
    <img src="Posters/${poster.filename}" alt="${poster.title}">
    <h3>${poster.title}</h3>
    <a class="download-btn" href="Posters/${poster.filename}" download>Download</a>
  `;
  posterGrid.appendChild(card);
});
