
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, Building, MapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Locations" 
        subtitle="Find your way to our celebration"
      />

      <div className="space-y-6">
        <VenueCard 
          name="St. Mary's Church"
          address="123 Wedding Lane, Love City"
          time="Ceremony at 2:00 PM"
          googleMapsUrl="https://maps.google.com"
          type="church"
        />
        
        <VenueCard 
          name="Grand Ballroom"
          address="456 Celebration Ave, Love City"
          time="Reception at 4:00 PM"
          googleMapsUrl="https://maps.google.com"
          type="reception"
        />
      </div>

      <div className="mt-6">
        <Card>
          <CardContent className="pt-6">
            <div className="aspect-w-16 aspect-h-9 bg-wedding-light rounded-lg mb-4 flex items-center justify-center">
              <MapIcon className="w-12 h-12 text-wedding-primary opacity-50" />
              <p className="text-xs text-wedding-neutral absolute bottom-2 right-2">Interactive map coming soon</p>
            </div>
            
            <h3 className="font-semibold text-lg mb-2">Travel Information</h3>
            <p className="text-sm text-wedding-neutral mb-3">
              Both venues have ample parking available for all guests.
              If you're coming from out of town, we recommend staying at the
              Lovely Hotel, which is within walking distance of the reception venue.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

interface VenueCardProps {
  name: string;
  address: string;
  time: string;
  googleMapsUrl: string;
  type: 'church' | 'reception';
}

const VenueCard = ({ name, address, time, googleMapsUrl, type }: VenueCardProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-full bg-wedding-light flex items-center justify-center mr-4 mt-1">
            {type === 'church' ? (
              <Building className="w-6 h-6 text-wedding-primary" />
            ) : (
              <MapPin className="w-6 h-6 text-wedding-primary" />
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-wedding-neutral">{address}</p>
            <p className="text-sm text-wedding-primary font-medium mt-1">{time}</p>
            
            <div className="mt-4 flex space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-wedding-primary text-wedding-primary hover:bg-wedding-light hover:text-wedding-primary"
                onClick={() => window.open(googleMapsUrl, '_blank')}
              >
                <Navigation className="mr-1 h-4 w-4" />
                Directions
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Location;
