import SpaceCard from "../../components/SpaceCard";

const outdoorSpaces = [
  {
    id: 1,
    name: "Garden",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95VIEGUpY6x5-mYvMhejUUrogZbZeh52CrA&s",
  },
  {
    id: 2,
    name: "Garage",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWFFGjKYlwiZVciL-YJfb84b3oGAduhTiXQ&s",
  },
  {
    id: 3,
    name: "Balcony",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpei-NJNNK1BZJWB6kMwmK0ASo9pD4sTmw_A&s",
  },
];

export default function OutdoorPage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Outdoor Spaces</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {outdoorSpaces.map((space) => (
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
