import Link from "next/link";
import DevReleasesSlider from "./DevReleasesSlider";

function DevReleases() {
  return (
    <section className="w-full py-24">
      <div className="container">
        <div className="title_container">
          <h2 className="title uppercase">DEV RELEASES</h2>
          <p className="">
            Check out our daily dev releases to witness the electrifying
            progress of our development journey
          </p>
        </div>
        <div>
          <DevReleasesSlider />
        </div>
        <div className="w-full flex justify-center mt-5">
          <button className="mx-auto relative">
            <Link href="/dev-releases" className="btn">
              See all
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default DevReleases;
