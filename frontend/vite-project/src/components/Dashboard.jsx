import React from 'react'

function Dashboard() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#f5f5f5] py-5">
        <div className="px-16">
          <div className="flex items-center justify-around ">
            {/* Left Content */}
            <div className="w-[55%]">
              <h1 className="text-[#2E3690] text-5xl md:text-7xl font-light mb-10">
                What We Do
              </h1>

              <div className="space-y-8 text-[#2E3690] text-[18px] leading-10">
                <p>
                  As{" "}
                  <span className="font-semibold">
                    India’s Leading Telecom & Digital Infrastructure Trust
                  </span>
                  , Altius provides the foundation for India’s growing digital
                  connectivity.
                </p>

                <p>
                  At Altius, we unlock the transformative power of connectivity.
                  As one of the largest telecom infrastructure platforms in the
                  world, Altius is dedicated to developing and managing the
                  highest quality telecom infrastructure.
                </p>

                <p>
                  With data traffic surging, there’s a growing need for agile,
                  cost-efficient, and environmentally friendly solutions to meet
                  coverage demands across rural, semi-urban, and urban areas.
                  Altius delivers comprehensive solutions for Mobile, Fixed, and
                  Internet Service Providers.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-[40%] flex">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
                alt="network tower"
                className="w-full max-w-md rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard

