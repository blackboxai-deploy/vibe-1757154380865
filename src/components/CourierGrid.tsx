'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getAllCouriers } from '@/lib/couriers';

export function CourierGrid() {
  const couriers = getAllCouriers();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {couriers.map((courier) => (
        <Card 
          key={courier.id} 
          className="hover:shadow-lg transition-shadow duration-200 cursor-pointer group"
          onClick={() => window.open(courier.website, '_blank', 'noopener,noreferrer')}
        >
          <CardContent className="p-4 text-center">
            <div className="mb-3 h-12 flex items-center justify-center">
              <img 
                src={courier.logo}
                alt={`${courier.name} logo`}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            
            <h3 className="font-semibold text-sm mb-1 text-gray-900">
              {courier.shortName}
            </h3>
            
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
              {courier.description}
            </p>
            
            <div className="flex flex-wrap gap-1 justify-center">
              {courier.services.slice(0, 2).map((service, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="text-xs px-2 py-0.5"
                >
                  {service.split(' ').slice(0, 2).join(' ')}
                </Badge>
              ))}
            </div>
            
            {/* Pattern examples for tooltip or detail view */}
            <div className="mt-2 text-xs text-gray-500">
              <p className="truncate">
                Format: {courier.patterns[0]?.toString().replace(/[^A-Za-z0-9+]/g, '').slice(0, 10)}...
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}