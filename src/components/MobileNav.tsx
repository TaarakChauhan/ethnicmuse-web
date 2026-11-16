"use client";
import { useState } from "react";
export default function MobileNav({links}:{links:{href:string;label:string}[]}) {
 const [open,setOpen]=useState(false);
 return <div className="em-mobile-menu" onKeyDown={e=>{if(e.key==="Escape")setOpen(false);}}><button type="button" aria-expanded={open} aria-controls="mobile-navigation" className="em-menu-trigger" onClick={()=>setOpen(!open)}>{open?"Close":"Menu"} <span aria-hidden="true">{open?"−":"＋"}</span></button>{open?<nav id="mobile-navigation" aria-label="Mobile navigation">{links.map(l=><a key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</a>)}</nav>:null}</div>;
}
