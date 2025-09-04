"use client";

import { Button } from "@/components/ui/button";
import { Iconify } from "@/lib/Iconify";
import { useNavigate, useRouterState } from "@tanstack/react-router";

export function PageHeader() {
  const navigate = useNavigate();
  const { location } = useRouterState();

  // Split path into segments
  const segments = location.pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1] || "Home";

  // Format label (capitalize + split kebab-case or snake_case)
  const title = lastSegment
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="mb-6 flex items-center gap-4">
      <Iconify
        onClick={() => navigate({ to: ".." })}
        icon="weui:back-filled"
        className="cursor-pointer"
      />

      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  );
}
