const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-lg text-center">
        <div className="mb-6">
          <img
            className="rounded-lg drop-shadow-xl w-full h-auto " // Added scaling and ensured full width
            src="./chatAppLandingPageImage.jpg"
            alt="Chat App Landing Page"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
      {/* 
      <div className="absolute bottom-2 right-4">
        <p className="text-sm text-base-content/40 italic">
          Created by Suvankar Das
        </p>
      </div> */}
    </div>
  );
};

export default AuthImagePattern;
