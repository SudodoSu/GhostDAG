import PageDirection from "@/components/PageDestination/PageDirection";
import image1 from "@/public/images/PageDirection/dev-release-blog-img.png";

function page() {
  return (
    <main>
      <PageDirection
        image={image1}
        title="Dev Release 1"
        PagePath="GhostDAG Dev News"
      />
      <div className="container2 mt-[calc(var(--one)*12)]">
        <h2 className="!text-[calc(var(--one)*20)] mb-5">
          Introducing GhostDAG: A Leap Forward in Blockchain Technology
        </h2>
        <p className="text-left">
          We are thrilled to announce the official release of GhostDAG v1.0,
          marking a significant milestone in the evolution of blockchain
          technology. GhostDAG introduces a revolutionary approach to consensus
          and transaction validation, leveraging Directed Acyclic Graph (DAG)
          architecture to overcome the limitations of traditional blockchain
          structures.
        </p>
        <p className="text-left">
          GhostDAG represents a paradigm shift in blockchain design, offering
          unparalleled scalability, efficiency, and security. By utilizing a
          DAG-based structure, GhostDAG eliminates the bottleneck associated
          with linear blockchains, enabling simultaneous transaction processing
          and significantly reducing confirmation times.
        </p>
        <p className="text-left">
          With the release of GhostDAG v1.0, miners gain access to specialized
          mining software tailored for the GhostDAG network. This software
          enables miners to participate in block generation and validation,
          contributing to the integrity and security of the GhostDAG blockchain.
        </p>
        <p className="text-left">
          Furthermore, the GhostDAG blockchain is now live, providing a robust
          platform for secure and decentralized transaction processing. Users
          can seamlessly interact with the GhostDAG network, confident in the
          reliability and efficiency of their transactions.
        </p>
        <p className="text-left">
          As we embark on this journey with GhostDAG, we invite developers,
          miners, and enthusiasts to join us in shaping the future of blockchain
          technology. Together, we will unlock new possibilities and drive
          innovation in decentralized systems.
        </p>
      </div>
    </main>
  );
}

export default page;
