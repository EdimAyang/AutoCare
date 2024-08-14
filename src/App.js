import { 
  createBrowserRouter,
   createRoutesFromElements, 
   Route, 
   RouterProvider 
  } from "react-router-dom";
  import { Globalstyles } from "./components/Global";
  import SplashScreen from "./components/pages/splash/SplashScreen";
   import Onboarding1 from "./components/pages/onboarding1/Onboarding1";
   import Onboarding2 from "./components/pages/onboarding2/Onboarding2";
   import Onboarding3 from "./components/pages/onboarding3/Onboarding3";
   import Onboarding4 from "./components/pages/onboarding4/Onboarding4";
   import Onboarding5 from "./components/pages/onboarding5/Onboarding5";
   import Onboarding6 from "./components/pages/onboarding6/Onboarding6";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route index element= {<SplashScreen />} />
      <Route path="/onboarding1" element={<Onboarding1 />}/>
      <Route path="/onboarding2" element={<Onboarding2 />} />
      <Route path="/onboarding3" element={<Onboarding3 />}/>
      <Route path="/onboarding4" element={<Onboarding4 />}/>
      <Route path="/onboarding5" element={<Onboarding5 />}/>
      <Route path="/onboarding6" element={<Onboarding6 />}/>
      </>
    )

  )

  return (
    <>
    <Globalstyles/>
    <div className="App">
      <RouterProvider router={router}/>
    </div>
    </>
  );
}

export default App;
