import { useState } from 'react'
import Header from '../components/Pages/Header'
import Features from '../components/Pages/Features'
import FAQ from '../components/Pages/FAQ'
import Footer from '../components/Pages/Footer'
import LoginModel from '../components/Pages/LoginModal'

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <Header OpenModal={() => setOpen(true)}/>
    <Features/>
    <FAQ/>
    <Footer/>
    <LoginModel open={open} CloseModal={() => setOpen(false)}/>
    </>
  );
};
