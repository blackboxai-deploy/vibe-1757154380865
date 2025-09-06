import { CourierCompany } from '@/types/tracking';

export const COURIER_COMPANIES: CourierCompany[] = [
  {
    id: 'dtdc',
    name: 'DTDC Courier & Cargo Ltd',
    shortName: 'DTDC',
    website: 'https://www.dtdc.in',
    trackingUrl: 'https://www.dtdc.in/tracking',
    logo: 'https://placehold.co/120x60?text=DTDC+Express+Courier+Logo+Red+White',
    patterns: [
      /^D\d{10}$/i, // D followed by 10 digits
      /^\d{11}$/,   // 11 digits
      /^[A-Z]{2}\d{9}$/i, // 2 letters + 9 digits
    ],
    description: 'Leading courier and cargo service provider in India',
    services: ['Domestic Courier', 'International Courier', 'Cargo Services', 'Express Delivery']
  },
  {
    id: 'bluedart',
    name: 'Blue Dart Express Limited',
    shortName: 'Blue Dart',
    website: 'https://www.bluedart.com',
    trackingUrl: 'https://www.bluedart.com/web/guest/trackdartresult',
    logo: 'https://placehold.co/120x60?text=Blue+Dart+Express+Logo+Blue+Yellow',
    patterns: [
      /^\d{10}$/, // 10 digits
      /^BD\d{8}$/i, // BD + 8 digits
      /^\d{8}[A-Z]{2}$/i, // 8 digits + 2 letters
    ],
    description: 'Premier express air and integrated transportation services',
    services: ['Express Delivery', 'Air Cargo', 'Ground Express', 'International Services']
  },
  {
    id: 'ecom',
    name: 'Ecom Express Private Limited',
    shortName: 'Ecom Express',
    website: 'https://www.ecomexpress.in',
    trackingUrl: 'https://www.ecomexpress.in/tracking/',
    logo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c1ddde60-c53c-4c6e-b6ef-f3d5536ffeff.png',
    patterns: [
      /^E\d{9}$/i, // E + 9 digits
      /^EC\d{8}$/i, // EC + 8 digits
      /^\d{10,12}$/, // 10-12 digits
    ],
    description: 'E-commerce focused logistics and supply chain solutions',
    services: ['E-commerce Delivery', 'COD Services', 'Return Management', 'Last Mile Delivery']
  },
  {
    id: 'delhivery',
    name: 'Delhivery Limited',
    shortName: 'Delhivery',
    website: 'https://www.delhivery.com',
    trackingUrl: 'https://www.delhivery.com/track/package/',
    logo: 'https://placehold.co/120x60?text=Delhivery+Logistics+Logo+Red+White',
    patterns: [
      /^\d{11,12}$/, // 11-12 digits
      /^DL\d{9}$/i, // DL + 9 digits
      /^DEL\d{8}$/i, // DEL + 8 digits
    ],
    description: 'Integrated logistics and supply chain services company',
    services: ['Express Parcel', 'Part Truck Load', 'Truck Load', 'Cross Border']
  },
  {
    id: 'ekart',
    name: 'Ekart Logistics',
    shortName: 'Ekart',
    website: 'https://ekartlogistics.com',
    trackingUrl: 'https://ekartlogistics.com/tracking',
    logo: 'https://placehold.co/120x60?text=Ekart+Logistics+Logo+Blue+Orange',
    patterns: [
      /^FK\d{8}$/i, // FK + 8 digits
      /^E\d{10}$/i, // E + 10 digits
      /^\d{10,11}$/, // 10-11 digits
    ],
    description: 'Flipkart\'s logistics arm providing comprehensive delivery solutions',
    services: ['E-commerce Delivery', 'Same Day Delivery', 'Next Day Delivery', 'Cash on Delivery']
  },
  {
    id: 'aramex',
    name: 'Aramex India',
    shortName: 'Aramex',
    website: 'https://www.aramex.com',
    trackingUrl: 'https://www.aramex.com/us/en/track/shipments',
    logo: 'https://placehold.co/120x60?text=Aramex+Express+Logo+Green+White',
    patterns: [
      /^\d{9}$/, // 9 digits
      /^AR\d{7}$/i, // AR + 7 digits
      /^\d{4}-\d{4}-\d{4}$/, // XXXX-XXXX-XXXX format
    ],
    description: 'International express delivery and logistics services',
    services: ['International Express', 'Domestic Courier', 'Freight Services', 'Shop & Ship']
  },
  {
    id: 'fedex',
    name: 'FedEx India',
    shortName: 'FedEx',
    website: 'https://www.fedex.com/in',
    trackingUrl: 'https://www.fedex.com/apps/fedextrack/',
    logo: 'https://placehold.co/120x60?text=FedEx+Express+Logo+Purple+Orange',
    patterns: [
      /^\d{12}$/, // 12 digits
      /^\d{4}\s?\d{4}\s?\d{4}$/, // XXXX XXXX XXXX format
      /^FX\d{10}$/i, // FX + 10 digits
    ],
    description: 'Global express transportation and logistics company',
    services: ['International Express', 'Ground Services', 'Freight Services', 'Same Day Delivery']
  },
  {
    id: 'dhl',
    name: 'DHL Express India',
    shortName: 'DHL',
    website: 'https://www.dhl.com/in-en',
    trackingUrl: 'https://www.dhl.com/in-en/home/tracking.html',
    logo: 'https://placehold.co/120x60?text=DHL+Express+Logo+Red+Yellow',
    patterns: [
      /^\d{10}$/, // 10 digits
      /^DH\d{8}$/i, // DH + 8 digits
      /^\d{4}\s?\d{4}\s?\d{2}$/, // XXXX XXXX XX format
    ],
    description: 'International express mail and logistics services',
    services: ['International Express', 'Time Definite', 'Day Definite', 'Economy Select']
  },
  {
    id: 'indiapost',
    name: 'India Post',
    shortName: 'India Post',
    website: 'https://www.indiapost.gov.in',
    trackingUrl: 'https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackingparcel.aspx',
    logo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/28515047-4f2a-435b-98ba-b435c39ba361.png',
    patterns: [
      /^[A-Z]{2}\d{9}[A-Z]{2}$/i, // XX123456789XX format
      /^R[A-Z]\d{9}[A-Z]{2}$/i, // Registered post format
      /^E[A-Z]\d{9}[A-Z]{2}$/i, // EMS format
    ],
    description: 'Government postal service of India',
    services: ['Registered Post', 'Speed Post', 'Express Parcel', 'International Mail']
  },
  {
    id: 'professional',
    name: 'Professional Couriers',
    shortName: 'Professional',
    website: 'https://www.tpcindia.com',
    trackingUrl: 'https://www.tpcindia.com/track.aspx',
    logo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5f9b7a23-fc60-4aa6-b4c3-f0d1958de9fb.png',
    patterns: [
      /^PC\d{8}$/i, // PC + 8 digits
      /^\d{9,10}$/, // 9-10 digits
      /^P\d{9}$/i, // P + 9 digits
    ],
    description: 'Leading domestic courier services across India',
    services: ['Express Courier', 'Document Delivery', 'Parcel Services', 'Cash Collection']
  },
  {
    id: 'trackon',
    name: 'Trackon Couriers',
    shortName: 'Trackon',
    website: 'https://www.trackoncouriers.com',
    trackingUrl: 'https://www.trackoncouriers.com/tracking',
    logo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/98fe0586-d685-42e6-8800-2259d6a0f6c8.png',
    patterns: [
      /^TR\d{8}$/i, // TR + 8 digits
      /^\d{10}$/, // 10 digits
      /^T\d{9}$/i, // T + 9 digits
    ],
    description: 'Express delivery services across India',
    services: ['Express Delivery', 'Same Day Delivery', 'Document Courier', 'Parcel Services']
  },
  {
    id: 'shadowfax',
    name: 'Shadowfax Technologies',
    shortName: 'Shadowfax',
    website: 'https://shadowfax.in',
    trackingUrl: 'https://shadowfax.in/tracking',
    logo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/39e04e1b-ab8e-467b-a539-322b530a7268.png',
    patterns: [
      /^SF\d{8}$/i, // SF + 8 digits
      /^\d{12}$/, // 12 digits
      /^S\d{10}$/i, // S + 10 digits
    ],
    description: 'Hyperlocal delivery and logistics platform',
    services: ['Hyperlocal Delivery', 'Same Day Delivery', 'Food Delivery', 'E-commerce Logistics']
  },
  {
    id: 'xpressbees',
    name: 'XpressBees',
    shortName: 'XpressBees',
    website: 'https://www.xpressbees.com',
    trackingUrl: 'https://www.xpressbees.com/track',
    logo: 'https://placehold.co/120x60?text=XpressBees+Logo+Yellow+Black',
    patterns: [
      /^XB\d{8}$/i, // XB + 8 digits
      /^\d{11}$/, // 11 digits
      /^X\d{9}$/i, // X + 9 digits
    ],
    description: 'E-commerce focused logistics and supply chain solutions',
    services: ['E-commerce Delivery', 'COD Services', 'Reverse Logistics', 'Same Day Delivery']
  },
  {
    id: 'dotzot',
    name: 'Dotzot',
    shortName: 'Dotzot',
    website: 'https://dotzot.in',
    trackingUrl: 'https://dotzot.in/tracking',
    logo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/984ced92-461e-44c4-9b04-cf9924c6c818.png',
    patterns: [
      /^DZ\d{8}$/i, // DZ + 8 digits
      /^\d{10}$/, // 10 digits
      /^DOT\d{7}$/i, // DOT + 7 digits
    ],
    description: 'Last mile delivery and hyperlocal logistics',
    services: ['Last Mile Delivery', 'Hyperlocal Services', 'Same Day Delivery', 'Express Delivery']
  },
  {
    id: 'amazon',
    name: 'Amazon Logistics',
    shortName: 'Amazon',
    website: 'https://www.amazon.in',
    trackingUrl: 'https://www.amazon.in/progress-tracker/',
    logo: 'https://placehold.co/120x60?text=Amazon+Logistics+Logo+Orange+Black',
    patterns: [
      /^TBA\d{9}$/i, // TBA + 9 digits
      /^AMZ\d{8}$/i, // AMZ + 8 digits
      /^\d{15}$/, // 15 digits (Amazon internal)
    ],
    description: 'Amazon\'s delivery and logistics network',
    services: ['Prime Delivery', 'Same Day Delivery', 'Next Day Delivery', 'Standard Delivery']
  }
];

export const detectCourierCompany = (trackingNumber: string): CourierCompany | null => {
  const cleanTrackingNumber = trackingNumber.replace(/\s/g, '').toUpperCase();
  
  for (const company of COURIER_COMPANIES) {
    for (const pattern of company.patterns) {
      if (pattern.test(cleanTrackingNumber)) {
        return company;
      }
    }
  }
  
  return null;
};

export const getCourierById = (id: string): CourierCompany | null => {
  return COURIER_COMPANIES.find(company => company.id === id) || null;
};

export const getAllCouriers = (): CourierCompany[] => {
  return COURIER_COMPANIES;
};