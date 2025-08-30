import React from "react";

export default function DevicesPage() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left Container */}
        <div className="lg:col-span-2 space-y-6 bg-green-400">Left</div>

        {/* Right Container */}
        <div className="lg:col-span-1 space-y-6  bg-green-400">Right</div>
      </div>
    </section>
  );
}
