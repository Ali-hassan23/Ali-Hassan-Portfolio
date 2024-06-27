import Image from "next/image";
import React from "react";

interface PropTypes {
  image: string;
}

const LogoCard = ({ image }: PropTypes) => {
  return (
    <div className="relative overflow-hidden h-[50px] min-w-[50px] rounded-xl flex justify-center items-center">
      <Image
        src={image}
        alt="Logo"
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 640px) 100vw, 50vw"
      />
    </div>
  );
};

export default LogoCard;
