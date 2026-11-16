import { ImageResponse } from "next/og";
export const alt = "EthnicMuseWorld — Photo packs and prompt PDFs";
export const size = {width:1200,height:630};
export const contentType = "image/png";
export default function Image(){return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",background:"#f6f2eb",color:"#302c24",padding:"65px"}}><div style={{display:"flex",fontSize:30}}>ETHNICMUSEWORLD</div><div style={{display:"flex",fontSize:76,fontFamily:"serif",maxWidth:1000}}>Beautiful imagery. Ready for your story.</div><div style={{display:"flex",fontSize:28,color:"#76523e"}}>PHOTO PACKS + AI PROMPT PDFs · INSTANT DOWNLOAD</div></div>,size);}
