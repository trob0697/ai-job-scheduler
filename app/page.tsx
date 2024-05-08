import { getAllStuff } from "./api/_db/stuff";

export default async function Home() {
  const stuff = await getAllStuff();

  return (
    <div className="flex flex-col items-center p-24">
      <span>Hello World</span>
      <div className="space-x-2">
        {stuff.map((item) => {
          return <span>{item.name}</span>;
        })}
      </div>
    </div>
  );
}
