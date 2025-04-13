
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Wine, Coffee } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Wedding Menu" 
        subtitle="Delicious food & drinks for our celebration"
      />

      <Tabs defaultValue="cocktail" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="cocktail">Cocktail</TabsTrigger>
          <TabsTrigger value="dinner">Dinner</TabsTrigger>
          <TabsTrigger value="dessert">Dessert</TabsTrigger>
        </TabsList>
        
        <TabsContent value="cocktail">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Wine className="w-5 h-5 text-wedding-primary mr-3" />
                <h3 className="font-semibold text-lg">Cocktail Hour</h3>
              </div>
              
              <div className="space-y-4">
                <MenuSection 
                  title="Canapés" 
                  items={[
                    { name: "Mini Crab Cakes", description: "With spicy remoulade" },
                    { name: "Bruschetta", description: "Tomato, basil, and mozzarella" },
                    { name: "Stuffed Mushrooms", description: "With herb cream cheese" },
                    { name: "Prosciutto-Wrapped Melon", description: "Sweet and savory" },
                  ]}
                />
                
                <MenuSection 
                  title="Beverages" 
                  items={[
                    { name: "Signature Cocktail", description: "The 'Forever & Always' spritz" },
                    { name: "Champagne", description: "For toasting the couple" },
                    { name: "Wine Selection", description: "Red and white options" },
                    { name: "Non-Alcoholic", description: "Sparkling water and juices" },
                  ]}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="dinner">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Utensils className="w-5 h-5 text-wedding-primary mr-3" />
                <h3 className="font-semibold text-lg">Main Course</h3>
              </div>
              
              <div className="space-y-4">
                <MenuSection 
                  title="First Course" 
                  items={[
                    { 
                      name: "Garden Salad", 
                      description: "Mixed greens, cherry tomatoes, cucumber, and balsamic vinaigrette" 
                    },
                  ]}
                />
                
                <MenuSection 
                  title="Entrée Options" 
                  items={[
                    { 
                      name: "Beef Tenderloin", 
                      description: "With red wine reduction, roasted potatoes, and seasonal vegetables" 
                    },
                    { 
                      name: "Grilled Salmon", 
                      description: "With lemon dill sauce, wild rice pilaf, and asparagus" 
                    },
                    { 
                      name: "Vegetable Wellington", 
                      description: "With mushroom duxelles, roasted vegetables, and herb sauce (Vegetarian)" 
                    },
                  ]}
                />
                
                <p className="text-xs text-wedding-neutral italic mt-2">
                  * Please note any dietary restrictions in your RSVP
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="dessert">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Coffee className="w-5 h-5 text-wedding-primary mr-3" />
                <h3 className="font-semibold text-lg">Dessert & Late Night</h3>
              </div>
              
              <div className="space-y-4">
                <MenuSection 
                  title="Wedding Cake" 
                  items={[
                    { 
                      name: "Three-Tier Cake", 
                      description: "Vanilla cake with raspberry filling and buttercream frosting" 
                    },
                  ]}
                />
                
                <MenuSection 
                  title="Dessert Station" 
                  items={[
                    { name: "Chocolate Truffles", description: "Assorted flavors" },
                    { name: "Mini Fruit Tarts", description: "Seasonal fruits" },
                    { name: "Macarons", description: "Variety of flavors" },
                  ]}
                />
                
                <MenuSection 
                  title="Late Night Snacks" 
                  items={[
                    { name: "Mini Sliders", description: "Beef and vegetable options" },
                    { name: "Truffle Fries", description: "With aioli dipping sauce" },
                    { name: "Pizza Bites", description: "Assorted toppings" },
                  ]}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

interface MenuSectionProps {
  title: string;
  items: {
    name: string;
    description: string;
  }[];
}

const MenuSection = ({ title, items }: MenuSectionProps) => {
  return (
    <div>
      <h4 className="font-medium text-wedding-secondary mb-2">{title}</h4>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index}>
            <p className="font-medium text-sm">{item.name}</p>
            <p className="text-xs text-wedding-neutral">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
