export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-black text-primary">About CarMarket</h1>
        <p className="text-xl text-gray-500 leading-relaxed">
          We are redefining the luxury automotive experience. Born from a passion for exceptional machines, we connect enthusiasts with the world's finest vehicles through a transparent, seamless, and premium digital platform.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-gray-500 leading-relaxed">
                To eliminate the friction of traditional car buying and selling. We believe that acquiring a masterpiece should be as refined as the vehicle itself. 
                We combine cutting-edge technology with white-glove service to deliver an unparalleled experience.
            </p>
            <ul className="space-y-4">
                <li className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-primary"></span>
                    <span className="font-medium">Transparency in every transaction</span>
                </li>
                 <li className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-primary"></span>
                    <span className="font-medium">Curated selection of premium vehicles</span>
                </li>
                 <li className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-primary"></span>
                    <span className="font-medium">Global delivery network</span>
                </li>
            </ul>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBknYyOAinIfUH72IFDg8HIlU8VfbcGEynbMq6gWCRxFBGsVXkQ2j1yKkTuchDab1PBJ7Yqzrtnx9JujD5DufBgCdVXeGrpaR8acbHnvNb8LniFO5QFBZSOel7HmqE_7NWBxNwjSGyiLtvFDcQ4l57qvQ1DjhphzPknE0FZz1Hp1AIPJ5TA4Vk30NpU8CSf4dD7dS_ZQ-rXkbtXdXG9nV8__dhi6IeEIsouaL2AasbpirgfS1tRUFFe7_RDYtOHhXDsOs3OWnYTg" 
                alt="Showroom" 
                className="w-full h-full object-cover"
            />
        </div>
      </div>
    </div>
  );
}
