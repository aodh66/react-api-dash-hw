import { createContext, useState, useCallback } from "react";

export const WeatherContext = createContext({
  weather: [],
  loading: false,
  loaded: false,
  error: null,
});

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([{ name: "Tesla" }, { name: "Volvo" }]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState();
  const [error, setError] = useState(null);

  const addCar = useCallback(
    (newCar) => {
      setCars([...cars, newCar]);
    },
    [cars, setCars]
  );

  const fetchCars = useCallback(async () => {
    if(loading) return
    try {
      setLoading(true);
      const response = await fetch("https://carsapp2050.fly.dev/api/v1/cars");
      if (!response.ok) {
        throw new Error("Could not load cars!");
      }
      setLoaded(true);
      setCars(await response.json());
    } catch (err) {
      setLoading(false);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <CarsContext.Provider value={{ cars, addCar, loading, loaded, error, fetchCars }}>
      {children}
    </CarsContext.Provider>
  );
};