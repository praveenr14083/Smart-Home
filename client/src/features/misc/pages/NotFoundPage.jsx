import React from "react";
import { Link } from "@tanstack/react-router";
import { Iconify } from "@/lib/Iconify";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex h-full w-full p-10 flex-col items-center justify-center ">
      <div className="text-center px-6">
        {/* Icon */}
        <div className="flex justify-center mb-3">
          <Iconify
            icon="mdi:alert-circle-outline"
            size={82}
            className="text-red-500"
          />
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
          404
        </h1>
        <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        {/* Actions */}
        <div className="mt-6 flex gap-4 justify-center">
          {/* Back to Home */}
          <Link to="/">
            <Button className="px-6 py-2 flex items-center gap-2">
              <Iconify icon="mdi:home-outline" size={20} />
              Back to Home
            </Button>
          </Link>

          {/* Refresh Page */}
          <Button
            variant="outline"
            className="px-6 py-2 flex items-center gap-2"
            onClick={() => window.location.reload()}
          >
            <Iconify icon="mdi:refresh" size={20} />
            Refresh
          </Button>
        </div>
      </div>
    </div>
  );
}
