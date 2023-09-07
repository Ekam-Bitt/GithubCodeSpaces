/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/profile-picture.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Praani",
    description:
      "A all-in-one pet healthcare website where you can book appointments, buy pet products and get to know about your pet's health.",
    url: "https://praani.netlify.app/",
  },
  {
    title: "Scribbit",
    description:
      "An online scribble pad based web-application to draw random stuff. You can also download your canvas in jpg format.",
    url: "https://scribbit1010-2-0.vercel.app/",
  },
  {
    title: "Bank Smart Contract",
    description:
      "My 1st smart contract on Ethereum Blockchain. It is a simple bank smart contract where you can deposit and withdraw ethers.",
    url: "https://github.com/Ekam-Bitt/First-smart-contract",
  },
  {
    title: "Healify",
    description:
      "A web-application to with Tele-Medicine support to book appointments with doctors and get to know about your health.",
    url: "https://hack4bengal-lilac.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
