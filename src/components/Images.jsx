import React, { useState, useEffect } from "react";

const Images = () => {
  const [files, setFiles] = useState([
    {
        id: 0,
        image: "/images/a-new-beginning.jpg",
        text: "Year of New Beginnings",
        year: "2023",
        para: `'You will experience a life changing opportunity'\n -Josue the Great`
      },
    {
      id: 1,
      image: "/images/money.gif",
      text: "Year of Money Chasin",
      year: "2024",
      para: `'Great things will be coming your way in your professional career'\n -Josue the Great`
    },
    {
      id: 2,
      image: "/images/phoenix.jpg",
      text: "Year of The Phoenix",
      year: '2025',
      para: "'There will be a great change in your life' \n -Josue the Great"
    },
    {
      id: 3,
      image: "/images/grinding.gif",
      text: "Year of Coding hard",
      year: '2026',
      para:"'Your work will run your life if you let it' \n -Josue the Great"
    },
    {
      id: 4,
      image: "/images/download.png",
      text: "Year of Big Change",
      year: "2027",
      para: `'There will be great changes coming your way, embrace them.'\n -Josue the Great`
    },
    {
      id: 5,
      image: "/images/achievement.jpg",
      text: "Year of Achievement",
      year: '2032',
      para: "'All your hard work will pay off this year' \n -Josue the Great"
    },
    {
      id: 6,
      image: "/images/rest.jpg",
      text: "Year of Peace",
      year: '2037',
      para:"'You will find your inner peace in something you love.' \n -Josue the Great"
    },
    {
      id: 7,
      image: "/images/rich.gif",
      text: "Year of Wealth",
      year: "2042",
      para: `'You will prosper more then ever before'\n -Josue the Great`
    },
    {
      id: 8,
      image: "/images/drink4.gif",
      text: "Year of Retirement",
      year: '2052',
      para: "'You will finally achieve peace' \n -Josue the Great"
    },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseCard = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const importImages = async () => {
      const filesWithImages = await Promise.all(
        files.map(async (file) => {
          const module = await import(`.${file.image}`);
          return { ...file, image: module.default };
        })
      );
      setFiles(filesWithImages);
    };

    importImages();
  }, [files]);

  return (
    <div className="container">
      {files.map((file) => (
        <>
        <div key={file.id} className="photo-box" onClick={() => handleImageClick(file)}>
          <div className="image-container">
            <img src={file.image} alt={file.text} className="photo" />
            <span>{file.year}</span>
          </div>
          <div className="text-overlay">
            <p>{file.text}</p>
          </div>
        </div>
        {selectedImage && (
        <div className="popup-card" onClick={handleCloseCard}>
          <div className="card-content">
          <p style={{ whiteSpace: 'pre-line' }}>{selectedImage.para}</p>
          </div>
        </div>
      )}
        </>
      ))}
    </div>
  );
};

export default Images;
