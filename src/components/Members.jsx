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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {members.map((member, index) => (
                        <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="text-4xl mb-4 tracking-widest">{member.emojis}</div>
                            <h4 className="text-xl font-serif font-bold text-dark-brown mb-2">{member.title}</h4>
                            <p className="text-brown">
                                <strong className="text-spice-orange">Heart-food:</strong> {member.heartFood}
                            </p>
                            {member.note && (
                                <p className="text-sm text-brown/60 mt-2 italic">{member.note}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Members;
