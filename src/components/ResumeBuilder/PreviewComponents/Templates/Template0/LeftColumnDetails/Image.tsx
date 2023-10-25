import React from "react";

export default function Image({ data }: { data: string }) {
  return (
    <div className="preview-profile-img">
      <img src={data} alt="Profile Image" className="img-fluid" />
    </div>
  );
}
// "assets/image/person img.png"
