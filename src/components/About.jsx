import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Title from "./Title";

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <div className="container">
        <Title title="About Me" />
        <div className="row about-wrapper">
          <div className="col">
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <img
                  style={{ maxWidth: "350px", width: "100%", height: "auto" }}
                  src="https://res.cloudinary.com/dox0nkwax/image/upload/v1603366464/IMG_20200413_LITE_nv6odg.webp"
                  alt=""
                />
              </div>
            </Fade>
          </div>
          <div className="col">
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi neque, ipsa animi maiores repellendu
                  distinctioaperiam earum dolor voluptatum consequatur
                  blanditiis inventore debitis fuga numquam voluptate architecto
                  itaque molestiae.
                </p>
                <p className="about-wrapper__info-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi neque, ipsa animi maiores repellendu
                  distinctioaperiam earum dolor voluptatum consequatur
                  blanditiis inventore debitis fuga numquam voluptate architecto
                  itaque molestiae.
                </p>
                <p className="about-wrapper__info-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href="/"
                  >
                    Resume
                  </a>
                </span>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
