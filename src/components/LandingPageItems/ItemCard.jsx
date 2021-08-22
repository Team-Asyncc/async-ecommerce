const ItemCard = ({ imageurl, description }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${imageurl})` }}
        className="bg-cover bg-no-repeat bg-center bg-opacity-75  h-80 w-56 p-3 mt-3 mb-2 text-white  text-center  rounded-md flex flex-wrap flex-col justify-end items-center cursor-pointer overflow-hidden transform transition duration-500 hover:scale-110 shadow-xl"
      >
        <div className="absolute bg-gradient-to-t from-green-400 t00  opacity-10 inset-0 z-0"></div>
        <div className="mt-1 text-white text-3xl font-semibold  leading-tight truncate ">
          {description}
        </div>
        <div className="text-white text-sm ">Starting from Rs. 499</div>
      </div>
    </>
  );
};

export default ItemCard;
