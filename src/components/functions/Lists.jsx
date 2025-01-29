import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";

const Lists = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/sign">
            <UserRound />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Lists;
