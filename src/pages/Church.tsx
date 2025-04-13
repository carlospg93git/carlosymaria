
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Scroll, Music, BookOpen } from "lucide-react";

const Church = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Church Ceremony" 
        subtitle="St. Mary's Church at 2:00 PM"
      />

      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-wedding-light flex items-center justify-center mr-3">
                <Scroll className="w-5 h-5 text-wedding-primary" />
              </div>
              <h3 className="font-semibold text-lg">Scripture Readings</h3>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium text-wedding-secondary">First Reading</h4>
              <p className="text-sm text-wedding-neutral italic mt-1">1 Corinthians 13:4-8</p>
              <p className="text-sm mt-2">
                "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. 
                It does not dishonor others, it is not self-seeking, it is not easily angered, 
                it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. 
                It always protects, always trusts, always hopes, always perseveres. Love never fails."
              </p>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium text-wedding-secondary">Second Reading</h4>
              <p className="text-sm text-wedding-neutral italic mt-1">Song of Solomon 8:6-7</p>
              <p className="text-sm mt-2">
                "Set me as a seal upon your heart, as a seal upon your arm, for love is strong as death, 
                jealousy is fierce as the grave. Its flashes are flashes of fire, the very flame of the Lord. 
                Many waters cannot quench love, neither can floods drown it."
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-wedding-light flex items-center justify-center mr-3">
                <Music className="w-5 h-5 text-wedding-primary" />
              </div>
              <h3 className="font-semibold text-lg">Music Selection</h3>
            </div>
            
            <ul className="space-y-3">
              <li>
                <h4 className="font-medium text-wedding-secondary">Processional</h4>
                <p className="text-sm text-wedding-neutral">Canon in D - Pachelbel</p>
              </li>
              
              <li>
                <h4 className="font-medium text-wedding-secondary">Bride's Entrance</h4>
                <p className="text-sm text-wedding-neutral">Wedding March - Wagner</p>
              </li>
              
              <li>
                <h4 className="font-medium text-wedding-secondary">During Ceremony</h4>
                <p className="text-sm text-wedding-neutral">Ave Maria - Schubert</p>
              </li>
              
              <li>
                <h4 className="font-medium text-wedding-secondary">Recessional</h4>
                <p className="text-sm text-wedding-neutral">Wedding March - Mendelssohn</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-wedding-light flex items-center justify-center mr-3">
                <BookOpen className="w-5 h-5 text-wedding-primary" />
              </div>
              <h3 className="font-semibold text-lg">Vows</h3>
            </div>
            
            <p className="text-sm mb-4">
              We have chosen to recite traditional vows during our ceremony,
              symbolizing our commitment to each other in the timeless words
              that have united couples for generations.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Church;
