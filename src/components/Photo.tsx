import Image from "next/image";
export default function Photo({src,alt,priority=false,className=""}:{src:string;alt:string;priority?:boolean;className?:string}) {
 return <figure className={`em-photo ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 540px" priority={priority} className="object-cover"/><span className="em-watermark" aria-hidden="true">EthnicMuseWorld</span></figure>;
}
