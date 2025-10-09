import React from 'react';

interface FriendPhoto {
  id: string;
  src: string;
  alt: string;
  name: string;
}

// Dynamically import all JPG/PNG images from the friends directory
let friendPhotos: FriendPhoto[] = [];

try {
  // Use Vite's import.meta.glob for dynamic imports
  const friendImages = import.meta.glob(
    "../assets/friends/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,gif,GIF}",
    { eager: true, as: "url" }
  );

  friendPhotos = Object.entries(friendImages).map(([path, src]) => {
    const filename = path.split('/').pop()?.replace(/\.[^/.]+$/, '') || '';
    // Clean up the filename for better readability
    const cleanName = filename
      .replace(/[-_]/g, ' ') // Replace dashes and underscores with spaces
      .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize first letter of each word

    return {
      id: filename,
      src: src as string,
      alt: `Friend ${cleanName}`,
      name: cleanName,
    };
  });
} catch (error) {
  console.warn('No images found in assets/friends directory');
}

const FriendsGallery: React.FC = () => {

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center mb-6">
        Gaming Buddies
      </h2>
      
      {friendPhotos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {friendPhotos.map((photo) => (
            <div 
              key={photo.id}
              className="border rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-200"
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-auto object-contain max-h-96"
              />
              <div className="p-4">
                <p className="font-bold text-lg text-center">{photo.name}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No photos found in the friends directory. Please add some photos to src/assets/friends/
        </p>
      )}
    </div>
  );
};

export default FriendsGallery;
