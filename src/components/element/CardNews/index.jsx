const CardNews = ({ imageUrl, title, description, source }) => {
  const limitedDescription =
    description.length > 150
      ? description.substring(0, 150) + "..."
      : description;

       const limitedTitle =
         title.length > 40
           ? description.substring(0, 40) + "..."
           : title;
  return (
    <article className="bg-white rounded-lg shadow-lg w-[300px] h-[450px] relative">
      <img
        className="w-full h-40 object-cover object-center"
        src={imageUrl}
        alt={title}
      />
      <div className="p-6 ">
        <h2 className="text-xl font-semibold mb-2">{limitedTitle}</h2>
        <p className="text-gray-700">{limitedDescription}</p>
      </div>
      <p className="text-gray-700 absolute bottom-0 left-0 font-bold">
        {" "}
        source: {source}
      </p>
    </article>
  );
};

export default CardNews;
