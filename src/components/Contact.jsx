import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
                <div className="mb-8">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark-brown mb-4">
                        Contact Us
                    </h2>
                    <p className="text-lg text-brown/80">
                        We'd love to hear from you!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-surface p-3 rounded-lg text-spice-orange">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif font-bold text-dark-brown mb-1">Address</h4>
                                <p className="text-brown/80">123 Culinary Avenue, Food City, FC 90210</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-surface p-3 rounded-lg text-spice-orange">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif font-bold text-dark-brown mb-1">Call Us</h4>
                                <p className="text-brown/80">9629446647</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-surface p-3 rounded-lg text-spice-orange">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif font-bold text-dark-brown mb-1">Email Us</h4>
                                <p className="text-brown/80">tejesh.gurisala@wissen.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-spice-orange focus:ring-1 focus:ring-spice-orange outline-none transition-all"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-spice-orange focus:ring-1 focus:ring-spice-orange outline-none transition-all"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-spice-orange focus:ring-1 focus:ring-spice-orange outline-none transition-all"
                        />
                        <textarea
                            rows="5"
                            placeholder="Message"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-spice-orange focus:ring-1 focus:ring-spice-orange outline-none transition-all resize-none"
                        ></textarea>

                        <button className="w-full bg-spice-orange text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
