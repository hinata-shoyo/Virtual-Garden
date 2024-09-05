import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./landing.css";
import React from "react";
import { Link } from "react-scroll";

const Landing = () => {
  const controls = useAnimation();

  const [introRef, inViewIntro] = useInView({
    // triggerOnce: false, // Only trigger animation once
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  const [featuredRef, inViewFeatured] = useInView({
    // triggerOnce: true,
    threshold: 0.4,
  });

  const [tourRef, inViewTour] = useInView({
    // triggerOnce: true,
    threshold: 0.8,
  });

  React.useEffect(() => {
    if (inViewIntro) {
      controls.start("visible");
    }
  }, [controls, inViewIntro]);

  return (
    <div className="app">
      {/* Hero Section */}
      <div className="hero-section" id="hero">
        <motion.div
          // id="hero"
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <a href="/">
            <img
              src="/Screenshot_20240828_235811-removebg-preview.png"
              alt=""
              className="logo"
            />
          </a>
          <div className="flex">
            <div>
              <h1>Welcome to the Virtual Herbal Garden</h1>
              <p>Explore medicinal plants from the comfort of your home</p>
              <div className="scroll-btn">
                <Link
                  to="intro"
                  smooth={true}
                  duration={1000}
                  className="scroll-btn"
                >
                  Explore the Garden
                </Link>
              </div>
            </div>
            <div>
              <div className="_3dimg">
                <img src="/plant" alt="" className="_3dimg" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Introduction Section */}
      <motion.section
        id="intro"
        className="intro-section"
        ref={introRef}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          hidden: { opacity: 0, y: 100 },
        }}
      >
        <div className="intro-content">
          <h2>Explore Plants from Home</h2>
          <p>Learn about medicinal plants through an immersive experience.</p>
        </div>
        <motion.div
          className="intro-img"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          {/* <div className="scroll-btnn" > */}
            <a href="/explore" className="scroll-btnn lin">
            Explore
            </a>
            {/* </div> */}
        </motion.div>
      </motion.section>

      {/* Featured Plants Section */}
      <motion.section
        className="featured-section"
        ref={featuredRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inViewFeatured ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>Featured Medicinal Plants</h2>
        <div className="plants-grid">
          <motion.div className="plant-card" whileHover={{ scale: 1.1 }}>
            <img
              src="/Screenshot_20240829_195655-removebg-preview.png"
              alt="Neem"
            />
            <h3>Snake Plant</h3>
          </motion.div>
          <motion.div className="plant-card" whileHover={{ scale: 1.1 }}>
            <img
              src="/pngtree-green-plant-3d-rendering-png-image_10245140.png"
              alt="Tulsi"
            />
            <h3 className="tulsi">Tulsi</h3>
          </motion.div>
          <motion.div className="plant-card" whileHover={{ scale: 1.1 }}>
            <img
              src="/Screenshot_20240829_185911-removebg-preview.png"
              alt="Aloe Vera"
            />
            <h3>Aloe Vera</h3>
          </motion.div>
        </div>
      </motion.section>

      {/* Virtual Tour Preview */}
      <motion.section
        className="tour-section"
        ref={tourRef}
        initial={{ opacity: 0, y: 50 }}
        animate={inViewTour ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2>Virtual Tours</h2>
        <p>
          Take guided virtual tours on various themes such as plants for
          immunity, skin care, and digestion.
        </p>
        <motion.div className="tour-preview" whileHover={{ scale: 1.05 }}>
          <img src="path-to-tour-preview" alt="Virtual Tour" />
        </motion.div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="call-to-action"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2>Join the Journey</h2>
        <p>
          Bookmark favorite plants, take notes, and share your discoveries on
          social media.
        </p>
        <Link to="hero" smooth={true} duration={800} className="scroll-btn">
          Scroll to Top
        </Link>
      </motion.section>
    </div>
  );
};

export default Landing;
