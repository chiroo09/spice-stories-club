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

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-spice-orange/20 hidden md:block rounded-full"></div>

                    <div className="space-y-12">
                        {activities.map((item, index) => {
                            const Icon = item.icon;
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Content */}
                                    <div className="flex-1 w-full md:w-1/2">
                                        <div className={`bg-surface border border-spice-orange/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group relative ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                            {/* Connector Dot */}
                                            <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-spice-orange rounded-full border-4 border-white shadow-sm z-10 ${isEven ? '-left-[calc(2rem+6px)]' : '-right-[calc(2rem+6px)]'}`}></div>

                                            <h4 className="text-xl font-serif font-bold text-dark-brown mb-2 group-hover:text-spice-orange transition-colors">{item.title}</h4>
                                            <p className="text-brown/80">{item.desc}</p>
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md border-4 border-surface text-spice-orange transform transition-transform group-hover:scale-110 duration-300">
                                            <Icon size={28} />
                                        </div>
                                    </div>

                                    {/* Empty Space for alignment */}
                                    <div className="flex-1 hidden md:block"></div>
                                </div>
                            );
                        })}
                    </div>
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
