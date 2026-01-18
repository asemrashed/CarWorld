import { MdStar } from "react-icons/md";

export default function Reviews() {
  const reviews = [
    {
      text: "\"The easiest car buying experience I've ever had. No paperwork hassle and the car looks better than the photos. Highly recommended!\"",
      name: "Marcus T.",
      sub: "Bought Tesla Model 3",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ5shqKR4rkFlnqFG1Nb-syFNi1nianNSzA9lZNdJlVOFTax27UmXcEuyMV86Lp_JhkVkOQ5y52TzMMdRlrgeP_6spzGSe7OsFykhtkr5oaSMAcTspOdPyGKkqy3hb7P3hKAW1vxeeDg7js4l3sCrkv2IkFcEzCDweoyIYuKCjoliJmsXXG3dbZJRLNpWZ6kfhU1Y8vl6y9drT0M1ujiuka_wiA_nNPSGARLlLcH18YAcXlpjc6RGPds8cHZ1UrTXXJRPnddmd1A"
    },
    {
      text: "\"I was skeptical about selling online but they gave me a higher offer than my local dealership! The payment was instant.\"",
      name: "Sarah J.",
      sub: "Sold Audi Q7",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwjyd8-6vCshgXyCyL0ZeXBlUNUzwGNNZ_s1211bdkRFFEva7_XdbV6pvgCW2dXGf1j7ou8jl26h20FDP2rgzlZg7WgeCUl6hSCvSA8JseqTCuluoi9FesIq4SgKAeXj_VImRXXcTjiDPynVYQ8F3clYvkI3wFs47f3z619TDDwlq-Ej0NdYCjTq36zAyhmzIwxXlfp5I2CTY8YtCdc19BnPAkJIVTBR4kVKp1uzOwShgec8kF7MtlRihPXXOJjGqIOOYka1TsDw"
    },
    {
      text: "\"Their premium selection is unmatched. Found a rare spec 911 that I couldn't find anywhere else. White-glove service.\"",
      name: "David R.",
      sub: "Bought Porsche GT3",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc__bXTAJ5q9XHb5GL-8o1NxWSOI-2cXhnxYldms4OEDSBQYIXFFB8rKn-hN4dMiLV9M6_zWVSsW3mCTduy5pgi-Zmsbk8-dAE-R4xpy4Hj8IdCFUXJHj9_mRfXZl6QCfaBMcpXJfpKoLjX1zsTQ3LraqQUyLOLDC9fvILAhYRniIUisNZXjuFXWcKzdcLGCBR6bc4Ko4VgZqs12NPJjaXMJVvI_vYELkZChqaIpOl2DChVVh2WFxo4iB6RgL9lZgz4UAEt7AH6Q"
    }
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-black">Trusted by Enthusiasts</h2>
        <div className="flex items-center gap-2 text-primary font-bold">
          <MdStar className="fill-1" />
          <span>4.9/5 Average Rating</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-base-200 p-8 rounded-3xl border border-base-300 relative">
            <div className="flex gap-1 mb-6 text-primary">
              {[...Array(5)].map((_, i) => <MdStar key={i} size={18} />)}
            </div>
            <p className="text-gray-400 text-lg italic leading-relaxed mb-8">{review.text}</p>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-base-300 overflow-hidden border-2 border-primary relative">
                <img alt={review.name} className="w-full h-full object-cover" src={review.img} />
              </div>
              <div>
                 <p className="font-bold">{review.name}</p>
                 <p className="text-xs text-gray-500 font-medium">{review.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
