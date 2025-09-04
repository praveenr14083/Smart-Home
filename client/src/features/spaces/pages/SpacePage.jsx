import { useParams } from "@tanstack/react-router";
import { SpaceCard } from "@/components/shared/SpaceCard";
import { PageHeader } from "@/components/common/PageHeader";

const indoorSpaces = [
  {
    id: 1,
    name: "Living Room",
    devices: 4,
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=500&q=80",
    initialSwitch: true,
  },
  {
    id: 2,
    name: "Kitchen",
    devices: 2,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80",
    initialSwitch: true,
  },
  {
    id: 3,
    name: "Bedroom",
    devices: 3,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=500&q=80",
    initialSwitch: false,
  },
];

const outdoorSpaces = [
  {
    id: 1,
    name: "Garden",
    devices: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95VIEGUpY6x5-mYvMhejUUrogZbZeh52CrA&s",
    initialSwitch: true,
  },
  {
    id: 2,
    name: "Garage",
    devices: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWFFGjKYlwiZVciL-YJfb84b3oGAduhTiXQ&s",
    initialSwitch: true,
  },
  {
    id: 3,
    name: "Balcony",
    devices: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpei-NJNNK1BZJWB6kMwmK0ASo9pD4sTmw_A&s",
    initialSwitch: true,
  },
];

// 🔹 Helper: make URL-friendly room slug
function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, "");
}

export default function SpacePage() {
  const { space } = useParams({ from: "/$space" });

  let spaces = null;

  if (space === "indoor") {
    spaces = indoorSpaces;
  } else if (space === "outdoor") {
    spaces = outdoorSpaces;
  } else {
    return <h1>404</h1>; // ⬅️ invalid param → show 404
  }

  return (
    <div>
      <PageHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {spaces.map((room) => (
          <SpaceCard
            key={room.id}
            name={room.name}
            devices={room.devices}
            image={room.image}
            initialSwitch={room.initialSwitch}
            // ✅ param + room slug → /indoor/livingroom OR /outdoor/garden
            to={`/${space}/${slugify(room.name)}`}
          />
        ))}
      </div>
    </div>
  );
}
