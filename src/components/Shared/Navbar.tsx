import { Link } from "react-router-dom";
import Container from "../Container";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-gray-50 dark:bg-gray-900 shadow-lg rounded-lg">
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            MyTask
          </div>

          <ul className="flex space-x-6 text-lg text-gray-800 dark:text-white">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </Link>
            </li>
          </ul>
          <ModeToggle />
        </div>
      </Container>
    </nav>
  );
}
