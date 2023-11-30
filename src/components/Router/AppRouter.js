import { AppRoute } from "./Routes";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import Page404 from "../../pages/Page404";
import HousesPage from "../../pages/Houses";
import Person from "../../pages/Persons";
import Quotes from "../../pages/Quotes";

const routing = [
  {
    appRoute: AppRoute.HomePage,
    component: HomePage,
  },
  {
    appRoute: AppRoute.Persons,
    component: Person,
  },
  {
    appRoute: AppRoute.Quoutes,
    component: Quotes,
  },
  {
    appRoute: AppRoute.Houses,
    component: HousesPage,
  },
  {
    appRoute: AppRoute.Page404,
    component: Page404,
  },
];

const AppRouter = () => {
  return (
    <Routes>
      <Route>
        <Route path="*" element={<Page404 />}></Route>
        {routing.map((url, index) => {
          return (
            <Route
              path={url.appRoute}
              key={index + 1}
              element={<url.component />}
            ></Route>
          );
        })}
      </Route>
    </Routes>
  );
};
export default AppRouter;
