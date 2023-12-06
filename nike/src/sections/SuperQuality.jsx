import { shoe8 } from "../assets/images";
import Button from "../components/Buttons";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-ls:flex-col gpa-10 w-full container"
    >
      <div className="flex-1 felx-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, Quality comfort, and innovation for
          your active life. We provide the best quality for our clients
        </p>

        <Button label="View More" />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe"
          width={570}
          height={522}
          className="ojbect-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
