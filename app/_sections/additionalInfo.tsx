import Image from "next/image";

export default function AdditionalInfo() {
  return (
    <div className="nav-section flex-col-reverse lg:flex-row">
      <Image
        src={"/random2.jpg"}
        width={600}
        height={400}
        alt="random picture"
      />
      <div className="flex-col space-y-4">
        <h2>Supplemental Yappenese Here</h2>
        <ul>
          <li>Nya</li>
          <li>Ichi</li>
          <li>Ni</li>
          <li>San</li>
        </ul>
      </div>
    </div>
  );
}
