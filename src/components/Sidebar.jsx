import React, { useState } from 'react';
import { Home, Heart, Users, BookOpen, Menu, X, Sparkles } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'about', label: 'Our Story', icon: Heart },
        { id: 'activities', label: 'Activities', icon: Sparkles },
        { id: 'members', label: 'The Feast', icon: Users },
        { id: 'episodes', label: 'Chapters', icon: BookOpen },
    ];

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-spice-orange text-white rounded-full shadow-lg hover:bg-orange-700 transition-colors"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <nav className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-[280px] bg-brown text-cream flex flex-col p-6 shadow-xl
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
                <div className="flex flex-col items-center mb-10">
                    <img
                        src="/assets/img/spice_logo.png"
                        alt="Spice & Stories"
                        className="h-20 mb-4 object-contain"
                    />
                    <h1 className="font-serif text-xl font-bold text-center">Spice & Stories</h1>
                </div>

                <div className="flex flex-col gap-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveTab(item.id);
                                    setIsOpen(false);
                                }}
                                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                  font-serif text-lg
                  ${isActive
                                        ? 'bg-spice-orange text-white translate-x-1 shadow-md'
                                        : 'hover:bg-white/10 text-cream/80 hover:text-white'
                                    }
                `}
                            >
                                <Icon size={20} />
                                {item.label}
                            </button>
                        );
                    })}
                </div>
            </nav>
        </>
    );
};

export default Sidebar;
