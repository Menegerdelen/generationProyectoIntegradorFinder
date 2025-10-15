

import OrientaHero from '../../components/OrientacionComponents/orienta-hero/OrientaHero';
import OrientaQuoteCard from '../../components/OrientacionComponents/orienta-quote/OrientaQuoteCard';
import OrientaTestCard from '../../components/OrientacionComponents/orienta-test/OrientaTestCard';
import OrientaVideoCard from '../../components/OrientacionComponents/orienta-video/OrientaVideoCard';
import './orienta.css'

export default function Orientacion() {
  return (
    <>

      <OrientaHero />

      <div className="container my-5">
        <OrientaVideoCard />
        <OrientaTestCard />
        <OrientaQuoteCard />
      </div>


    </>
  );
}

