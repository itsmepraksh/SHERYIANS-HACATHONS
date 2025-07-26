import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const FusionProduct = ({
  imgSrc,
  category,
  categoryType,
  price,
  imgSet,
  id,
}) => {
  const [favheart, setFavheart] = useState(false);

  const heartBtn = (e) => {
    const currDiv = e.target.closest("[id]");

    setFavheart(!favheart);
  };

  return (
    <div id={id} className="product text-black relative">
      <FontAwesomeIcon
        onClick={heartBtn}
        icon={favheart ? faHeart : faHeartRegular}
        // icon={faHeart}
        className="absolute top-4 right-5 bg-red-300 p-2 rounded-full"
      />
      <img
        src={imgSrc}
        alt=""
        className={`rounded h-50 w-full object-cover ${imgSet}`}
      />
      <div className="flex  items-start py-5 justify-between ">
        <div>
          <div className="flex gap-4 text-xs md:gap-2">
            <p className="rounded-3xl px-3 py-1 border-zinc-700 border-[0.5px]">
              {category}
            </p>
            <h1 className="rounded-3xl px-3 py-1 border-zinc-700 border-[0.5px] ">
              {categoryType}
            </h1>
          </div>
          <h2 className="py-3 px-2 text-lg">{price}</h2>
        </div>

        <FontAwesomeIcon
          icon={faCartPlus}
          className="p-2 md:py-1 text-xl text-[#334238]"
        />
      </div>
    </div>
  );
};

export default FusionProduct;
