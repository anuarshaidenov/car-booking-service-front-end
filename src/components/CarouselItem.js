import { Link } from 'react-router-dom';
import carImageSmall from '../images/car-small.png';

const CarouselItem = () => (
  <Link to="/cars/1">
    <div>
      <div className="bg-amber-500 w-52 h-52 rounded-full mx-auto relative mb-10">
        <div className="absolute -left-3/4 top-1/2 translate-x-1/2 -translate-y-1/2 w-[130%]">
          <img src={carImageSmall} alt="car" />
        </div>
      </div>
      <div className="max-w-[240px] mx-auto">
        <h2 className="font-bold text-2xl uppercase mb-4">Mercedes 2022</h2>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pharetra, magna.
        </p>
      </div>
    </div>
  </Link>
);

export default CarouselItem;