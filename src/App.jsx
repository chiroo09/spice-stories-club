import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Members from './components/Members';
import Activities from './components/Activities';
import Episodes from './components/Episodes';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'activities': return <Activities />;
      case 'members': return <Members />;
      case 'episodes': return <Episodes />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex min-h-screen bg-cream font-sans text-brown">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Layout>
        {renderContent()}
      </Layout>
    </div>
  );
}

export default App;
