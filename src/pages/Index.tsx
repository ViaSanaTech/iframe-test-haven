
import React, { useState, useEffect } from 'react';
import LoadingIndicator from '@/components/LoadingIndicator';
import ContentBox from '@/components/ContentBox';
import InteractiveDemo from '@/components/InteractiveDemo';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [frameInfo, setFrameInfo] = useState({
    width: 0,
    height: 0,
    isEmbedded: false,
  });

  useEffect(() => {
    // Simulate loading delay for visual effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Check if running in an iframe
    const isEmbedded = window.self !== window.top;

    // Get iframe dimensions
    const updateFrameInfo = () => {
      setFrameInfo({
        width: window.innerWidth,
        height: window.innerHeight,
        isEmbedded,
      });
    };

    updateFrameInfo();
    window.addEventListener('resize', updateFrameInfo);

    // Log info for debugging
    console.log('Environment:', isEmbedded ? 'Embedded in iframe' : 'Standalone');

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateFrameInfo);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <LoadingIndicator size="lg" />
        <p className="mt-4 text-muted-foreground animate-pulse-subtle">Loading interface...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-3xl animate-fade-in">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2 animate-slide-down">
            Webflow Iframe Integration
          </p>
          <h1 className="text-4xl font-bold mb-3 text-gradient">
            Iframe Test App
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            This minimal app is designed for testing iframe embedding in Webflow.
            All interactive elements should work seamlessly inside your Webflow site.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ContentBox delay={0.1}>
            <h2 className="text-xl font-semibold mb-3">Integration Status</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Display Mode</span>
                <span className="font-medium">{frameInfo.isEmbedded ? 'Embedded' : 'Standalone'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Viewport Width</span>
                <span className="font-medium">{frameInfo.width}px</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Viewport Height</span>
                <span className="font-medium">{frameInfo.height}px</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Working
                </span>
              </div>
            </div>
          </ContentBox>

          <ContentBox delay={0.2}>
            <InteractiveDemo />
          </ContentBox>
        </div>

        <div className="mt-6">
          <ContentBox delay={0.3} className="text-center">
            <h2 className="text-xl font-semibold mb-3">Integration Instructions</h2>
            <div className="text-sm text-muted-foreground text-left">
              <p className="mb-2">1. Deploy this app to GitHub Pages.</p>
              <p className="mb-2">2. In Webflow, add an embed element to your page.</p>
              <p className="mb-2">3. Set the embed source to this iframe URL.</p>
              <p className="mb-2">4. Configure the iframe attributes in Webflow's settings panel.</p>
              <p>5. Publish your Webflow site and test the integration.</p>
            </div>
          </ContentBox>
        </div>

        <footer className="mt-12 text-center text-xs text-muted-foreground">
          <p>Created with precision for iframe testing</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
