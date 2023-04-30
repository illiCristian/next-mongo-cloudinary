import React, { useEffect, useRef } from "react";
export default function UploadWidget() {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dcxejdzab",
        uploadPreset: "jknoo5ai",
        public_id: "nombre_del_archivo", // Agregar el nombre del archivo
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          console.log(result.info);
          console.log("URL de la imagen cargada:", result.info.secure_url);
        }
      }
    );
  }, []);

  return <button onClick={() => widgetRef.current.open()}>UploadWidget</button>;
}
