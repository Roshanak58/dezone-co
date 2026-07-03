import Image from "next/image";


function Certification({ qualification, setQualification }) {
  return (
    <div className="Certificatecontainer">
      <div className="CertificateShow">
        <span className="CertificateClose" onClick={() => setQualification(0)}>
          X
        </span>

        <Image
          src="/images/ContractorQualification.jpg"
          alt="Logo"
          width={600}
          height={800}
        />
      </div>
    </div>
  );
}

export default Certification