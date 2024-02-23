import Brands from "../components/Brands";

const styles = {
  page: {
    position: "relative",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: "url(./backgroundImage.jpg)",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    filter: "blur(8px)",
  },
  overlay: {
    backgroundColor: "var(--background-color)",
    position: "absolute",
    // webkitFilter: 'blur(8px)',
    opacity: 0.5,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: "100%",
  },
  container: {
    position: "absolute",
    width: "60%",
    textAlign: "center",
  },
};

export default function LandingPage() {
  return (
    <div style={styles.page}>
      <div style={styles.background}></div>
      <div style={styles.overlay}></div>
      <div style={styles.container}>
        <p>HI, MY NAME IS</p>
        <h2>
          JohnDoePetr <br />I am a Software Engineer
        </h2>
        <p>
          <span>4+ years of making the job done in the</span>{" "}
          <span>Tech industry!</span>
          <br />I am a product-oriented Software Engineer with a business
          mindset from bringing the latest tech to launching successful
          startups!
        </p>
        <a href="#">
          <span>...</span>Lets Get Started
        </a>
        <Brands />
      </div>
    </div>
  );
}
