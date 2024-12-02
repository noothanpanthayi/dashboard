import { fireEvent, screen, waitFor } from "@testing-library/react";
// import { renderWithProviders } from './test-utils'
import { BrowserRouter as Router } from "react-router-dom";
import MovieSaga from "./MovieSaga";
import { data } from "./mockdata";
import { mockhandler } from "../../utils/mockServer";
import { renderWithProviders } from "../Shopping/utils/test-utils";

function renderPage() {
  renderWithProviders(
    <Router>
      <MovieSaga />
    </Router>
  );
}

describe("Movies Test Suite", () => {
  mockhandler("https://dummyapi.online/api/movies", data);

  it("Should show Recived Movies 0 On load of the page", async () => {
    renderPage();

    expect(screen.getByText("Recieved Movies 0")).toBeInTheDocument();
  });

  it("Should show Recived Movies 2 on click on Fetch Movies List", async () => {
    renderPage();

    const fetchBtn = screen.getByText("Fetch Movies List");
    fireEvent.click(fetchBtn);

    await waitFor(() => {
      expect(screen.getByText("Recieved Movies 2")).toBeInTheDocument();
    });

    const showMovies = screen.getByText("Show Movies List");
    fireEvent.click(showMovies);

    await waitFor(() => {
      expect(screen.getByText("Nizar Nazar Jerald")).toBeInTheDocument();
    });
  });
});
