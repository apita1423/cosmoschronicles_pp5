import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from "../NavBar";

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  const logInLink = screen.getByRole("link", { name: "Log in" });
  expect(logInLink).toBeInTheDocument();
});

test("renders link to the user profile for a logged in user", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const profileAvatar = await screen.findByText("Profile");
  expect(profileAvatar).toBeInTheDocument();
});

test("renders Log in and Register buttons again on log out", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const logOutLink = await screen.findByRole("link", { name: "Log out" });
  fireEvent.click(logOutLink);

  const logInLink = await screen.findByRole("link", { name: "Log in" });
  const registerLink = await screen.findByRole("link", { name: "Register" });

  expect(logInLink).toBeInTheDocument();
  expect(registerLink).toBeInTheDocument();
});
