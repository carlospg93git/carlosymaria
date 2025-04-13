
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Image, Upload, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Photos = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
    
    // Create URL previews
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviews([...previews, ...newPreviews]);
  };
  
  const removeFile = (index: number) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
    
    const newPreviews = [...previews];
    URL.revokeObjectURL(newPreviews[index]);
    newPreviews.splice(index, 1);
    setPreviews(newPreviews);
  };
  
  const handleUpload = () => {
    // This would normally connect to a server
    // For now, we'll just show a success message
    toast({
      title: "Photos Uploaded",
      description: `${selectedFiles.length} photos have been uploaded successfully.`,
    });
    
    // Clear selected files after "upload"
    previews.forEach(url => URL.revokeObjectURL(url));
    setSelectedFiles([]);
    setPreviews([]);
  };

  return (
    <PageLayout>
      <PageHeader 
        title="Photo Gallery" 
        subtitle="Share your moments from our special day"
      />

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex items-center mb-4">
            <Camera className="w-5 h-5 text-wedding-primary mr-3" />
            <h3 className="font-semibold text-lg">Upload Photos</h3>
          </div>
          
          <p className="text-sm text-wedding-neutral mb-4">
            We'd love for you to share your photos from our wedding! Select images from your 
            phone to upload them to our shared gallery.
          </p>
          
          <div className="border-2 border-dashed border-wedding-light rounded-lg p-4 text-center mb-4">
            <Image className="w-10 h-10 text-wedding-light mx-auto mb-2" />
            <p className="text-sm text-wedding-neutral mb-2">
              Tap to select photos
            </p>
            <input 
              type="file" 
              multiple 
              accept="image/*" 
              className="hidden" 
              id="photo-upload"
              onChange={handleFileSelect}
            />
            <label htmlFor="photo-upload">
              <Button 
                variant="outline" 
                className="border-wedding-primary text-wedding-primary hover:bg-wedding-light"
              >
                <Upload className="mr-2 h-4 w-4" />
                Choose Photos
              </Button>
            </label>
          </div>
          
          {selectedFiles.length > 0 && (
            <>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {previews.map((preview, index) => (
                  <div key={index} className="relative">
                    <img 
                      src={preview} 
                      alt="Preview" 
                      className="w-full h-24 object-cover rounded-md"
                    />
                    <button 
                      className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-sm"
                      onClick={() => removeFile(index)}
                    >
                      <Trash2 className="w-3 h-3 text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full bg-wedding-primary hover:bg-wedding-secondary"
                onClick={handleUpload}
              >
                Upload {selectedFiles.length} Photos
              </Button>
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center mb-4">
            <Image className="w-5 h-5 text-wedding-primary mr-3" />
            <h3 className="font-semibold text-lg">Photo Gallery</h3>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center py-8">
            <Image className="w-16 h-16 text-wedding-light mb-4" />
            <h4 className="font-medium text-wedding-secondary mb-1">
              Gallery Coming Soon
            </h4>
            <p className="text-sm text-wedding-neutral">
              Photos will appear here after they're uploaded
            </p>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  );
};

export default Photos;
