import { socialsData } from "@/lib/socialsData";
import Image from "next/image";
import "./footer.css";

function Footer() {
  return (
    <footer className="mt-32 footer">
      <div className="w-full bg-gray2 py-12">
        <div className="container flex justify-between flex-col sm:flex-row  gap-8 sm:gap-0">
          <div>
            <div className=" mb-5 flex items-center header_logo_container">
              <div className="relative footer_logo flex items-center justify-center">
                <div className="absolute ">
                  <Image
                    src="/images/logo_img.png"
                    alt="ZkSync.ai Logo"
                    width={25}
                    height={25}
                    className="w-full h-full "
                  />
                </div>
                <div className="absolute inset-0 ">
                  <Image
                    src="/images/gifs/3d.gif"
                    alt="ZkSync.ai Logo"
                    width={50}
                    height={50}
                    className="w-full h-full "
                  />
                </div>
              </div>
              <h2 className="footer_logo_text">BlockDAG</h2>
            </div>
            <p className="text-sm footer_paragraph mb-5 text-left">
              BlockDAG is a Layer 1 proof of work consensus mechanism that
              evolves the crypto sphere with a cutting-edge Directed Acyclic
              Graph structure building on the foundations of Bitcoin & Kaspa
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 md:gap-12">
            <div>
              <h3 className="h3_titles">Sitemap</h3>
              <div className="flex footer_uls">
                <ul className="flex flex-col footer_ul_li">
                  <li>
                    <a href="/" className="footer_links">
                      DAGpaper V1
                    </a>
                  </li>

                  <li>
                    <a href="/team" className="footer_links">
                      DAGpaper V2
                    </a>
                  </li>
                  <li>
                    <a href="/presale" className="footer_links">
                      Wiki
                    </a>
                  </li>
                  <li>
                    <a href="/build" className="footer_links">
                      Tokenomics
                    </a>
                  </li>
                  <li>
                    <a href="/build" className="footer_links">
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a href="/build" className="footer_links">
                      Press Kit
                    </a>
                  </li>
                  <li>
                    <a href="/build" className="footer_links">
                      Validation
                    </a>
                  </li>
                </ul>
                <ul className="flex flex-col footer_ul_li">
                  <li>
                    <a href="/" className="footer_links">
                      Products
                    </a>
                  </li>

                  <li>
                    <a href="/team" className="footer_links">
                      Calculator
                    </a>
                  </li>
                  <li>
                    <a href="/presale" className="footer_links">
                      Private Clients
                    </a>
                  </li>
                  <li>
                    <a href="/build" className="footer_links">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="/build" className="footer_links">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/build" className="footer_links">
                      Pillars
                    </a>
                  </li>
                  <li>
                    <a href="/build" className="footer_links">
                      Keynote
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="h3_titles">Legals</h3>
              <ul className="flex flex-col footer_ul_li">
                <li>
                  <a href="/terms-of-use" className="footer_links">
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href="/cookie-policy" className="footer_links">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy " className="footer_links">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="h3_titles">Socials</h3>
            <ul className="flex flex-col footer_ul_li">
              <li>
                <a href="/" className="footer_links gap-1">
                  <Image
                    src="/images/svgs/x.svg"
                    alt="Twitter"
                    width={20}
                    height={20}
                  />{" "}
                  Twitter
                </a>
              </li>
              <li>
                <a href="/" className="footer_links gap-1">
                  <Image
                    src="/images/svgs/telegram.svg"
                    alt="Telegram"
                    width={20}
                    height={20}
                  />{" "}
                  Telegram
                </a>
              </li>
              <li>
                <a href="/" className="footer_links gap-1">
                  <Image
                    src="/images/svgs/youtube.svg"
                    alt="Youtube"
                    width={20}
                    height={20}
                  />{" "}
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-screen">
        <div className="footer_rights">
          <p className="rights_p !max-w-full">
            Copyright © GhostDAG Disclaimer: Cryptocurrency may be unregulated
            in your jurisdiction. The value of cryptocurrencies may fluctuate.
            Profits may be subject to capital gains or other taxes applicable in
            your jurisdiction
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
