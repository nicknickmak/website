import "./BackgroundAnimation.scss";

/**
 * Renders the background animation for the application.
 * @returns {JSX.Element} The background animation component.
 */
export default function BackgroundAnimation() {
  const balls = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className="background">
        {balls.map((num) => (
          <div key={num} className={`floating-ball ball${num}`}></div>
        ))}
      </div>
      {/* <div className="backgroundLogo"></div> */}
    </>
  );
}
