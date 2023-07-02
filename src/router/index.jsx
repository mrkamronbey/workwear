import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { RouterData } from "./index-data";
import HashLoader from "react-spinners/HashLoader";
import Logo from "../assets/header/workwearlogo.png";
import './styles.css'

function RouterComponent() {
  return (
    <>
      <Routes>
        {RouterData.map((elem) => (
          <Route
            key={elem.id}
            path={elem.path}
            element={
              <Suspense
                fallback={
                  <div className="spin_wrapp">
                    <img width={174} height={74} src={Logo} alt="" />
                  </div>
                }
              >
                {elem.component}
              </Suspense>
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default RouterComponent;
