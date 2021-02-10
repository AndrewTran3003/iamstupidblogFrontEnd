import React from "react";
import Heading from "../components/Heading";
import chadMadden from "../img/chad-madden-bTfza0M0hCE-unsplash.jpg";
import chrisG from "../img/christopher-gower-m_HRfLhgABo-unsplash.jpg";
import nathan from "../img/nathan-dumlao-6VhPY27jdps-unsplash.jpg";
import thought from "../img/thought-catalog-505eectW54k-unsplash.jpg";
import xps from "../img/xps-4TBSG2Oqu0Q-unsplash.jpg";
import crepes from "../img/sam-moqadam-yxZSAjyToP4-unsplash.jpg";
import joseph from "../img/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import warren from "../img/warren-wong-VVEwJJRRHgk-unsplash.jpg";
import arnold from "../img/arnold-francisca-f77Bh3inUpE-unsplash.jpg";

const ProfilePage = () => {
  return (
    <>
      <Heading heading="" description="" />
      <section className="intro">
        <h1 className="section-title section-title-intro">
          Hi, I am <strong>Tuan Tran</strong>
        </h1>
        <p className="section-subtitle section-subtitle-intro">
          I am a full-stack developer
        </p>
        <img className="image intro-image" src={joseph} alt="my picture" />
      </section>
      <section className="my-services" id="my-services">
        <h2 className="section-title section-title-services">What I do</h2>
        <div className="services">
          <div className="service">
            <h3>Design and Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
              felis vel elit eleifend eleifend. Duis hendrerit, justo at
              convallis tempor, ipsum lacus fermentum enim, vel molestie magna
              dolor ac lectus. Cras tincidunt condimentum dapibus. Suspendisse
              tempus justo in massa pharetra, vitae tincidunt mi
            </p>
          </div>
          <div className="service">
            <h3>Digital Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
              felis vel elit eleifend eleifend. Duis hendrerit, justo at
              convallis tempor, ipsum lacus fermentum enim, vel molestie magna
              dolor ac lectus. Cras tincidunt condimentum dapibus. Suspendisse
              tempus justo in massa pharetra, vitae tincidunt mi
            </p>
          </div>
          <div className="service">
            <h3>Cloud computing</h3>
            <p>
              Nunc egestas eros eget erat dignissim, et tincidunt nisi
              consequat. Donec tempor nibh nec leo faucibus, fringilla elementum
              eros auctor. Duis ullamcorper ante risus, sed hendrerit quam
              convallis ut. Pellentesque bibendum mauris sit amet massa eleifend
              convallis. Integer consequat eros at dolor hendrerit ultrices.
              Maecenas blandit dictum enim gravida mi.
            </p>
          </div>
        </div>
        <a href="#" className="btn">
          My work
        </a>
      </section>

      {/* About me section */}
      <section className="about-me">
        <h2 className="section-title section-title-about">Who I am</h2>
        <p className="section-subtitle section-subtitle-about">
          Fullstack developer in Melbourne Australia
        </p>
        <div className="about-me-body">
          <p>
            Vestibulum ligula velit, posuere et nisl gravida, convallis vehicula
            diam. Integer nec tortor eget mauris accumsan blandit ut ac libero.
            Aliquam erat volutpat. Pellentesque semper egestas augue, sed
          </p>
          <p>
            Duis venenatis molestie erat non bibendum. Donec suscipit velit eget
            augue aliquam, vitae mollis tellus pharetra. Cras erat nisi, tempus
            vel tortor eget, consequat vestibulum magna. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Pellentesque a hendrerit urna. Pellentesque in turpis interdum,
          </p>
        </div>
        <img
          src={warren}
          alt="this is who I am"
          className="image about-me-image"
        ></img>
      </section>
      <section className="my-work" id="work">
        <h2 className="section-title section-title-work">My work</h2>
        <p className="section-subtitle section-subtitle-work">
          A selection of my works
        </p>
        <div className="portfolio">
          <a href="#" className="portfolio-item">
            <img className="image portfolio-img" src={chadMadden}></img>
          </a>
          <a href="#" className="portfolio-item">
            <img
              className="image portfolio-img"
              src={chrisG}
              alt="My work 2"
            ></img>
          </a>
          <a href="#" className="portfolio-item">
            <img
              className="image portfolio-img"
              src={nathan}
              alt="My work 3"
            ></img>
          </a>
          <a href="#" className="portfolio-item">
            <img
              className="image portfolio-img"
              src={thought}
              alt="My work 4"
            ></img>
          </a>
          <a href="#" className="portfolio-item">
            <img
              className="image portfolio-img"
              src={xps}
              alt="My work 5"
            ></img>
          </a>
          <a href="#" className="portfolio-item">
            <img
              className="image portfolio-img"
              src={crepes}
              alt="My work 6"
            ></img>
          </a>
        </div>
      </section>
      <footer className="footer">
        <a href="mailto:hello@tuantran.dev" className="footer-link">
          hello@tuantran.dev
        </a>
        <ul className="social-list">
          <li className="social-list-item">
            <a className="social-list-link">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="social-list-item">
            <a className="social-list-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="social-list-item">
            <a className="social-list-link">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="social-list-item">
            <a className="social-list-link">
              <i className="fas fa-terminal"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default ProfilePage;
