import React from 'react';
import { Pencil, MessageCircle } from 'lucide-react';

const Home = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            {/* Hero Section */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    <div className="p-8 lg:p-12 lg:w-3/5 flex flex-col justify-center">
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark-brown mb-6">
                            Where Every Dish Has a Story
                        </h2>
                        <p className="text-lg text-brown mb-8 leading-relaxed">
                            Because some stories are told best through taste. We're thrilled to introduce <strong>Spice & Stories</strong> — a cultural food club that celebrates the world on a plate.
                        </p>
                        <blockquote className="border-l-4 border-spice-orange pl-4 italic text-brown/80 mb-8">
                            "Every culture has a story. Every story has a flavor. And every flavor has a way of bringing us closer."
                        </blockquote>
                        <div className="flex flex-wrap gap-4">
                            <button className="flex items-center gap-2 bg-spice-orange text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium">
                                Sign Up Form <Pencil size={18} />
                            </button>
                            <button className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium">
                                Join WhatsApp <MessageCircle size={18} />
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-2/5 h-64 lg:h-auto relative">
                        <img
                            src="/assets/img/hero_bg.png"
                            alt="Community Cooking"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Chapter One */}
            <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-10 border-l-8 border-spice-orange">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-surface text-spice-orange px-3 py-1 rounded-full text-sm font-bold tracking-wide uppercase">Current Mission</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-dark-brown mb-2">
                    Chapter One: The Gathering of Flavours 🎬 1️⃣ 📖
                </h3>
                <p className="text-brown mb-6">Food • Fun • Stories • Virtual chaos 😄🌶</p>

                <div className="bg-surface border border-spice-orange/20 rounded-xl p-6">
                    <p className="text-brown font-medium">
                        <strong className="text-spice-orange">Your first task:</strong> Introduce yourself using ONLY food emojis 🍕🍜🍔🤣 AND share one food that’s closest to your heart ❤🍲
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
