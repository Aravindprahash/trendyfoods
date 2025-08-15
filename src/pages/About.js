import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  const reviews = [
    {
      name: "Allwin Jones",
      feedback: "The food was absolutely delicious! Fresh ingredients and perfect taste.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Alexa Healy",
      feedback: "Best biryani I’ve ever had! The delivery was super fast and the packaging was neat.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Saran Raj",
      feedback: "Amazing service, friendly staff, and mouth-watering desserts. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/56.jpg"
    }
  ];

  return (
    <div className="about-page container my-5">
      <h1 className="text-center fw-bold mb-4">About Us</h1>
      <p className="text-center text-muted mb-5">
        We are passionate about delivering the best food experience to our customers.
        Every meal is made with love, fresh ingredients, and attention to detail.
      </p>

      <h3 className="text-center mb-4">What Our Customers Say...</h3>
      <div className="row g-4">
        {reviews.map((review, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">
            <div className="card p-3 shadow-lg border-0 rounded-4 text-center h-100 review-card">
              <img
                src={review.image}
                alt={review.name}
                className="rounded-circle mx-auto mb-3 img-fluid"
                style={{
                  width: "100px",
                  aspectRatio: "1 / 1",
                  objectFit: "cover"
                }}
              />
              <h5 className="fw-bold">{review.name}</h5>
              <p className="text-muted">"{review.feedback}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
