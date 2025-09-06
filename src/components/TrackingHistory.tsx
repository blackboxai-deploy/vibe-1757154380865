'use client';

import { TrackingEvent } from '@/types/tracking';
import { formatDateTime } from '@/lib/tracking';

interface TrackingHistoryProps {
  events: TrackingEvent[];
}

export function TrackingHistory({ events }: TrackingHistoryProps) {
  if (!events || events.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No tracking history available</p>
      </div>
    );
  }

  // Sort events by timestamp (most recent first)
  const sortedEvents = [...events].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  const getStatusIcon = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('delivered')) return '✅';
    if (statusLower.includes('out for delivery')) return '🚚';
    if (statusLower.includes('transit') || statusLower.includes('processed')) return '📦';
    if (statusLower.includes('picked') || statusLower.includes('collected')) return '📋';
    if (statusLower.includes('arrived')) return '🏢';
    return '📍';
  };

  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('delivered')) return 'bg-green-500';
    if (statusLower.includes('out for delivery')) return 'bg-blue-500';
    if (statusLower.includes('transit') || statusLower.includes('processed')) return 'bg-yellow-500';
    if (statusLower.includes('picked') || statusLower.includes('collected')) return 'bg-purple-500';
    return 'bg-gray-500';
  };

  return (
    <div className="space-y-4">
      {sortedEvents.map((event, index) => (
        <div key={index} className="flex gap-4">
          {/* Timeline indicator */}
          <div className="flex flex-col items-center">
            <div className={`w-3 h-3 rounded-full ${getStatusColor(event.status)} flex-shrink-0`} />
            {index < sortedEvents.length - 1 && (
              <div className="w-0.5 h-16 bg-gray-200 mt-2" />
            )}
          </div>
          
          {/* Event details */}
          <div className="flex-1 min-w-0 pb-8">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{getStatusIcon(event.status)}</span>
                  <h4 className="font-semibold text-gray-900">{event.status}</h4>
                </div>
                <p className="text-gray-700 mb-2">{event.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>📍 {event.location}</span>
                  <span>🕐 {formatDateTime(event.timestamp)}</span>
                  {event.statusCode && (
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                      {event.statusCode}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {sortedEvents.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-4 mt-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Delivered</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full ml-4"></div>
            <span>Out for Delivery</span>
            <div className="w-2 h-2 bg-yellow-500 rounded-full ml-4"></div>
            <span>In Transit</span>
            <div className="w-2 h-2 bg-purple-500 rounded-full ml-4"></div>
            <span>Picked Up</span>
            <div className="w-2 h-2 bg-gray-500 rounded-full ml-4"></div>
            <span>Other</span>
          </div>
        </div>
      )}
    </div>
  );
}