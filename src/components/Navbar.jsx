import { NavLink } from 'react-router-dom'
const links = [{to:'/',label:'Home'},{to:'/about',label:'About'},{to:'/contact',label:'Contact'}]
export default function Navbar() {
  return <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/90 backdrop-blur"><nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4"><NavLink to="/" className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-2xl bg-indigo-600 text-lg font-black text-white">R</span><span className="text-xl font-black tracking-tight">Route<span className="text-indigo-600">Flow</span></span></NavLink><div className="flex gap-1">{links.map(link=><NavLink key={link.to} to={link.to} end={link.to==='/'} className={({isActive})=>`rounded-xl px-3 py-2 text-sm font-semibold transition ${isActive?'bg-indigo-50 text-indigo-700':'text-slate-600 hover:bg-slate-100'}`}>{link.label}</NavLink>)}</div></nav></header>
}
