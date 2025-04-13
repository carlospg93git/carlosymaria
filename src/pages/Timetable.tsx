
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const Timetable = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Schedule" 
        subtitle="Timeline for our wedding day"
      />

      <div className="relative">
        <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-wedding-light"></div>
        
        <div className="space-y-6 ml-2">
          <TimelineEvent 
            time="1:30 PM" 
            title="Guest Arrival" 
            description="Please arrive at St. Mary's Church for seating"
          />
          
          <TimelineEvent 
            time="2:00 PM" 
            title="Ceremony Begins" 
            description="Wedding ceremony at St. Mary's Church"
          />
          
          <TimelineEvent 
            time="3:00 PM" 
            title="Ceremony Ends" 
            description="Guests depart for the reception venue"
          />
          
          <TimelineEvent 
            time="4:00 PM" 
            title="Cocktail Hour" 
            description="Appetizers & drinks at Grand Ballroom"
          />
          
          <TimelineEvent 
            time="5:30 PM" 
            title="Dinner Served" 
            description="Formal dinner at Grand Ballroom"
          />
          
          <TimelineEvent 
            time="7:00 PM" 
            title="First Dance" 
            description="The couple's first dance as newlyweds"
          />
          
          <TimelineEvent 
            time="7:30 PM" 
            title="Cake Cutting" 
            description="Wedding cake ceremony"
          />
          
          <TimelineEvent 
            time="8:00 PM" 
            title="Dancing" 
            description="Open dance floor for all guests"
          />
          
          <TimelineEvent 
            time="11:00 PM" 
            title="Farewell" 
            description="The celebration comes to a close"
          />
        </div>
      </div>
    </PageLayout>
  );
};

interface TimelineEventProps {
  time: string;
  title: string;
  description: string;
}

const TimelineEvent = ({ time, title, description }: TimelineEventProps) => {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-wedding-primary border-4 border-wedding-light"></div>
      
      <Card>
        <CardContent className="pt-4 pb-4">
          <div className="text-xs font-medium text-wedding-primary mb-1">
            {time}
          </div>
          <h3 className="font-semibold text-lg leading-tight">{title}</h3>
          <p className="text-sm text-wedding-neutral mt-1">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Timetable;
