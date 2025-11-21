import React from 'react';
import { Package, Heart, Globe } from 'lucide-react';

const Episodes = () => {
    const episodes = [
        {
            icon: Package,
            title: "Chapter Two: Lunchbox Legends",
            desc: "Sharing the best office lunches and quick recipes to brighten up your workday.",
            color: "text-blue-500"
        },
        {
            icon: Heart,
            title: "Chapter Three: Sweet Nostalgia",
            desc: "Recreating childhood favorite desserts that bring back warm memories.",
            color: "text-red-500"
        },
        {
            icon: Globe,
            title: "Chapter Four: The Spice Route",
            desc: "Exploring a specific spice or ingredient each week and its global journey.",
            color: "text-green-500"
        },
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
                <div className="mb-8">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark-brown mb-4">
                        Upcoming Chapters
                    </h2>
                    <p className="text-lg text-brown/80">
                        Get ready for more culinary adventures!
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {episodes.map((episode, index) => {
                        const Icon = episode.icon;
                        return (
                            <div key={index} className="bg-surface rounded-xl p-8 text-center hover:shadow-md transition-shadow">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <Icon size={32} className={episode.color} />
                                </div>
                                <h4 className="text-xl font-serif font-bold text-dark-brown mb-3">{episode.title}</h4>
                                <p className="text-brown/80">{episode.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Episodes;
