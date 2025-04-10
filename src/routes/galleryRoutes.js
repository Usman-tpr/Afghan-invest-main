import GalleryPage from '../Pages/gallery-page/GalleryPage'
import GalleryVideosPage from '../Pages/gallery-page/GalleryVideosPage';

const galleryRoutes = [
  {
    path: "/gallery/photos",
    element: <GalleryPage />
  },
  {
    path: "/gallery/videos",
    element: <GalleryVideosPage />
  },
];

export default galleryRoutes;
