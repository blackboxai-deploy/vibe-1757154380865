'use client';

import { TrackingResult } from '@/types/tracking';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { TrackingHistory } from '@/components/TrackingHistory';
import { formatDateTime, getEstimatedDeliveryMessage, getTrackingStatusColor } from '@/lib/tracking';

interface TrackingResultsProps {
  result: TrackingResult;
}

export function TrackingResults({ result }: TrackingResultsProps) {
  const statusColorClass = getTrackingStatusColor(result.status);
  const deliveryMessage = getEstimatedDeliveryMessage(result.estimatedDelivery);

  return (
    <div className="space-y-6">
      {/* Package Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="flex items-center gap-3">
                <img 
                  src={result.courierCompany.logo} 
                  alt={`${result.courierCompany.name} logo`}
                  className="w-16 h-8 object-contain"
                />
                {result.courierCompany.name}
              </CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Tracking Number: <span className="font-mono font-medium">{result.trackingNumber}</span>
              </p>
            </div>
            <Badge className={statusColorClass}>
              {result.status.toUpperCase()}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Status Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-1">Current Status</h4>
              <p className="text-lg font-semibold text-gray-900">{result.status.replace('-', ' ').toUpperCase()}</p>
              {result.currentLocation && (
                <p className="text-sm text-gray-600 mt-1">📍 {result.currentLocation}</p>
              )}
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-1">Estimated Delivery</h4>
              <p className="text-lg font-semibold text-gray-900">{deliveryMessage}</p>
              {result.estimatedDelivery && (
                <p className="text-sm text-gray-600 mt-1">
                  {formatDateTime(result.estimatedDelivery)}
                </p>
              )}
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-1">Last Updated</h4>
              <p className="text-lg font-semibold text-gray-900">
                {formatDateTime(result.lastUpdated)}
              </p>
            </div>
          </div>

          {/* Package Information */}
          {result.packageInfo && (
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-blue-900 mb-2">Package Details</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                {result.packageInfo.type && (
                  <div>
                    <span className="text-blue-700 font-medium">Type:</span>
                    <span className="ml-2 text-blue-900">{result.packageInfo.type}</span>
                  </div>
                )}
                {result.packageInfo.weight && (
                  <div>
                    <span className="text-blue-700 font-medium">Weight:</span>
                    <span className="ml-2 text-blue-900">{result.packageInfo.weight}</span>
                  </div>
                )}
                {result.packageInfo.dimensions && (
                  <div>
                    <span className="text-blue-700 font-medium">Dimensions:</span>
                    <span className="ml-2 text-blue-900">{result.packageInfo.dimensions}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Sender & Recipient Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sender Info */}
        {result.senderInfo && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sender Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {result.senderInfo.name && (
                <div>
                  <span className="text-sm font-medium text-gray-700">Name:</span>
                  <p className="text-gray-900">{result.senderInfo.name}</p>
                </div>
              )}
              {result.senderInfo.address && (
                <div>
                  <span className="text-sm font-medium text-gray-700">Address:</span>
                  <p className="text-gray-900">{result.senderInfo.address}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Recipient Info */}
        {result.recipientInfo && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recipient Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {result.recipientInfo.name && (
                <div>
                  <span className="text-sm font-medium text-gray-700">Name:</span>
                  <p className="text-gray-900">{result.recipientInfo.name}</p>
                </div>
              )}
              {result.recipientInfo.address && (
                <div>
                  <span className="text-sm font-medium text-gray-700">Address:</span>
                  <p className="text-gray-900">{result.recipientInfo.address}</p>
                </div>
              )}
              {result.recipientInfo.phone && (
                <div>
                  <span className="text-sm font-medium text-gray-700">Phone:</span>
                  <p className="text-gray-900">{result.recipientInfo.phone}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Tracking History */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Tracking History</CardTitle>
          <p className="text-sm text-gray-600">
            Follow your package's journey from pickup to delivery
          </p>
        </CardHeader>
        <CardContent>
          <TrackingHistory events={result.events} />
        </CardContent>
      </Card>

      {/* Courier Services */}
      <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {result.courierCompany.shortName} Services
              </h4>
              <div className="flex flex-wrap gap-2">
                {result.courierCompany.services.map((service, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Need help?</p>
              <a 
                href={result.courierCompany.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Visit {result.courierCompany.shortName} →
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}