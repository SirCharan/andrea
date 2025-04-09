import { useState, useEffect } from 'react';
import { Instagram, Map, Heart, MessageCircle } from 'lucide-react';

type InstagramPost = {
  id: number;
  imageUrl: string;
  location: string;
  likes: number;
  comments: number;
};

const mockInstagramData: InstagramPost[] = [
  {
    id: 1,
    imageUrl: '/lovable-uploads/singapore-mbs.png',
    location: 'Marina Bay Sands, Singapore',
    likes: 847,
    comments: 63
  },
  {
    id: 2,
    imageUrl: '/lovable-uploads/636ec691-4bdf-4f04-a392-7eb68dd76112.png',
    location: 'Kuala Lumpur, Malaysia',
    likes: 1203,
    comments: 85
  },
  {
    id: 3, 
    imageUrl: '/lovable-uploads/5cbc3bdb-d08e-4f8d-9fb8-a01b09b00a9a.png',
    location: 'Bangalore, India',
    likes: 922,
    comments: 41
  },
  {
    id: 4,
    imageUrl: '/lovable-uploads/77c74f99-b959-47f9-a2ba-186bddc85342.png',
    location: 'Beach Paradise',
    likes: 1089,
    comments: 74
  },
  {
    id: 5,
    imageUrl: '/lovable-uploads/c761ec3c-c003-416f-8523-5de276969c0c.png',
    location: 'Las Cabanas, Philippines',
    likes: 781,
    comments: 29
  },
  {
    id: 6,
    imageUrl: '/lovable-uploads/4784ea21-858b-42d6-8366-c5e8e8a510e4.png',
    location: 'Koh Samui, Thailand',
    likes: 1456,
    comments: 112
  }
];

const InstagramFeed = ({ limit = 6 }) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from Instagram API
    // But we're using mock data for this demo
    setTimeout(() => {
      setPosts(mockInstagramData.slice(0, limit));
      setLoading(false);
    }, 500);
  }, [limit]);

  if (loading) {
    return (
      <div className="instagram-grid animate-pulse">
        {[...Array(limit)].map((_, index) => (
          <div key={index} className="img-container bg-gray-200 rounded-xl"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="instagram-grid">
      {posts.map((post) => (
        <div key={post.id} className="img-container card-hover">
          <img 
            src={post.imageUrl} 
            alt={`Instagram post from ${post.location}`} 
            className="transition-transform duration-500"
            loading="lazy"
          />
          <div className="img-overlay">
            <div className="flex items-center mb-2 text-white/90">
              <Map size={16} className="mr-1" />
              <span className="text-sm">{post.location}</span>
            </div>
            <div className="flex space-x-4 text-white">
              <span className="flex items-center">
                <Heart size={16} className="mr-1 text-coral-400" />
                {post.likes}
              </span>
              <span className="flex items-center">
                <MessageCircle size={16} className="mr-1" />
                {post.comments}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;
