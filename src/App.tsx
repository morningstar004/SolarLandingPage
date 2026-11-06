import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { EcosystemOverview } from './components/EcosystemOverview';
import { VendorWorkflow } from './components/VendorWorkflow';
import { InstallerWorkflow } from './components/InstallerWorkflow';
import { DistributorWorkflow } from './components/DistributorWorkflow';
import { CaseStudies } from './components/CaseStudies';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { LeftDotsNavigator } from './components/LeftDotsNavigator';
import { ToastContainer } from './components/Toast';

import { StakeholderRole, SolarProduct, ToastMessage } from './types';

// Code-split interactive modals to minimize initial bundle size and speed up page load
const DemoModal = React.lazy(() => import('./components/Modals/DemoModal').then((m) => ({ default: m.DemoModal })));
const RfqModal = React.lazy(() => import('./components/Modals/RfqModal').then((m) => ({ default: m.RfqModal })));
const AuthModal = React.lazy(() => import('./components/Modals/AuthModal').then((m) => ({ default: m.AuthModal })));

export function App() {
  const [toasts, setToasts] = useState<ToastMessage[]>([
    {
      id: 'init-1',
      title: 'Helios Grid India v2.6 Active',
      message: '14.2 GW connected across Mundra, JNPT & 54 Indian State DISCOMs.',
      type: 'info'
    }
  ]);

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const [selectedProductForRfq, setSelectedProductForRfq] = useState<SolarProduct | null>(null);
  const [activeRoleForDemo, setActiveRoleForDemo] = useState<StakeholderRole>('vendor');
  const [selectedAudienceRole, setSelectedAudienceRole] = useState<StakeholderRole>('vendor');

  // Interactive Indian authenticated persona
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    role: StakeholderRole;
    company: string;
  } | null>({
    name: 'Rajeshwar Hegde',
    role: 'vendor',
    company: 'Deccan Solar (Bengaluru)'
  });

  const addToast = (title: string, message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenDemo = (role?: StakeholderRole) => {
    if (role) setActiveRoleForDemo(role);
    setIsDemoModalOpen(true);
  };

  const handleOpenRfq = (product?: SolarProduct) => {
    setSelectedProductForRfq(product || null);
    setIsRfqModalOpen(true);
  };

  const handleSelectRoleFromEcosystem = (role: StakeholderRole) => {
    setSelectedAudienceRole(role);
    addToast('Ecosystem Filter Applied', `Showing dedicated capabilities for ${role.toUpperCase()}`);
  };

  const sectionNavigationList = [
    { id: 'hero', label: 'Overview', number: '01' },
    { id: 'ecosystem', label: 'Ecosystem', number: '02' },
    { id: 'vendor-workflow', label: 'Vendor Hub', number: '03' },
    { id: 'installer-workflow', label: 'Installer Crew', number: '04' },
    { id: 'distributor-workflow', label: 'Distributor Desk', number: '05' },
    { id: 'case-studies', label: 'Case Studies', number: '06' },
    { id: 'cta', label: 'Instant Access', number: '07' },
  ];

  return (
    <div className="min-h-screen bg-forest-900 text-warm-white selection:bg-lime selection:text-forest-950 font-sans relative">
      
      {/* 01. Navigation Header */}
      <Navbar
        onOpenDemo={handleOpenDemo}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        currentUser={currentUser}
        onLogout={() => {
          setCurrentUser(null);
          addToast('Signed Out', 'Switched to guest view.', 'info');
        }}
      />

      {/* Minimal Left Dots Navigation */}
      <LeftDotsNavigator sectionIds={sectionNavigationList} />

      <main>
        {/* 02. Hero Section */}
        <Hero
          onOpenDemo={handleOpenDemo}
          onOpenRfq={handleOpenRfq}
          onSuccessToast={addToast}
        />

        {/* 03. Regulatory Trust Strip */}
        <TrustTicker />

        {/* 04. Ecosystem Overview */}
        <EcosystemOverview
          onSelectRole={handleSelectRoleFromEcosystem}
        />

        {/* 05. Dedicated Vendor Workflow */}
        <VendorWorkflow
          selectedRole={selectedAudienceRole}
          onRoleChange={setSelectedAudienceRole}
          onOpenDemo={handleOpenDemo}
          onSuccessToast={addToast}
        />

        {/* 06. Installer & Field Crew Workflow */}
        <InstallerWorkflow
          onOpenRfq={handleOpenRfq}
          onOpenDemo={() => handleOpenDemo()}
          onSuccessToast={addToast}
        />

        {/* 07. Distributor Wholesale Trading & Logistics */}
        <DistributorWorkflow
          onSuccessToast={addToast}
          onOpenDemo={handleOpenDemo}
          onOpenRfq={handleOpenRfq}
        />

        {/* 08. Verified Case Studies & Institutional Badges */}
        <CaseStudies
          onOpenDemo={() => handleOpenDemo()}
          onSuccessToast={addToast}
        />

        {/* 09. Final Call to Action */}
        <FinalCTA
          onSuccessToast={addToast}
          onOpenDemo={handleOpenDemo}
        />
      </main>

      {/* 10. Deep Footer */}
      <Footer
        onSelectRole={setSelectedAudienceRole}
        onOpenDemo={handleOpenDemo}
        onSuccessToast={addToast}
      />

      {/* Lazy-loaded Interactive Modals */}
      {isDemoModalOpen && (
        <React.Suspense fallback={null}>
          <DemoModal
            isOpen={isDemoModalOpen}
            onClose={() => setIsDemoModalOpen(false)}
            defaultRole={activeRoleForDemo}
            onSuccessToast={addToast}
          />
        </React.Suspense>
      )}

      {isRfqModalOpen && (
        <React.Suspense fallback={null}>
          <RfqModal
            isOpen={isRfqModalOpen}
            onClose={() => setIsRfqModalOpen(false)}
            initialProduct={selectedProductForRfq}
            onSuccessToast={addToast}
          />
        </React.Suspense>
      )}

      {isAuthModalOpen && (
        <React.Suspense fallback={null}>
          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
            onSuccessToast={addToast}
            currentUser={currentUser}
            onSelectUser={(u) => setCurrentUser(u)}
          />
        </React.Suspense>
      )}

      {/* Toast Alert Feedback */}
      <ToastContainer
        toasts={toasts}
        onDismiss={handleDismissToast}
      />

    </div>
  );
}

export default App;
