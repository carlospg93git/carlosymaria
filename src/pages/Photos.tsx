
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Image, Upload, Trash2, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { toast } from "@/components/ui/use-toast";
import { uploadMultipleFilesToS3 } from "@/services/s3Service";

const Photos = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
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
  
  const openNativeFilePicker = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;
    
    setIsUploading(true);
    try {
      // This would connect to S3 in a real implementation
      await uploadMultipleFilesToS3(selectedFiles);
      
      toast({
        title: "Photos Uploaded",
        description: `${selectedFiles.length} files have been uploaded successfully.`,
      });
      
      // Clear selected files after "upload"
      previews.forEach(url => URL.revokeObjectURL(url));
      setSelectedFiles([]);
      setPreviews([]);
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your files. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
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
            <h3 className="font-semibold text-lg">Upload Photos & Videos</h3>
          </div>
          
          <p className="text-sm text-wedding-neutral mb-4">
            We'd love for you to share your photos and videos from our wedding! Select media files from your 
            phone to upload them to our shared gallery.
          </p>
          
          <div className="border-2 border-dashed border-wedding-light rounded-lg p-4 text-center mb-4">
            <Image className="w-10 h-10 text-wedding-light mx-auto mb-2" />
            <p className="text-sm text-wedding-neutral mb-2">
              Tap to select photos and videos
            </p>
            <input 
              type="file" 
              multiple 
              accept="image/*,video/*" 
              className="hidden" 
              id="photo-upload"
              ref={fileInputRef}
              onChange={handleFileSelect}
            />
            <Button 
              variant="outline" 
              className="border-wedding-primary text-wedding-primary hover:bg-wedding-light"
              onClick={openNativeFilePicker}
            >
              <Upload className="mr-2 h-4 w-4" />
              Choose Media Files
            </Button>
          </div>
          
          {selectedFiles.length > 0 && (
            <>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {previews.map((preview, index) => (
                  <div key={index} className="relative">
                    <div className="relative w-full h-24">
                      {selectedFiles[index].type.startsWith('image/') ? (
                        <img 
                          src={preview} 
                          alt="Preview" 
                          className="w-full h-full object-cover rounded-md"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-md">
                          <Video className="w-8 h-8 text-wedding-primary" />
                        </div>
                      )}
                    </div>
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
                disabled={isUploading}
              >
                {isUploading ? "Uploading..." : `Upload ${selectedFiles.length} Files`}
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
