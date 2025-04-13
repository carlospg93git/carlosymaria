
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Mock data for tables
const TABLES_DATA = [
  {
    name: "Table 1",
    guests: ["Alex Smith", "Jamie Johnson", "Taylor Williams", "Jordan Brown"]
  },
  {
    name: "Table 2",
    guests: ["Casey Davis", "Riley Miller", "Morgan Wilson", "Drew Moore"]
  },
  {
    name: "Table 3",
    guests: ["Avery Jones", "Quinn Thomas", "Reese Martin", "Cameron White"]
  },
  {
    name: "Table 4",
    guests: ["Sam Lee", "Jordan Clark", "Ellis Rodriguez", "Parker Lewis"]
  },
  {
    name: "Table 5",
    guests: ["Dakota Garcia", "Adrian Martinez", "Devon Robinson", "Riley Cooper"]
  },
];

const Tables = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foundTable, setFoundTable] = useState<string | null>(null);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term.length > 2) {
      // Find which table contains the search term
      for (const table of TABLES_DATA) {
        const guestMatch = table.guests.some(guest => 
          guest.toLowerCase().includes(term)
        );
        
        if (guestMatch) {
          setFoundTable(table.name);
          return;
        }
      }
    }
    
    setFoundTable(null);
  };

  return (
    <PageLayout>
      <PageHeader 
        title="Seating Plan" 
        subtitle="Find your table at the reception"
      />

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-wedding-neutral" />
            <Input
              placeholder="Search your name"
              className="pl-9 border-wedding-light focus-visible:ring-wedding-primary"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          
          {searchTerm.length > 2 && (
            <div className="py-2">
              {foundTable ? (
                <p className="text-sm text-center">
                  You are seated at <span className="font-semibold text-wedding-primary">{foundTable}</span>
                </p>
              ) : (
                <p className="text-sm text-center text-wedding-neutral">
                  No results found for "{searchTerm}"
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="space-y-4">
        {TABLES_DATA.map((table, index) => (
          <Card key={index}>
            <CardContent className="pt-4 pb-4">
              <h3 className="font-semibold text-lg text-wedding-primary mb-2">{table.name}</h3>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {table.guests.map((guest, guestIndex) => (
                  <div 
                    key={guestIndex}
                    className={`text-sm py-1 px-2 rounded ${
                      searchTerm.length > 2 && guest.toLowerCase().includes(searchTerm.toLowerCase()) 
                        ? 'bg-wedding-light text-wedding-primary font-medium' 
                        : 'text-wedding-neutral'
                    }`}
                  >
                    {guest}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
};

export default Tables;
