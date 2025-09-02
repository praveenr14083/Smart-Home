import { SpaceCard } from "@/components/shared/SpaceCard";

const indoorSpaces = [
  {
    id: 1,
    name: "Living Room",
    devices: 4,
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=500&q=80", // Living room image
    initialSwitch: true,
  },
  {
    id: 2,
    name: "Kitchen",
    devices: 2,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80", // Kitchen image
    initialSwitch: true,
  },
  {
    id: 3,
    name: "Garden",
    devices: 1,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=500&q=80", // Garden image
    initialSwitch: false,
  },
  {
    id: 4,
    name: "Kitchen",
    devices: 4,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=500&q=80", // Kitchen image
    initialSwitch: false,
  },
];

export default function IndoorPage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Indoor Spaces</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {indoorSpaces.map((space) => (
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
