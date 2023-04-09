const AuthCarousel = ({image,title,description}) => {
  return (
    <div className="!flex flex-col items-center justify-center h-full mb-10 px-6">
      <img src={image} alt="" className="w-[600px] h-[500px]" />
      <h3 className="text-4xl text-white text-center font-bold">{title}</h3>
      <p className="mt-5 text-2lg text-white text-center">
       {description}
      </p>
    </div>

    
    
  );
};

export default AuthCarousel;
