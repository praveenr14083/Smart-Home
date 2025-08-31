import SpaceCard from "../../components/SpaceCard";

const indoorSpaces = [
  {
    id: 1,
    name: "Living Room",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2cQ_lFcrDRl2ptoRGhwzMtkjM6Hyt0kDRPg&s",
  },
  {
    id: 2,
    name: "Kitchen",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNU7mJHGR3J45Ead9097UzttfQOqOfCWFtA&s",
  },
  {
    id: 3,
    name: "Bedroom",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48NTEINIEDVDbk7mDIrV-iCfILQWtjG1-Bg&s",
  },
];

export default function IndoorPage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Indoor Spaces</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {indoorSpaces.map((space) => (
          <SpaceCard
            key={space.id}
            name={space.name}
            image={space.image}
            description={`Manage devices and monitor activity in your ${space.name}.`}
          />
        ))}
      </div>
    </div>
  );
}
