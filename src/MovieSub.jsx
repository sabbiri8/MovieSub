import { useReducer} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SideBar from "./components/SideBar";
import { MovieContext } from "./context";
import { cartReducer, initialState } from "./reducers/CartReducer";


export default function MovieSub() {

  const [state,dispatch] = useReducer(cartReducer,initialState)
  return (
   <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark p-8 rounded-xl shadow-lg">
      <MovieContext.Provider value={{ state, dispatch }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </div>
    </div>
  );
}
