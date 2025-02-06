import { Route, Routes } from "react-router-dom";
import styles from "./router.module.css";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home/Home")); // Lazy load Home component
const Shopping = lazy(() => import("../pages/Shopping/Shopping"));
const World = lazy(() => import("../pages/World/World"));
const ShoppingCart = lazy(
  () => import("../pages/cart/components/ShoppingCart")
);
const ToDo = lazy(() => import("../pages/ToDo/ToDo"));
const CustomGrid = lazy(() => import("../pages/Grid/CustomGrid"));
const FormHandling = lazy(() => import("../pages/FormHandling"));
const AMD = lazy(() => import("../pages/TypeScriptReference/AMD"));
const InputToLS = lazy(() => import("../pages/inputToLS"));
const CheckAll = lazy(() => import("../pages/checkAll"));
const TrafficLight = lazy(() => import("../pages/TrafficLight"));
const TextManipulation = lazy(() => import("../pages/TrafficLight"));
const TicTacToe = lazy(() => import("../pages/tictactoe/TicTacToe"));
const DragnDrop = lazy(() => import("../pages/dnd/DragnDrop"));
const RandomUser = lazy(() => import("../pages/randomuser/RandomUser"));
const Stickynotes = lazy(() => import("../pages/stickynotes/Stickynotes"));
const LgDataTable = lazy(() => import("../pages/lgdatatable/LgDataTable"));
const DiceRoller = lazy(() => import("../pages/diceroller/DiceRoller"));
const SSR = lazy(() => import("../pages/ssr/SSR"));
const MERN = lazy(() => import("../pages/mern/MERN"));
// const MovieSaga = lazy(() => import("../pages/movieSaga/MovieSaga"));

const AppRouter = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <Home />{" "}
            </Suspense>
          }
        />
        <Route
          path="/shopping"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <Shopping />
            </Suspense>
          }
        />
        <Route
          path="/world"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <World />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <ShoppingCart />
            </Suspense>
          }
        />
        <Route
          path="/todo"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <ToDo />
            </Suspense>
          }
        />
        <Route
          path="/grid"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <CustomGrid />
            </Suspense>
          }
        />
        <Route
          path="/formhandling"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <FormHandling />
            </Suspense>
          }
        />
        <Route
          path="/tsref"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <AMD />
            </Suspense>
          }
        />
        <Route
          path="/inputtols"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <InputToLS />
            </Suspense>
          }
        />
        <Route
          path="/checkall"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <CheckAll />
            </Suspense>
          }
        />
        <Route
          path="/trafficlight"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <TrafficLight />
            </Suspense>
          }
        />
        <Route
          path="/textmanipulation"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <TextManipulation />
            </Suspense>
          }
        />
        <Route
          path="/tictactoe"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <TicTacToe />
            </Suspense>
          }
        />
        <Route
          path="/dnd"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <DragnDrop />
            </Suspense>
          }
        />
        <Route
          path="/randomuser"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <RandomUser />
            </Suspense>
          }
        />
        <Route
          path="/stickynotes"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Stickynotes />
            </Suspense>
          }
        />
        <Route
          path="/lgdatatable"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <LgDataTable />
            </Suspense>
          }
        />
        <Route
          path="/diceroller"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <DiceRoller />
            </Suspense>
          }
        />
        <Route
          path="/ssr"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <SSR />
            </Suspense>
          }
        />
        <Route
          path="/mern"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <MERN />
            </Suspense>
          }
        />
        <Route
          path="/diceroller"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <DiceRoller />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
