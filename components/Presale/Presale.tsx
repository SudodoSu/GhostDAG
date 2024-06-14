import Link from "next/link";
import "./presale.css";
function Presale() {
  return (
    <section className="w-full py-20">
      <div className="container">
        <div>
          <div className="presale_title_container">
            <h1 className="presale_title uppercase">Presale</h1>
          </div>
          <div className="div_parent">
            <div className="h2h2">
              <h2 className="presale_span">$48.8M Raised So Far.</h2>
            </div>
            <p className="presale_p">
              Join the BlockDAG crypto presale, engage with the project, and see
              your contribution grow to new heights.
            </p>
            <div className="presale_buttons_div">
              <button>
                <Link href="presale" className="btn">
                  Join Presale
                </Link>
              </button>
              <button>
                <Link
                  href="/buy"
                  className="border-white border-2 hover:bg-gradient-blue-reverse btn"
                  style={{ backgroundImage: "none" }}
                >
                  How to buy
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presale;
