

const ArrivalsItem = ({imgsrc,imgName,imgInfo1,imgInfo2}) => {
  return (
    <div id="item" className="w-full">
      <img src={imgsrc} className="rounded-lg h-[30rem] w-full object-cover object-top" alt="" />
      <h1 className="font-medium text-xl py-3">{imgName}</h1>
      <div className="flex gap-2 items-start pb-3"> 
        <p className="rounded-2xl text-zinc-800 border border-zinc-700  px-2 py-[0.2rem]  ">{imgInfo1}</p>
        <p className="rounded-2xl text-zinc-800 border border-zinc-700  px-2 py-[0.2rem]  ">{imgInfo2}</p>
      </div>
    </div>
  );
};

export default ArrivalsItem;
