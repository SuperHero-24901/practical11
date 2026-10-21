import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function NotFound() {
  return <main className="mx-auto max-w-5xl px-6 py-24 text-center"><p className="font-bold text-indigo-600">404 · PAGE NOT FOUND</p><h1 className="mt-3 text-4xl font-black">This route doesn't exist.</h1><p className="mt-4 text-slate-500">The page may have moved, or the URL may be incorrect.</p><a className="mt-7 inline-block rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white" href="/">Back home</a></main>
}
export default function App() {
  return <BrowserRouter><div className="flex min-h-screen flex-col"><Navbar/><div className="flex-1"><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></div><Footer/></div></BrowserRouter>
}
