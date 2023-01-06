import Footer from "~/components/Footer";
import Header from "~/components/Header";
import ContactForm from "~/features/ContactForm";
import Navigation from "~/shared/Navigation";

export default function Home() {
  return (
    <>
      <Header />
      <main class="text-center mx-auto text-gray-700 p-4" style="height:140rem">
        <section
          class="flex flex-col content-center items-center"
          id="home"
          style={{ "min-height": `calc(100vh - 102px)` }}
        >
          <div class="pb-40">
            <h1 class="mt-0 text-3xl leading-7 tracking-wide text-center text-white md:text-6xl md:tracking-widest">
              Sammy Mohamed
            </h1>
            <p class="mt-0 text-3xl italic tracking-wide text-center text-ocean-blue">
              Just a Dev
            </p>
          </div>
          <Navigation></Navigation>
        </section>

        <div class="pt-2 p-md-5 bckgrd-sea-green">
          <div class="contact-form--inner bckgrd-white mx-auto p-3 p-md-0 position-relative">
            <div class="container mx-auto">
              <div class="row">
                <div class="col">
                  {/* {showSuccess() && (
                    <div class="alert alert-success" role="alert">
                      Inquiry successfully sent, we will reach out to you as
                      soon as we can!
                    </div>
                  )}

                  {showError() && (
                    <div class="alert alert-danger" role="alert">
                      Seems we ran into a problem. Please try again later or
                      please contact us by phone or email directly.
                    </div>
                  )} */}

                  <div class="px-3 text-right">
                    <span>
                      Fields with an Asterisk(<span class="text-red">*</span>)
                      are required
                    </span>
                  </div>
                </div>
              </div>

              {/* <div class="w-[900px] mx-auto">
                <div class="flex flex-row-reverse">
                  <ContactForm></ContactForm>
                  <img
                    class="img-fluid"
                    src="/images/SAM_1.svg"
                    alt="Quetzal Flying over Pyramids"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
