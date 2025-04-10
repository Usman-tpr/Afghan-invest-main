import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Pagination from "../Pagination";

const PhotosGallery = () => {
  const { t } = useTranslation();

  // Gallery images
  const images = [
    {
      src: "https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Gallery Image 1",
      title: t("galleryPhotos-gallery-view-1st-img-title"),
    },
    {
      src: "https://images.pexels.com/photos/5327973/pexels-photo-5327973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Gallery Image 2",
      title: t("galleryPhotos-gallery-view-2nd-img-title"),
    },
    {
      src: "https://images.pexels.com/photos/355187/pexels-photo-355187.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Gallery Image 3",
      title: t("galleryPhotos-gallery-view-3rd-img-title"),
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1670689708311-4d3d1bb47f5e?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Gallery Image 4",
      title: t("galleryPhotos-gallery-view-4th-img-title"),
    },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0].src);

  return (
    <>
      <div className="min-h-screen w-full">
        {/* Background Section */}
        <div
          className="w-full min-h-96 mt-[64px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1505027014503-e6de34d28116?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
            <h1 className="text-5xl font-bold mb-4">
              {t("galleryPhotos-main-title")}
            </h1>
            <p className="text-xl mb-6">{t("galleryPhotos-main-desc")}</p>
          </div>
        </div>

        {/* Header Section */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h1 className="text-center text-4xl font-bold my-8 text-mstheme">
            {t("galleryPhotos-title")}
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
          <p className="text-xl my-8">{t("galleryPhotos-desc")}</p>
        </div>

        {/* Gallery Section */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h1 className="text-center text-4xl font-bold my-8 text-mstheme">
            {t("galleryPhotos-gallery-view-title")}
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>

          <div className="flex flex-col items-center gap-8 my-16">
            {/* Main Image */}
            <div className="w-full md:w-3/4">
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                src={selectedImage}
                alt="Selected"
              />
            </div>

            {/* Smaller Images */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:opacity-75 transition duration-300"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    className="w-32 h-32 md:w-32 md:h-28 object-cover rounded-lg shadow-md"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    <div className="my-10">
    <Pagination
        totalItems={3} // Total number of items
        itemsPerPage={3} // Number of items per page
        // currentPage={currentPage} // Current active page
        // onPageChange={handlePageChange} // Callback to handle page changes
      />
    </div>
    </>
  );
};

export default PhotosGallery;
