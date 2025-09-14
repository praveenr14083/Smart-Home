import { useParams } from "react-router-dom"; // ✅ React Router DOM
import { SpaceCard } from "@/components/shared/SpaceCard";
import { PageHeader } from "@/components/common/PageHeader";

const spaces = [
  {
    id: 1,
    name: "Living Room",
    devices: 4,
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=500&q=80",
    initialSwitch: true,
    space: "indoor",
  },
  {
    id: 2,
    name: "Kitchen",
    devices: 2,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80",
    initialSwitch: true,
    space: "indoor",
  },
  {
    id: 3,
    name: "Bedroom",
    devices: 3,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=500&q=80",
    initialSwitch: false,
    space: "indoor",
  },
  {
    id: 4,
    name: "Garden",
    devices: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95VIEGUpY6x5-mYvMhejUUrogZbZeh52CrA&s",
    initialSwitch: true,
    space: "outdoor",
  },
  {
    id: 5,
    name: "Garage",
    devices: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWFFGjKYlwiZVciL-YJfb84b3oGAduhTiXQ&s",
    initialSwitch: true,
    space: "outdoor",
  },
  {
    id: 6,
    name: "Balcony",
    devices: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpei-NJNNK1BZJWB6kMwmK0ASo9pD4sTmw_A&s",
    initialSwitch: true,
    space: "outdoor",
  },
];

export default function SpacePage() {
  // ✅ use {space} from route → /indoor or /outdoor
  const { space } = useParams();

  // ✅ filter based on route
  const filteredSpaces = spaces.filter((room) => room.space === space);

  return (
    <div>
      <PageHeader />

      {filteredSpaces.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSpaces.map((room) => (
            <SpaceCard
              key={room.id}
              name={room.name}
              devices={room.devices}
              image={room.image}
              initialSwitch={room.initialSwitch}
              to={`/${room.space}/${room.name
                .toLowerCase()
                .replace(/\s+/g, "")}`}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-5">No {space} spaces found.</p>
      )}
    </div>
  );
}
