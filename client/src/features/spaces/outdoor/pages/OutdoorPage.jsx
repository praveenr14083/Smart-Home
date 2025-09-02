import { SpaceCard } from "@/components/shared/SpaceCard";

const outdoorSpaces = [
  {
    id: 1,
    name: "Garden",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95VIEGUpY6x5-mYvMhejUUrogZbZeh52CrA&s",
    initialSwitch: true,
  },
  {
    id: 2,
    name: "Garage",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWFFGjKYlwiZVciL-YJfb84b3oGAduhTiXQ&s",
    initialSwitch: true,
  },
  {
    id: 3,
    name: "Balcony",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpei-NJNNK1BZJWB6kMwmK0ASo9pD4sTmw_A&s",
    initialSwitch: true,
  },
];

export default function OutdoorPage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Outdoor Spaces</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {outdoorSpaces.map((space) => (
          <SpaceCard
            key={space.id}
            name={space.name}
            devices={space.devices}
            image={space.image}
            initialSwitch={space.initialSwitch}
          />
        ))}
      </div>
    </div>
  );
}
