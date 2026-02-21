import WorldMap from "react-svg-worldmap";

const data = [
  { country: "us", value: 100 },
  { country: "jp", value: 80 },
  { country: "au", value: 50 },
];

export default function App() {
  return (
    <div
      style={{
        width: "400px",   // card width
        height: "200px",  // card height
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
         borderBottom: "1px solid #d7d7d769  "


      }}
    >
      <div
        style={{
          width: "100%",
          transform: "scale(0.55)",
          display: "flex",
        alignItems: "center",
        justifyContent: "center",

          
          // 👈 zoom OUT
        }}
      >
        <WorldMap
          data={data}
          size="responsive"
        />
      </div>
    </div>
  );
}
