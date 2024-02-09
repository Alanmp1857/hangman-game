const HEAD = (
  <div
    style={{
      height: "50px",
      width: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-40px",
    }}
  />
);

const BODY = (
  <div
    style={{
      height: "120px",
      width: "10px",
      background: "black",
      position: "absolute",
      top: "110px",
      right: "-10px",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      transform: "rotate(-30deg)",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-10px",
      transform: "rotate(30deg)",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "260px",
      right: "-80px",
      transform: "rotate(60deg)",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "260px",
      right: "-30px",
      transform: "rotate(-60deg)",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          marginLeft: "320px",
          position: "absolute",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
};

export default HangmanDrawing;
