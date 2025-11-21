import React from 'react';
import { Globe, Utensils, Mic, Languages, Puzzle, Ticket, Camera } from 'lucide-react';

const Activities = () => {
    const activities = [
        {
            icon: Globe,
            title: "Cultural Food Tasting",
            desc: "Explore cuisines from around the world."
        },
        {
            icon: Utensils,
            title: "Themed Potluck Sessions",
            desc: "Bring and share your favorite home dishes."
        },
        {
            icon: Mic,
            title: "Mini Storytelling Moments",
            desc: "The story behind your dish or tradition."
        },
        {
            icon: Languages,
            title: "Language Learning",
            desc: "Learn 2–3 words from that culture (like 'Hello' or 'Thank You')."
        },
        {
            icon: Puzzle,
            title: "Food Quizzes & Games",
            desc: "Light, interactive fun and guessing games."
        },
        {
            icon: Ticket,
            title: "Food Passport",
            desc: "Earn a stamp or sticker for every culture you try."
        },
        {
            icon: Camera,
            title: "Photo Corner & Memory Wall",
            desc: "Celebrate the moments we create together."
        }
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
                <div className="mb-10 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark-brown mb-4">
                        Stories We Cook, Games We Play
                    </h2>
                    <p className="text-lg text-brown/80">
                        What’s on our table of tales — laughter, learning, and a lot of flavor.
                        Our sessions will blend fun, flavor, and friendship through these activities:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activities.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="bg-surface border border-spice-orange/10 rounded-xl p-6 hover:shadow-md transition-all duration-300 group">
                                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-spice-orange group-hover:scale-110 transition-transform">
                                    <Icon size={24} />
                                </div>
                                <h4 className="text-xl font-serif font-bold text-dark-brown mb-2">{item.title}</h4>
                                <p className="text-brown/80">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 bg-cream rounded-xl p-8 text-center border border-brown/10">
                    <p className="text-xl font-serif italic text-brown">
                        "Each gathering will be a little feast of connection — a table full of laughter, learning, and warmth."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Activities;
