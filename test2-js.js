
  // JavaScript for functionality
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentPosition = 0;
  let itemWidth;

  function updateItemWidth() {
    itemWidth = carouselItems[0].offsetWidth;
}

  updateItemWidth(); // Call on load

window.addEventListener('resize', () => {
  updateItemWidth(); // Update width if screen size changes
  moveCarousel();    // Move carousel to current position again
});

 
  // Carousel functionality
  function moveCarousel() {
  carouselWrapper.style.transform = `translateX(${-currentPosition * itemWidth}px)`;
  }
 
  function nextSlide() {
  currentPosition = (currentPosition + 1) % carouselItems.length;
  moveCarousel();
  }
 
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
 
  // Club list scrolling
  function scrollClubs(direction) {
  const container = document.querySelector('.club-list-container');
  const scrollAmount = 220; // Adjust scroll amount as needed
  container.scrollLeft += direction * scrollAmount;
  }
 
  // Club details overlay
  function showClubDetails(clubElement) {
  const details = clubElement.querySelector('.club-details');
  const clubName = details.querySelector('h3').innerText;
  const clubId = details.querySelector('p:nth-of-type(1)').innerText;
  const clubDescription = details.querySelector('p:nth-of-type(2)').innerText;
  const clubLinkElement = details.querySelector('a');
  const clubPoster = clubElement.querySelector('img');
  

  document.getElementById('clubName').innerText = clubName;
  document.getElementById('clubId').innerText = clubId;
  document.getElementById('clubDescription').innerText = clubDescription;
  document.getElementById('clubPoster').src = clubPoster.src;

  if (clubLinkElement && clubLinkElement.href !== "#") {
        document.getElementById('clubLink').style.display = 'block';
        document.getElementById('clubLink').href = clubLinkElement.href;
      } else {
        document.getElementById('clubLink').style.display = 'none';
      }
  // Clear previous achievements
  const achievementsDiv = document.getElementById('clubAchievements');
  achievementsDiv.innerHTML = '';

  // Get the achievements from the clicked club item
  const achievements = details.querySelector('.achievements').children;

  // Loop through achievements and add them to the overlay
  for (let img of achievements) {
    const imgClone = img.cloneNode(true); // Clone the image element
    imgClone.style.opacity = 1; // Start with opacity 0 for fade-in effect
    achievementsDiv.appendChild(imgClone);
  }

  // Show the overlay
  document.getElementById('clubDetailsOverlay').style.display = 'flex';
}

function hideClubDetails() {
  document.getElementById('clubDetailsOverlay').style.display = 'none';
}
 
  // Express interest function
  function expressInterest() {
  // Simulate sending data (email/phone) to the console
  console.log('Email and phone will be sent to the club.');
  alert('Interest submitted successfully!');
  }

  document.getElementById('clubDetailsOverlay').addEventListener('click', function (e) {
      if (e.target === this) hideClubDetails();
    })
  