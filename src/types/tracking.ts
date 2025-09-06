export interface CourierCompany {
  id: string;
  name: string;
  shortName: string;
  website: string;
  trackingUrl: string;
  apiEndpoint?: string;
  logo: string;
  patterns: RegExp[];
  description: string;
  services: string[];
}

export interface TrackingEvent {
  timestamp: string;
  location: string;
  status: string;
  description: string;
  statusCode?: string;
}

export interface TrackingResult {
  trackingNumber: string;
  courierCompany: CourierCompany;
  status: 'pending' | 'in-transit' | 'delivered' | 'failed' | 'unknown';
  currentLocation?: string;
  estimatedDelivery?: string;
  events: TrackingEvent[];
  lastUpdated: string;
  recipientInfo?: {
    name?: string;
    address?: string;
    phone?: string;
  };
  senderInfo?: {
    name?: string;
    address?: string;
  };
  packageInfo?: {
    weight?: string;
    dimensions?: string;
    type?: string;
  };
}

export interface TrackingApiResponse {
  success: boolean;
  data?: TrackingResult;
  error?: string;
  redirectUrl?: string;
}

export interface CourierDetectionResult {
  company: CourierCompany | null;
  confidence: number;
  matchedPattern?: string;
}

export type TrackingStatus = 'idle' | 'loading' | 'success' | 'error' | 'not-found';