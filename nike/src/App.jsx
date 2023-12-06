import {
  CustomerReview,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";
const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />.
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x padding-y">
        <Services />
      </section>
      <section className="padding bg-pale-blue">
        <SpecialOffer />
      </section>
      <section className="padding">
        <CustomerReview />
      </section>

      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default App;
