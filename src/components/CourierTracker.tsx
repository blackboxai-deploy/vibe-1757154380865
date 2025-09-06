'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { TrackingForm } from '@/components/TrackingForm';
import { TrackingResults } from '@/components/TrackingResults';
import { TrackingResult, TrackingStatus } from '@/types/tracking';
import { trackPackage } from '@/lib/tracking';

interface CourierTrackerProps {
  initialTrackingNumber?: string;
  onBack?: () => void;
}

export function CourierTracker({ initialTrackingNumber = '', onBack }: CourierTrackerProps) {
  const [trackingNumber, setTrackingNumber] = useState(initialTrackingNumber);
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null);
  const [status, setStatus] = useState<TrackingStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  useEffect(() => {
    if (initialTrackingNumber) {
      handleTrack(initialTrackingNumber);
    }
  }, [initialTrackingNumber]);

  const handleTrack = async (trackingNum: string) => {
    if (!trackingNum.trim()) {
      setError('Please enter a valid tracking number');
      return;
    }

    setStatus('loading');
    setError(null);
    setTrackingResult(null);
    setRedirectUrl(null);

    try {
      const result = await trackPackage(trackingNum);
      
      if (result.success && result.data) {
        setTrackingResult(result.data);
        setRedirectUrl(result.redirectUrl || null);
        setStatus('success');
      } else {
        setError(result.error || 'Unable to track package');
        setStatus('error');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      setStatus('error');
      console.error('Tracking error:', err);
    }
  };

  const handleReset = () => {
    setTrackingNumber('');
    setTrackingResult(null);
    setStatus('idle');
    setError(null);
    setRedirectUrl(null);
  };

  const handleExternalRedirect = () => {
    if (redirectUrl) {
      window.open(redirectUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                onClick={onBack}
                className="text-gray-600 hover:text-gray-900"
              >
                ← Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Package Tracking</h1>
                <p className="text-sm text-gray-600">Real-time courier tracking</p>
              </div>
            </div>
            {trackingResult && (
              <Badge 
                variant="secondary" 
                className={`${
                  trackingResult.status === 'delivered' ? 'bg-green-100 text-green-800' :
                  trackingResult.status === 'in-transit' ? 'bg-blue-100 text-blue-800' :
                  trackingResult.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}
              >
                {trackingResult.status.toUpperCase()}
              </Badge>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Tracking Form */}
          <Card>
            <CardHeader>
              <CardTitle>Track Your Package</CardTitle>
            </CardHeader>
            <CardContent>
              <TrackingForm
                trackingNumber={trackingNumber}
                onTrackingNumberChange={setTrackingNumber}
                onSubmit={() => handleTrack(trackingNumber)}
                onReset={handleReset}
                loading={status === 'loading'}
              />
            </CardContent>
          </Card>

          {/* Loading State */}
          {status === 'loading' && (
            <Card>
              <CardContent className="py-12">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  <p className="text-lg font-medium">Tracking your package...</p>
                  <p className="text-sm text-gray-600">
                    Fetching real-time information from courier servers
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Error State */}
          {status === 'error' && error && (
            <Card className="border-red-200 bg-red-50">
              <CardContent className="py-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-red-600 text-2xl">⚠️</div>
                  </div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">
                    Tracking Failed
                  </h3>
                  <p className="text-red-700 mb-4">{error}</p>
                  <Button 
                    onClick={() => handleTrack(trackingNumber)}
                    variant="outline"
                    className="border-red-300 text-red-700 hover:bg-red-100"
                  >
                    Try Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Success State - Tracking Results */}
          {status === 'success' && trackingResult && (
            <div className="space-y-6">
              {/* External Link Option */}
              {redirectUrl && (
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-blue-900">
                          View on {trackingResult.courierCompany.name}
                        </p>
                        <p className="text-sm text-blue-700">
                          Get additional tracking details on the official website
                        </p>
                      </div>
                      <Button 
                        onClick={handleExternalRedirect}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Open Official Site →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Tracking Results */}
              <TrackingResults result={trackingResult} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}