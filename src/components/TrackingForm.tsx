'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface TrackingFormProps {
  trackingNumber: string;
  onTrackingNumberChange: (value: string) => void;
  onSubmit: () => void;
  onReset: () => void;
  loading: boolean;
}

export function TrackingForm({
  trackingNumber,
  onTrackingNumberChange,
  onSubmit,
  onReset,
  loading
}: TrackingFormProps) {
  const [touched, setTouched] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (trackingNumber.trim()) {
      onSubmit();
    }
  };

  const handleReset = () => {
    setTouched(false);
    onReset();
  };

  const isValid = trackingNumber.trim().length >= 6;
  const showError = touched && !isValid;

  const exampleTrackingNumbers = [
    { label: 'DTDC', value: 'D1234567890' },
    { label: 'Blue Dart', value: 'BD12345678' },
    { label: 'Ecom Express', value: 'E123456789' },
    { label: 'Delhivery', value: 'DL123456789' },
    { label: 'Aramex', value: 'AR1234567' },
    { label: 'India Post', value: 'RR123456789IN' }
  ];

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Enter tracking number (min. 6 characters)"
              value={trackingNumber}
              onChange={(e) => onTrackingNumberChange(e.target.value)}
              className={`text-lg h-12 ${showError ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              disabled={loading}
            />
            {showError && (
              <p className="text-sm text-red-600 mt-1">
                Please enter a valid tracking number (minimum 6 characters)
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              type="submit"
              disabled={loading || !trackingNumber.trim()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12 px-8"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Tracking...</span>
                </div>
              ) : (
                'Track Package'
              )}
            </Button>
            {trackingNumber && (
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                disabled={loading}
                className="h-12"
              >
                Clear
              </Button>
            )}
          </div>
        </div>
      </form>

      {/* Example Tracking Numbers */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-700">Try these example tracking numbers:</p>
        <div className="flex flex-wrap gap-2">
          {exampleTrackingNumbers.map((example, index) => (
            <Badge
              key={index}
              variant="outline"
              className="cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => !loading && onTrackingNumberChange(example.value)}
            >
              <span className="font-medium text-blue-600">{example.label}:</span>
              <span className="ml-1 text-gray-700">{example.value}</span>
            </Badge>
          ))}
        </div>
        <p className="text-xs text-gray-500">
          Click on any example above to auto-fill the tracking number
        </p>
      </div>

      {/* Supported Formats */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Supported Tracking Number Formats:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs text-gray-600">
          <div>• DTDC: D + 10 digits</div>
          <div>• Blue Dart: BD + 8 digits</div>
          <div>• Ecom: E + 9 digits</div>
          <div>• Delhivery: DL + 9 digits</div>
          <div>• Aramex: AR + 7 digits</div>
          <div>• India Post: 2L+9D+2L</div>
          <div>• FedEx: 12 digits</div>
          <div>• DHL: 10 digits</div>
          <div>• XpressBees: XB + 8 digits</div>
          <div>• Trackon: TR + 8 digits</div>
          <div>• Professional: PC + 8 digits</div>
          <div>• Amazon: TBA + 9 digits</div>
        </div>
      </div>
    </div>
  );
}