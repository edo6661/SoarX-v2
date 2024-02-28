import Image from "next/image";
import PortableText from "react-portable-text";
import { FollowerPointerCard } from "./FollowerPointerCard";
export function FollowingPointer({ details }: { details: any }) {
  return (
    <div className="w-80 mx-auto">
      <FollowerPointerCard title={<TitleComponent details={details} />}>
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            {/* TODO change after src after database done  */}

            {/* <Image
              src={imageUrl(details.eventImage).url()!}
              alt="thumbnail"
              width={318}
              height={318}
              style={{
                maxWidth: "318px",
                maxHeight: "318px",
                objectFit: "cover",
                objectPosition: "top",
              }}
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            /> */}
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
              {details.eventTitle}
            </h2>
            <h2
              className="font-normal my-4 text-sm text-zinc-500"
              style={{
                maxHeight: "480px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <PortableText content={details.eventDesc} />
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">{details.eventDate}</span>
              <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                Read More
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const TitleComponent = ({ details }: { details: any }) => (
  <div className="flex space-x-2 items-center">
    {/* TODO change after databsase done */}
    {/* <Image
      src={imageUrl(details.eventImage).url()!}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    /> */}
    <p>{details.eventTitle}</p>
  </div>
);
