import React from "react";

const TypographyTab = () => {
  return (
    <div style={{ margin: "46px 46px 66px 46px" }}>
      <h1 style={{ marginBottom: "46px" }}>Typography</h1>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "40%",
            marginLeft: "145px",
            marginBottom: "-70px",
            padding: "12px",
            fontWeight: "200",
            color: "#718096",
          }}
        >
          <h6>Typeface</h6>
          <h6>Hex</h6>
        </div>
        <div
          className="overall-container-one"
          style={{
            fontFamily: "Fira Sans Condensed",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="sub-container-one"
            style={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <h2
              style={{
                fontWeight: "600",
                fontSize: "64px",
                border: "0.8px solid #4a5568",
                borderRadius: "4px",
                padding: "12px",
              }}
            >
              Aa
            </h2>
            <div
              className="font-hex-container"
              style={{
                border: "0.8px solid #4a5568",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "40%",
                margin: "53px",
              }}
            >
              <h5
                style={{
                  padding: "12px",
                }}
              >
                Fira Sans Condensed
              </h5>
              <h5
                style={{
                  fontWeight: "300",
                  padding: "12px",
                }}
              >
                #ffffff
              </h5>
            </div>
          </div>
          <div
            className="sub-container-two"
            style={{
              fontFamily: "Source Sans Pro",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <h2
              style={{
                fontWeight: "400",
                fontSize: "64px",
                border: "0.8px solid #4a5568",
                borderRadius: "4px",
                padding: "12px",
              }}
            >
              Aa
            </h2>
            <div
              className="font-hex-container-two"
              style={{
                border: "0.8px solid #4a5568",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "53px",
                width: "40%",
                padding: "12px",
              }}
            >
              <h5>Source Sans Pro</h5>
              <div style={{ display: "flex" }}>
                <h5
                  style={{
                    fontWeight: "400",
                  }}
                >
                  #ffffff,{" "}
                </h5>
                <h5 style={{ fontWeight: "400", color: "#a0aec0" }}>
                  {" "}
                  #a0aec0,{" "}
                </h5>
                <h5 style={{ fontWeight: "400", color: "#d6bcfa" }}>
                  {" "}
                  #d6bcfa{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyTab;
