import React from 'react';

interface FriendPhoto {
  id: string;
  src: string;
  alt: string;
  name: string;
  game: string;
}

// Dynamically import all JPG/PNG images from the friends directory
let friendPhotos: FriendPhoto[] = [];

try {
  // Use Vite's import.meta.glob for dynamic imports
  const friendImages = import.meta.glob(
    "../assets/friends/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,gif,GIF}",
    { eager: true, as: "url" }
  );

  friendPhotos = Object.entries(friendImages).map(([path, src]) => ({
    id: path.split('/').pop()?.replace(/\.[^/.]+$/, '') || '',
    src: src as string,
    alt: `Friend ${path}`,
    name: path.split('/').pop()?.replace(/\.[^/.]+$/, '') || '',
    game: 'Gaming Together!', // Default game name, can be customized
  }));
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
                className="object-cover h-48 w-full"
              />
              <div className="p-4">
                <p className="font-bold">{photo.name}</p>
                <p className="text-sm text-gray-600">Playing: {photo.game}</p>
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
