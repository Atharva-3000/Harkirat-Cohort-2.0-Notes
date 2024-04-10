import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "Why Did You send THIS to Me?!?",
    author: "JsclatttLive",
    views: "430k",
    timestamp: "3 days ago",
    image: "/thumb.jpg",
    thumbImage: "/thumbnail.png",
  },
  {
    title: "I Made an Alarm For YOU !",
    author: "JsclatttLive",
    views: "430k",
    timestamp: "3 days ago",
    image: "/thumb.jpg",
    thumbImage: "/thumbnail.png",
  },
  {
    title: "I Made an Alarm For YOU !",
    author: "JsclatttLive",
    views: "430k",
    timestamp: "3 days ago",
    image: "/thumb.jpg",
    thumbImage: "/thumbnail.png",
  },
  {
    title: "I Made an Alarm For YOU !",
    author: "JsclatttLive",
    views: "430k",
    timestamp: "3 days ago",
    image: "/thumb.jpg",
    thumbImage: "/thumbnail.png",
  },
  {
    title: "I Made an Alarm For YOU !",
    author: "JsclatttLive",
    views: "430k",
    timestamp: "3 days ago",
    image: "/thumb.jpg",
    thumbImage: "/thumbnail.png",
  },
  {
    title: "I Made an Alarm For YOU !",
    author: "JsclatttLive",
    views: "430k",
    timestamp: "3 days ago",
    image: "/thumb.jpg",
    thumbImage: "/thumbnail.png",
  },
  {
    title: "I Made an Alarm For YOU !",
    author: "JsclatttLive",
    views: "430k",
    timestamp: "3 days ago",
    image: "/thumb.jpg",
    thumbImage: "/thumbnail.png",
  },
  {
    title: "I Made an Alarm For YOU !",
    author: "JsclatttLive",
    views: "430k",
    timestamp: "3 days ago",
    image: "/thumb.jpg",
    thumbImage: "/thumbnail.png",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
            image={video.image}
            thumbImage={video.thumbImage}
          />
        </div>
      ))}
    </div>
  );
};
