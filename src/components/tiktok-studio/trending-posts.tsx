import { HeartIcon } from "lucide-react";
import { DefaultThumbnail } from "@/icons";

export default function TrendingPosts() {
  const posts = [
    { id: 1, title: "Makeup tutorial that went viral", likes: "87.9K" },
    { id: 2, title: "Dance challenge compilation", likes: "156.2K" },
    { id: 3, title: "Cooking hack everyone loves", likes: "234.5K" },
    { id: 4, title: "Pet training tips and tricks", likes: "92.1K" },
    { id: 5, title: "Fashion outfit ideas for summer", likes: "178.3K" },
    { id: 6, title: "Travel vlog from Tokyo", likes: "312.7K" }
  ];

  return (
    <div className="space-y-1">
      <div>
        <small className="text-xs text-muted-foreground">Top performing branded content on TikTok</small>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {posts.map((post) => (
          <div key={post.id} className="relative bg-gray-200 rounded-lg overflow-hidden shadow h-[250px]">
            <DefaultThumbnail className="h-full w-full object-fill" />
            <div className="w-full py-2 px-1 absolute bottom-0 bg-gradient-to-b from-gray-50 via-gray-500 to-gray-900 ">
              <p className="text-xs  text-white">{post.title}</p>
              <div className="text-[10px] text-white gap-1 flex items-center">
                <HeartIcon className="size-3" />
                <span>{post.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
