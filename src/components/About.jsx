import React from 'react';
import { Check, Heart, Globe, Mic } from 'lucide-react';

const About = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            {/* Heart of Spice Section */}
            <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark-brown">
                            The Heart of Spice & Stories
                        </h2>
                        <p className="text-lg text-brown/80 italic">
                            Where every flavor has a soul and every dish begins a conversation.
                        </p>
                        <p className="text-brown leading-relaxed">
                            At Spice & Stories, we celebrate the beautiful diversity within our workplace by sharing food, culture, and stories.
                            Each session is a journey — from homemade recipes and family traditions to discovering cuisines from around the world.
                        </p>
                        <p className="text-brown leading-relaxed">
                            It’s not just about eating; it’s about experiencing the world on a plate and connecting through the memories that come with every bite.
                            Here, colleagues become friends, and every shared meal becomes a shared memory.
                        </p>
                    </div>
                    <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-md">
                        <img
                            src="/assets/img/about_img.png"
                            alt="Cooking Together"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Secret Spice Section */}
                <div className="bg-surface rounded-xl p-8 lg:p-10 mb-12 border-l-4 border-spice-orange">
                    <h3 className="text-2xl font-serif font-bold text-dark-brown mb-4">
                        The Secret Spice of Togetherness 🌸
                    </h3>
                    <p className="text-brown mb-4">
                        The true magic of Spice & Stories isn’t in the recipes — it’s in the people who bring them.
                        As we sit together, tasting and listening, we find that though our spices differ, our hearts often tell the same story.
                    </p>
                    <p className="text-brown font-medium">
                        In those small moments — passing a bowl, sharing a laugh, or tasting something new — we rediscover what togetherness truly means. 💞
                    </p>
                </div>

                {/* Journey Beyond Section */}
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-2xl font-serif font-bold text-dark-brown mb-4">
                        The Journey Beyond the Last Bite 🌾
                    </h3>
                    <p className="text-brown mb-6">
                        Our goal is to build an inclusive, heartwarming space that celebrates diversity and togetherness.
                        Over time, we aim to create a <strong>“Global Recipe Book”</strong> — a collection of dishes, stories, and traditions contributed by our members.
                    </p>
                    <p className="text-brown italic">
                        Through Spice & Stories, we hope to serve connection, celebrate differences, and sprinkle a little joy across every department. 🌍❤
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
