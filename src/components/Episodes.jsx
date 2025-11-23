import React, { useState } from 'react';
import { Play, Star, AlertTriangle, Film, Eye, EyeOff } from 'lucide-react';

const Episodes = () => {
    const episodes = [
        {
            id: 1,
            title: "The Gathering of Flavours",
            tagline: "The Pilot Episode",
            desc: "The Spiceverse opens. Strangers drop their food emojis, heart-foods, and identities. The table is set… but the stories are only starting.",
            twist: "Two unexpected dishes clash, sparking the first playful food war."
        },
        {
            id: 2,
            title: "The Memory Bowl",
            tagline: "Nostalgia Served Hot",
            desc: "Every dish carries a story — and tonight, everyone reveals one. Childhood kitchens, mom’s recipes, festival smells, hostel food tears… Suddenly, it’s not a group anymore. It’s a shared past.",
            twist: "Someone reveals a memory that leaves the whole group silent."
        },
        {
            id: 3,
            title: "Letters From Home",
            tagline: "Emotional Rollercoaster",
            desc: "“If my home could hear me right now…” Members write emotional mini-letters to the places and people they miss. This becomes the most heart-touching chapter of the season.",
            twist: "A letter so emotional that even the funniest member goes quiet."
        },
        {
            id: 4,
            title: "The Taste I Miss Most",
            tagline: "Cravings & Longing",
            desc: "Everyone reveals the ONE dish they crave the most — the plate that has the power to bring back whole years, whole people.",
            twist: "Two members realize they miss the SAME dish from two different cities."
        },
        {
            id: 5,
            title: "Struggle Meal Stories",
            tagline: "Comedy Special",
            desc: "Time to laugh. Everyone brings their “broke/hostel/survival” meals to the screen. Chai-and-biscuits warriors… Maggie legends… Bread-jam survivors.",
            twist: "One shocking struggle meal becomes the new club meme."
        },
        {
            id: 6,
            title: "The Kitchen of Dreams",
            tagline: "Wanderlust",
            desc: "Every foodie has a dream location: Japan’s ramen alleys, Italy’s pasta streets, Kashmir’s kahwa mornings… This episode opens the travel side of the Spiceverse.",
            twist: "Two members share the SAME dream location — and plan to go someday."
        },
        {
            id: 7,
            title: "The Flavour That Made Me Laugh",
            tagline: "Chaos & Fun",
            desc: "From kitchen disasters to spicy fails to childhood mischief… This is the most chaotic, laugh-out-loud episode of the season.",
            twist: "One story becomes the official “inside joke” of Spice & Stories."
        },
        {
            id: 8,
            title: "The Culture Swap Plate",
            tagline: "Diversity Special",
            desc: "The most colorful chapter. Members pick ONE dish from another teammate’s culture/state that they want to try. A celebration of diversity, curiosity & respect.",
            twist: "Someone chooses a dish from a team member’s hometown they’ve never even spoken to — instant bonding!"
        },
        {
            id: 9,
            title: "The Grand Table (Potluck Special)",
            tagline: "The Gathering",
            desc: "Virtual or physical — everyone gathers at one table. The episode where the Spiceverse becomes real. Dishes, stories, bonding.",
            twist: "A surprise dish wins “The Favourite of the Table.”"
        },
        {
            id: 10,
            title: "The Last Stamp",
            tagline: "Season Finale",
            desc: "The finale. Each member shares 1 photo (themselves + their dish) and a 10–20 sec video story. This becomes their Final Passport Stamp and Final Journey Book page.",
            twist: "A hidden montage of all Season 1 memories gets revealed — closing the season with goosebumps."
        }
    ];

    const [revealedTwists, setRevealedTwists] = useState({});

    const toggleTwist = (id) => {
        setRevealedTwists(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="space-y-8 animate-fade-in pb-12">
            {/* Cinematic Header */}
            <div className="relative bg-dark-brown rounded-2xl shadow-2xl overflow-hidden text-cream p-8 lg:p-16 text-center border-4 border-double border-spice-orange/30">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                        <Film size={48} className="text-spice-orange animate-pulse" />
                    </div>
                    <h5 className="text-spice-orange font-bold tracking-[0.3em] uppercase mb-2 text-sm">Spice & Stories Presents</h5>
                    <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-surface via-white to-surface drop-shadow-lg">
                        THE FLAVOUR CHRONICLES
                    </h1>
                    <div className="flex flex-wrap justify-center gap-4 text-sm lg:text-base font-medium text-white/80 uppercase tracking-widest">
                        <span>Season 1</span> • <span>10 Episodes</span> • <span>Drama</span> • <span>Comedy</span> • <span>Foodverse</span>
                    </div>
                </div>
            </div>

            {/* Episode List */}
            <div className="space-y-6">
                {episodes.map((episode) => (
                    <div key={episode.id} className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 border-l-4 border-dark-brown hover:border-spice-orange">
                        <div className="flex flex-col md:flex-row">
                            {/* Episode Number & Visual */}
                            <div className="bg-dark-brown text-spice-orange p-6 md:w-32 flex flex-col items-center justify-center border-r border-white/10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/20"></div>
                                <span className="text-xs font-bold uppercase tracking-widest relative z-10">Episode</span>
                                <span className="text-5xl font-serif font-bold relative z-10">{episode.id}</span>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold text-dark-brown group-hover:text-spice-orange transition-colors">
                                            {episode.title}
                                        </h3>
                                        <span className="text-sm font-bold text-spice-orange uppercase tracking-wide">
                                            {episode.tagline}
                                        </span>
                                    </div>
                                    <button className="flex items-center gap-2 bg-brown text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-spice-orange transition-colors shadow-md">
                                        <Play size={16} fill="currentColor" /> Watch Trailer
                                    </button>
                                </div>

                                <p className="text-brown/90 leading-relaxed mb-6 text-lg">
                                    {episode.desc}
                                </p>

                                {/* The Twist Section - Mystery Element */}
                                <div
                                    className={`relative p-4 rounded-lg transition-all duration-500 cursor-pointer border border-dashed ${revealedTwists[episode.id] ? 'bg-spice-orange/10 border-spice-orange' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                                    onClick={() => toggleTwist(episode.id)}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <AlertTriangle size={18} className={revealedTwists[episode.id] ? 'text-spice-orange' : 'text-gray-500'} />
                                        <span className={`font-bold uppercase text-xs tracking-widest ${revealedTwists[episode.id] ? 'text-spice-orange' : 'text-gray-500'}`}>
                                            {revealedTwists[episode.id] ? 'Plot Twist Revealed' : 'Tap to Reveal Twist'}
                                        </span>
                                    </div>

                                    <div className="relative overflow-hidden">
                                        <p className={`text-dark-brown font-medium italic transition-all duration-700 ${revealedTwists[episode.id] ? 'blur-0 translate-y-0 opacity-100' : 'blur-sm translate-y-2 opacity-60'}`}>
                                            "{episode.twist}"
                                        </p>
                                        {!revealedTwists[episode.id] && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <EyeOff size={24} className="text-gray-400" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Season Finale Message */}
            <div className="bg-gradient-to-r from-dark-brown to-brown rounded-xl p-8 text-center text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-spice-orange to-transparent"></div>
                <Star size={32} className="text-spice-orange mx-auto mb-4 animate-spin-slow" fill="currentColor" />
                <h2 className="text-2xl font-serif font-bold mb-4">Season 1 Finale Message</h2>
                <blockquote className="text-xl italic font-serif text-white/90 max-w-2xl mx-auto leading-relaxed">
                    “This isn’t the end. It’s just the first chapter of the Flavour Chronicles. Season 2 is already simmering…”
                </blockquote>
            </div>
        </div>
    );
};

export default Episodes;
