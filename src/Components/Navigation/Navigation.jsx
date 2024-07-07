import { useSelector } from "react-redux";
import "./Navigation.css";
import NavigationLogo from "./assets/NavigationLogo";
import NavigationPaths from "./assets/NavigationPaths";
import { selectSingleUser } from "../../store/singleUser/singleUserSlice";
import NavigationPathsUser from "./assets/NavigationPathsUser";

const Navigation = () => {
  const { singleUser } = useSelector(selectSingleUser);
  return (
    <>
      {singleUser[0] ? (
        <NavigationPathsUser user={singleUser} />
      ) : (
        <div className="main_navigation">
          <div className="container">
            <div className="navigation_main_div">
              <NavigationPaths />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
