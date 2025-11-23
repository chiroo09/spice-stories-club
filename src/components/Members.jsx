import React from 'react';

const Members = () => {
    const members = [
        { emojis: "🥗🍛🍫🍠", title: "The Healthy Sweetheart", heartFood: "Moong Dal Halwa ✨🍲💛" },
        { emojis: "🍗🔥", title: "The Biryani Believers (×2)", heartFood: "Chicken Biryani 👑🔥🍛", note: "Spice level = rising rapidly 🌶😄🔥" },
        { emojis: "☕🫖🤎😋", title: "The Caffeine Connoisseur", heartFood: "A comforting hot drink ☕💛" },
        { emojis: "🍗🥘🔥", title: "The Gravy Guardian", heartFood: "Flavorful Chicken Gravy 🍗🔥✨" },
        { emojis: "🍦", title: "The Cool & Sweet Vibes", heartFood: "Ice Cream 🍦💛✨" },
        { emojis: "🥟🍜🥡", title: "The Mountain-Side Foodie", heartFood: "Momos + Noodles 🥟🍜🏔💛" },
        { emojis: "🍕🍟🌮🧁🍩🍪🥟🫓🥪", title: "The Multi-Flavour Queen", heartFood: "Jowar Rotti 🫓💪✨" },
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
                <div className="mb-8 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark-brown mb-4">
                        The Feast So Far
                    </h2>
                    <p className="text-lg text-brown/80">
                        Look at the flavours we’ve gathered already! Our Spice & Stories home is turning into a FULL FEAST 🍽🔥
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="group relative bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-rotate-1 hover:-translate-y-2"
                        >
                            {/* Card Decoration */}
                            <div className="absolute inset-0 border-2 border-dashed border-brown/20 rounded-xl m-2 pointer-events-none group-hover:border-spice-orange/40 transition-colors"></div>

                            {/* Pin Effect */}
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-spice-orange rounded-full shadow-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="text-4xl mb-6 text-center filter drop-shadow-sm">{member.emojis}</div>
                            <h4 className="text-xl font-serif font-bold text-dark-brown mb-3 text-center border-b-2 border-spice-orange/10 pb-2">{member.title}</h4>
                            <div className="space-y-2 text-center">
                                <p className="text-brown">
                                    <span className="font-bold text-spice-orange text-sm uppercase tracking-wider block mb-1">Heart Food</span>
                                    {member.heartFood}
                                </p>
                                {member.note && (
                                    <p className="text-sm text-brown/60 italic mt-3 bg-surface p-2 rounded-lg inline-block">
                                        "{member.note}"
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Members;
