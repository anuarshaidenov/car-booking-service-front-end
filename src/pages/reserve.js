import { useEffect, useState } from 'react';

const ReservePage = () => {
  const [models, setModels] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3000/api/v1/cars');
      const data = await res.json();
      const models = data.map((el) => `${el.make} - ${el.model}`);
      setModels(models);
      console.log(data);
    })();
  }, []);
  return (
    <section className="fixed top-0 w-full h-full md:pl-[20vw] bg-[url('/src/images/car-medium.png')] md:bg-[url('/src/images/car-big.png')] bg-right bg-no-repeat bg-200%">
      <div className="w-full h-full bg-[#fdac01]/70 px-20 flex flex-col justify-center">
        <div className="w-full h-[50%] text-center flex flex-col justify-center items-center gap-[2rem]">
          <h1 className="font-bold text-white text-3xl md:text-5xl md:mb-5">
            MAKE YOUR RESERVATION
          </h1>
          <form className="w-full h-full text-center flex flex-col items-center gap-[2rem] md:flex-row lg:w-[70%] md:h-auto">
            <select className="w-[80%] sm:w-[40%] h-[2.6rem] rounded-3xl bg-transparent border border-2 border-white font-bold text-xl text-white text-center" name="city" id="city">
              <option value="" selected disabled hidden>CITY</option>
              <option value="new-york">New York</option>
              <option value="york">York</option>
              <option value="washingtone">Washingtone</option>
            </select>
            <select className="w-[80%] sm:w-[40%] h-[2.6rem] rounded-3xl bg-transparent border border-2 border-white font-bold text-xl text-white text-center" name="model" id="model">
              <option value="" selected disabled hidden>MODEL</option>
              {models.map((model) => <option key={model} value={model}>{model}</option>)}
            </select>
            <button type="button" className="bg-white font-bold text-2xl text-[#fdac01] px-5 py-2 rounded-xl">RESERVE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservePage;
