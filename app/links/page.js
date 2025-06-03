import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity/client";
import { linkQuery } from "@/lib/sanity/queries";

export const socials = [
  {
    name: "x",
    href: "https://x.com/alsaif_legal",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
  },
  {
    name: "snapchat",
    href: "https://snapchat.com/t/08yV1FOk",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="icon icon-tabler icons-tabler-filled icon-tabler-brand-snapchat"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 1.96a5.88 5.88 0 0 1 5.882 5.882c0 .618 .008 1.174 .03 1.678l.008 .21l.084 -.115q .46 -.627 1.102 -1.29l.187 -.19a1 1 0 0 1 1.414 1.415c-2.637 2.637 -2.51 3.795 .76 5.527l.048 .025a.98 .98 0 0 1 .46 .636l.004 .022l.003 .013l.006 .043l.006 .032v.009l.003 .025l.001 .051l.002 .026l-.001 .009v.025l-.003 .042l-.002 .034l-.002 .015l-.002 .02l-.004 .016l-.01 .06l-.007 .026l-.006 .02l-.016 .06l-.013 .029l-.005 .013l-.024 .062a1 1 0 0 1 -.197 .28l-.03 .025l-.016 .014l-.043 .039l-.013 .007l-.018 .015l-.051 .033l-.02 .014l-.008 .003l-.014 .01a1 1 0 0 1 -.098 .049l-.013 .003l-.146 .066c-.576 .255 -.81 .365 -1.008 .474l-.053 .03c-.27 .155 -.398 .277 -.558 .525c-.156 .245 -.293 .516 -.715 1.41a1 1 0 0 1 -.904 .573c-1.067 0 -1.798 .25 -2.879 .868l-.426 .246c-.176 .102 -.311 .178 -.447 .25c-.794 .423 -1.464 .636 -2.248 .636s-1.454 -.213 -2.248 -.636a15 15 0 0 1 -.447 -.25l-.426 -.246c-1.081 -.618 -1.812 -.868 -2.879 -.868a1 1 0 0 1 -.904 -.573c-.422 -.894 -.559 -1.165 -.715 -1.41a1.4 1.4 0 0 0 -.558 -.525c-.228 -.13 -.47 -.243 -1.227 -.577l.02 .007l-.013 -.003a1 1 0 0 1 -.098 -.05l-.014 -.009l-.028 -.017l-.051 -.033l-.018 -.015l-.013 -.007l-.043 -.039l-.012 -.01l-.004 -.004l-.03 -.025a1 1 0 0 1 -.197 -.28l-.024 -.062l-.005 -.013l-.013 -.028l-.016 -.061l-.005 -.012l-.008 -.035l-.01 -.059l-.004 -.016l-.002 -.02l-.002 -.015l-.002 -.035l-.004 -.041l.001 -.025l-.001 -.01l.002 -.025l.001 -.05l.003 -.026v-.01l.006 -.03l.006 -.044l.004 -.014l.002 -.021a.98 .98 0 0 1 .461 -.636l.048 -.025l.204 -.11c3.003 -1.635 3.132 -2.785 .72 -5.25l-.164 -.167a1 1 0 0 1 1.414 -1.414q .764 .763 1.289 1.479l.083 .115l.01 -.21q .025 -.628 .028 -1.374l.001 -.304a5.88 5.88 0 0 1 5.882 -5.882" />
      </svg>
    ),
  },
  {
    name: "email",
    href: "mailto:info@alsaiflegal.com",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="icon icon-tabler icons-tabler-filled icon-tabler-mail"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
        <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
      </svg>
    ),
  },
];

const socialsBgClasses = {
  x: "hover:bg-blue-300",
  snapchat: "hover:bg-amber-200",
  email: "hover:bg-slate-300",
};

export default async function Links() {
  const links = await client.fetch(linkQuery);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-black p-4 bg-gradient-to-br from-slate-50 to-gray-50 fade-in">
      {/* Logo */}
      <Image
        src="/images/logos/logo.png"
        width={150}
        height={150}
        alt="alsaiflegal logo"
      />

      {/* Socials */}
      <div className="flex justify-around items-center w-[40%] mt-[2rem]">
        {socials.map((icon) => (
          <Link
            key={icon.name}
            href={icon.href}
            className={`p-2 rounded-full bg-white shadow-sm ${
              socialsBgClasses[icon.name] || "bg-white"
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.svg}
          </Link>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-col justify-center items-center w-[70%] gap-4 mt-[3rem]">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            className="flex justify-center items-center w-full p-4 rounded-lg gap-4 border border-gray-300 bg-white shadow-sm transform transition duration-300 hover:scale-102"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={urlFor(link.image).url()} width={20} height={25} alt={link.title} />
            <span className="ibm-plex-sans-arabic-bold">{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
