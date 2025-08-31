import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SpaceCard({ name, image, description }) {
  return (
    <Card className="overflow-hidden shadow-none pt-0">
      {/* Image */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      {/* Content */}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
