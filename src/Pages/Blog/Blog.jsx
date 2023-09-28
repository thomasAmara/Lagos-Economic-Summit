import React from "react";
import plant from "../../Images/plant.png";
import "./Blog.css";

export default function Blog() {
  return (
    <div className="blog">
      <div className="blog-content">
        <h1>ESG SUMMIT NEWS</h1>
        <div className="blog-list">
          <img src={plant} />
          <div className="blog-details">
            <h3>
              Work with the Ecosystem on Environmental, Social and Governance.
            </h3>
            <p className="read-more">Read More</p>
            <p className="date">October 18th, 2023</p>
          </div>
        </div>

        <div className="blog-list">
          <img src={plant} />
          <div className="blog-details">
            <h3>
              Work with the Ecosystem on Environmental, Social and Governance.
            </h3>
            <p className="read-more">Read More</p>
            <p className="date">October 18th, 2023</p>
          </div>
        </div>

        <div className="blog-list">
          <img src={plant} />
          <div className="blog-details">
            <h3>
              Work with the Ecosystem on Environmental, Social and Governance.
            </h3>
            <p className="read-more">Read More</p>
            <p className="date">October 18th, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
