'use client';

import { useState } from 'react';
import { CourierTracker } from '@/components/CourierTracker';
import { CourierGrid } from '@/components/CourierGrid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showTracker, setShowTracker] = useState(false);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setShowTracker(true);
    }
  };

  const handleReset = () => {
    setShowTracker(false);
    setTrackingNumber('');
  };

  if (showTracker) {
    return (
      <CourierTracker 
        initialTrackingNumber={trackingNumber}
        onBack={handleReset}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CT</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Courier Tracker</h1>
                <p className="text-sm text-gray-600">Track all Indian courier services</p>
              </div>
            </div>
            <Badge variant="secondary" className="hidden sm:block">
              15+ Courier Companies
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Track Your Package
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Across All Indian Couriers
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Enter your tracking number below to get real-time updates from DTDC, Blue Dart, 
            Delhivery, and 12+ other major Indian courier companies.
          </p>

          {/* Tracking Form */}
          <Card className="max-w-2xl mx-auto mb-12">
            <CardHeader>
              <CardTitle>Enter Tracking Number</CardTitle>
              <CardDescription>
                We'll automatically detect your courier company and fetch tracking details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTrackSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="text"
                    placeholder="Enter tracking number (e.g., D1234567890, BD12345678)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="flex-1 text-lg h-12"
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Track Package
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="text-sm text-gray-500">Example formats:</span>
                  <Badge 
                    variant="outline" 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => setTrackingNumber('D1234567890')}
                  >
                    DTDC: D1234567890
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => setTrackingNumber('BD12345678')}
                  >
                    Blue Dart: BD12345678
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => setTrackingNumber('E123456789')}
                  >
                    Ecom: E123456789
                  </Badge>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 font-bold text-xl">🚚</div>
                </div>
                <h3 className="font-semibold mb-2">Auto-Detection</h3>
                <p className="text-sm text-gray-600">
                  Automatically identifies courier company from tracking number format
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600 font-bold text-xl">📍</div>
                </div>
                <h3 className="font-semibold mb-2">Real-time Updates</h3>
                <p className="text-sm text-gray-600">
                  Get live tracking information with detailed timeline and location updates
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-purple-600 font-bold text-xl">🔗</div>
                </div>
                <h3 className="font-semibold mb-2">External Links</h3>
                <p className="text-sm text-gray-600">
                  Direct links to official courier websites for additional tracking options
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supported Couriers */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Supported Courier Companies
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We support all major Indian courier and logistics companies. 
              Just enter your tracking number and we'll handle the rest.
            </p>
          </div>
          <CourierGrid />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CT</span>
              </div>
              <span className="text-xl font-bold">Courier Tracker</span>
            </div>
            <p className="text-gray-400 mb-4">
              Track packages from all major Indian courier companies in one place
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>DTDC • Blue Dart • Delhivery • Ecom Express • Ekart</span>
              <span>Aramex • FedEx • DHL • India Post • Professional • Trackon</span>
              <span>Shadowfax • XpressBees • Dotzot • Amazon Logistics</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}