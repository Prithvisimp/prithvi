import { Suspense, useState, useEffect } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import LoadingAnimation from "./components/LoadingAnimation";

function App() {
  const [loading, setLoading] = useState(true);

  // Force the loading animation to show for at least 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingAnimation onComplete={() => setLoading(false)} />}

      <Suspense fallback={<p>Loading...</p>}>
        <div
          className={`min-h-screen transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </div>
      </Suspense>
    </>
  );
}

export default App;
