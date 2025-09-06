import { TrackingResult, TrackingEvent, CourierCompany, TrackingApiResponse } from '@/types/tracking';
import { detectCourierCompany } from './couriers';

// Mock tracking data generator for demonstration
const generateMockTrackingData = (
  trackingNumber: string, 
  company: CourierCompany
): TrackingResult => {
  const statuses = ['pending', 'in-transit', 'delivered'] as const;
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  
  const mockEvents: TrackingEvent[] = [
    {
      timestamp: '2024-01-15T09:00:00Z',
      location: 'Mumbai, Maharashtra',
      status: 'Package Picked Up',
      description: 'Package picked up from sender location'
    },
    {
      timestamp: '2024-01-15T14:30:00Z',
      location: 'Mumbai Hub, Maharashtra',
      status: 'In Transit',
      description: 'Package processed at sorting facility'
    },
    {
      timestamp: '2024-01-16T08:15:00Z',
      location: 'Delhi Hub, Delhi',
      status: 'In Transit',
      description: 'Package arrived at destination hub'
    }
  ];

  if (randomStatus === 'delivered') {
    mockEvents.push({
      timestamp: '2024-01-16T16:45:00Z',
      location: 'Delhi, Delhi',
      status: 'Delivered',
      description: 'Package delivered successfully to recipient'
    });
  }

  return {
    trackingNumber,
    courierCompany: company,
    status: randomStatus,
    currentLocation: mockEvents[mockEvents.length - 1].location,
    estimatedDelivery: '2024-01-17T18:00:00Z',
    events: mockEvents,
    lastUpdated: new Date().toISOString(),
    recipientInfo: {
      name: 'John Doe',
      address: '123 Main Street, Delhi, 110001',
      phone: '+91-9876543210'
    },
    senderInfo: {
      name: 'ABC Store',
      address: '456 Business Park, Mumbai, 400001'
    },
    packageInfo: {
      weight: '0.5 kg',
      type: 'Documents'
    }
  };
};

export const trackPackage = async (trackingNumber: string): Promise<TrackingApiResponse> => {
  try {
    // Clean and validate tracking number
    const cleanTrackingNumber = trackingNumber.replace(/\s/g, '').toUpperCase();
    
    if (!cleanTrackingNumber || cleanTrackingNumber.length < 6) {
      return {
        success: false,
        error: 'Invalid tracking number. Please enter a valid tracking number.'
      };
    }

    // Detect courier company
    const detectedCompany = detectCourierCompany(cleanTrackingNumber);
    
    if (!detectedCompany) {
      return {
        success: false,
        error: 'Unable to identify courier company. Please verify the tracking number format.'
      };
    }

    // Generate tracking URL for external redirect
    const trackingUrl = `${detectedCompany.trackingUrl}?trackingNumber=${cleanTrackingNumber}`;

    // For now, we'll use mock data. In production, this would call actual APIs
    const trackingData = generateMockTrackingData(cleanTrackingNumber, detectedCompany);
    
    return {
      success: true,
      data: trackingData,
      redirectUrl: trackingUrl
    };

  } catch (error) {
    console.error('Tracking error:', error);
    return {
      success: false,
      error: 'An error occurred while tracking your package. Please try again later.'
    };
  }
};

export const getTrackingStatusColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'pending':
      return 'text-yellow-600 bg-yellow-100';
    case 'in-transit':
      return 'text-blue-600 bg-blue-100';
    case 'delivered':
      return 'text-green-600 bg-green-100';
    case 'failed':
    case 'returned':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export const formatDateTime = (dateTime: string): string => {
  const date = new Date(dateTime);
  return date.toLocaleString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata'
  });
};

export const getEstimatedDeliveryMessage = (estimatedDelivery?: string): string => {
  if (!estimatedDelivery) return 'Delivery date not available';
  
  const deliveryDate = new Date(estimatedDelivery);
  const now = new Date();
  const diffTime = deliveryDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return 'Delivered';
  if (diffDays === 0) return 'Expected today';
  if (diffDays === 1) return 'Expected tomorrow';
  
  return `Expected in ${diffDays} days`;
};