import Image from "next/image";

export default function AdditionalInfo() {
  return (
    <div className="nav-section">
      <Image
        className="hidden lg:block"
        src={"/random2.jpg"}
        width={600}
        height={400}
        alt="random picture"
      />
      <div className="flex-col space-y-4">
        <h2>Put Some Yappenese Here</h2>
        <ul>
          <li>Yapp One</li>
          <li>Yapp Two</li>
          <li>Yapp Three</li>
          <li>Yapp Four</li>
        </ul>
      </div>
    </div>
  );
}
