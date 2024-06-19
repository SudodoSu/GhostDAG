import Link from "next/link";
import "./faq.css";
function Faq() {
  return (
    <section className="w-full py-20 faq_line">
      <div className="container2 flex flex-col items-center gap-[calc(var(--one)*150)]">
        {/* <div className="w-full">
          <h1 className="title !mb-[calc(var(--one)*15)]">FAQS</h1>
          <h4 className="!mb-[calc(var(--one)*20)] text-[calc(var(--one)*32)] leading-[calc(var(--one)*41.6)] font-titleBold text-center">
            Your most pressing queries, answered.
          </h4>
          <div className="w-full text-center">
            <button className="mx-auto">
              <Link href="/" className="btn">
                See All FAQs
              </Link>
            </button>
          </div>
        </div> */}
        {/*  */}
        <div className="bg-blue2 rounded-3xl flex flex-col relative p-[calc(var(--one)*60)] gap-[calc(var(--one)*42)] shadow-blue-shadow ">
          <div className="flex flex-col gap-2">
            <h3 className="text-[calc(var(--one)*32)] tracking-[-0.64px] leading-[130%] font-titleBold">
              Support Our Mission
            </h3>
            <p className="text-left">
              Every contribution, regardless of its size, has a meaningful
              impact for our team, together have the power to bring about
              lasting change and forge a brighter future for everyone involved.
              Our community thrives on collaboration and shared commitment.
            </p>
            <p className="text-left">
              The management of our community wallet rests in the capable hands
              of three elected members: XCat, Leopard Win, and Technix, who have
              earned the trust of the public through a democratic voting
              process. Operating as a multi-signature wallet, any spending
              transaction requires the authorization of at least two of these
              appointed Treasurers, ensuring a secure and transparent financial
              process.
            </p>
          </div>
          <div className="w-full text-center">
            <button>
              <Link
                href="/"
                className="btn !bg-white !text-blue mx-auto !text-[calc(var(--one)*18)] "
                style={{ backgroundImage: "none" }}
              >
                Make a Donation
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
