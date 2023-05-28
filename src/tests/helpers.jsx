import {MemoryRouter} from "react-router-dom";
import AppRoutes from "../AppRoutes.jsx";

export const renderWithRouter = (component, initialRoute = '/') => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRoutes />
      {component}
    </MemoryRouter>
  )
}