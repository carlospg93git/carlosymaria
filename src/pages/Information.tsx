
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Cake, Calendar, MapPin, Heart } from "lucide-react";

const Information = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Information" 
        subtitle="Everything you need to know about our special day"
      />

      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start mb-4">
              <Calendar className="w-5 h-5 text-wedding-primary mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg">When</h3>
                <p className="text-wedding-neutral">Saturday, June 15, 2025</p>
                <p className="text-wedding-neutral">Ceremony starts at 2:00 PM</p>
              </div>
            </div>
            
            <div className="flex items-start mb-4">
              <MapPin className="w-5 h-5 text-wedding-primary mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg">Where</h3>
                <p className="text-wedding-neutral">St. Mary's Church</p>
                <p className="text-wedding-neutral">123 Wedding Lane, Love City</p>
              </div>
            </div>
            
            <div className="flex items-start mb-4">
              <Cake className="w-5 h-5 text-wedding-primary mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg">Reception</h3>
                <p className="text-wedding-neutral">Grand Ballroom</p>
                <p className="text-wedding-neutral">456 Celebration Ave, Love City</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Heart className="w-5 h-5 text-wedding-primary mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg">Dress Code</h3>
                <p className="text-wedding-neutral">Formal attire requested</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold text-lg mb-2">About This App</h3>
            <p className="text-sm text-wedding-neutral mb-3">
              Welcome to our wedding app! We've created this to help you navigate our special day with ease.
            </p>
            <p className="text-sm text-wedding-neutral mb-3">
              You can use this app to:
            </p>
            <ul className="list-disc list-inside text-sm text-wedding-neutral space-y-1 ml-2">
              <li>Find information about the ceremony and reception</li>
              <li>Get directions to the venues</li>
              <li>View the event schedule</li>
              <li>Share photos from the celebration</li>
              <li>Check the seating arrangement</li>
              <li>Preview the delicious menu</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Information;
