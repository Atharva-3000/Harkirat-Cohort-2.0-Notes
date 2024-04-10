export function VideoCard(props:any) {
  return (
    <div className="cursor-pointer">
      <img src={props.thumbImage} className="rounded-xl"></img>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img className={"rounded-full w-10 h-10 md:w-7 md:h-7"} src={props.image}></img>
        </div>
        <div className="col-span-11">
          <div>{props.title}</div>
          <div className="col-span-11 text-gray-400 text-sm">
            {props.author}
          </div>
          <div className="col-span-11 text-gray-400 text-sm">
            {props.views} • {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
