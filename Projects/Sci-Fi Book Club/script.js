// Function to fetch member reviews from an API
function fetchMemberReviews() {
    const reviewsApiUrl = "https://api.example.com/reviews";
  
    fetch(reviewsApiUrl)
      .then((response) => response.json())
      .then((data) => {
        const reviewsContainer = document.querySelector(".reviews");
        reviewsContainer.innerHTML = ""; 
  
        data.forEach((review) => {
          const reviewCard = createReviewCard(review);
          reviewsContainer.appendChild(reviewCard);
        });
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }
  
  // Create a card for a member review
  function createReviewCard(review) {
    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");
  
    const reviewerName = document.createElement("h4");
    reviewerName.textContent = review.reviewer;
  
    const reviewText = document.createElement("p");
    reviewText.textContent = review.comment;
  
    reviewCard.appendChild(reviewerName);
    reviewCard.appendChild(reviewText);
  
    return reviewCard;
  }
  
  // Fetch and display member reviews
  fetchMemberReviews();
  