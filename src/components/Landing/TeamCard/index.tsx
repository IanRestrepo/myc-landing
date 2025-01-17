"use client";
import { cn } from "@/lib/utils";

interface MyButtonProps {
  title: string;
  role: string;
  image: string;
  bgimage: string;
}

export function CardDemo({ title, role, image, bgimage }: MyButtonProps) {
  return (
    <div className="max-w-xs w-full group">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
        )}
      >

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgimage})`,
          }}
        ></div>


        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60"></div>


        <div className="relative z-10 flex flex-col justify-between h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">

          <div className="flex flex-row items-center space-x-4">
            <img
              height="100"
              width="100"
              alt="Avatar"
              src={image}
              className="h-10 w-10 rounded-full border-2 object-cover"
            />
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50">{title}</p>
              <p className="text-sm text-gray-400">2 min read</p>
            </div>
          </div>


          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50">
              {role}
            </h1>
            <p className="font-normal text-sm text-gray-50 my-4">
              Card with Author avatar, complete name and time to read - most
              suitable for blogs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
