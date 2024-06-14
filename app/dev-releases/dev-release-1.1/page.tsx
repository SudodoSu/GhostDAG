import PageDirection from "@/components/PageDestination/PageDirection";
import image1 from "@/public/images/PageDirection/dev-release-blog-img.png";

function page() {
  return (
    <main>
      <PageDirection
        image={image1}
        title="Dev Release 1.1"
        PagePath="GhostDAG Dev News"
      />
      <div className="container2 mt-[calc(var(--one)*12)]">
        <h2 className="!text-[calc(var(--one)*20)] mb-5">
          Enhancing Scalability and Efficiency with GhostDAG v1.1
        </h2>
        <p className="text-left">
          We are excited to announce the release of GhostDAG v1.1, a significant
          upgrade that further enhances the scalability, efficiency, and
          security of the GhostDAG blockchain. Building upon the foundation laid
          in the previous release, GhostDAG v1.1 introduces several key
          improvements to the network.
        </p>
        <p className="text-left">
          One of the highlights of GhostDAG v1.1 is the enhanced GhostDAG
          consensus algorithm, which has been optimized to improve scalability
          and transaction throughput. With these enhancements, the GhostDAG
          network can accommodate a higher volume of transactions, making it
          even more suitable for a wide range of applications.
        </p>
        <p className="text-left">
          In addition to improvements in consensus, GhostDAG v1.1 includes
          enhancements to miner software, designed to optimize mining algorithms
          and reduce resource consumption. These optimizations result in faster
          block generation and v
        </p>
      </div>
    </main>
  );
}

export default page;
