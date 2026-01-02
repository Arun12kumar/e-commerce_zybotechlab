"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useAuth } from "@/Providers/AuthProvider";
import { usePostOrder } from "@/controller/productController";
import { useOrderStore } from "@/store/useOrderStore";

const ShoeCards = ({ items }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorImages, setSelectedColorImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const { token } = useAuth();
  const orderMutation = usePostOrder();
  const { setOrderData } = useOrderStore();

  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const sizeRef = useRef(null);
  const colorRef = useRef(null);
  const buyButtonRef = useRef(null);

  const tl = useRef(null);
  const onEnter = () => tl.current.play();
  const onLeave = () => tl.current.reverse();
  const router = useRouter();

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.fromTo(
      cardRef2.current,
      { x: 0, y: 0 }, // FROM
      {
        x: 0,
        y: -40, // TO
        duration: 0.3,
        ease: "power2.out",
      },
      0
    );
    tl.current.fromTo(
      cardRef1.current,
      { x: 0, y: 0 }, // FROM
      {
        x: 0,
        y: -47, // TO
        duration: 0.3,
        ease: "power2.out",
      },
      0
    );

    tl.current.fromTo(
      sizeRef.current,
      { y: 120, x: 0 },
      {
        y: 0,
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      },
      0
    );

    tl.current.fromTo(
      colorRef.current,
      { opacity: 0, y: 50, x: 0 },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      0.3
    );
    tl.current.fromTo(
      buyButtonRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      0.6
    );
  }, []);

  const productName = items?.name || "Product Name";
  const mainImage = items?.product_images?.[0]?.product_image || "/default-image.jpg";
  const isNew = items?.new || false;
  const isOutOfStock = items?.out_of_stock || false;
  const colors = items?.variation_colors || [];
  const sizes = items?.variation_colors?.[0]?.sizes || [];
  const hasVariations = items?.variations_exist && colors.length > 0;

  useEffect(() => {
    if (colors.length > 0) {
      // Set first available color as default
      const firstAvailableColor = colors.find((color) => color.status) || colors[0];
      setSelectedColor(firstAvailableColor);
      setSelectedColorImages(firstAvailableColor?.color_images || []);

      // Preload color images
      preloadImages(firstAvailableColor?.color_images || []);
    }
  }, [items]);

  // Function to preload images
  const preloadImages = (imageUrls) => {
    imageUrls.forEach((url) => {
      const img = new window.Image();
      img.src = url;
    });
  };

  // Handle color change
  const handleColorChange = (color) => {
    if (!color.status || isOutOfStock) return;

    setSelectedColor(color);
    setSelectedColorImages(color.color_images || []);
    setCurrentImageIndex(0);

    // Preload new color images
    preloadImages(color.color_images || []);
  };

  // Get current image to display
  const getCurrentImage = () => {
    if (selectedColorImages.length > 0) {
      return selectedColorImages[currentImageIndex];
    }
    return mainImage;
  };

  // Handle next image (for multiple color images)
  const handleNextImage = () => {
    if (selectedColorImages.length > 1) {
      setCurrentImageIndex((prev) => (prev === selectedColorImages.length - 1 ? 0 : prev + 1));
    }
  };

  // Handle size selection
  const handleSizeChange = (size) => {
    console.log(size, "test");
    if (!size.status || isOutOfStock) return;
    setSelectedSize(size);
  };

  const getColorClassName = (colorName) => {
    const colorMap = {
      Black: "bg-fuchsia-500",
      White: "bg-pink-600",
      Red: "bg-red-600",
      Blue: "bg-blue-600",
      Green: "bg-green-600",
      Yellow: "bg-yellow-500",
      Purple: "bg-purple-600",
      Pink: "bg-pink-500",
      Orange: "bg-orange-500",
      Gray: "bg-gray-500",
      Brown: "bg-amber-900",
      Default: "bg-[#9ADA2A]",
    };
    return colorMap[colorName] || colorMap["Default"];
  };

  // Get sizes for selected color
  const getSizesForSelectedColor = () => {
    if (!selectedColor) return sizes;
    return selectedColor.sizes || [];
  };

  const handleBuyNow = async () => {
    if (!token) {
      router.replace("/login");
      return;
    }
    if (isOutOfStock) return;

    // Here you can collect selected color and size data
    const productData = {
      productId: items?.id,
      product_MRP: items?.mrp,
      productName,
      selectedColor: selectedColor
        ? {
            id: selectedColor.color_id,
            name: selectedColor.color_name,
          }
        : null,
      selectedSize,
      price: selectedSize?.price,
      image: getCurrentImage(),
    };


    console.log("Product data to purchase:", productData);

    if (!selectedSize?.variation_product_id) {
      alert("Please select a size");
      return;
    }
    try {
      const response = await orderMutation.mutateAsync({ variation_product_id: selectedSize?.variation_product_id || items?.id });
        setOrderData({
        ...productData,
        orderId: response?.order?.id,
        orderCreated: response?.order?.created,
        product_nam: response?.order?.order_details[0]?.product_name
        });
      router.push("/order-success");
    } catch (error) {
      alert(error, "order is fail");
    }
  };

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="bg-card w-full h-[350px] max-w-[300px] mx-auto md:mx-0 md:w-full sm:h-96 flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 gap-3"
    >
      <div ref={cardRef1} onClick={handleNextImage} className="w-full h-[85%] overflow-hidden">
        <Image
          src={getCurrentImage()}
          alt={`${productName} - ${selectedColor?.color_name || ""}`}
          width={240}
          height={240}
          className="w-full h-full object-cover"
        />
      </div>
      <div ref={cardRef2} className="w-full h-[15%] flex flex-col items-center justify-center gap-2">
        {hasVariations && getSizesForSelectedColor().length > 0 && (
          <div ref={sizeRef} className="flex flex-row items-center gap-4">
            <p className="text-white">SIZE :</p>
            <div className="flex gap-1">
              {getSizesForSelectedColor()
                .slice(0, 4)
                .map((size) => (
                  <label key={`${size.size_id}-${size.variation_product_id}`} className="cursor-pointer">
                    <input
                      type="radio"
                      name={`size-${items.id}`}
                      className="peer hidden"
                      disabled={!size.status || isOutOfStock}
                      checked={selectedSize?.size_id === size.size_id}
                      onChange={() => handleSizeChange(size)}
                      value={size.size_name}
                    />
                    <span className="block w-7 h-7 rounded-lg bg-white flex items-center justify-center peer-checked:bg-[#372224] peer-checked:text-white">
                      {size.size_name}
                    </span>
                  </label>
                ))}
            </div>
          </div>
        )}

        {hasVariations && colors.length > 0 && (
          <div ref={colorRef} className="flex flex-row items-center gap-4 opacity-0">
            <p className="text-white">COLOR :</p>
            <div className="flex gap-1">
              {colors.slice(0, 3).map((color) => (
                <label key={`${color.color_id}-${color.color_name}`} className="cursor-pointer">
                  <input
                    type="radio"
                    name={`color-${items.id}`}
                    value={color.color_name}
                    checked={selectedColor?.color_id === color.color_id}
                    onChange={() => handleColorChange(color)}
                    className="peer hidden"
                    disabled={!color.status || isOutOfStock}
                  />
                  <span
                    className={` ${getColorClassName(
                      color.color_name
                    )} block w-4 h-4 rounded-full peer-checked:ring-2 peer-checked:ring-white`}
                  ></span>
                </label>
              ))}
            </div>
          </div>
        )}

        <button
          ref={buyButtonRef}
          className="px-5 py-3 bg-white rounded-lg text-sm font-medium opacity-0"
          onClick={handleBuyNow}
          disabled={isOutOfStock}
        >
          {isOutOfStock ? "Out of Stock" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ShoeCards;
