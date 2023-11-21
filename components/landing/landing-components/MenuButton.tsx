import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Itoogle {
  action: () => void;
}

const MenuButton: React.FC<Itoogle> = ({ action }): JSX.Element => {
  return (
    <div className="menu-button d-lg-none" onClick={action}>
      <FontAwesomeIcon icon={faBars} className="icon" />
    </div>
  );
};

export default MenuButton;
